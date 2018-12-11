'use strict';
import React from "react"
import TrackInfo from "./TrackInfo"
import PlayerController from "./PlayerController"
import SecondaryController from "./SecondaryController"
import ProgressBar from "./ProgressBar"
import * as b64Encoder from "base64-arraybuffer"
import {Howl, Howler} from 'howler';
let mediakeys = require('mediakeys').listen();

// toggle playing state
// media keys
// mediakeys.on('play', () => {
//     player.togglePlay()
// })

// space bar
document.body.onkeydown = event => {
  if(event.keyCode === 32){ // spacebar
    player.togglePlay()
  }
}


mediakeys.on('next', () => {
})
mediakeys.on('back', () => {

})

let music 
let player = {
  // run fn reference to toggle play/pause state
  togglePlay: null, 
  next: null,
  prev: null
}
let mounted = false
let timer

export default class Player extends React.Component{
  
  constructor(props){
    super(props)
    this.state = {
      trackMeta: {
        trackName: "Title",
        trackArtist: "Artist",
        trackArtwork: "",
      },
      isPlaying: true,
      repeat: 0,
      shuffle: false,
      volume: 80,
      CurrentPos: 0,
      TrackDuration: null
    }
    // map player to external control (media keys)
    player.togglePlay = this.toggleIsPlaying.bind(this)
  }

  componentDidMount(){
    mounted = true
    this.loadFile()
  }

  componentDidCatch(error, info) {
    Console.log("Error in Player Component: ")
    console.log(info)
    Console.error(error)
  }

  volumeChange(e){
    let volume = e.target.value
    if (volume !== this.state.volume){
      this.setState(_ => ({
        volume
      }), _=>{
        Howler.volume(this.state.volume / 100)
      })      
    }
  }

  toggleIsPlaying() {
    this.setState(state => ({
      isPlaying: !state.isPlaying
    }),()=>{
      this.props.newTrack()
      if(this.state.isPlaying === true) this.pauseMusic()
      else this.playMusic()
    })
  }

  playMusic(){
    // increase virtual volume to smoothen resumed play
    while(Howler.volume < this.state.volume){
      Howler.volume(Howler.volume + 0.01)
    }
    music.play()
  }

  pauseMusic(){
    // decrease virtual volume to smoothen pause
    while(Howler.volume > 0){
      Howler.volume(Howler.volume - 0.01)
    }
    music.pause()
  }

  toggleRepeat(){
    this.setState(state => ({
      repeat: state.repeat === 0 ? 2 : state.repeat - 1 
    }))
  }

  toggleShuffle() {
    this.setState(state => ({
      shuffle: !state.shuffle
    }))
  }

  seekTrack(e){
    let percentage = (e.clientX / document.querySelector(".ProgressBar").offsetWidth) 
    music.seek(percentage * this.state.TrackDuration)
    // speeds up seek update
    this.setState(_ => ({
      CurrentPos: percentage * this.state.TrackDuration
    }))
  }

  loadFile(){
    
    music = new Howl({
      src: this.props.fileName
    })

    music.once("load", ()=>{
      this.setState({
        TrackDuration: music.duration()
      },_=>{
        timer = setInterval(()=> {this.updateCurrentPos()/*.bind(this)*/}, 500)
      })
    })
    music.once("end", ()=>{
      this.clearSong.bind(this)
    })
  }

  async updateCurrentPos(){
    if(mounted){
      await this.setState( _ => ({
        CurrentPos: 0 + music.seek()
      }))
    }
  }

  clearSong(){
    clearInterval(timer)
  }

  render(){
    let meta = this.props.trackMetaData
    let artwork = meta.picture[0]
    let b64Image = `data:${artwork.format};base64,` + b64Encoder.encode(artwork.data)
    return (
      <div className="player">
        <ProgressBar
          TrackDuration={this.state.TrackDuration}
          CurrentPos={this.state.CurrentPos}
          seekTrack={this.seekTrack.bind(this)}
        />
        <TrackInfo 
          trackName={meta.title} //{this.state.trackMeta.trackName}
          trackArtist={meta.artist} //{this.state.trackMeta.trackArtist}
          trackArtwork={b64Image}//{this.state.trackMeta.trackArtwork}
        />
        <PlayerController 
          isPlaying={this.state.isPlaying} 
          repeat={this.state.repeat} 
          shuffle={this.state.shuffle} 
          toggleIsPlaying={this.toggleIsPlaying.bind(this)}
          toggleRepeat={this.toggleRepeat.bind(this)}
          toggleShuffle={this.toggleShuffle.bind(this)}
        />
        <SecondaryController
          volume={this.state.volume} 
          volumeChange={this.volumeChange.bind(this)}
        />
      </div>
    )
  }
}