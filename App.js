import React, { useState } from "react";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Products from "./Pages/Product";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Profile from "./Pages/Profile";
import Update from "./Pages/Update";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, ToastAndroid } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();
const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userData, setUserData] = useState({});

	const loginData = (data) => {
		if (data.code === 200) {
			setUserData(data);
			setIsLoggedIn(true);
		} else {
			setUserData({});
			setIsLoggedIn(false);
		}
	};

	const logout = async () => {
		const token = await AsyncStorage.getItem("hys_gems_auth_token");

		const response = await fetch(
			"https://hps-gems.herokuapp.com/server/api/logout.php",
			{
				headers: {
					"Accept": "application/json",
					"Authentication": `Bearer ${token}`
				}
			}
		);

		const logoutData = await response.json();

		if (logoutData.code === 200) {
			await AsyncStorage.removeItem("hys_gems_auth_token");
			setIsLoggedIn(false);
			setUserData({});
			ToastAndroid.show("Logout successful.", ToastAndroid.SHORT);
		} else ToastAndroid.show("Logout unsuccessful.", ToastAndroid.SHORT);
	};

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					options={({ navigation }) => {
						return {
							title: "HYS Gems",
							headerRight: () => {
								return isLoggedIn ? (
									<Button
										onPress={() =>
											navigation.navigate(
												"Profile",
												userData.data.user_id
											)
										}
										title={
											userData.data.first_name +
											" " +
											userData.data.last_name
										}
										color="#212121"
									/>
								) : (
									<Button
										onPress={() =>
											navigation.navigate("Login")
										}
										title="Login/Signup"
										color="#212121"
									/>
								);
							}
						};
					}}
				>
					{() => <Home passUpLoginData={loginData} />}
				</Stack.Screen>

				<Stack.Screen
					name="Login"
					options={() => {
						return {
							title: "HYS Gems"
						};
					}}
				>
					{() => <Login passUpLoginData={loginData} />}
				</Stack.Screen>

				<Stack.Screen
					name="Signup"
					component={Signup}
					options={() => {
						return {
							title: "HYS Gems"
						};
					}}
				/>

				<Stack.Screen
					name="Profile"
					component={Profile}
					options={({ navigation }) => {
						return {
							title: "HYS Gems",
							headerRight: () => (
								<Button
									onPress={async () => {
										await logout();
										navigation.navigate("Home");
									}}
									title="Log Out"
									color="#212121"
								/>
							)
						};
					}}
				/>

				<Stack.Screen
					name="Update"
					component={Update}
					options={() => {
						return {
							title: "HYS Gems"
						};
					}}
				/>

				<Stack.Screen
					name="Cart"
					component={Cart}
					options={() => {
						return {
							title: "HYS Gems"
						};
					}}
				/>

				<Stack.Screen
					name="Checkout"
					component={Checkout}
					options={() => {
						return {
							title: "HYS Gems"
						};
					}}
				/>

				<Stack.Screen
					name="Product"
					options={({ navigation }) => {
						return {
							title: "HYS Gems",
							headerRight: () => {
								return isLoggedIn ? (
									<Button
										onPress={() =>
											navigation.navigate(
												"Profile",
												userData.data.user_id
											)
										}
										title={
											userData.data.first_name +
											" " +
											userData.data.last_name
										}
										color="#212121"
									/>
								) : (
									<Button
										onPress={() =>
											navigation.navigate("Login")
										}
										title="Login/Signup"
										color="#212121"
									/>
								);
							}
						};
					}}
				>
					{() => <Products isLoggedIn={isLoggedIn} />}
				</Stack.Screen>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
