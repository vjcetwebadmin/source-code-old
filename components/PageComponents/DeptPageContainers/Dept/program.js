import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne";
import Bodythree from "../../Components/Texts/BodyThree";
class Program extends Component {
  state = {};
  ProgramHeading = {
    instanceID: "ProgramHeading",
    title: "Program"
  };

  render() {
    const program = this.props.data;
    console.log(this.props.data);
    return (
      <div className="Program" id="program">
        <HeadingOne data={this.ProgramHeading} />
        {program.map(i => (<Bodythree data={i} />))}
      </div >
    );
  }
}

export default Program;
