import React from "react";
import Card from "./card";

const Products = ({ navigation, products }) => {
	return (
		<>
			{products.map((prod, index) => (
				<Card navigation={navigation} key={index} product={prod} />
			))}
		</>
	);
};

export default Products;
