import React, {useContext} from 'react'
import "./cart.css"
import Atom from './Atom'
import  {CartContext}  from './Cart'

const ContextCart = () => {
    
    const {item,clear,totalAmount,totalItem} = useContext(CartContext);
    return (
        <div>
            { item.map((event)=>{
             return <Atom key={event.id} {...event} />
            })

            } <div>
            <h3> item: <span>{totalItem}/-</span></h3>
       
      
       <h3> total: <span>{totalAmount}₹</span></h3> </div>
      <a className='check' href='#' target="_blank" rel="noopener noreferrer">checkout</a>
      
        <button className='cancel' onClick={clear} >cancel</button>
        </div>
    )
}

export default ContextCart
