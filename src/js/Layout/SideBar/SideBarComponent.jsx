import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



export default class SideBarComponent extends React.Component{
  constructor(){
    super()
  }
  // activateSelection(e){
  //   this.props.activateComponent(this.props.name ,this.props.address)
  // }

  render(){
    let classes = `#${this.props.address}` === location.hash ? " active" : ""
    return (
      <div 
        className={"sideBarComponent" + classes}
        id={this.props.name + "Component"}
        
      >
        <Link to={this.props.address}>
          {this.props.name}
        </Link>
      </div>
    )
  }
}