/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, ToastAndroid } from "react-native";
import { ScrollView } from "react-native";
import { Table, Rows } from "react-native-table-component";
import { DataTable } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Checkout = () => {
	const navigation = useNavigation();

	const [checkoutData, setCheckoutData] = useState({});
	const [tableData, setTableData] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		handleCheckoutData();
	}, []);

	const handleCheckoutData = async () => {
		const token = await AsyncStorage.getItem("hys_gems_auth_token");

		const response = await fetch(
			"https://hps-gems.herokuapp.com/server/api/checkout.php",
			{
				headers: {
					"Accept": "application/json",
					"Authentication": `Bearer ${token}`
				}
			}
		);

		const checkoutResponse = await response.json();

		setCheckoutData(checkoutResponse.data);

		populateTableData(checkoutResponse.data.items);
	};

	const populateTableData = (products) => {
		let tableDataArr = [];
		let total = 0;

		products.map((prod) => {
			total += prod.qty * prod.price;

			tableDataArr.push([
				prod.name,
				prod.qty +
					" x " +
					prod.price +
					" = Rs. " +
					prod.qty * prod.price
			]);
		});

		setTableData(tableDataArr);
		setTotalPrice(total);
	};

	const handleSubmit = async () => {
		const token = await AsyncStorage.getItem("hys_gems_auth_token");

		const response = await fetch(
			"https://hps-gems.herokuapp.com/server/api/place-order.php",
			{
				headers: {
					"Accept": "application/json",
					"Authentication": `Bearer ${token}`
				}
			}
		);

		const orderData = await response.json();

		if (orderData.code === 200) {
			ToastAndroid.show(
				"Order placed! Please check the cart.",
				ToastAndroid.SHORT
			);
			navigation.navigate("Home");
		} else
			ToastAndroid.show("Order could not be placed.", ToastAndroid.SHORT);
	};

	const getCurrentDate = () => {
		let today = new Date();

		const dd = String(today.getDate()).padStart(2, "0");
		const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0
		const yyyy = today.getFullYear();

		today = yyyy + "-" + mm + "-" + dd;

		return today;
	};

	return (
		<ScrollView>
			<View style={styles.container}>
				<Text style={styles.heading}>Check Out</Text>
				<Text style={styles.subHeading}>Shipping</Text>
				<Text style={styles.text}>
					{checkoutData.address ? checkoutData.address : ""}
				</Text>
				<Text style={styles.text}>Order date: {getCurrentDate()}</Text>
				<View
					style={{
						borderBottomColor: "black",
						borderBottomWidth: 0.5,
						marginLeft: 20,
						marginRight: 20
					}}
				/>
				<Text style={styles.subHeading}>Order items</Text>
				<Table borderStyle={{ borderWidth: 1, borderColor: "#000" }}>
					<Rows data={tableData} textStyle={styles.text} />
				</Table>
				<View
					style={{
						borderBottomColor: "black",
						borderBottomWidth: 0.5,
						marginLeft: 20,
						marginRight: 20,
						marginTop: 20
					}}
				/>
				<Text style={styles.subHeading}>Order summary</Text>

				<View>
					<DataTable>
						<DataTable.Row>
							<DataTable.Cell>Item total</DataTable.Cell>
							<DataTable.Cell>Rs. {totalPrice}</DataTable.Cell>
						</DataTable.Row>

						<DataTable.Row>
							<DataTable.Cell>Shipping</DataTable.Cell>
							<DataTable.Cell>Rs. 100</DataTable.Cell>
						</DataTable.Row>

						<DataTable.Row>
							<DataTable.Cell>Tax (2%)</DataTable.Cell>
							<DataTable.Cell>
								{"Rs. " +
									Number(
										Math.round(totalPrice * 0.02 + "e2") +
											"e-2"
									)}
							</DataTable.Cell>
						</DataTable.Row>

						<DataTable.Row>
							<DataTable.Cell>Total</DataTable.Cell>
							<DataTable.Cell>
								{"Rs. " +
									(totalPrice +
										100 +
										Number(
											Math.round(
												totalPrice * 0.02 + "e2"
											) + "e-2"
										))}
							</DataTable.Cell>
						</DataTable.Row>
					</DataTable>
				</View>

				<Button
					title="Place Order"
					color="#212121"
					onPress={handleSubmit}
				/>
			</View>
		</ScrollView>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		paddingTop: 30,
		backgroundColor: "#fff"
	},
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10
	},
	heading: {
		fontSize: 30,
		textAlign: "center",
		marginTop: 20,
		marginBottom: 20,
		color: "#000"
	},
	subHeading: {
		fontSize: 20,
		textAlign: "left",
		marginLeft: 20,
		marginTop: 20,
		marginBottom: 20,
		color: "#000"
	},
	text: {
		fontSize: 14,
		textAlign: "left",
		marginLeft: 20,
		marginBottom: 14,
		color: "#000"
	}
});

export default Checkout;
