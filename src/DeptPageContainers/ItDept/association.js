import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne";
import Bodythree from "../../Components/Texts/BodyThree";
import HeadingFour from "../../Components/Texts/HeadingFour";
class Library extends Component {
  state = {};
  DeptAssociationHeadingOne = {
    instanceID: "DeptAssociationHeadingOne",
    title: "Association"
  };
  DeptAssociationHeadingTwo = {
    instanceID: "DeptAssociationHeadingTwo",
    title: "ORBIT"
  };
  DeptAssociationDescriptionOne = {
    instanceID: "DeptAssociationDescriptionOne",
    title:
      "Extracurricular activities can offer youth a safe and supervised haven and a chance to learn new skills such as conflict resolution, successful career preparation and improve grades."
  };
  DeptAssociationDescriptionTwo = {
    instanceID: "DeptAssociationDescriptionTwo",
    title:
      "‘ORBIT,’ the association of Information Technology Department organizes various activities which provides a platform for the young to showcase their talents."
  };

  DeptAssociationDescriptionThree = {
    instanceID: "DeptAssociationDescriptionThree",
    title:
      "Students are actively involved in the association activities including association inauguration, organizing technical talks and publishing department newsletters every year to promote the spirit of social harmony."
  };
 /* DeptAssociationDescriptionFour = {
    instanceID: "DeptAssociationDescriptionFour",
    title:
      "THE COMPUTER SCIENCE ASSOCIATION: 'VOICE' The Vision Of Imperial Computer Engineers lives with its ardent passion to be the fulcrum for change and development in the campus. Mr. Sajeev K.M, DySP, Marine Enforcement &amp; Vigilance, Trivandrum, inaugurated our association on 16 th   August 2017."
  };*/
  DeptAssociationDescriptionFive = {
    instanceID: "DeptAssociationDescriptionFive",
    title:
      "Association Officials"
  };
  DeptAssociationDescriptionSix = {
    instanceID: "DeptAssociationDescriptionSix",
    title:
      "President                                 -		Ms. Anju SusanGeorge, HOD, IT"
  };
  DeptAssociationDescriptionSeven = {
    instanceID: "DeptAssociationDescriptionFSeven",
    title:
      "Secretary                                 -		Mr. Santhanu P.Mohan, Asst Professor, IT"
  };
  DeptAssociationDescriptionEight = {
    instanceID: "DeptAssociationDescriptionEight",
    title:
      "Student Coordinator                - 		Mr. Mrunalsen P S, S8, IT"
  };
  render() {
    return (
      <div className="DeptAssociation" id="dept-association">
        <HeadingOne data={this.DeptAssociationHeadingOne} />        
        <HeadingFour data={this.DeptAssociationHeadingTwo} />
        <Bodythree data={this.DeptAssociationDescriptionOne} />
        <Bodythree data={this.DeptAssociationDescriptionTwo} />
        <Bodythree data={this.DeptAssociationDescriptionThree} />        
        <Bodythree data={this.DeptAssociationDescriptionFive} />
        <Bodythree data={this.DeptAssociationDescriptionSix} />
        <Bodythree data={this.DeptAssociationDescriptionSeven} />

      </div>
    );
  }
}

export default Library;
