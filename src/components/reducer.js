export const reducer =(state,action)=>{

if(action.type === "remove_item")
return {...state,
item: state.item.filter((element)=>{
return element.id !== action.payload 
})}

if(action.type === "clear_item")
{
return {...state,
item:[]}
    
}
if(action.type==="Increment"){
    let upDateCart = state.item.map((curr)=>{
        if(curr.id===action.payload)
        return{...curr, quantity:curr.quantity+1

        };
        return curr;
    })
return{...state,item:upDateCart};
}
if(action.type==="Decrement"){
    let upDatedCart = state.item.map((curr)=>{
        if(curr.id===action.payload)
        return{...curr, quantity:curr.quantity-1

        };
        return curr;
    })
    .filter((curr)=>
    curr.quantity!==0);
return{...state,item:upDatedCart};
}
if (action.type==="GET_TOTAL"){
    let{totalItem, totalAmount}= state.item.reduce((accum,cvalue)=>{
  let{price,quantity}=cvalue;
  let updatedtotalAmount=price*quantity;
  accum.totalAmount+=updatedtotalAmount;
  accum.totalItem+=quantity;
  return accum;
    },
    {
        totalItem:0,
        totalAmount:0,
    })
    return{...state,totalItem,totalAmount};
}

return state};
