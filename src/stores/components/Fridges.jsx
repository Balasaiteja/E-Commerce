import React from 'react'
import {fridgeData} from '../data/fridge'
import { Link } from 'react-router-dom';
const Fridges = () => {
const firstFiveImages = fridgeData.slice(0,5);
return(
    <>
    <div className="proTitle">
    <h2>Refrigerators</h2>
    </div>
     
     <div className='proSection'>
        {
            firstFiveImages.map((item)=>{
                return(
                    <Link to={`/Fridges/${item.id}`}>
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

export default Fridges
