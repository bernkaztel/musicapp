import React, { Component } from 'react';

export default class PlayList extends Component {
  render() {
    return (
      <div className="song">
        <div>
          <h3 className="d-inline" >PlayList Name</h3>
          <img src="" alt="image"/>
        </div>
          <div>
            <form>
              <div className="form-group">
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Song"/>
                </div>
                <div className="form-group">
                  <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Artist"/>
                </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Album"/>
                </div>
                    <button type="submit">add</button>
            </form>
                </div>
      </div>
    )
  }
}
