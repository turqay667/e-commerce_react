import React from "react";
import {useState} from "react"
import AddTask from "./components/AddTask"
import Tasks from "./components/Tasks"
//import HighBeat from "./HighBeat";
import Header from "./components/Header"
import "./css/style.css"
//function Application(){
    //const name="Turqay"
    //const x=true
    //return(
      //  <div className="container">
      //  <Header/>
      //<div className="Application">
           // <h1>Hello {name} this is React crash course</h1>
           // <h2>Hi,{x ? "yes": "no"}</h2>
      //  </div>
   // )

//}
/*class Application extends Component {
    constructor(props){
        super(props);

this.state ={
    count:0,
    overTen:false

 }
 }
handleClick = ()=> {
    this.setState({count: this.state.count +1 });

    }

    componentDidUpdate(props,state){
        if(this.state.count > 10 && this.state.count !== state.count &&  !this.state.overTen){
         console.log("Updating over ten");
         this.setState({overTen: true });

        }
    }
resetCount=(e)=>{
    console.log("Event is",e);
    this.setState({
       count:0,
        overTen:false
    });
}
    
    render(){
        let {count}=this.state;


        return(
            <div>
                <h1>i clicked this button {count} times</h1>
                <HighBeat
               overTen={this.state.overTen}
                onReset={(e)=>this.resetCount(e)}
                />
                <span>
                    <button onClick={() => this.handleClick()}>Click me </button> 
                    </span>
            </div>
        );
            
    }
}
*/
/*const Application=()=>{
    return(
        <div className="container">
            <Header/>
        </div>
    )

}
*/
const Application=()=>{
    const [showAddTask,setShowAddTask]=useState(false)
    const[tasks,setTasks]=useState(
        [
             {
                 id:1,
                 text:"Birthday",
                 day:"August 4",
                 reminder:true,
             },
             {
                 id:2,
                 text:"Call Of duty MW2",
                 day:"November 7",
                 reminder:false,
             },
             {
                 id:3,
                 text:"Online class",
                 day:"December 21",
                 reminder:true,
             },
             
         ]
     )
     const addTask=(task)=>{
        const id=Math.floor(Math.random()*10000)+1
        const newTask={id,...task}
        setTasks([...tasks,newTask])
     }
     const deleteTask=(id)=>{
        setTasks(tasks.filter((task)=>task.id !==id))
        console.log({id})
     }
     const toggle=(id)=>{
         setTasks(tasks.map((task)=>
         task.id===id ? {...task,reminder:
            !task.reminder} : task
         )
         )
         console.log({id})
     }
    return(
        <div className="container">
            <Header 
            onAdd={()=>setShowAddTask
            (!showAddTask)}
            showAdd={showAddTask}/>
            {showAddTask &&  <AddTask onAdd={addTask}/>}

            {tasks.length>0 ? (
            <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggle}/>
            ) :(
                "No tasks to show"

            )}
        </div>
    )

}
export default Application