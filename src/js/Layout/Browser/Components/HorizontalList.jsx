import React from "react"

export default class HorizontalList extends React.Component{
  constructor(){
    super()
  }

  render(){
    return (
      <div className="horizontalList">
        <div className="leftArrow">
          <i className="fas fa-angle-left"></i>
        </div>
        <div className="objects">
          {this.props.children}
        </div>
        <div className="rightArrow">
        <i className="fas fa-angle-right"></i>
        </div>
      </div>
    )
  }
}