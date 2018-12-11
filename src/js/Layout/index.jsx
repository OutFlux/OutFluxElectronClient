// layout
import React from "react"
import * as mm from 'music-metadata';

import SideBar from "./SideBar"
import Browser from "./Browser"
import Player from "./Player"

export default class Layout extends React.Component{
  constructor(){
    super()
    this.state = {
      player: {
        trackMetaData: {
          title: "None",
          artist: "None",
          picture:{
            0: {}
          }
        },
        rawMeta:{}
      },
      browser: {
        CurrentPage: "/Browse/Home"
      }
    }
  }

  newTrack(){
    mm.parseFile(this.props.fileName, {native: true})
      .then(meta => {
        this.setState( _ => ({
          player:{
            trackMetaData: meta.common,
            rawMeta: meta
          }
        }))
        // console.log(meta)
      })
      .catch(e => console.error(e.message))
  }

  loadPage(page){
    this.setState( _ => ({
      browser: {
        CurrentPage: page
      }
    }))
  }

  render(){
    return (
      <div className="container">
        <div className="window">
          <SideBar
            LoadPage={this.loadPage.bind(this)}
          />
          <Browser
            CurrentPage={this.state.browser.CurrentPage}
          />
        </div>
        <Player 
          trackMetaData={this.state.player.trackMetaData}
          newTrack={this.newTrack.bind(this)}
          fileName={this.props.fileName}
        />
      </div>
    )
  }
}

module.exports = Layout