import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne";
import Bodythree from "../../Components/Texts/BodyThree";
class PEO extends Component {
  state = {};
  peoHeading = {
    instanceID: "psoHeading",
    title: "Program Educational Objectives"
  };
  psoHeading = {
    instanceID: "psoHeading",
    title: "Program Specific Outcomes"
  };

  render() {
    const { peo, pso } = this.props.data;
    return (
      <div className="PEO&PSO" id="peo&pso">
        <HeadingOne data={this.peoHeading} />
        {peo.map(i => (<Bodythree data={i} />))}
        <HeadingOne data={this.psoHeading} />
        {pso.map(i => (<Bodythree data={i} />))}
      </div>
    );
  }
}

export default PEO;
