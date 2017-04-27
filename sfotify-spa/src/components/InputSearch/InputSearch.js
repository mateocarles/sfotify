import React, {Component} from 'react';
import Request from 'superagent';
import './InputSearch.css';
import FavSong from '../FavoriteSongsContainer/FavoriteSongsContainer';

class InputSearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      query: '',
      songs: [],
      data: [],
      id: [],
      albums: []
    }
  }

  handleChange(event) {
    const query = event.target.value
    this.setState({query: query})
    this.submitSearch(query)
  }

  submitSearch(keyword) {
    const url = `https://api.spotify.com/v1/search?type=artist&q=${keyword}`;
    Request.get(url).then((response) => {
      //Pass the parameters to another component to render the images?
      console.log("El del submit: " + response.body.artists.items[0].name);
      console.log(response.body.artists.items[0]);

      var arr = [];
      var arrId =[];

      for (var i in response.body.artists.items) {
        arr.push(response.body.artists.items[i].name);
        arrId.push(response.body.artists.items[i].id);
      }

      console.log("El array: " + arr);

      this.setState({songs: arr});
      this.setState({data: response.body.artists.items})
      this.setState({id:response.body.artists.items.id})


      console.log("DATA: " + this.state.data);
      console.log("ID: " + arrId);
    });
  }

handleClick(key){
  
  for(var i in this.state.data) {
    if(this.state.data[i].name==key)
    {
      const id = this.state.data[i].id;
      const url = ` https://api.spotify.com/v1/artists/${id}/albums`;
      Request.get(url).then((response) => {


        var arrAlb = [];


        for (var i in response.body.items) {
        arrAlb.push(response.body.items[i].name);
        }
      
        this.setState({albums: arrAlb})


      });
    }
  }  
}


  render() {
    var self = this;
    return (
      <div>
        <input type="text" ref="val" onChange={this.handleChange.bind(this)} id="inputSearch" placeholder="Search the name of your favorite artist"/>
        <ul>
          {this.state.songs.map(function(listValue,i){
            return <li key={i}><a  href="#" onClick={() =>{
              {self.handleClick(listValue)}
            }}>{listValue}</a></li>;
          })}
        </ul>
        <h2>Albums</h2>
         <ul>
          {this.state.albums.map(function(listAlbum,i){
            return <li key={i}>{listAlbum}</li>;
          })}
        </ul>

        
      </div>
    )
  }
}

export default InputSearch;