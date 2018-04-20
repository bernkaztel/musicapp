import React , { Component }  from "react";


 class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
          Navbar
        
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              
                Home
              
            </li>
          </ul>
        </div>
      </nav>
      </div>
    );
  }
}


export default NavBar;
