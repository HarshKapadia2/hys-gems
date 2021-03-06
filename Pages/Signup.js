import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	Button,
	ToastAndroid
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Signup = () => {
	const navigation = useNavigation();

	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = () => {
		console.log({ username, email, password });
		ToastAndroid.show("Success", ToastAndroid.SHORT);
	};
	return (
		<View>
			<Text style={styles.heading}>Create an Account</Text>
			<TextInput
				onChangeText={setUsername}
				style={styles.input}
				value={username}
				placeholder="Username"
				placeholderTextColor="#000"
				keyboardType="default"
				name="email"
			/>
			<TextInput
				onChangeText={setEmail}
				style={styles.input}
				value={email}
				placeholder="e-mail"
				placeholderTextColor="#000"
				keyboardType="email-address"
				name="email"
			/>
			<TextInput
				onChangeText={setPassword}
				style={styles.input}
				value={password}
				placeholder="Password"
				placeholderTextColor="#000"
				secureTextEntry={true}
				name="password"
			/>
			<Button title="Sign up" color="#212121" onPress={handleSubmit} />
			<Text
				style={styles.link}
				onPress={() => navigation.navigate("Login")}
			>
				Already have an account? Login
			</Text>
		</View>
	);
};
const styles = StyleSheet.create({
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		marginBottom: 20
	},
	heading: {
		fontSize: 30,
		textAlign: "center",
		marginTop: 20,
		marginBottom: 20,
		color: "#000"
	},
	text: {
		textAlign: "center",
		color: "#000",
		marginTop: 20
	},
	button: {
		width: 100
	},
	link: {
		fontSize: 15,
		textDecorationLine: "underline",
		color: "#000",
		textAlign: "center",
		marginVertical: 30
	}
});

export default Signup;
