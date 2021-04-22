import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne";
import Bodythree from "../../Components/Texts/BodyThree";
class Program extends Component {
  state = {};
  ProgramHeading = {
    instanceID: "ProgramHeading",
    title: "Program"
  };
  ProgramDescriptionOne = {
    instanceID: "ProgramDescriptionOne",
    title: "B Tech Mechanical Engineering was started in the year 2002 with an annual intake of 60 students which was expanded to 120 students in the year 2003. In 2011 M tech in industrial engineering and management was started with an annual intake of 18 students. Currently the department offers undergraduate program in Mechanical Engineering with an annual intake of 60 students. In a very short spell the department could emerge with several university Ranks. The department has also signed MOUs with core a companies which helps to develop industry department interactions. The program was accredited by NBA in 2018 for a period of three years."
  };
  

  render() {
    return (
      <div className="Program" id="program">
        <HeadingOne data={this.ProgramHeading} />
        <Bodythree data={this.ProgramDescriptionOne} />
        
      </div>
    );
  }
}

export default Program;
