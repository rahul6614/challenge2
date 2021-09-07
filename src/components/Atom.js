import React, {useContext}from 'react'
import  {CartContext}  from './Cart'
import "./cart.css"

 const Atom = ({id,name,image,price,quantity}) => {
     const { removeItem ,increment,decrement} = useContext(CartContext)
    return (
      <>
      
      <div class="grid-container">
            
        <div className="grid-item"><h1> {name}</h1></div>
          
        <div className="grid-item">  <h3>price:{price}</h3> </div>
          <div className="grid-item"> <img className="image" alt ="food"  src={`/assets/${image}`} /></div>
         
          <div > <input className='inp' type="text" placeholder={quantity} /></div>
          
          <div className='bnt' >  <button className='btn1' onClick = {()=>increment(id)}>+</button>
            <button className='btn2' onClick = {()=>decrement(id)}>-</button>
            <button className='btn3' onClick = {()=>removeItem(id)}>delete</button></div>
        
        </div>
        </>
    )
}
export default Atom