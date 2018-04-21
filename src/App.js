import React, { Component } from 'react';
import NavBar from './components/navbar';
import CreatePlayList from './components/createPlaylist'
import Playlists from './components/Playlists'
import PaintAllPlaylists from './components/PaintAllPlaylists'

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <CreatePlayList/>
        <PaintAllPlaylists/>
        <Playlists />
      </div>
    );
  }
}


