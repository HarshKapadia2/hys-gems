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
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ passUpLoginData }) => {
	const navigation = useNavigation();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async () => {
		if (email === "" || password === "" || password.length < 6)
			ToastAndroid.show("Incorrect input", ToastAndroid.SHORT);
		else {
			const userLoginData = { email, password };

			const loginData = await getToken(userLoginData);

			if (loginData.code === 200) {
				const userData = await getUserData(loginData.data.token);

				if (userData.code === 200) {
					passUpLoginData(userData);

					await AsyncStorage.setItem(
						"hys_gems_auth_token",
						loginData.data.token
					);

					ToastAndroid.show("Login successful!", ToastAndroid.SHORT);
					navigation.navigate("Home");
				} else
					ToastAndroid.show(
						"Login unsuccessful.",
						ToastAndroid.SHORT
					);
			} else ToastAndroid.show("Login unsuccessful.", ToastAndroid.SHORT);
		}
	};

	const getToken = async (userLoginData) => {
		const response = await fetch(
			"https://hps-gems.herokuapp.com/server/api/login.php",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Accept": "application/json"
				},
				body: JSON.stringify(userLoginData)
			}
		);

		const loginData = await response.json();

		return loginData;
	};

	const getUserData = async (token) => {
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

		return loginStatusData;
	};

	return (
		<View>
			<Text style={styles.heading}>Login</Text>
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
			<Button
				title="Log In"
				color="#212121"
				style={styles.button}
				onPress={handleSubmit}
			/>
			<Text
				style={styles.link}
				onPress={() => navigation.navigate("Signup")}
			>
				Not a member? Signup
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
		marginBottom: 20,
		color: "#000"
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

export default Login;
