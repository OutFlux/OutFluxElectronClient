import React from "react"
import SideBarComponent from "./SideBarComponent"
import SectionBreak from "./SectionBreak"
import HomePage from "../Browser/Home"

export default class SideBar extends React.Component{
  constructor(){
    super()
    this.state = {
      active: "Home",
      activePage: "/Browse/Home"
    }
  }

  componentDidCatch(error, info) {
    Console.log("Error in SideBar Component: ")
    console.log(info)
    Console.error(error)
  }

  changeActiveState(name, page){
    let oldState = this.state.activePage
    this.setState({
      active: name,
      activePage: page
    }, () => {
      this.props.LoadPage(this.state.activePage)
    })
  }

  render(){
    return (
      <div className="sideBar">
        <SectionBreak 
          name="Browse"
        />
        <SideBarComponent
          name="Home"
          address="/Browse/Home"
          active={this.state.active === "Home"}
          activateComponent={this.changeActiveState.bind(this)}
        />
        <SideBarComponent
          name="Featured"
          address="/Browse/Featured"
          active={this.state.active === "Featured"}
          activateComponent={this.changeActiveState.bind(this)}
        />
        <SectionBreak name="My Music"/>
        <SideBarComponent
          name="Albums"
          address="/MyMusic/Albums"
          active={this.state.active === "Albums"}
          activateComponent={this.changeActiveState.bind(this)}
        />
        <SideBarComponent
          name="Artists"
          address="/MyMusic/Artists"
          active={this.state.active === "Artists"}
          activateComponent={this.changeActiveState.bind(this)}
        />
        <SideBarComponent
          name="Songs"
          address="/MyMusic/Songs"
          active={this.state.active === "Songs"}
          activateComponent={this.changeActiveState.bind(this)}
        />
        <SectionBreak name="Playlists"/>
        <SideBarComponent
          name="Create A Playlist"
          address="/Create/Playlist"
          active={this.state.active === "Create A Playlist"}
          activateComponent={this.changeActiveState.bind(this)}
        />
      </div>
    )
  }
}