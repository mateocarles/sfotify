import React, { Component } from 'react';

import FavSong from '../FavoriteSongsContainer/FavoriteSongsContainer';

class InputSearch extends React.Component {
  render() {
    return ( 
      <div>
        <input type = "text" ref="val" onChange={ (e) => {this.updateSearch(); } }  id = "inputSearch" placeholder = "Search the name of your favorite artist">
        </input>
      </div>
    )
  }
  updateSearch() {    
    FavSong.uSearch(this.refs.val.value);
  }
}


export default InputSearch;
