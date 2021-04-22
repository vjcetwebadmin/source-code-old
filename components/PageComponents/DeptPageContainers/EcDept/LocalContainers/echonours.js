import React, { Component } from "react";
import HeadingOne from "../../../Components/Texts/HeadingOne";
import honours from "../../../Components/honours";
import "./honours.css";
class Echonours extends Component {
  state = {};
  EchonoursHeading = {
    instanceID: "EchonoursHeading",
    title: "honours of Electronics & Communication Engineering"
  };
  Echonours1 = {
    instanceID: "echonours1",
    image: "honours/echonours1.JPEG",
    width: "30%",
    name: "Meera M Nair",
    content: "Secured First Rank in M.Tech VLSI in May 2011"
  };
  Echonours2 = {
    instanceID: "echonours2",
    image: "honours/echonours2.JPEG",
    width: "30%",
    name: "Jayaprasad K V",
    content:
      "Secured First Rank in B.Tech Electronics and Communication Engineering in May 2012"
  };
  Echonours3 = {
    instanceID: "echonours3",
    image: "honours/echonours3.jpg",
    width: "30%",
    name: "Gayathri Anil",
    content:
      "Secured First Rank in B.Tech Electronics and Communication Engineering in May 2012"
  };
  Echonours4 = {
    instanceID: "echonours4",
    image: "honours/echonours4.jpg",
    width: "30%",
    name: "Haripriya P",
    content: "Secured First Rank in M.Tech VLSI in May 2013"
  };
  Echonours5 = {
    instanceID: "echonours5",
    image: "honours/echonours5.jpg",
    width: "30%",
    name: "Seena V P",
    content: "Secured Third Rank in M.Tech VLSI in May 2013"
  };
  Echonours6 = {
    instanceID: "echonours6",
    image: "honours/echonours6.jpg",
    width: "30%",
    name: "Neenu Saju",
    content:
      "Secured First Rank in B.Tech Electronics and Communication Engineering in May 2016"
  };
  Echonours7 = {
    instanceID: "echonours7",
    image: "honours/echonours7.jpg",
    width: "30%",
    name: "Deona Noble",
    content:
      "Secured Third Rank in B.Tech Electronics and Communication Engineering in May 2017"
  };
  Echonours8 = {
    instanceID: "echonours8",
    image: "honours/echonours8.jpg",
    width: "30%",
    name: "Anjana Shaji",
    content:
      "Secured First Rank in B.Tech Electronics and Communication Engineering in May 2018"
  };
  Echonours9 = {
    instanceID: "echonours9",
    image: "honours/echonours9.jpg",
    width: "30%",
    name: "Minni Shaji",
    content:
      "Secured Seventh Rank in B.Tech Electronics and Communication Engineering in May 2018"
  };
  Echonours10 = {
    instanceID: "echonours10",
    image: "honours/echonours10.jpg",
    width: "30%",
    name: "Deepa S",
    content:
      "Secured Tenth Rank in B.Tech Electronics and Communication Engineering in May 2018"
  };
  Echonours11 = {
    instanceID: "echonours11",
    image: "honours/echonours11.jpg",
    width: "30%",
    name: "Minna Shaji",
    content:
      "Secured Tenth Rank in B.Tech Electronics and Communication Engineering in May 2018"
  };
  render() {
    return (
      <div className="honours">
        <HeadingOne data={this.EchonoursHeading} />
        <div className="photos">
          <div>
            <honours data={this.Echonours8} />
          </div>
          <div>
            <honours data={this.Echonours9} />
          </div>
          <div>
            <honours data={this.Echonours10} />
          </div>
          <div>
            <honours data={this.Echonours11} />
          </div>
          <div>
            <honours data={this.Echonours7} />
          </div>
          <div>
            <honours data={this.Echonours6} />
          </div>
          <div>
            <honours data={this.Echonours4} />
          </div>
          <div>
            <honours data={this.Echonours5} />
          </div>
          <div>
            <honours data={this.Echonours2} />
          </div>
          <div>
            <honours data={this.Echonours3} />
          </div>
          <div>
            <honours data={this.Echonours1} />
          </div>
        </div>
      </div>
    );
  }
}

export default Echonours;
