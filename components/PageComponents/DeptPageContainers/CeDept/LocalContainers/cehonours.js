import React, { Component } from "react";
import HeadingOne from "../../../Components/Texts/HeadingOne";
import honours from "../../../Components/honours";
class Cehonours extends Component {
  state = {};
  CehonoursHeading = {
    instanceID: "CehonoursHeading",
    title: "honours of Civil Engineering"
  };
  Cehonours1 = {
    instanceID: "cshonours1",
    image: "honours/cehonour1.jpg",
    width: "30%",
    name: "Mariamol Mathew",
    content:
      "Secured Tenth Rank in B.Tech Civil Engineering May 2018"
  };
  render() {
    return (

      <div className="honours">
        <HeadingOne data={this.CehonoursHeading} />
        <div className="photos">
          <div>
            <honours data={this.Cehonours1} />
          </div>
        </div>
      </div>
    );
  }
}

export default Cehonours;
