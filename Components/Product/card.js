import {
	View,
	Text,
	Image,
	StyleSheet,
	TouchableWithoutFeedback
} from "react-native";
import React from "react";

function Card({ product, navigation }) {
	return (
		<TouchableWithoutFeedback
			onPress={() => navigation.navigate("Product", product)}
		>
			<View style={styles.container}>
				<Image
					style={styles.image}
					source={{ uri: product.ImageURL }}
				/>
				<Text style={styles.productname}>{product.name}</Text>
				<Text style={styles.productprice}>
					Rs.&nbsp;{product.price}/piece
				</Text>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		margin: 10,
		borderWidth: 0.5,
		borderColor: "#000",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		paddingBottom: 15
	},
	image: {
		width: "100%",
		height: 200
	},
	productname: {
		fontSize: 40
	},
	productprice: {
		fontSize: 25
	}
});

export default Card;
