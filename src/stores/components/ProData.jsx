import React from 'react'
import {mobileData} from '../data/proData'
const ProData = () => {
    const firstFiveImages = mobileData.slice(0,5);
    return(
        <>
        <div className="proTitle">
           <h2>Product Data</h2>
        </div>
         
         <div className='proSection'>
            {
                firstFiveImages.map((item)=>{
                    return(
                        <div className='imgBox'>
                         <img className='proImage' src={item.image} alt="" />
                        </div>  
                    )
                    
                   
                })
            }
         </div>
        </>
    )
}

export default ProData
