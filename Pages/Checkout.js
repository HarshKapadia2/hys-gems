/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { ScrollView } from 'react-native';
import { Table, Rows } from 'react-native-table-component';
import { DataTable } from 'react-native-paper';

const state = {
  tableData: [['Image', 'Aqua Iridized', '5 x 223 = Rs. 1115']],
};

function Checkout({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.heading}>Check Out</Text>
        <Text style={styles.subHeading}>Shipping</Text>
        <Text style={styles.text}>
          Address: Anita Nagar, Bldg no.11, C wing, Flat no. 104, Lokhandwala
          Complex, Akurli Road, Kandivali - East
        </Text>
        <Text style={styles.text}>Order date: 2021-10-20</Text>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 0.5,
            marginLeft: 20,
            marginRight: 20,
          }}
        />
        <Text style={styles.subHeading}>Order items</Text>
        <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
          <Rows data={state.tableData} textStyle={styles.text} />
        </Table>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 0.5,
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20,
          }}
        />
        <Text style={styles.subHeading}>Order summary</Text>

        <View>
          <DataTable>
            <DataTable.Row>
              <DataTable.Cell>Items</DataTable.Cell>
              <DataTable.Cell>Rs. 1115</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>Shipping</DataTable.Cell>
              <DataTable.Cell>Rs. 110</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>Tax(2%)</DataTable.Cell>
              <DataTable.Cell>Rs. 22.3</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>Total</DataTable.Cell>
              <DataTable.Cell>Rs. 1247.3</DataTable.Cell>
            </DataTable.Row>
          </DataTable>
        </View>

        <Button
          title="Place Order"
          onPress={e => navigation.navigate('Cart')}
        />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  heading: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  subHeading: {
    fontSize: 20,
    textAlign: 'left',
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  text: {
    fontSize: 14,
    textAlign: 'left',
    marginLeft: 20,
    marginBottom: 14,
  },
});

export default Checkout;
