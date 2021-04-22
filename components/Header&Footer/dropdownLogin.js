import React, { Component } from "react";
 

class DropDownL extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  }

  render() {
    return (
      <div className="dropdown">
        <span className="fillbutton">&nbsp;&nbsp;&nbsp;&nbsp;Portal&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <div className="dropdown-content">
          <p>
            <a href="https://portal.vjcet.ac.in" target="_blank" className="patch1" rel="noopener noreferrer">
              VJCET login
            </a>
          </p>
          
          <p>
            <a href="https://alumni.vjcet.ac.in/" target="_blank" className="patch1" rel="noopener noreferrer">
              Alumini's login
            </a>
          </p>
          
          <p>
            <a href="http://moodle.vjcet.ac.in" className="patch1" target="_blank" rel="noopener noreferrer">
              Moodle
            </a>
          </p>

          <p>
            <a href="https://vjcet.org/#/newsfive" className="patch1" target="_self" rel="noopener noreferrer">
              Fee Payment
            </a>
          </p>
        </div>
      </div>
    );
  }
}
export default DropDownL;
