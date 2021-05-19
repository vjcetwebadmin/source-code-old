import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne";
import Bodythree from "../../Components/Texts/BodyThree";
class PEO extends Component {
  state = {};
  peoHeading = {
    instanceID: "psoHeading",
    title: "Programme Educational Objectives  (PEOs)"
  };
  peoListOne = {
    instanceID: "peoListOne",
    title: "Our Graduates shall be  "
  };
  peoListTwo = {
    instanceID: "peoListTwo",
    title:
      "PEO1. Suitably employed in allied industries/services with professional competency and knowledge of modern tools."
  };
  peoListThree = {
    instanceID: "peoListThree",
    title:
      "PEO2. Capable of developing economically viable, technically feasible eco friendly electronic systems."
  };
  peoListFour = {
    instanceID: "peoListFour",
    title:
      "PEO3. Capable to pursue higher studies/research in the field of interest."
  };

  psoHeading = {
    instanceID: "psoHeading",
    title: "Programme Specific Outcomes (PSOs)"
  };
  psoListOne = {
    instanceID: "psoListOne",
    title: "Our Students shall be able to"
  };
  psoListTwo = {
    instanceID: "psoListTwo",
    title:
      "PSO1. Analyze and modify electronic products which will find applications in the field of communication and automation."
  };
  psoListThree = {
    instanceID: "psoListThree",
    title:
      "PSO2. Apply the concepts of signal processing and develop algorithms to solve real-world electronics and communication engineering problems."
  };
  psoListFour = {
    instanceID: "psoListFour",
    title: "PSO3. Design and manage cost effective low power electronic systems to address global challenges with a strong social commitment and ethical values."
  };
  render() {
    return (
      <div className="PEO&PSO" id="peo&pso">
        <HeadingOne data={this.peoHeading} />
        <Bodythree data={this.peoListOne} />
        <Bodythree data={this.peoListTwo} />
        <Bodythree data={this.peoListThree} />
        <Bodythree data={this.peoListFour} />
        <HeadingOne data={this.psoHeading} />
        <Bodythree data={this.psoListOne} />
        <Bodythree data={this.psoListTwo} />
        <Bodythree data={this.psoListThree} />
        <Bodythree data={this.psoListFour} />
      </div>
    );
  }
}

export default PEO;
