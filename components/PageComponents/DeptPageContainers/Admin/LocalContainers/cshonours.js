import React, { Component } from "react";
import HeadingOne from "../../../Components/Texts/HeadingOne";
import honours from "../../../Components/honours";
import "./honours.css";
class Cshonours extends Component {
  state = {};
  CshonoursHeading = {
    instanceID: "CehonoursHeading",
    title: "honours of Computer Science & Engineering"
  };
  Cshonours1 = {
    instanceID: "cshonours1",
    image: "cshonour2.JPEG",
    width: "30%",
    name: "Anu Soosan Baby",
    content:
      "Secured Third Rank in B.Tech Computer Science & Engineering May 2011"
  };
  Cshonours2 = {
    instanceID: "cshonours2",
    image: "cshonour1.JPEG",
    width: "30%",
    name: "Lis Joy",
    content:
      "Secured Second Rank in B.Tech Computer Science & Engineering May 2008"
  };
  Cshonours3 = {
    instanceID: "cshonours3",
    image: "cshonour3.JPEG",
    width: "30%",
    name: "Nimmy George",
    content: "Secured First Rank in M.Tech Computer Science & Engineering May 2011"
  };
  Cshonours4 = {
    instanceID: "cshonours4",
    image: "cshonour4.JPEG",
    width: "30%",
    name: "Kavya Johny",
    content: "Secured Second Rank in M.Tech Computer Science & Engineering May 2011"
  };
  Cshonours5 = {
    instanceID: "cshonours5",
    image: "cshonour5.JPEG",
    width: "30%",
    name: "Sivadas T Nair",
    content: "Secured Third Rank in M.Tech Computer Science & Engineering May 2011"
  };
  Cshonours6 = {
    instanceID: "cshonours6",
    image: "cshonour6.JPEG",
    width: "30%",
    name: "Merin Francis",
    content: "Secured First Rank in M.Tech Computer Science & Engineering May 2014"
  };
  Cshonours7 = {
    instanceID: "cshonours7",
    image: "cshonour7.jpg",
    width: "30%",
    name: "Abhirami Aji",
    content: "Secured Fourth Rank in B.Tech Computer Science & Engineering May 2018"
  };
  Cshonours8 = {
    instanceID: "cshonours8",
    image: "cshonour8.jpg",
    width: "30%",
    name: "Ashna Paul",
    content: "Secured Fifth Rank in B.Tech Computer Science & Engineering May 2018"
  };
  render() {
    return (
      <div className="honours">
        <HeadingOne data={this.CshonoursHeading} />
        <div className="photos">
          <div>
            <honours data={this.Cshonours7} />
          </div>
          <div>
            <honours data={this.Cshonours8} />
          </div>
          <div>
            <honours data={this.Cshonours6} />
          </div>
          <div>
            <honours data={this.Cshonours1} />
          </div>
          <div>
            <honours data={this.Cshonours3} />
          </div>
          <div>
            <honours data={this.Cshonours4} />
          </div>
          <div>
            <honours data={this.Cshonours5} />
          </div>
          <div>
            <honours data={this.Cshonours2} />
          </div>
        </div>
      </div>
    );
  }
}

export default Cshonours;
