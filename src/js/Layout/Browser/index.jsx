// Browser
import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom";

import HomePage from "./Home"
import FeaturedPage from "./Featured"
import AlbumListPage from "./Albums"
import ArtistListPage from "./Artists"
import SongListPage from "./Songs"


export default class Browser extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidCatch(error, info) {
    Console.log("Error in Browser Component: ")
    console.log(info)
    Console.error(error)
  }

  render(){
    return (
      <div className="browser">
        <Route exact path="/" component={HomePage} />
        <Route path="/home" component={HomePage} />
        <Route path="/featured" component={FeaturedPage} />
        <Route path="/library/albums" component={AlbumListPage} />
        <Route path="/library/artists" component={ArtistListPage} />
        <Route path="/library/songs" component={SongListPage} />
        <Route path="/playlist" component={null} />
      </div>
    )
  }
}