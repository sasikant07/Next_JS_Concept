import React from 'react';
import {useRouter} from 'next/router';

const ProductDetail = () => {
    const router = useRouter();
    const productId = router.query.productId;
  return (
    <div>Detail about product {productId}</div>
  )
}

export default ProductDetail