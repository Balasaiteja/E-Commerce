import React,{useState} from 'react'
import { booksData } from '../data/books'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const BooksPage = () => {
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
  booksData : booksData.filter((it)=>selectedProduct.includes(it.title))
  return (
    <>
    <Navbar></Navbar>
    <div className="fullPage">
    <div className="pro-selected">
      {booksData.map((phone)=>{
        return(
          <div className='pro-input'>
            <label>
              <input type="checkbox" 
              checked = {selectedProduct.includes(phone.title)}
              onChange={()=>companyHandler(phone.title)}
              />
              {phone.title}
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
              <Link to={`/Books/${item.id}`}>
              <div className="pageImg1">
                    <img src= {item.image} alt="" />
                </div>
              </Link>
               
                <div className="proModel1">
                    <strong>{item.title}</strong> <br />
                    {item.author} <br />
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

export default BooksPage
