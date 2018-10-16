import React, {Component} from 'react';
import SongDetail from '../components/SongDetail';

class SongContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      songs: []
    };
  }

  componentDidMount(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"
    fetch(url).then((res) => res.json())
    .then((songs) => {
      this.setState({songs: songs});
    })
  }

  render(){
    console.log("songs passed down", this.state.songs);
    return (
      <div>
        <h2>List of songs that I guess people like nowadays</h2>
        <SongDetail songs = {this.state.songs}/>
      </div>
    );
  }
}

export default SongContainer;
