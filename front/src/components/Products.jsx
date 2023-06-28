import React, { useEffect, useState } from 'react'
import useQuery from '@tanstack/react-query';
import {getProducts} from '../api/firebase'
import ProductCard from './ProductCard';
import {products} from '../api/dummy';

export default function Products() {
  // const [products, setProducts] = useState();

    useEffect(() => {
      // setProducts(products)
      console.log(products)
    }, [])

  return (
    <ul className='grid grid-cols-1 md:grid-cols-3 lg-grid-cols-4 gap-4 p-4'>
      {
        products && products.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
      }
    </ul>
  )
}
