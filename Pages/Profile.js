import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { ScrollView } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

function Profile({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.maintext}>Profile</Text>
        <Grid style={styles.grid}>
          <Col size={25}>
            <Row style={styles.cell}>
              <Text>First name</Text>
            </Row>
            <Row style={styles.cell}>
              <Text>Last name</Text>
            </Row>
            <Row style={styles.cell}>
              <Text>Address</Text>
            </Row>
            <Row style={styles.cell}>
              <Text>e-mail</Text>
            </Row>
            <Row style={styles.cell}>
              <Text>Phone number</Text>
            </Row>
          </Col>
          <Col size={75}>
            <Row style={styles.cell}>
              <Text>Saikiran</Text>
            </Row>
            <Row style={styles.cell}>
              <Text>Jakkan</Text>
            </Row>
            <Row style={styles.cell}>
              <Text>
                Anita Nagar, Bldg no.11, C wing, Flat no. 104, Lokhandwala
                Complex, Akurli Road, Kandivali - East
              </Text>
            </Row>
            <Row style={styles.cell}>
              <Text>saikiran.jakkan@gmail.com</Text>
            </Row>
            <Row style={styles.cell}>
              <Text>+919769722287</Text>
            </Row>
          </Col>
        </Grid>
        <Button
          title="Proceed to checkout"
          onPress={e => navigation.navigate('Checkout')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  grid: { paddingTop: 30 },
  maintext: {
    fontSize: 30,
    textAlign: 'center',
  },
  subtext: {
    fontSize: 14,
    textAlign: 'center',
  },
  cell: {
    borderWidth: 1,
    borderColor: '#ddd',
    flex: 1,
    justifyContent: 'left',
    alignItems: 'center',
    padding: 2,
    height: 60,
  },
});

export default Profile;
