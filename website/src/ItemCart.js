import {React} from 'react';
import { useCart } from "react-use-cart";
import product_data from './product_data';
// import Details from './details';
// import Details from './details';

const Itemcart=(props)=>{
    const {addItem}=useCart();
    return (
            <div className='col-11  col-md-6  col-lg-3 mx-0 mb-4'>
            <div className='card p-0 overrflow-hidden h-100 shadow'>
             <Link to={`details/${props.id}`}><img src={props.img} className="card-img img-fluid"/> </Link> 
             <div className="cart-body">
                 <h3>{props.name}</h3>
                 <h3>${props.price}</h3>
                 <button className="btn btn-success" onClick={addItem(props.item)}>Add to cart</button>
                 <button className="btn btn-dark">Go to cart</button>
                 
                 </div>
        </div>
            </div>
    )
}
export default Itemcart;