import React from 'react';
// import { useState } from 'react/cjs/react.production.min';
import product_data from './product_data';
import Itemcart from './ItemCart';
const Main_content=()=>{
    return (
 <div className="card" >
     <section className='py-4 container'>
         <div className='row justify-content-center'>
 {product_data.women.map((item,women)=>{
return (
    <Itemcart 
    img={item.thumb} 
    name={item.name} 
    price={item.price}
    item ={item}
    key={women}
      />
)
})}
    </div>
    </section>

</div>
)
}

export default Main_content;