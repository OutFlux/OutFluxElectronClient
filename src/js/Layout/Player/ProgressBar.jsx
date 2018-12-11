import React from "react"

export default class ProgressBar extends React.Component{
  constructor(){
    super()
  }

  

  render(){
    let progressAmount = 1
    progressAmount = progressAmount === NaN? 0.1: (this.props.CurrentPos / this.props.TrackDuration) *100
    //console.log({progressAmount, CurrentPos:this.props.CurrentPos, duration:this.props.TrackDuration });

    return (
      <div 
        className="ProgressBar"
        onClick={this.props.seekTrack.bind(this)}
      >
        <span 
          className="CurrentProgress"
          style={{
            width: progressAmount.toString() + "%"
          }}
        >
          <span className="SliderHead"></span>
        </span>
      </div>
    )
  }
}