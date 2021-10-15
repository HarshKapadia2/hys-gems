import React from 'react';
import Card from './card';
import productsDB from '../../products.json';

function Products({ navigation }) {
  // useEffect(() => {
  //   console.log(productsDB);
  // }, []);
  return (
    <>
      {productsDB.map((e, i) => (
        <Card navigation={navigation} key={i} product={e} />
      ))}
    </>
  );
}

export default Products;
