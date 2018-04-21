import React, { Component } from 'react';
import PlaylistAdd from './PlaylistsAdd'

export default class PlayList extends Component {
  render() {
    return (
        <div key={this.props.index}>
          <div>
          <h3 className="d-inline" >{this.props.name}</h3>
          <img src={this.props.img} alt="image"/>
        </div>
        <PlaylistAdd/>
      </div>
    )
  }
}