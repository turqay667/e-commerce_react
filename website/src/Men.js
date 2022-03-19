import React from 'react'
import './App.css';
import product_data from './product_data';
import Itemcart from './ItemCart';
function Men(){
    return(
        <div>
            <h1>Nike</h1>
            <div className="card" >
     <section className='py-4 container'>
         <div className='row justify-content-center'>
        {product_data.men.map((item,men)=>{
            return (
                <Itemcart
                img={item.thumb} 
                name={item.name} 
                price={item.price}
                item ={item}
                key={men}
                  />
            )
            })}
             
            </div>
            </section>
              </div>
              </div>
            
    )
}
export default Men;