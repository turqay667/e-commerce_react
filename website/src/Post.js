import React, { Component } from 'react'
import axios from 'axios'
import Itemcart from './ItemCart'
 class Post extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          userId:'',
          title:'',
          body:''

       }
    }
       handleChange=(e)=>{
           this.setState({
               [e.target.name]:e.target.value

           })

     }
     handleSubmit=(e)=>{
         e.preventDefault()
         axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
         .then(response=>{
           console.log(response)
         })
    
     }

  render() {
      const {id,name,currency}=this.state
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
          <div>
          <label>UserId</label>
                  <input type='text' name='userId' value={name} onChange={this.handleChange}></input>
              </div>
              <div>
              <label>title</label>
                  <input type='text' name='title' value={id} onChange={this.handleChange}></input>
              </div>
              <div>
          <label>body</label>
                  <input type='text' name='body' value={currency} onChange={this.handleChange}></input>
              </div>
              <div>
                  <button type='submit'>Button</button>
              </div>
          </form>
      </div>
    )
  }
}

export default Post