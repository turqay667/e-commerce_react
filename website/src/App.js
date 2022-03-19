
// import React,{useState,useEffect,Fragment} from 'react'
// import { render } from '@testing-library/react';
import React  from 'react'
import './App.css';
import { IconName} from  "react-icons/fa"
// import axios from 'axios'
// import Post from './Post'
import Women from './Women'
import Men from './Men'
import Navbar from './Navbar'
import Kids from './Kids';
import {BrowserRouter,Route } from 'react-router-dom';
import Main_content from "./main_content";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./Cart"; 
import Itemcart from './ItemCart';
import { CartProvider } from 'react-use-cart';
// function App() {
//   const[count,setCount]=useState(4)
//   const[theme,setTheme]=useState('blue')
//   // const count=state.count
//   // const theme=state.theme
// function decrement(){
//   setCount(prevCount=>prevCount-1)

// }
// function increment(){
//    setCount(prevCount=>prevCount+1)
//   // setTheme('red')
// }
//   return (
//     <div>
//  <button onClick={decrement}>-</button>
//     <span>{count}</span>
//     <span>{theme}</span>
//     <button onClick={increment}>+</button>

      
//     </div>
   
//   );
// }
// function Film(){
//   const[film,setFilm]=useState({
//     rating:8.0,
//     name:"Before You",
//     year:2018,
//     category:"romantic-drama"

//   })
// function update(){
//   setFilm(prevState=>{
//     return{...prevState, year:2015}
//   })
// }

// return(
//   <div>
//     <h2>My favourite film</h2>
//     <p>This film is trend in  {film.year}</p>
//     <button onClick={update}>Blue</button>
//   </div>
// )
// }

// const colors={
//   Sea:'#a2ccb6',
//   Sand:'#fceeb5',
//   Sky:'#ee786e'
// }

// const App=()=>{
//   const[color,setColor]=useState(colors.Sea)
//   useEffect(()=>{
//       document.body.style.backgroundColor=color
//     },[color])
//   return(
//     <Fragment>
//       <select value={color} onChange={e=>setColor(e.target.value)}>
//       {Object.entries(colors).map(([name, value]) => (
//           <option key={`color--${name}`} value={value}>
//             {name}
//           </option>
//         ))}
//       </select>
//       <h1>{color}</h1>
       
//     </Fragment>
//   )

//   }
//   function Timer(){
// const[count,setCount]=useState(0);

// useEffect(()=>{
// setTimeout(()=>{
// setCount((count)=> count+1);
// },1000);
// });
// return <h2>i have rendered {count} times for React useEffect lesson</h2>
//   }
// export default Timer;
//Fetch API
// function UsersData(){
//   const [Users,fetchUsers]=useState([])

//   const getData=()=>{
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res)=>res.json())
//     .then((res)=>{
//       console.log(res)
//       fetchUsers(res)

//     })
//   }
// useEffect(()=>{
//   getData()
// },[])
// return(
//   <div>
//     <h2>Fetch API tutorial in React</h2>
//     <ul>
//       {Users.map((item,i)=>{
//         return <li key={i}>{item.name}</li>
//       })}
//     </ul>
//   </div>
// )
// }
// export default UsersData
// export default class ComponentDidMountMethod extends Component{

//   constructor(props){
//   super(props)
//   this.state={
//     name:'This name will change in 5 seconds'
//   }
//   }
//   componentDidMount(){
//     setTimeout(()=>{
// this.setState({name:"This is a ComponentDidMount"})
//    },5000 )
//   }

//   render(){
//     return(
//       <div>
//         <h2>{this.state.name}</h2>
//       </div>
//     )
//   }
// }
// export default App
// class Header extends React.Component{
//   constructor(props){
//     super(props)
//     this.state={LovePizza:"Barbecue"}
//   }
// shouldComponentUpdate(){
//   return false;
// }

// change=()=>{
//   this.setState({LovePizza:"Pepporoni"})
// }
// change1=()=>{
//   this.setState({LovePizza:"Cheese and Mushrooms Pizza"})
// }

// render(){
//   return(
//     <div>
//       <button onClick={this.change}>Change Food name at once</button>
//       <h2>{this.state.LovePizza}</h2>
//       <button onClick={this.change1}>Change name again</button>
//     </div>

//   )
// }
// }
// export default Header
// class App extends React.Component{
//   render(){
//     return (
//       <div>
//         <h2>TutorialSpoit</h2>
//         <Change/>
//       </div>
//     );
//   }
// }
// class Change extends React.Component{
//   constructor(){
//     super()
//   this.state={color:'blue'};
// }
// componentWillMount(){
//   this.state={color:'wheat'}
// }
// render(){
//   return (
//     <div>
//       <h2 style={{color:this.state.color}}>ComponentWillMount</h2>
//     </div>
//   )
// }
// }
// export default App;

// class App extends React.Component{
//   render(){
//     return (
//       <div>
//         <h2>TutorialSpoit</h2>
//         <Change/>
//       </div>
//     );
//   }
// }
// class Change extends React.Component{
//   constructor(){
//     super()
//   this.state={color:'blue'};
// }
// componentDidUpdate(){
//   console.log("Method is called")
// }
// render(){
//   return (
//     <div>
//       <h2 style={{color:this.state.color}}>componentDidUpdate</h2>
//       <button onClick={()=>
//       this.setState({color:'green'})
//       }>Change color</button>
//     </div>
//   )
// }
// }
// export default App;
// class App extends React.Component{
//   constructor(props){
//     super(props)
//     this.state={
//       posts:[]
//     }
//   }
//   componentDidMount(){
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//     .then(response=>{
//       this.setState({
//         posts:response.data
//       })
//       console.log(response.data)
//     })
// //   }
//   render(){
    // const {posts}=this.state
    function App(){
      return (
     
        <CartProvider>
       <BrowserRouter>
     
       <>
       <Navbar/>
     
        <Route exact path="/women" element={<Women/>}/>
        <Route path="/men" element={<Men/>} />
        <Route path="/kids" element={<Kids/>} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/details/:id' element={<Cart/>}/>
        <Main_content/>
        {/* <Itemcart/>
        <Cart/> */}
      
  </>
     </BrowserRouter>
     </CartProvider>
      )
    }
      
export default App