import React from "react"

export default class AlbumCard extends React.Component{
  constructor(){
    super()
  }

  render(){
    return (
      <div className="albumCard" id={`album_${this.props.AlbumName}-artist_${this.props.AlbumArtist}`}>
        <div className="imgHolder">
          <img src={this.props.AlbumArt} alt={this.props.AlbumName}/>
        </div>
        <div className="cardMeta">
          <span className="albumName">{this.props.AlbumName}</span>
          <span className="albumArtist">{this.props.AlbumArtist}</span>
        </div>
      </div>
    )
  }
}