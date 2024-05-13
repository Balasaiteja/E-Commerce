import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import { tvData } from '../data/tv'
import { Link } from 'react-router-dom'


const TvsPage = () => {
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
  tvData : tvData.filter((it)=>selectedProduct.includes(it.brand))
 

  return (
    <>
    <Navbar></Navbar>
    <div className="fullPage">
    <div className="pro-selected">
      {tvData.map((phone)=>{
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
               <Link to={`/TV/${item.id}`}>
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

export default TvsPage
