import React from "react";
import Link from "next/link";

const ProductList = ({productId = 100}) => {
  return (
    <>
      <Link href="/">Back</Link>
      <h2>
        <Link href="/product/product1">Product 1</Link>
      </h2>
      <h2>
        <Link href="/product/product2">Product 2</Link>
      </h2>
      <h2>
        <Link href="/product/product3" replace>Product 3</Link>   // replace: replace prop will replace the current history state instead of adding a new url to this tag 
      </h2>
      <h2>
        <Link href={`/product/${productId}`}>Product {productId}</Link>
      </h2>
    </>
  );
};

export default ProductList;
