import React from "react";
import { StyleSheet, Text } from "react-native";
//import Header from '../Components/Header';
import Products from "../Components/Product";
import { ScrollView } from "react-native";

function Home({ navigation }) {
	return (
		<ScrollView>
			{/* <Header navigation={navigation} /> */}
			<Text style={styles.maintext}>HYS Gems</Text>
			<Text style={styles.subtext}>THE place for raw gemstones.</Text>
			<Products navigation={navigation} />
		</ScrollView>
	);
}

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
