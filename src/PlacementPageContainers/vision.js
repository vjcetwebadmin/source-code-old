import React, { Component } from "react";
import "./vision.css";
import "./VisionSection.css";
import HeadingOne from "../Components/Texts/HeadingOne";
import Bodythree from "../Components/Texts/BodyThree";
import BodyOne from "../Components/Texts/BodyOne";
class Vision extends Component {
  state = {};
  VisionHeading = {
    instanceID: "VisionHeading",
    title: "Vision"
  };
  VisionDescription = {
    instanceID: "VisionDescription",
    title:
      "Training and preparing engineers globally competent and employable."
  };
  MissionHeading = {
    instanceID: "MissionHeading",
    title: "Mission"
  };
  MissionListOne = {
    instanceID: "MissionListOne",
    title:
      "1. To provide the best training opportunity as to enhance technical skills, soft skills and thereby employability"
  };
  MissionListTwo = {
    instanceID: "MissionListTwo",
    title:
      "2. To create awareness among students about the industrial/corporate scenario through invited talks/workshops by experts and alumni."
  };
  MissionListThree = {
    instanceID: "MissionListThree",
    title:
      "3. Arrange and organize placement opportunities, participate /conduct campus drives and pool drives."
  };  
  render() {
    return (
      <div className="VisionSection">
        <div className="VisionSectionB">
          <HeadingOne data={this.VisionHeading} />
          <BodyOne data={this.VisionDescription} />
        </div>
        <div className="VisionSectionC">
          <HeadingOne data={this.MissionHeading} />
          <Bodythree data={this.MissionListOne} />
          <Bodythree data={this.MissionListTwo} />
          <Bodythree data={this.MissionListThree} />
        </div>        
      </div>
    );
  }
}

export default Vision;
