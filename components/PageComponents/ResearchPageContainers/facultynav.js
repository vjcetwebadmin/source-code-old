import React, { Component } from "react";
/* import CSFaculty from "./Csfaculty";
import CSStaff from "./Csstaff"; */
class FacultyNav extends Component {
  state = {
    showfaculty: true,
    showstaff: false
  };
  OnClickFac = () => {
    this.setState({
      showfaculty: true,
      showstaff: false
    });
  };
  OnClickStaff = () => {
    this.setState({
      showfaculty: false,
      showstaff: true
    });
  };
  render() {
    return (
      <div class="facultyNav">
        
      </div>
    );
  }
}

export default FacultyNav;
