import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne";
import Bodythree from "../../Components/Texts/BodyThree";
class PEO extends Component {
  state = {};
  peoHeading = {
    instanceID: "psoHeading",
    title: "Programme Educational Objectives"
  };
  peoListOne = {
    instanceID: "peoListOne",
    title: "Graduate shall have  "
  };
  peoListTwo = {
    instanceID: "peoListTwo",
    title:
      "1.	Graduates shall excel in programming and analytical skills enabling them to be  professionally competent and find solutions to software based problems."
  };
  peoListThree = {
    instanceID: "peoListThree",
    title:
      "2.	Graduates shall have social and ethical values making them socially more acceptable and in being instrumental in uplifting quality of life."
  };
  peoListFour = {
    instanceID: "peoListFour",
    title:
      "3.	Graduates shall have positive attitude towards research and entrepreneurship."
  };
  peoListFive = {
    instanceID: "peoListFive",
    title:
      "4.	Shall have potential to build start-up companies with the foundations, knowledge and experience they acquired from undergraduate education."
  };

  psoHeading = {
    instanceID: "psoHeading",
    title: "Programme Specific Outcomes"
  };
  psoListOne = {
    instanceID: "psoListOne",
    title: "The Graduates shall be able to, "
  };
  psoListTwo = {
    instanceID: "psoListTwo",
    title:
      " 1.  Graduates shall have knowledge on smart technologies in the field of IT and are well equipped with cutting edge technologies and concepts."
  };
  psoListThree = {
    instanceID: "psoListThree",
    title:
      " 2. Graduates shall bring in the advantages of technology into the society, so that it will accelerate the development and betterment of people."
  };

  render() {
    return (
      <div className="PEO&PSO" id="peo&pso">
        <HeadingOne data={this.peoHeading} />
        {/*<Bodythree data={this.peoListOne} />*/}
        <Bodythree data={this.peoListTwo} />
        <Bodythree data={this.peoListThree} />
        <Bodythree data={this.peoListFour} />
        <HeadingOne data={this.psoHeading} />
        {/*<Bodythree data={this.psoListOne} />*/}
        <Bodythree data={this.psoListTwo} />
        <Bodythree data={this.psoListThree} />
      </div>
    );
  }
}

export default PEO;
