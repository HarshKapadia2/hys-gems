import React from "react";
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
import { Button } from "react-native";

const Stack = createNativeStackNavigator();
const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={Home}
					options={({ navigation }) => {
						return {
							title: "HYS Gems",
							headerRight: () => (
								<Button
									onPress={() => navigation.navigate("Login")}
									title="Login/Signup"
									color="#212121"
								/>
							)
						};
					}}
				/>
				<Stack.Screen
					name="Login"
					component={Login}
					options={({ route, navigation }) => {
						return {
							title: "HYS Gems"
						};
					}}
				/>
				<Stack.Screen
					name="Signup"
					component={Signup}
					options={({ route, navigation }) => {
						return {
							title: "HYS Gems"
						};
					}}
				/>
				<Stack.Screen
					name="Profile"
					component={Profile}
					options={({ route, navigation }) => {
						return {
							title: "HYS Gems"
						};
					}}
				/>
				<Stack.Screen
					name="Update"
					component={Update}
					options={({ route, navigation }) => {
						return {
							title: "HYS Gems"
						};
					}}
				/>
				<Stack.Screen
					name="Cart"
					component={Cart}
					options={({ route, navigation }) => {
						return {
							title: "HYS Gems"
						};
					}}
				/>
				<Stack.Screen
					name="Checkout"
					component={Checkout}
					options={({ route, navigation }) => {
						return {
							title: "HYS Gems"
						};
					}}
				/>
				<Stack.Screen
					name="Product"
					component={Products}
					options={({ route, navigation }) => {
						return {
							title: "HYS Gems",
							headerRight: () => (
								<Button
									onPress={() => navigation.navigate("Login")}
									title="Login/Signup"
									color="#000"
								/>
							)
						};
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
