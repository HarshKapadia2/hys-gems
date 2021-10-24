import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { ScrollView } from "react-native";
import { DataTable } from "react-native-paper";

function Profile({ navigation }) {
	return (
		<ScrollView>
			<View style={styles.container}>
				<Text style={styles.maintext}>User Profile</Text>
				<View>
					<DataTable style={styles.table}>
						<DataTable.Row>
							<DataTable.Cell>First name</DataTable.Cell>
							<DataTable.Cell>Saikiran</DataTable.Cell>
						</DataTable.Row>

						<DataTable.Row>
							<DataTable.Cell>Last Name</DataTable.Cell>
							<DataTable.Cell>Jakkan</DataTable.Cell>
						</DataTable.Row>

						<DataTable.Row>
							<DataTable.Cell>Address</DataTable.Cell>
							<DataTable.Cell>
								Anita Nagar, Bldg no.11, C wing, Flat no. 104,
								Lokhandwala Complex, Akurli Road, Kandivali -
								East
							</DataTable.Cell>
						</DataTable.Row>

						<DataTable.Row>
							<DataTable.Cell>e-mail</DataTable.Cell>
							<DataTable.Cell>
								saikiran.jakkan@gmail.com
							</DataTable.Cell>
						</DataTable.Row>

						<DataTable.Row>
							<DataTable.Cell>Phone number</DataTable.Cell>
							<DataTable.Cell>+919769722287</DataTable.Cell>
						</DataTable.Row>
					</DataTable>
				</View>

				<Button
					title="Update Profile"
					onPress={(e) => navigation.navigate("Update")}
				/>
			</View>
		</ScrollView>
	);
}

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
