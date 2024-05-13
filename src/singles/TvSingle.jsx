import React from 'react'
import Navbar from '../stores/components/Navbar'
import { useParams } from 'react-router-dom'
import { tvData } from '../stores/data/tv'
import { useCart } from '../stores/context/CartContext'


const TvSingle = () => {
    const {id} = useParams()

    const {cartItems, addToCart} = useCart()
    const product = tvData.find((item)=>item.id === id)
    console.log(product);


  return (
    <>
    <Navbar></Navbar>
    <div className='ind-section'>
       <div className='ind-image'>
        <img src={product.image} alt="" />
       </div>
       <div className="ind-details space">
        <div className="ind-company space">
        <h2>{product.brand}</h2>
        </div>
       <div className="ind-model space">
        <h3>{product.model}</h3>
       </div>
       <div className="ind-price space">
        <h3>₹{product.price}</h3>
       </div>
       <div className="ind-desc space">
        {product.description}
       </div>
       <div className="ind-button space">
       <button onClick={()=>addToCart(product)}>Add to cart</button>
       </div>
       
       </div>
       
    </div>
    </>
  )
}

export default TvSingle
