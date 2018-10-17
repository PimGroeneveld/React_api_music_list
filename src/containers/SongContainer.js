import React, {Component} from 'react';
import SongList from '../components/SongList';

class SongContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      songs: []
    };
  }

  componentDidMount(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"
    fetch(url).then((res) => res.json()) //turns String into Json
    .then((songs) => {
      this.setState({songs: songs.feed.entry});
    })
  }

  render(){
    console.log("songs passed down", this.state.songs);
    return (
      <div>
        <h2>Music Chart top 20</h2>
        <SongList songs = {this.state.songs} />
      </div>
    );
  }
}

export default SongContainer;
