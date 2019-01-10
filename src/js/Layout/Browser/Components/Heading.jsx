import React from "react"

export default class HomePage extends React.Component{
  constructor(){
    super()
  }

  render(){
    return (
      <h2>{this.props.title}</h2>
    )
  }
}