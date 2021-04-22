import React, { Component } from "react";
import "./faculty.css";
import FacultyData from "../../Components/FacultyData";
class Staff extends Component {
  state = {};
  render() {
    const staff = this.props.data;
    return (
      <div className="faculty">
        <div className="facultyContent">
          {staff.map(s => (
            <div>
              <FacultyData data={s} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Staff;
