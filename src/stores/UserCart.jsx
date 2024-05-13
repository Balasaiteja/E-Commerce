import React from 'react'
import { useCart } from './context/CartContext'
import Navbar from './components/Navbar'

const UserCart = () => {
    const {cartItems, addToCart, removeFromCart} = useCart()
  return (
    <>
    <Navbar></Navbar>
    <div>
      <h2 className='y-cart'>Your Cart</h2>
      {cartItems.length===0 ?
         (<p className='empty'>Your cart is empty</p>):
        <div>
          {cartItems.map((item)=>{
        return(
            <div className='cartSection'>
                <div className="cart-Image">
                    <img src={item.image} alt="" />
                </div>
                <div className="cart-Details">
                    <h3>{item.product}</h3>
                    <h2>₹{item.price}</h2>
                    <h3>{item.model}</h3>
                </div>
                <button className='removeBtn' onClick={()=>removeFromCart(item)}>Remove</button>
            </div>
        )
      })}
        </div>
    }
    </div>
    </>
    
  )
}

export default UserCart
