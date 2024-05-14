import React from 'react'
import {menData} from '../data/men'
import { Link } from 'react-router-dom';

const Men = () => {
    const firstFiveImages = menData.slice(0,5);
    return(
        <>
        <div className="proTitle">
        <h2>Men's Fashion</h2>
        </div>
         
         <div className='proSection'>
            {
                firstFiveImages.map((item)=>{
                    return(
                        <Link to={`/Men/${item.id}`}>
                        <div className='imgBox'>
                       <img className='proImage' src={`${process.env.PUBLIC_URL}/${item.image}`} alt="" />
                      </div>    
                      </Link>
                    )
                    
                   
                })
            }
         </div>
        </>
    )
}

export default Men
