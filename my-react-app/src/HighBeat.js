import React,{Component} from "react";
class HighBeat extends Component{
    render(){
       if(this.props.overTen){
        return(
            <h1>High Beat Score is 10!
                 <button onClick={(e) =>this.props.onReset(e)}>Reset</button>
            </h1>
        )
        }else{
            return null;
        }
    }
}
export default HighBeat;