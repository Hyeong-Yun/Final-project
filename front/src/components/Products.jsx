import React from 'react'

export default function Products() {
    const {isLoading, error, data: products} = useQuery([], () => getProducts())
  return (
    <div>Products</div>
  )
}
