import React, { Component } from "react";
import "./faculty.css";
import FacultyData from "../../Components/FacultyData";
class Faculty extends Component {
  state = {};

  render() {
    const faculty = this.props.data;
    return (
      <div className="faculty">
        <div className="facultyContent">
          {faculty.map(f => (
          <div>
            <FacultyData data={f} />
          </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Faculty;
