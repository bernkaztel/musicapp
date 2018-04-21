import React, { Component } from 'react';
import NavBar from './components/navbar';
import CreatePlayList from './components/createPlaylist'
import Playlists from './components/Playlists'
import PaintAllPlaylists from './components/PaintAllPlaylists'
import {database, firebaseAuth} from './firebase/firebaseconfig'

import './App.css';

export default class App extends Component {
  constructor(){
    super();
  }
  
  render() {
    return (
      <div>
        <NavBar/>
        <CreatePlayList/>
        <PaintAllPlaylists/>
      </div>
    );
  }
}


