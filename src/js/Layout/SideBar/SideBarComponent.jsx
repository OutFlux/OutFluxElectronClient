import React from "react"

export default class SideBarComponent extends React.Component{
  constructor(){
    super()
  }
  activateSelection(e){
    this.props.activateComponent(this.props.name ,this.props.address)
  }

  render(){
    let classes = this.props.active === true ? " active" : ""
    return (
      <div 
        className={"sideBarComponent" + classes}
        id={this.props.name + "Component"}
        onClick={this.activateSelection.bind(this)}
      >
        <span>{this.props.name}</span>
      </div>
    )
  }
}