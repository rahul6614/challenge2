import React, { createContext ,useReducer,useEffect} from 'react'
import Data from "../data/feeds.json"
import ContextCart from './ContextCart';
import { reducer } from './reducer';
export const CartContext = createContext();

const initialState ={
    item: Data,
    totalAmount:0,
    totalItem :0,

};
 const Cart = () => {
const [state, dispatch] = useReducer(reducer, initialState)
// to delete the indiviual item from the cart
 const removeItem = (id)=>{
  return dispatch({
   type: "remove_item",
   payload:id,
}); 
 };
 const clear = ()=>{
    return dispatch({
     type: "clear_item",
     
  }); 
   };
   const increment = (id)=>{
    return dispatch({
     type: "Increment",
     payload:id,
  }); 
   };
   const decrement = (id)=>{
    return dispatch({
     type: "Decrement",
     payload:id,
  }); 
   };
  useEffect(() => {
     dispatch({type:"GET_TOTAL"}); 
     console.log("awesome");
  },[state.item]);

    return (
        <>
            <CartContext.Provider value={{...state,removeItem,clear,increment,decrement}}>
            <ContextCart/>
            </CartContext.Provider>
        </>
    )
}
export default Cart