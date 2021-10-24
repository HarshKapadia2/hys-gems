import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { ScrollView } from "react-native";
import { DataTable } from "react-native-paper";

function Update({ navigation }) {
	return (
		<ScrollView>
			<View style={styles.container}>
				<Text style={styles.maintext}>Update Profile</Text>
				<View>
					<DataTable style={styles.table}>
						<DataTable.Row>
							<DataTable.Cell>First name</DataTable.Cell>
							<DataTable.Cell>
								<TextInput />
							</DataTable.Cell>
						</DataTable.Row>

						<DataTable.Row>
							<DataTable.Cell>Last Name</DataTable.Cell>
							<DataTable.Cell>
								<TextInput />
							</DataTable.Cell>
						</DataTable.Row>

						<DataTable.Row>
							<DataTable.Cell>Address</DataTable.Cell>
							<DataTable.Cell>
								<TextInput />
							</DataTable.Cell>
						</DataTable.Row>

						<DataTable.Row>
							<DataTable.Cell>e-mail</DataTable.Cell>
							<DataTable.Cell>
								<TextInput />
							</DataTable.Cell>
						</DataTable.Row>

						<DataTable.Row>
							<DataTable.Cell>Phone number</DataTable.Cell>
							<DataTable.Cell>
								<TextInput />
							</DataTable.Cell>
						</DataTable.Row>
					</DataTable>
				</View>
				<Button
					title="Update Details"
					onPress={(e) => navigation.navigate("Home")}
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
	maintext: {
		fontSize: 30,
		textAlign: "center",
		color: "#000"
	},
	subtext: {
		fontSize: 14,
		textAlign: "center"
	},
	table: { paddingTop: 30 },
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

export default Update;
