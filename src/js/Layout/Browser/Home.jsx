import React from "react"
import AlbumCard from "./Components/AlbumCard"
import SlideShow from "./Components/SlideShow"
import HorizontalList from "./Components/HorizontalList"
import Heading from "./Components/Heading"
let fs = require('fs');
let testData = JSON.parse(fs.readFileSync('src/js/testData.json', 'utf8'));

export default class HomePage extends React.Component{
  constructor(){
    super()
  }

  render(){
    console.log(testData);
    // testData.FeaturedAlbums.forEach(el => {
    //   <AlbumCard AlbumName={el.AlbumName} AlbumArtist={el.AlbumArtist} AlbumArt={el.AlbumArt}/>
    // })
    let cardSet = testData.FeaturedAlbums.map((album) =>
      <AlbumCard 
        key={`HomePage-${album.AlbumName}-${album.AlbumArtist}`}
        AlbumName={album.AlbumName} 
        AlbumArtist={album.AlbumArtist} 
        AlbumArt={album.AlbumArt}
      />
    )
    console.log(cardSet)

    return (
      <div className="webPage" id="Home">
        <HorizontalList 
          title="Featured"
          cardSetSize={cardSet.length}
        >
          {cardSet}
        </HorizontalList>
      </div>
    )
  }
}