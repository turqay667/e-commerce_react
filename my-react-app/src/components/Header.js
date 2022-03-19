import PropTypes from "prop-types"
import Button from "./Button"
const Header=({title,onAdd,showAdd})=>{
    const onClick=(onClick)=>{
        console.log("Clicked")
    }
    return(
        <header className="header">
        <h1 style={{color:"green",backgroundColor:"yellow"}}>{title}</h1>
        <Button color={showAdd ? "red":"green"} text={showAdd ? "Close":"Add"} onClick={onAdd}/>
        </header>
    )
}


Header.defaultProps={
title:"Task Tracer",
}
Header.propTypes={
    title:PropTypes.string.isRequired,
}
export default Header