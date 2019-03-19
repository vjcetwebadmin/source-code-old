import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import "../Images/ImageOne";
import ImageOne from "../Images/ImageOne";
import Line from "../Lines/Line";
import HeadingFive from "../Texts/HeadingFive";
import AnchorLink from "../Texts/AnchorLink";
import DropDownD from "./dropdownDepartment";
import DropDownC from "./dropdownCampus";
import DropDownF from "./dropdownfacilities";
import DropDownA from "./dropdownAcademics";
import DropDownAb from "./dropdownAbout";
import DropDownL from "./dropdownLogin";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends Component {
  VJCLogo = {
    instanceID: "HeaderVJCLogo",
    image: "VJCLogo.png",
    width: "180px"
  };

  Hamburger = {
    instanceID: "HeaderHamburger",
    image: "hamburger.png",
    width: "20px"
  };

  NBALogo = {
    instanceID: "HeaderNBALogo",
    image: "nba.png",
    width: "30px"
  };

  HeaderLineOne = {
    instanceID: "HeaderLineOne"
  };

  HeaderLineTwo = {
    instanceID: "HeaderLineTwo"
  };

  HeaderLineThree = {
    instanceID: "HeaderLineThree"
  };

  HeaderVJCCode = {
    instanceID: "HeaderVJCCode",
    title: "College Code : VJC"
  };

  AdmissionsOpen = {
    instanceID: "AdmissionsOpen",
    image: "OPEN.svg",
    width: "40px"
  };

  Link1 = {
    instanceID: "HeaderLink1",
    title: "About Us",
    link: "About"
  };

  Link2 = {
    instanceID: "HeaderLink2",
    title: "Contact Us",
    link: ""
  };

  Link3 = {
    instanceID: "HeaderLink3",
    title: "Login",
    link: "https://portal.vjcet.ac.in/"
  };

  Link4 = {
    instanceID: "HeaderLink4",
    title: "Admissions",
    link: "http://admission.vjcet.ac.in/"
  };

  Link5 = {
    instanceID: "HeaderLink5",
    title: "Departments",
    link: "departments"
  };

  Link6 = {
    instanceID: "HeaderLink6",
    title: "Campus Life",
    link: "campus-life"
  };

  Link7 = {
    instanceID: "HeaderLink7",
    title: "Facilities",
    link: "Facilities"
  };

  Link8 = {
    instanceID: "HeaderLink8",
    title: "Academics",
    link: ""
  };

  Link9 = {
    instanceID: "HeaderLink9",
    title: "Placements",
    link: ""
  };

  Link10 = {
    instanceID: "HeaderLink10",
    title: "R&D",
    link: ""
  };

  render() {
    const { instanceID } = this.props.data;

    return (
      <div className="Header" id={instanceID}>
        <Link to={"/"}>
          <ImageOne data={this.VJCLogo} />
        </Link>
        <ImageOne
          data={this.Hamburger}
          onClickAction={this.props.openMenuFunction}
        />
        <ImageOne data={this.NBALogo} />
        <Line data={this.HeaderLineOne} />
        <Line data={this.HeaderLineTwo} />
        <HeadingFive data={this.HeaderVJCCode} />

        <div className="HeaderLinkTabOne" id="HeaderLinkTabOne">
          {" "}
          {/* <AnchorLink data={this.Link1} /> */}
          <div className="HeaderLinkTabOne" id="HeaderLinkOne">
            <DropDownL />
            <AnchorLink data={this.Link2} />
            {/* <AnchorLink data={this.Link3} /> */}
          </div>
        </div>

        <div className="HeaderLinkTabTwo" id="HeaderLinkTabTwo">
          {/* <AnchorLink data={this.Link5} /> */}
          <div className="HeaderLinkTabAdmissionsOpen">
            <ImageOne data={this.AdmissionsOpen} />
            <AnchorLink data={this.Link4} />
          </div>
          <div className="HeaderLinkTabTwoGrouped">
            <DropDownAb />
            <DropDownD />
            <DropDownC />
            <DropDownF />
            <DropDownA />
            {/* <AnchorLink data={this.Link6} /> */}
            {/* <AnchorLink data={this.Link7} /> */}
            {/* <AnchorLink data={this.Link8} /> */}
            <AnchorLink data={this.Link9} />
            <AnchorLink data={this.Link10} />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
