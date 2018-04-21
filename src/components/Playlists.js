import React, { Component } from 'react';
import PlaylistAdd from './PlaylistsAdd'

export default class PlayList extends Component {
  render() {
    return (
        <div>
          <div>
          <h3 className="d-inline" >PlayList Name</h3>
          <img src="" alt="image"/>
        </div>
        <PlaylistAdd/>
      </div>
    )
  }
}