import React from 'react';
import { StyleSheet, Text, Image, View, Button, TextInput } from 'react-native';
import { ScrollView } from 'react-native';
import Header from '../Components/Header';

function Products({ navigation, route }) {
  const product = route.params;
  return (
    <ScrollView>
      <Header />
      <View>
        <Image style={styles.image} source={{ uri: product.ImageURL }} />
        <Text>{product?.name}</Text>
        <Text>{product?.meta?.weight}</Text>
        <Text>{product?.meta?.size}</Text>
        <Text>{product?.meta?.color}</Text>
        <Text>{product?.meta?.texture}</Text>
      </View>
      <View>
        <Text>Rs.&nbsp;{product?.price}/-</Text>
        <Text>Status:Out of Stock</Text>
        <Text>Available Quantity:0</Text>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
          }}
          keyboardType="number-pad"
          placeholder="Enter number of items"
        />
      </View>
      <Button title="Add to cart" />
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
  image: {
    width: '100%',
    height: 200,
  },
});

export default Products;
