import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { ScrollView } from "react-native";
import { DataTable } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = () => {
	const navigation = useNavigation();

	const [userData, setUserData] = useState({});

	useEffect(() => {
		fetchUserProfile();
	}, []);

	const fetchUserProfile = async () => {
		const token = await AsyncStorage.getItem("hys_gems_auth_token");

		const response = await fetch(
			"https://hps-gems.herokuapp.com/server/api/get-user.php",
			{
				headers: {
					"Accept": "application/json",
					"Authentication": `Bearer ${token}`
				}
			}
		);

		const userProfileData = await response.json();

		setUserData(userProfileData.data);
	};

	return (
		<ScrollView>
			<View style={styles.container}>
				<Text style={styles.maintext}>User Profile</Text>
				<View>
					<DataTable style={styles.table}>
						<DataTable.Row>
							<DataTable.Cell>First name</DataTable.Cell>
							<DataTable.Cell>
								{userData.first_name ? userData.first_name : ""}
							</DataTable.Cell>
						</DataTable.Row>

						<DataTable.Row>
							<DataTable.Cell>Last Name</DataTable.Cell>
							<DataTable.Cell>
								{userData.last_name ? userData.last_name : ""}
							</DataTable.Cell>
						</DataTable.Row>

						<DataTable.Row>
							<DataTable.Cell>Address</DataTable.Cell>
							<DataTable.Cell>
								{userData.address ? userData.address : ""}
							</DataTable.Cell>
						</DataTable.Row>

						<DataTable.Row>
							<DataTable.Cell>e-mail</DataTable.Cell>
							<DataTable.Cell>
								{userData.email ? userData.email : ""}
							</DataTable.Cell>
						</DataTable.Row>

						<DataTable.Row>
							<DataTable.Cell>Phone number</DataTable.Cell>
							<DataTable.Cell>
								{userData.phone_no ? userData.phone_no : ""}
							</DataTable.Cell>
						</DataTable.Row>
					</DataTable>
				</View>

				<Button
					title="Update Profile"
					color="#212121"
					onPress={() => navigation.navigate("Update")}
				/>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		paddingTop: 30,
		backgroundColor: "#fff"
	},
	grid: { paddingTop: 30 },
	table: { paddingTop: 30 },
	maintext: {
		fontSize: 30,
		textAlign: "center",
		color: "#000"
	},
	subtext: {
		fontSize: 14,
		textAlign: "center",
		color: "#000"
	},
	cell: {
		borderWidth: 1,
		borderColor: "#ddd",
		flex: 1,
		justifyContent: "left",
		alignItems: "center",
		padding: 2,
		height: 60
	}
});

export default Profile;
