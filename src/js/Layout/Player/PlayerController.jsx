import React from "react"

export default class PlayerController extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  toggleIsPlaying(){
    this.props.toggleIsPlaying.bind(this)
  }

  render(){
    return (
      <div className="playerController">
        <div className="playerButton shuffleButtonContainer" onMouseDown={this.props.toggleShuffle.bind(this)}>
          <i style={{color: this.props.shuffle? "green": "inherit"}} className="fas fa-random fa-lg"></i>
        </div>
        <div className="playerButton previousButtonContainer">
          <i className="fas fa-step-backward fa-lg"></i>
        </div>
        <div className="playerButton playButtonContainer" onClick={this.props.toggleIsPlaying.bind(this)}>
          <i 
            className="fas fa-play fa-lg"
            style={
              {display: this.props.isPlaying ? 'inherit' : 'none' }
            }
          ></i>
          <i 
            className="fas fa-pause fa-lg"
            style={
              {display: this.props.isPlaying ? 'none' : 'inherit' }
            }
          ></i>
        </div>
        <div className="playerButton nextButtonContainer">
          <i className="fas fa-step-forward fa-lg"></i>
        </div>
        <div className="playerButton repeatButtonContainer" onClick={this.props.toggleRepeat.bind(this)}>
          <svg style={{width: "100%", height: "100%", marginTop: "-4px", display: this.props.repeat !== 1 ? "inherit": "none"}} aria-hidden="true" data-prefix="far" data-icon="repeat" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-repeat fa-w-16 fa-lg">
            <path style={{color: this.props.repeat === 2? "green": "inherit"}} fill="currentColor" d="M512 256c0 83.813-68.187 152-152 152H136.535l55.762 54.545c4.775 4.67 4.817 12.341.094 17.064l-16.877 16.877c-4.686 4.686-12.284 4.686-16.971 0l-104-104c-4.686-4.686-4.686-12.284 0-16.971l104-104c4.686-4.686 12.284-4.686 16.971 0l16.877 16.877c4.723 4.723 4.681 12.393-.094 17.064L136.535 360H360c57.346 0 104-46.654 104-104 0-19.452-5.372-37.671-14.706-53.258a11.991 11.991 0 0 1 1.804-14.644l17.392-17.392c5.362-5.362 14.316-4.484 18.491 1.847C502.788 196.521 512 225.203 512 256zM62.706 309.258C53.372 293.671 48 275.452 48 256c0-57.346 46.654-104 104-104h223.465l-55.762 54.545c-4.775 4.67-4.817 12.341-.094 17.064l16.877 16.877c4.686 4.686 12.284 4.686 16.971 0l104-104c4.686-4.686 4.686-12.284 0-16.971l-104-104c-4.686-4.686-12.284-4.686-16.971 0l-16.877 16.877c-4.723 4.723-4.681 12.393.094 17.064L375.465 104H152C68.187 104 0 172.187 0 256c0 30.797 9.212 59.479 25.019 83.447 4.175 6.331 13.129 7.209 18.491 1.847l17.392-17.392a11.991 11.991 0 0 0 1.804-14.644z">
            </path>
          </svg>
          <svg 
          style={{width: "100%", height: "100%", marginTop: "-4px", display: this.props.repeat === 1 ? "inherit": "none"}} 
          aria-hidden="true" data-prefix="far" data-icon="repeat-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-repeat-1 fa-w-16 fa-lg">
            <path style={{color: "green"}} fill="currentColor" d="M512 256c0 83.813-68.187 152-152 152H136.535l55.762 54.545c4.775 4.67 4.817 12.341.094 17.064l-16.877 16.877c-4.686 4.686-12.284 4.686-16.971 0l-104-104c-4.686-4.686-4.686-12.284 0-16.971L154.59 275.468c4.686-4.686 12.284-4.686 16.971 0l16.877 16.877c4.723 4.723 4.681 12.393-.094 17.064L136.535 360H360c57.346 0 104-46.654 104-104 0-19.452-5.372-37.671-14.706-53.258a11.991 11.991 0 0 1 1.804-14.644l17.392-17.392c5.362-5.362 14.316-4.484 18.491 1.847C502.788 196.521 512 225.203 512 256zM62.706 309.258C53.372 293.671 48 275.452 48 256c0-57.346 46.654-104 104-104h223.465l-51.809 50.592c-4.775 4.67-4.817 12.341-.094 17.064l16.877 16.877c4.686 4.686 12.284 4.686 16.971 0l100.047-100.047c4.686-4.686 4.686-12.284 0-16.971l-104-104c-4.686-4.686-12.284-4.686-16.971 0l-16.877 16.877c-4.723 4.723-4.681 12.393.094 17.064L375.465 104H152C68.187 104 0 172.187 0 256c0 30.797 9.212 59.479 25.019 83.447 4.175 6.331 13.129 7.209 18.491 1.847l17.392-17.392a11.991 11.991 0 0 0 1.804-14.644zm164.557-9.731c0-7.477 3.917-11.572 11.573-11.572h15.131v-39.878c0-5.163.534-10.503.534-10.503h-.356s-1.779 2.67-2.848 3.738c-4.451 4.273-10.504 4.451-15.666-1.068l-5.518-6.231c-5.342-5.341-4.984-11.216.534-16.379l21.72-19.939c4.449-4.095 8.366-5.697 14.42-5.697h12.105c7.656 0 11.749 3.916 11.749 11.572v84.384h15.488c7.655 0 11.572 4.094 11.572 11.572v8.901c0 7.477-3.917 11.572-11.572 11.572h-67.293c-7.656 0-11.573-4.095-11.573-11.572v-8.9z">
            </path>
          </svg>
        </div>
      </div>
    )
  }
}