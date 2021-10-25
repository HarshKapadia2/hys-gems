/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";
import { ScrollView, ToastAndroid } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Cart = () => {
	const navigation = useNavigation();

	const [cartTableData, setCartTableData] = useState([]);
	const [historyTableData, setHistoryTableData] = useState([]);

	useEffect(() => {
		handleProducts();
	}, []);

	const cartTableHead = [
		"Name",
		"Price per piece (Rs.)",
		"Qty",
		"Total Cost (Rs.)",
		""
	];
	const historyTableHead = [
		"Name",
		"Order Date",
		"Price per piece (Rs.)",
		"Qty",
		"Total Cost (Rs.)"
	];

	const handleProducts = async () => {
		const token = await AsyncStorage.getItem("hys_gems_auth_token");

		const response = await fetch(
			"https://hps-gems.herokuapp.com/server/api/cart.php",
			{
				headers: {
					"Accept": "application/json",
					"Authentication": `Bearer ${token}`
				}
			}
		);

		const prodData = await response.json();

		setTableData(prodData.data.items);
	};

	const setTableData = async (productData) => {
		let cartTableArr = [];
		let historyTableArr = [];

		await productData.map((prod) => {
			if (prod.is_delivered === "0")
				cartTableArr.push([
					prod.name,
					prod.price,
					prod.qty,
					prod.price * prod.qty,
					<Icon
						name="remove"
						size={20}
						color="red"
						onPress={() =>
							removeProduct(Number.parseInt(prod.prod_id))
						}
					/>
				]);
			else
				historyTableArr.push([
					prod.name,
					prod.date,
					prod.price,
					prod.qty,
					prod.price * prod.qty
				]);
		});

		historyTableArr.reverse();

		setCartTableData(cartTableArr);
		setHistoryTableData(historyTableArr);
	};

	const removeProduct = async (productId) => {
		const token = await AsyncStorage.getItem("hys_gems_auth_token");

		const response = await fetch(
			"https://hps-gems.herokuapp.com/server/api/remove-product.php",
			{
				method: "POST",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json",
					"Authentication": `Bearer ${token}`
				},
				body: JSON.stringify({ id: productId })
			}
		);

		const productRemovalData = await response.json();

		if (productRemovalData.code === 200) {
			handleProducts();
		} else ToastAndroid.show("Removal unsuccessful", ToastAndroid.SHORT);
	};

	return (
		<ScrollView>
			<View style={styles.container}>
				<Text style={styles.maintext}>Cart</Text>
				<Table
					style={styles.table}
					borderStyle={{ borderWidth: 1, borderColor: "#000" }}
				>
					<Row
						data={cartTableHead}
						style={styles.head}
						textStyle={styles.text}
						flexArr={[2, 2, 1, 1.5, 0.5]}
					/>
					<Rows
						data={cartTableData}
						textStyle={styles.text}
						flexArr={[2, 2, 1, 1.5, 0.5]}
					/>
				</Table>

				<Button
					title="Proceed to checkout"
					color="#212121"
					onPress={() => navigation.navigate("Checkout")}
					disabled={cartTableData.length > 0 ? false : true}
				/>

				<Text style={styles.maintext}>Shopping History</Text>
				<Table
					style={styles.table}
					borderStyle={{ borderWidth: 1, borderColor: "#000" }}
				>
					<Row
						data={historyTableHead}
						style={styles.head}
						textStyle={styles.text}
						flexArr={[2, 2, 2, 1, 2]}
					/>
					<Rows
						data={historyTableData}
						textStyle={styles.text}
						flexArr={[2, 2, 2, 1, 2]}
					/>
				</Table>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff"
	},
	head: {
		height: 40
	},
	wrapper: {
		flexDirection: "row"
	},
	table: {
		marginVertical: 30,
		marginHorizontal: 12
	},
	maintext: {
		fontSize: 30,
		textAlign: "center",
		color: "#000",
		paddingTop: 30
	},
	text: {
		textAlign: "center",
		color: "#000"
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
		marginBottom: 20
	}
});

export default Cart;
