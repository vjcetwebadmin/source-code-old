import React, { Component } from "react";
import HeadingOne from "../Components/Texts/HeadingOne"; 
import Bodythree from "../Components/Texts/BodyThree";

class fablab extends Component {
  state = {};
  
  FablabHeading = {
    instanceID: "FablabHeading",
    title:       "Objective"
  };
  FablabContent1 = {
    instanceID: "FablabContent1",
    title:
      "The primary aim of the IQAC is to develop a system for conscious, consistent and catalytic action to improve the academic and administrative performance of the institution."
  };
  FablabContent2 = {
    instanceID: "FablabContent2",
    title:
      "It is a miniature scale workshop offering digital fabrication which enables the clients to craft smart devices for themselves which can be tailored to local or personal needs. The FabLab also becomes a channel for linking to a global community of technologists, researchers and innovators."
  };
  FablabContent3 = {
    instanceID: "FablabContent3",
    title:
      "The Fab Lab established at VJCET mainly comprises of the following inventories."
  };
  render() {
    return (
      <div className="Program" id="program">
        <HeadingOne data={this.FablabHeading} />
        <Bodythree data={this.FablabContent1} />
      </div>
    );
  }
}

export default fablab;
