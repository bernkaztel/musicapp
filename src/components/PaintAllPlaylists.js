import React, { Component } from "react";
import Playlist from "./Playlists";
import { connect } from "react-redux";
import { compose } from 'redux'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'

class PaintAllPlayLists extends Component {
  constructor() {
    super();
    this.paintPlaylist = this.paintPlaylist.bind(this);
  }
  paintPlaylist(playlistkey, index) {
    const selectedPlaylist = (this.props.playlistsFromReducer[playlistkey])
    const user = "user-owner"
     return <Playlist key={index} index={playlistkey} name={selectedPlaylist.name} img={selectedPlaylist.url} songs={selectedPlaylist.songs}  />
  }

  render() {
    
    return (
      <div className="song">
        { Object.keys(this.props.playlistsFromReducer || {}).map(this.paintPlaylist)}
      </div>
    );
  }
}

//Función para recibir propiedades del estado de la tienda
//coursesReducer viene del nombre que se le dio en el rootreductor
function mapStateToProps(state, ownProps) {
  return {
    playlistsFromReducer: state.mainReducer
  };
}

//Se hace la conección entre el componente y redux
//Si se le psa mapDispatchToProps ya no existe la función dispatch en el componente

export default compose(
  firebaseConnect([
    'playlists' // { path: '/todos' } // object notation
  ]),
  connect((state) => ({
    playlistsFromReducer: state.firebase.data.playlists,
    // profile: state.firebase.profile // load profile
  }))
)(PaintAllPlayLists)

// export default connect(mapStateToProps)(PaintAllPlayLists);
