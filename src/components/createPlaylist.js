import React, { Component } from "react";
//Importamos el creador de acciones
import saveNewListAction from "../actions/saveNewListAction";
import { connect } from "react-redux";
import { Playlist } from "./Playlists";
import { compose } from "redux";
import { withFirebase } from "react-redux-firebase";

class CreatePlaylist extends Component {
  constructor() {
    super();
    this.onListNameChange = this.onListNameChange.bind(this);
    this.onListUrlChange = this.onListUrlChange.bind(this);
    this.pushSample = this.pushSample.bind(this);
    this.state = {
      name: "",
      urlimg: "",
      user: ""
    };
  }

  pushSample(event) {
    event.preventDefault();
    const user = "user-owner"
    const newPlaylist = { name: this.state.name , url: this.state.urlimg , user: this.state.user, songs: {}};
    const firebase = this.props.firebase;
    firebase.push("playlists", newPlaylist);
  }

  //Cada vez que el input cambie, el valor se va a almacenar en el estado.
  onListNameChange(event) {
    //Sacamos una copia del estado.
    const nameStateCopy = event.target.value;
    //Enviamos de vuelta el estado
    this.setState({ name: nameStateCopy });
  }

  //Cada vez que el input cambie, el valor se va a almacenar en el estado.
  onListUrlChange(event) {
    //Sacamos una copia del estado.
    const urlStateCopy = event.target.value;
    //Enviamos de vuelta el estado
    this.setState({ urlimg: urlStateCopy });
  }
  render(){
    return (
    <div className="playlist">
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              onChange={this.onListNameChange}
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              onChange={this.onListUrlChange}
              placeholder="URL Image"
            />
          </div>
          <button type="submit" onClick={this.pushSample}>
            add new playlist
          </button>
        </form>
      </div>)
  }
}

export default withFirebase(CreatePlaylist);
