import React from "react";
import SongDetail from './SongDetail';

const SongList = (props) => {
  if(!props.songs){
    return <p>Loading</p>
  }

  const allSongs = props.songs.map((song, index) => {
    //if you have array of components, they need a key (use index)
    return (<SongDetail
      key = {index}
      position = {index + 1}
      title = {song["im:name"].label}  //needed to work around : in React
      artist = {song["im:artist"].label}
      />
    )
  })

  return(
    <div>
      <h1>
        {allSongs}
      </h1>
    </div>
  )
}

export default SongList;
