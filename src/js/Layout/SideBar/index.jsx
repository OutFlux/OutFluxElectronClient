import React from "react"
import SideBarComponent from "./SideBarComponent"
import SectionBreak from "./SectionBreak"

export default class SideBar extends React.Component{
  constructor(){
    super()
    // this.state = {
    //   active: "Home",
    //   activePage: "/"
    // }
  }

  componentDidCatch(error, info) {
    Console.log("Error in SideBar Component: ")
    console.log(info)
    Console.error(error)
  }

  // changeActiveState(name, page){
  //   let oldState = this.state.activePage
  //   this.setState({
  //     active: name,
  //     activePage: page
  //   }, () => {
  //     this.props.LoadPage(this.state.activePage)
  //   })
  // }

  render(){
    return (
      <div className="sideBar">
        <SectionBreak 
          name="Browse"
        />
        <SideBarComponent name="Home" address="/home" />
        <SideBarComponent  name="Featured" address="/featured" />
        <SectionBreak name="Library"/>
        <SideBarComponent name="Albums" address="/library/albums"/>
        <SideBarComponent
          name="Artists"
          address="/library/artists"/>
        <SideBarComponent
          name="Songs"
          address="/library/songs"/>
        <SectionBreak name="Playlists"/>
        <SideBarComponent
          name="Create A Playlist"
          address="/playlist/create-new"/>
      </div>
    )
  }
}