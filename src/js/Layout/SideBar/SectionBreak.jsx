import React from "react"

export default class SideBarComponent extends React.Component{
  constructor(){
    super()
  }

  render(){
    return (
      <div 
        className="sideBarSectionBreak"
        id={this.props.name + "SectionBreak"}
        style={this.props.name === "Browse" ? {
          paddingTop: "0"
        }: {}}
      >
        <a>{this.props.name}</a>
      </div>
    )
  }
}