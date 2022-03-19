import React  from 'react'
import './App.css';
import { Link } from 'react-router-dom';
import { FaShoppingCart,FaDollarSign, FaBorderNone} from  "react-icons/fa"
import product_data from './product_data';

function Navbar(){


    const navStyle={
        color:"white",
     fontSize:20,
     textDecoration:"none"

    };
    return(
        <nav>
             
            <ul className='nav-links'>
               <Link style={navStyle} to="/women">
               <li>Women</li>
               </Link>
           <Link style={navStyle} to="/men">
           <li>Men</li>
           </Link>
           <Link style={navStyle} to="/kids">
           <li>Kids</li>
           </Link>
              
            </ul>
            <h3>Logo</h3>
            <div className='icons'>
            <FaDollarSign/>
            {/* <div className='select'> */}
            <select className='money'>
               <option hidden></option> 
               <option value="1"> $ USD</option>
               <option value="2" > € EUR</option>
               <option value="3"> ¥ JPY</option>
           </select>
            {/* </div> */}
          
           
            <i className='money'> <FaShoppingCart/></i><span className='cart-length'>{product_data.length===0? "" :product_data.length}</span>
            
            </div>
           
            
        </nav>
    )
    
}
export default Navbar;
//https://dev.to/papasanto/build-a-react-hooks-shopping-cart-with-usestate-and-useeffect-39hk