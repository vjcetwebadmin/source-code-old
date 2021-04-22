import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne";
import Bodythree from "../../Components/Texts/BodyThree";
class Library extends Component {
  state = {};
  DeptLibHeading = {
    instanceID: "DeptLibHeading",
    title: "Department Library"
  };

  render() {
    const { DeptLibDescriptionOne } = this.props.data;
    console.log(DeptLibDescriptionOne);
    return (
      <div className="DeptLibrary" id="dept-library">
        <HeadingOne data={this.DeptLibHeading} />
        <Bodythree data={DeptLibDescriptionOne} />
      </div>
    );
  }
}

export default Library;
