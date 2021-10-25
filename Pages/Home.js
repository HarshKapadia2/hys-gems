import React, { useState, useEffect } from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import Products from "../Components/Product";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = ({ passUpLoginData }) => {
	const [products, setProducts] = useState([]);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		setAllProducts();
		handleLogInStatus();
	}, []);

	const setAllProducts = async () => {
		const response = await fetch(
			"https://hps-gems.herokuapp.com/server/api/get-all-products.php",
			{
				headers: {
					"Accept": "application/json"
				}
			}
		);

		const productData = await response.json();

		setProducts(productData.data.products);
	};

	const handleLogInStatus = async () => {
		const token = await AsyncStorage.getItem("hys_gems_auth_token");

		if (token === null) {
			passUpLoginData(JSON.stringify({ code: 401 }));
			return;
		}

		const response = await fetch(
			"https://hps-gems.herokuapp.com/server/api/auth.php",
			{
				headers: {
					"Accept": "application/json",
					"Authentication": `Bearer ${token}`
				}
			}
		);

		const loginStatusData = await response.json();

		if (loginStatusData.code === 200) {
			passUpLoginData(loginStatusData);
			setIsLoggedIn(true);
		}
	};

	return (
		<ScrollView>
			<Text style={styles.maintext}>HYS Gems</Text>
			<Text style={styles.subtext}>THE place for raw gemstones.</Text>
			<Products isLoggedIn={isLoggedIn} products={products} />
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	maintext: {
		fontSize: 60,
		color: "#000",
		textAlign: "center",
		marginVertical: 20
	},
	subtext: {
		fontSize: 25,
		color: "#000",
		textAlign: "center",
		marginBottom: 30
	}
});

export default Home;
