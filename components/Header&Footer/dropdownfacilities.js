import React, { Component } from "react";
import { Link } from "react-router-dom";
 

class DropDownF extends Component {
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
      <div class="dropdown">
        <span>Facilities</span>
        <div class="dropdown-content">
          <p>
            <Link to="/facilities/ccc" className="patch1">
              Computing Infrastructure
            </Link>
          </p>
          <p>
            <Link to="/facilities/building" className="patch1">
              Building Infrastructure
            </Link>
          </p>

          <p>
            <Link to="/facilities/library" className="patch1">
              Central Library
            </Link>
          </p>

          <p>
            <Link to="/facilities/powerandbackup" className="patch1">
              Power & Backup
            </Link>
          </p>
          <p>
            <Link to="/facilities/hostel" className="patch1">
              Residential Facility
            </Link>
          </p>
          <p>
            <Link to="/facilities/healthandfitness" className="patch1">
              Health & Fitness
            </Link>
          </p>
          <p>
            <Link to="/facilities/campusamenities" className="patch1">
              Campus Amenities
            </Link>
          </p>
          <p>
            <Link to="/facilities/transportation" className="patch1">
              Transportation Facilities
            </Link>
          </p>
        </div>
        {/* <div class="dropdown-content">
          <p>
            <Link to="/facilities/core-facilities" className="patch1">
              Core Facilities
            </Link>
          </p>
          <p>
            <Link to="/facilities/ccc" className="patch1">
              Common Computer Center
            </Link>
          </p>

          <p>
            <Link to="/facilities/library" className="patch1">
              Centeral Library
            </Link>
          </p>

          <p>
            <Link to="/facilities/hostel" className="patch1">
              Hostel
            </Link>
          </p>
          <p>
            <Link to="/facilities/sports" className="patch1">
              Sports
            </Link>
          </p>
        </div> */}
      </div>
    );
  }
}
export default DropDownF;
