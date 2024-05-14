import React from 'react'
import {womanData} from '../data/woman'
import { Link } from 'react-router-dom';

const Women = () => {
    const firstFiveImages = womanData.slice(0,5);
    return(
        <>
        <div className="proTitle">
        <h2>Women's Fashion</h2>
        </div>
         
         <div className='proSection'>
            {
                firstFiveImages.map((item)=>{
                    return(
                        <Link to={`/Women/${item.id}`}>
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

export default Women
