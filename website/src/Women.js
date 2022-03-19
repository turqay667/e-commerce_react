import React from 'react'
import './App.css';
import product_data from './product_data';
import Itemcart from './ItemCart';
function Women(){
    return(
        <div>
            <h1>Apollo running short</h1>
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
              </div>
    )
}
export default Women;
// https://www.notion.so/Entry-React-developer-TEST-39f601f8aa3f48ac88c4a8fefda304c1