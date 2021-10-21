import React from 'react';
import { StyleSheet, Text, Image, View, Button, TextInput } from 'react-native';
import { ScrollView } from 'react-native';

function Product({ navigation, route }) {
  const product = route.params;
  return (
    <ScrollView>
      <View>
        <Image style={styles.image} source={{ uri: product.ImageURL }} />
        <Text style={styles.text}>{product?.name}</Text>
        <Text style={styles.text}>{product?.meta?.weight}</Text>
        <Text style={styles.text}>{product?.meta?.size}</Text>
        <Text style={styles.text}>{product?.meta?.color}</Text>
        <Text style={styles.text}>{product?.meta?.texture}</Text>
        <Text style={styles.text}>Rs.&nbsp;{product?.price}/-</Text>
        <Text style={styles.text}>Status:Out of Stock</Text>
        <Text style={styles.text}>Available Quantity:0</Text>
        <TextInput
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 10,
          }}
          keyboardType="number-pad"
          placeholder="Enter number of items"
        />

        <Button
          style={styles.button}
          onPress={() => navigation.navigate('Cart')}
          title="Add to cart"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  image: {
    width: '100%',
    height: 200,
  },
  button: {
    marginTop: 5,
    marginBottom: 5,
  },
});

export default Product;
