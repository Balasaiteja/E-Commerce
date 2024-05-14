import React from 'react'
import {speakerData} from '../data/speaker'
import { Link } from 'react-router-dom';

const Speaker = () => {
    const firstFiveImages = speakerData.slice(0,5);
    return(
        <>
        <div className="proTitle">
        <h2>Speakers</h2>
        </div>
         
         <div className='proSection'>
            {
                firstFiveImages.map((item)=>{
                    return(
                        <Link to={`/Speakers/${item.id}`}>
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

export default Speaker
