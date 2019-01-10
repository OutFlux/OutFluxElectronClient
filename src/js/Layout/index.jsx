// layout
import React from "react"
import * as mm from 'music-metadata';
import { HashRouter as Router } from "react-router-dom";

import SideBar from "./SideBar"
import Browser from "./Browser"
import Player from "./Player"

export default class Layout extends React.Component{
  constructor(){
    super()
    this.state = {
      player: {
        trackMetaData: {
          title: "No Track Loaded",
          artist: "Unknown",
          picture:{
            0: {}
          }
        },
        rawMeta:{}
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

  render(){
    return (
      <div className="container">
        <Router initialEntries={["/"]}>
          <div className="window">
            <SideBar/>
            <Browser/>
          </div>
        </Router>
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