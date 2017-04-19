
var FavoriteSongBox = require('../../components/FavoriteSongBox/FavoriteSongBox');
var Footer = require('../../components/Footer/Footer');
var Header = require('../../components/Header/Header');
var InputSearch = require('../../components/InputSearch/InputSearch');
var Subtitle = require('../../components/Subtitle/Subtitle');
var Title = require( '../../components/Title/Title');
var react = require('react');


class Home extends React.Component{

    render() {

        return(
            <div className='content'>

                <div className="header">
                    <Header />
                </div>

                <div className="title">
                    <Title />
                </div>

                 <div className="subTitle">
                    <Subtitle />
                </div>

                <div className="inputSearch">
                    <InputSearch />
                </div>

                  <div className="favoriteSongBox">
                    <favoriteSongBox />
                </div>

            </div>
        )

    }

}

module.exports = Home;

import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component {
  render() {
    return (
      
      <h1> HOME </h1>

    );
  }
}

export default Home;


