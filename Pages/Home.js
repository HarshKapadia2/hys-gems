import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Header from '../Components/Header';
import Products from '../Components/Product';
import { ScrollView } from 'react-native';

function Home({ navigation }) {
  return (
    <ScrollView>
      {/* <Header navigation={navigation} /> */}
      <Text style={styles.maintext}>HPS Gems</Text>
      <Text style={styles.subtext}>The place for raw gemstones.</Text>
      <Products navigation={navigation} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  maintext: {
    fontSize: 30,
    textAlign: 'center',
  },
  subtext: {
    fontSize: 25,
    textAlign: 'center',
  },
});

export default Home;
