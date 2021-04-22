import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne";
import Bodythree from "../../Components/Texts/BodyThree";
import BodyOne from "../../Components/Texts/BodyOne";
class Vision extends Component {
  state = {};
  VisionHeading = {
    instanceID: "VisionHeading",
    title: "Vision"
  };

  MissionHeading = {
    instanceID: "MissionHeading",
    title: "Mission"
  };
  render() {
    const { VisionDescription, Missions } = this.props.data;
    return (
      <div>
        <div className="Vision&Mission" id="vision&mission">
          <HeadingOne data={this.VisionHeading} />
          <BodyOne data={VisionDescription} />
        </div>
        <div className="Mission" id="mission">
          <HeadingOne data={this.MissionHeading} />
          {Missions.map(m => (<Bodythree data={m} />))}
        </div>
      </div>
    );
  }
}

export default Vision;
