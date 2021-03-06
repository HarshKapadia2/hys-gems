import React, { useState, useEffect } from "react";
import { StyleSheet, Text, Image, View, Button, TextInput } from "react-native";
import { ScrollView, ToastAndroid } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Product = ({ isLoggedIn }) => {
	const navigation = useNavigation();
	const route = useRoute();

	const [product, setProduct] = useState([]);
	const [qty, setQty] = useState(0);

	useEffect(() => {
		const productId = route.params.id;
		getProductData(productId);

		if (!isLoggedIn)
			ToastAndroid.show(
				"Log in to add product to cart, subject to availability.",
				ToastAndroid.SHORT
			);
	}, []);

	const getProductData = async (productId) => {
		const response = await fetch(
			"https://hps-gems.herokuapp.com/server/api/get-single-product.php",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Accept": "application/json"
				},
				body: JSON.stringify({ id: productId })
			}
		);

		const productData = await response.json();

		setProduct(productData.data);
	};

	const handleAddToCart = async () => {
		if (qty <= 0 || qty > Number.parseInt(product.qty)) {
			ToastAndroid.show(
				"Enter an appropriate quantity.",
				ToastAndroid.SHORT
			);
			return;
		}

		const token = await AsyncStorage.getItem("hys_gems_auth_token");

		const obj = {
			id: product.id,
			qty: qty
		};

		const response = await fetch(
			"https://hps-gems.herokuapp.com/server/api/add-to-cart.php",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Accept": "application/json",
					"Authentication": `Bearer ${token}`
				},
				body: JSON.stringify(obj)
			}
		);

		const addToCartData = await response.json();

		if (addToCartData.code === 200) {
			ToastAndroid.show("Added to cart!", ToastAndroid.SHORT);
			navigation.navigate("Cart");
		} else ToastAndroid.show("Could not add to cart.", ToastAndroid.SHORT);
	};

	return (
		<ScrollView>
			<View style={styles.container}>
				<Image style={styles.image} source={{ uri: product.pic_url }} />
				<Text style={styles.text}>Name</Text>
				<Text style={styles.valText}>{product.name}</Text>
				<Text style={styles.text}>Price</Text>
				<Text style={styles.valText}>Rs. {product.price}/piece</Text>
				<Text style={styles.text}>Available quantity</Text>
				<Text style={styles.valText}>{product.qty}</Text>
				<Text style={styles.text}>Description</Text>
				<Text style={styles.valText}>{product.description}</Text>

				<TextInput
					// eslint-disable-next-line react-native/no-inline-styles
					style={{
						height: 40,
						borderColor: "gray",
						borderWidth: 1,
						marginBottom: 10,
						width: 300,
						color: "#000",
						marginTop: 40
					}}
					keyboardType="number-pad"
					placeholder="Enter the number of gems to be ordered"
					placeholderTextColor="#000"
					editable={
						isLoggedIn && Number.parseInt(product.qty, 10) > 0
							? true
							: false
					}
					selectTextOnFocus={
						isLoggedIn && Number.parseInt(product.qty, 10) > 0
							? true
							: false
					}
					onChangeText={setQty}
				/>

				<Button
					style={styles.button}
					onPress={() => handleAddToCart()}
					title="Add to cart"
					color="#212121"
					disabled={
						isLoggedIn && Number.parseInt(product.qty, 10) > 0
							? false
							: true
					}
				/>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		color: "#000"
	},
	text: {
		textAlign: "center",
		color: "#000",
		fontSize: 18
	},
	valText: {
		textAlign: "center",
		marginBottom: 20,
		color: "#000",
		fontSize: 20
	},
	image: {
		width: "100%",
		height: 200,
		marginBottom: 20
	},
	button: {
		marginTop: 5,
		marginBottom: 5,
		width: 50
	}
});

export default Product;
