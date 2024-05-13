import React , {useState} from 'react'
import { acData } from '../data/ac'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'


const ACPage = () => {
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
  acData : acData.filter((it)=>selectedProduct.includes(it.company))
  return (
    
   <>
   <Navbar></Navbar>
   <div className="fullPage">
   <div className="pro-selected">
      {acData.map((phone)=>{
        return(
          <div className='pro-input'>
            <label>
              <input type="checkbox" 
              checked = {selectedProduct.includes(phone.company)}
              onChange={()=>companyHandler(phone.company)}
              />
              {phone.company}
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
               <Link to={`/AC/${item.id}`}>
               <div className="pageImg">
                    <img src= {item.image} alt="" />
                </div>
               </Link>
                <div className="proModel">
                    <strong>{item.company}</strong> <br />
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

export default ACPage
