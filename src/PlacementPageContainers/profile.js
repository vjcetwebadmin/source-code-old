import React, { Component } from "react";
import "./profile.css"
import HeadingOne from "../Components/Texts/HeadingOne";
import Bodythree from "../Components/Texts/BodyThree";
import HeadingTwo from "../Components/Texts/HeadingTwo";
class Profile extends Component {
  state = {};
  ProfileHeading = {
    instanceID: "ProfileHeading",
    title: "About Us"
  };
  ProfileDescriptionOne = {
    instanceID: "ProfileDescriptionOne",
    title:
      "Placement Department is highly dynamic and has been efficient in placing students into profiles of their choice. The Placement Department is headed by the Placement Officer and ably supported by Assistant Placement Officer, Placement Executive Officer, staff and Student Coordinators."
  };
  ProfileDescriptionTwo = {
    instanceID: "ProfileDescriptionTwo",
    title:
      "Over 50 companies visit the campus every year for recruitment. Some of the highest packages are offered by – Microsoft, TCS , Infosys, Experion Technologies, & IBS. The average package is 4 LPA."
  };
  ProfileDescriptionThree = {
    instanceID: "ProfileDescriptionThree",
    title:
      "The Placement Department help arrange internship opportunities to the students. It has secured a software for students to practice and assess aptitude throughout the academic year."
  };
  FacilitiesHeading = {
    instanceID: "FacilitiesHeading",
    title: "OUR FACILITIES"
  };
  Facility1 = {
    instanceID: "Facility1",
    title: "• 300 computers for online test"
  };
  Facility2 = {
    instanceID: "Facility2",
    title: "• Auditorium with a capacity of seating 800 students"
  };
  Facility3 = {
    instanceID: "Facility3",
    title: "• The Facility to conduct written test for 1000 candidates at one sitting"
  };
  Facility5 = {
    instanceID: "Facility5",
    title: "• Wireless Internet across the campus with BSNL & Asianet  100 Mbps leased line"
  };
  Facility6 = {
    instanceID: "Facility6",
    title: "• LCD Projector, Computer and Technicians available for Pre-Placement Talk (PPT)"
  };
  Facility7 = {
    instanceID: "Facility7",
    title: "• Separate rooms for written tests, group discussions and interviews"
  };
  Featuresheading = {
    instanceID: "Featuresheading",
    title: "PLACEMENT FEATURES"
  }
  Features1 = {
    instanceID: "Features1",
    title: "o	Aptitude, Soft skills, Value-added courses and Training: Viswajyothi has in-house skilled training professionals regularly conducting a host of value enhancement training programs for students"
  };
  Features2 = {
    instanceID: "Features2",
    title: "o	Industry interaction: The department organizes Industry interaction with different companies to groom the students for the corporate world"
  };
  
  render() {
    return (
      <div className="Profile" id="profile">
        <HeadingOne data={this.ProfileHeading} />
        <Bodythree data={this.ProfileDescriptionOne} />
        <Bodythree data={this.ProfileDescriptionTwo} />
        <Bodythree data={this.ProfileDescriptionThree} />
        <div className="AboutContent">
          <div>
            <HeadingTwo data={this.FacilitiesHeading} />
            <Bodythree data={this.Facility1} />
            <Bodythree data={this.Facility2} />
            <Bodythree data={this.Facility3} />
            <Bodythree data={this.Facility5} />
            <Bodythree data={this.Facility6} />
            <Bodythree data={this.Facility7} />
          </div>
          <div>
            <HeadingTwo data={this.Featuresheading} />
            <Bodythree data={this.Features1} />
            <Bodythree data={this.Features2} />
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
