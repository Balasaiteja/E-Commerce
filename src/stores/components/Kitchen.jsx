import React from 'react'
import { kitchenData } from '../data/kitchen'
import { Link } from 'react-router-dom';

const Kitchen = () => {
    const firstFiveImages = kitchenData.slice(0,5);
    return(
        <>
        <div className="proTitle">
            <h2>Kitchen</h2>
        </div>
         
         <div className='proSection'>
            {
                firstFiveImages.map((item)=>{
                    return(
                        <Link to={`/Kitchen/${item.id}`}>
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

export default Kitchen
