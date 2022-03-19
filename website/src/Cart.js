import React from "react";
import {useCart} from "react-use-cart";
const Cart=()=>{
    const{
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,

    }=useCart();
    // const{id}=useParams()
    if (isEmpty) return <h1 className="text-center">Cart</h1>
    return (
            <>
<h3>Cart</h3>
<section className="container">
<div className="row">
                <div className="col-md-12">
                   {items.map((item,index)=>{
        return (
<div key={index} className="carts">
    <div className="row">
<div className="col-md-6">
<div>{item.name}</div>
<h3>{item.price}<span>    {item.quantity}</span></h3>
<button className="btn btn-light">S</button>
<button className="btn btn-light">M</button>
</div>
<div className="col-md-6">
<img src={item.thumb} style={{height:"20%;",width:"20%"}}/>
<button className="btn btn-light" onClick={()=>updateItemQuantity(item.id,item.quantity-1)}>-</button>
<button className="btn btn-light" onClick={()=>updateItemQuantity(item.id,item.quantity+1)}>+</button>
</div>
</div>
</div>
)
  })}
  </div>
 </div>    
  </section>   
  </>
            )
}
export default Cart;
