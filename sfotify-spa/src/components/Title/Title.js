import React, { Component } from 'react';

class Title extends Component {
  render() {
    const title = this.props.texts;
    return (
      <div>
        <h1> {title} </h1>
      </div>
    );
  }
}

export default Title;