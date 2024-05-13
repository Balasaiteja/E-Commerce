import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const {cartItems} = useCart()
  return (
    <div className='navbar-section'>
      <div className="navSection">
        <Link className='custom-link'  to='/'>
        <div className="title">
            <h1>E-Mart</h1>
        </div>
        </Link>
        
        <div className="search">
            <input  type="text" placeholder='Search....' />
        </div>
        <div className="user">
        
            <div className="user-details">
            <FaUser />
            SignIn/SignUp
            </div>
        </div>
        
        <Link className='custom-link' to='/cart'>
        
        
        <div className="cart">
        <FaShoppingCart />
        Cart -
        <span>{cartItems.length}</span>
        </div>
        </Link>
        
      </div>

      <div className='subMenu'>
        <ul>
          <Link className='custom-link' to='/Mobiles'>
          <li>Mobiles</li>
          </Link>
          <Link className='custom-link' to='/Computers'>
          <li>Computers</li>
          </Link>
          <Link className='custom-link' to='/Watches'>
          <li>Watches</li>
          </Link>
          <Link className='custom-link' to='/Men'>
          <li>Men wear</li>
          </Link>
          <Link className='custom-link' to='/Women'>
          <li>Women wear</li>
          </Link>
          <Link className='custom-link' to='/Furniture'>
          <li>Furniture</li>
          </Link>
          <Link className='custom-link' to='/AC'>
          <li>AC</li>
          </Link>
          <Link className='custom-link' to='/TV'>
          <li>TV</li>
          </Link>
          <Link className='custom-link' to='/Kitchen'>
          <li>Kitchen</li>
          </Link>
          <Link className='custom-link' to='/Books'>
          <li>Books</li>
          </Link>
          <Link className='custom-link' to='/Fridges'>
          <li>Fridges</li>
          </Link>
          <Link className='custom-link' to='/Speakers'>
          <li>Speakers</li>
          </Link>

        </ul>
      </div>
    </div>


  )
}

export default Navbar
