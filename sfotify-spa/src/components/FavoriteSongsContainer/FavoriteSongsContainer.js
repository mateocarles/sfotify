import React, { Component } from 'react';
import FavoriteSongBox from  './FavoriteSongBox';
import Request from 'superagent';
import _ from 'lodash';

class FavoriteSongsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      songs: [
      ]
    }

  }

  componentWillMount() {
    this.search();
  }

  uSearch(val) {
    this.search(val);
  }

  search(val = "j") {
    var url = `https://api.spotify.com/v1/search?type=artist&q=${val}`;
    Request.get(url).then((response) => {
      this.setState({
        songs: response,        
      });
    });
  }

  

  render() {
    const songs = this.state.songs.map( (item, idx)  => {
        return <li key={idx}> {item} </li>
    })
    return (
      <div>
        <h2> Canciones </h2>
        <ul>
          {songs}
        </ul>
      </div>
    );
  }
}

export default FavoriteSongsContainer;
