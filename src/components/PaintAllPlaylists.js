import React, { Component } from 'react';
import Playlist from './Playlists'
import {connect} from 'react-redux'; 

 class PaintAllPlayLists extends Component {
    paintPlaylist(){
        return 
    }
  render() {
    return (
      <div className="song">
       AQUÍ TIENEN QUE PINTAR LAS PLAYLISTS
      </div>
    )
  }
}

//Función para recibir propiedades del estado de la tienda
//coursesReducer viene del nombre que se le dio en el rootreductor
function   mapStateToProps(state, ownProps){
  return {
      playlistsFromReducer: state.mainReducer
  } 
}



  
  //Se hace la conección entre el componente y redux
  //Si se le psa mapDispatchToProps ya no existe la función dispatch en el componente
  export default connect(mapStateToProps)(PaintAllPlayLists);