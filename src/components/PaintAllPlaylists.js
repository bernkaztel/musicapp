import React, { Component } from 'react';
import Playlist from './Playlists'

export default class PaintAllPlayLists extends Component {
    paintPlaylist(){
        return <Playlist></Playlist>
    }
  render() {
    return (
      <div className="song">
       AQUÍ TIENEN QUE PINTAR LAS PLAYLISTS
      </div>
    )
  }
}
