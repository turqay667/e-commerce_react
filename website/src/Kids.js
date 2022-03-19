import React  from 'react'
import './App.css';
import product_data from './product_data';
import Itemcart from './ItemCart';
function Kids(){
    return(
        <div>
            <h1>Adidas</h1>
            <div className="card" >
     <section className='py-4 container'>
         <div className='row justify-content-center'>
            {product_data.kids.map((item,kids)=>{
            return (
                <Itemcart
                img={item.thumb} 
                name={item.name} 
                price={item.price}
                item ={item}
                key={kids}
                  />
            )
            })}
            </div>
            </section>
              </div>
              </div>
    )
}
export default Kids;