import React from "react"

export default class TrackInfo extends React.Component{
  constructor(){
    super()
  }

  render(){
    return (
      <div className="trackInfo">
        <div className="trackArt">
          <img src={this.props.trackArtwork} alt=""/>
        </div>
        <div id="trackData">
          <div className="trackTitle">
            <span>{this.props.trackName}</span>
          </div>
          <div className="trackArtist">
            <span>{this.props.trackArtist}</span>
          </div>
        </div>
      </div>
    )
  }
}