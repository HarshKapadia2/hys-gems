import {
	View,
	Text,
	Image,
	StyleSheet,
	TouchableWithoutFeedback
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Card = ({ isLoggedIn, product }) => {
	const navigation = useNavigation();

	const routeParams = {
		id: product.id,
		isLoggedIn
	};

	return (
		<TouchableWithoutFeedback
			onPress={() => navigation.navigate("Product", routeParams)}
		>
			<View style={styles.container}>
				<Image style={styles.image} source={{ uri: product.pic_url }} />
				<Text style={styles.productname}>{product.name}</Text>
				<Text style={styles.productprice}>
					Rs. {product.price}/piece
				</Text>
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	container: {
		margin: 12,
		borderWidth: 0.5,
		borderColor: "#000",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		paddingBottom: 15,
		borderRadius: 5
	},
	image: {
		width: "100%",
		height: 200,
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5
	},
	productname: {
		color: "#000",
		fontSize: 35
	},
	productprice: {
		color: "#000",
		fontSize: 20
	}
});

export default Card;
