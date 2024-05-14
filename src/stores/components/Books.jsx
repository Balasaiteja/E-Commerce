import React from 'react'
import {booksData} from '../data/books'
import { Link } from 'react-router-dom';

const Books = () => {
    const firstFiveImages = booksData.slice(0,5);
    return(
        <>
        <div className="proTitle">
        <h2>Books</h2>
        </div>
         
         <div className='proSection'>
            {
                firstFiveImages.map((item)=>{
                    return(
                        <Link to={`/Books/${item.id}`}>
                        <div className='imgBox1'>
                         <img className='proImage1' src={`${process.env.PUBLIC_URL}/${item.image}`} alt="" />
                        </div>  
                        </Link>
                       
                    )
                    
                   
                })
            }
         </div>
        </>
    )
}

export default Books
