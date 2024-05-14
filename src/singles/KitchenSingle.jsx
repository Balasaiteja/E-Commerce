import React from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../stores/context/CartContext'
import { kitchenData } from '../stores/data/kitchen'
import Navbar from '../stores/components/Navbar'

const KitchenSingle = () => {
    const {id} = useParams()

    const {cartItems, addToCart} = useCart()
    const product = kitchenData.find((item)=>item.id === id)
  return (
    <>
    <Navbar></Navbar>
    <div className='ind-section'>
       <div className='ind-image'>
        <img src={`${process.env.PUBLIC_URL}/${product.image}`} alt="" />
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

export default KitchenSingle
