import React,{useState} from 'react'
import { kitchenData } from '../data/kitchen'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
const KitchenPage = () => {
    const [selectedProduct , setSelectedProduct] = useState([])

    const companyHandler=(obj)=>{
      if(selectedProduct.includes(obj)){
        setSelectedProduct(selectedProduct.filter(item => item !== obj))
      }
      else{
        setSelectedProduct([... selectedProduct,obj])
      }
    }
  
    const filteredProduct = selectedProduct.length===0?
    kitchenData : kitchenData.filter((it)=>selectedProduct.includes(it.brand))
  return (
    <>
    <Navbar></Navbar>
    <div className="fullPage">
    <div className="pro-selected">
      {kitchenData.map((phone)=>{
        return(
          <div className='pro-input'>
            <label>
              <input type="checkbox" 
              checked = {selectedProduct.includes(phone.brand)}
              onChange={()=>companyHandler(phone.brand)}
              />
              {phone.brand}
            </label>
          </div>
        )
      })}
    </div>
    <div className='pageSection'>
    {
        filteredProduct.map((item)=>{
            return (
            <div>
              <Link to={`/Kitchen/${item.id}`}>
              <div className="pageImg">
                    <img src= {item.image} alt="" />
                </div>
              </Link>
                
                <div className="proModel">
                    <strong>{item.brand}</strong> <br />
                    {item.model} <br />
                    ₹{item.price}
                </div>
                
            </div>
        )})
    }
    </div>
    </div>
    
    </>
  )
}

export default KitchenPage
