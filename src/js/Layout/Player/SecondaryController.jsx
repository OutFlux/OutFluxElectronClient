import React from "react"

export default class SecondaryController extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="secondaryController">
        <div className="queueIconContainer">
          <i className="fas fa-list playerButton"></i>
        </div>
        <div className="volumeBarContainer">
          <i style={{display: this.props.volume <= 10 ? "inline-block" : "none"}} className="fas fa-volume-off fa-lg"></i>
          <i style={{display: this.props.volume > 10 && this.props.volume <= 50 ? "inline-block" : "none"}}  className="fas fa-volume-down fa-lg"></i>
          <i style={{display: this.props.volume > 50 && this.props.volume <= 100 ? "inline-block" : "none"}}  className="fas fa-volume-up fa-lg"></i>
          <input type="range" id="volumeBar" min="0" max="100" defaultValue={this.props.volume} onChange={this.props.volumeChange.bind(this)}/>
        </div>
      </div>
    )
  }
}