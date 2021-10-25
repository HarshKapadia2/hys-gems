import React from "react";
import Card from "./card";

const Products = ({ isLoggedIn, products }) => {
	return (
		<>
			{products.map((prod, index) => (
				<Card isLoggedIn={isLoggedIn} key={index} product={prod} />
			))}
		</>
	);
};

export default Products;
