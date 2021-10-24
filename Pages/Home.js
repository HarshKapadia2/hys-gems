import React, { useState, useEffect } from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import Products from "../Components/Product";

const Home = ({ navigation }) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		getAllProducts();
	}, []);

	const getAllProducts = async () => {
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

	return (
		<ScrollView>
			{/* <Header navigation={navigation} /> */}
			<Text style={styles.maintext}>HYS Gems</Text>
			<Text style={styles.subtext}>THE place for raw gemstones.</Text>
			<Products navigation={navigation} products={products} />
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
