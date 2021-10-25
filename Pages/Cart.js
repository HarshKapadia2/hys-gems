/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { View, StyleSheet, Text, Button, Image } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";
import { ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const state = {
	tableHead: [
		"",
		"Name",
		"Price per piece (Rs.)",
		"Qty",
		"Total Cost (Rs.)",
		""
	],

	tableData: [
		[
			"Image",
			"Aqua Iridized",
			"223",
			"5",
			"1115",
			<Icon name="remove" size={20} color="red" onPress={() => {}} />
		],
		[
			"Image",
			"Aqua Iridized",
			"223",
			"5",
			"1115",
			<Icon name="remove" size={20} color="red" onPress={() => {}} />
		],
		[
			"Image",
			"Aqua Iridized",
			"223",
			"5",
			"1115",
			<Icon name="remove" size={20} color="red" onPress={() => {}} />
		],
		[
			"Image",
			"Aqua Iridized",
			"223",
			"5",
			"1115",
			<Icon name="remove" size={20} color="red" onPress={() => {}} />
		],
		["", "", "Total", "25", "1115*4", ""]
	]
};

const state1 = {
	tableHead: [
		"Name",
		"Order Date",
		"Price per piece (Rs.)",
		"Qty",
		"Total Cost (Rs.)"
	],

	tableData: [
		["Aqua Iridized", "20/10/21", "223", "20", "1115*4"],
		["Aqua Iridized", "20/10/21", "223", "20", "1115*4"],
		["Aqua Iridized", "20/10/21", "223", "20", "1115*4"],
		["Aqua Iridized", "20/10/21", "223", "20", "1115*4"]
	]
};

const Cart = () => {
	const navigation = useNavigation();

	return (
		<ScrollView>
			<View style={styles.container}>
				<Text style={styles.maintext}>Cart</Text>
				<Table
					style={styles.table}
					borderStyle={{ borderWidth: 1, borderColor: "#000" }}
				>
					<Row
						data={state.tableHead}
						style={styles.head}
						textStyle={styles.text}
						flexArr={[1, 2, 2, 1, 1.5, 0.5]}
					/>
					<Rows
						data={state.tableData}
						textStyle={styles.text}
						flexArr={[1, 2, 2, 1, 1.5, 0.5]}
					/>
				</Table>

				<Button
					title="Proceed to checkout"
					color="#212121"
					onPress={() => navigation.navigate("Checkout")}
				/>

				<Text style={styles.maintext}>Shopping History</Text>
				<Table
					style={styles.table}
					borderStyle={{ borderWidth: 1, borderColor: "#000" }}
				>
					<Row
						data={state1.tableHead}
						style={styles.head}
						textStyle={styles.text}
					/>
					<Rows data={state1.tableData} textStyle={styles.text} />
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
