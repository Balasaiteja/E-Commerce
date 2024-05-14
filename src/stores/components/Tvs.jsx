import React from 'react'
import {tvData} from '../data/tv'
import { Link } from 'react-router-dom';

const Tvs = () => {
    const firstFiveImages = tvData.slice(0,5);
    return(
        <>
        <div className="proTitle">
        <h2>TV</h2>
        </div>
         
         <div className='proSection'>
            {
                firstFiveImages.map((item)=>{
                    return(
                        <Link to={`/TV/${item.id}`}>
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

export default Tvs
