import React from 'react'
import './product.css'
import { useState, useEffect } from "react";

const Products = () => {

  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setProduct(data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })

  }, [])

  if (loading) return <p>Loading...</p>

  return (

    <>
      <h2>Special Products For You</h2>
      <div className='product-list'>
      {product.map((items) => (
          <div class="product-card" key={items.id}>
            <div className='imagecontainer'><img src={items.image} alt="Electric Kettle" title={items.title} /></div>
            <p >{items.category}</p>
            <p>{items.price} $</p>
            <button>Add to Cart</button>
          </div>
      ))}
      </div>
    </>



  )



}

export default Products
