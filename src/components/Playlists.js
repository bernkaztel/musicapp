import React, { Component } from 'react';
import SonglistAdd from './SonglistAdd'
import NewSong from './newSong'

export default class PlayList extends Component {
  constructor(){
    super();
    this.paintSongs = this.paintSongs.bind(this);
  }
  paintSongs(song){
    return <NewSong  key={song} songKey={song} allSongs={this.props.songs}/>
  }
  render() {
    return (
        <div key={this.props.index}>
          <div>
          <h3 className="d-inline" >{this.props.name}</h3>
          <img src={this.props.img} alt="image"/>
        </div>
        <SonglistAdd index={this.props.index}/>
        {Object.keys(this.props.songs).map(this.paintSongs)}
      </div>
    )
  }
}