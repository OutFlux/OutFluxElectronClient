// Browser
import React from "react"

import HomePage from "./Home"
import FeaturedPage from "./Featured"
import AlbumListPage from "./Albums"
import ArtistListPage from "./Artists"
import SongListPage from "./Songs"


export default class Browser extends React.PureComponent{
  constructor(props){
    super(props)
  }

  componentDidCatch(error, info) {
    Console.log("Error in Browser Component: ")
    console.log(info)
    Console.error(error)
  }

  dissasembleVirtualURL(_path){
    // console.log(_path)
    
    let Path
    if(!!_path){
      Path = _path
    } 
    else {
      console.log("URL ERROR: " + "invalid URL")
      console.log(_path)
    }
  
    let pageShortcuts = {
      Browse:{
        Home: <HomePage/>,
        Featured: <FeaturedPage/>
      },
      MyMusic:{
        Albums: <AlbumListPage/>,
        Artists: <ArtistListPage/>,
        Songs: <SongListPage/>
      },
      Create: {
        Playlist: "Creating Playlist..."
      }
    }
    
    let pathArray = Path.split("/")
    
    let component = pageShortcuts[pathArray[1]][pathArray[2]]
    
    return component
  }

  render(){
    let currentPage = this.props.CurrentPage
    let page = this.dissasembleVirtualURL(currentPage)
    return (
      <div className="browser">
        {page}
      </div>
    )
  }
}