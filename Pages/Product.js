import React from "react";
import { StyleSheet, Text, Image, View, Button, TextInput } from "react-native";
import { ScrollView } from "react-native";

function Product({ navigation, route }) {
	const product = route.params;
	return (
		<ScrollView>
			<View style={styles.container}>
				<Image
					style={styles.image}
					source={{ uri: product.ImageURL }}
				/>
				<Text style={styles.text}>Name: {product?.name}</Text>
				<Text style={styles.text}>Weight: {product?.meta?.weight}</Text>
				<Text style={styles.text}>Size: {product?.meta?.size}</Text>
				<Text style={styles.text}>Color: {product?.meta?.color}</Text>
				<Text style={styles.text}>
					Description: {product?.meta?.texture}
				</Text>
				<Text style={styles.text}>Rs. {product?.price}/piece</Text>
				<Text style={styles.text}>Status: Out of Stock</Text>
				<Text style={styles.text}>Available quantity: 0</Text>

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
				/>

				<Button
					style={styles.button}
					onPress={() => navigation.navigate("Cart")}
					title="Add to cart"
					color="#212121"
				/>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		color: "#000"
	},
	text: {
		textAlign: "center",
		marginTop: 5,
		marginBottom: 5,
		color: "#000",
		fontSize: 18
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
