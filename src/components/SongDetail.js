import React from 'react';

const SongDetail = (props) => {

  console.log("props top of detail", props);

  return (

      <div>
        <h3>
          {props.position}. {props.title}
        </h3>
        <h4>
          {props.artist}
        </h4>
      </div>

  )
}

export default SongDetail;
