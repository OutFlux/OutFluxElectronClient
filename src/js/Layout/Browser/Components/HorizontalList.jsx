import React from "react"
import Heading from "./Heading"

export default class HorizontalList extends React.Component{
  constructor(){
    super()
  }

  render(){
    return (
      <div className="list">
        <h2>
          <span>{this.props.title}</span>
          <div className="rightArrow">
            <i className="fas fa-angle-right"></i>
          </div>
          <div className="leftArrow">
            <i className="fas fa-angle-left"></i>
          </div>
        </h2>
        <div className="horizontalList">
          <div className="listObjects">
            {this.props.children}
          </div>
        </div>
      </div>
        
    )
  }
}