import React from 'react';

const SongDetail = (props) => {
  if(!props.songs) return <p>Loading</p>;
  console.log("props top of detail", props);

  //cant get the correct info to map
  //API hard to navigate
  const songs = props.feed.entry.map(song => {
    return ({song.feed.entry})
  })
  console.log("songs", songs);

  return (
    <h3>
      {props.songs}
    </h3>
  )
}

export default SongDetail;
