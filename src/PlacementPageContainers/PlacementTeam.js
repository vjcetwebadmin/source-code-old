import React, { Component } from "react";
import FacultyData from "../Components/FacultyData";
import BodyOne from "../Components/Texts/BodyOne";
import HeadingOne from "../Components/Texts/HeadingOne";
class Faculty extends Component {
  state = {};
  
  Cefaculty2 = {
    instanceID: "Cefaculty2",
    image: "Allstaffphoto/PTC/C Mavin.JPG",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=SHFAC119" target="_blank" rel="noopener noreferrer">Mr. C. Mavin</a>,
    content: "Assistant Professor & Placement Officer"
  };  
  Cefaculty11 = {
    instanceID: "Cefaculty11",
    image: "Allstaffphoto/ADM/ADM/arunbobyt.JPEG",
    width: "50%",
    name: <a href=" https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=ADSTF110" target="_blank" rel="noopener noreferrer">Mr. Arun Bobby T</a>,
    content: "Assistant Placement Officer"
  };
  Cefaculty5 = {
    instanceID: "Cefaculty5",
    image: "Allstaffphoto/PTC/IMG_7641.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=SHSTF105" target="_blank" rel="noopener noreferrer">Mr. Sanoj Saju</a>,
    content: "Assistant Placement Officer"
  };
  Cefaculty6 = {
    instanceID: "Cefaculty6",
    image: "Allstaffphoto/SH/FAC/shfac136.jpg",
    width: "50%",
    name:  <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=SHFAC136" target="_blank" rel="noopener noreferrer">Mr. Saksy Joy</a>,
    content: "IQAC Placement Co-ordinator"
  };
  ContactHeading = {
    instanceID: "ContactHeading",
    title: "Contact"
  };
  ContactListOne = {
    instanceID: "ContactListOne",
    title: "Mr. C.Mavin "
  };
  ContactListTwo = {
    instanceID: "ContactListTwo",
    title: "Asst. Professor & Placement Officer "
  };
  ContactListThree = {
    instanceID: "ContactListThree",
    title: "Cell: +919446437330 "
  };
  ContactListFour = {
    instanceID: "ContactListFour",
    title: "Phone: 0485 2262551 "
  };
  ContactListFive = {
    instanceID: "ContactListFive",
    title: "Email: placement@vjcet.org"
  };
  render() {
    return (
      <div className="faculty">
        <div className="facultyContent">          
          <div>
            <FacultyData data={this.Cefaculty2} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty11} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty5} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty6} />
          </div>
        </div>
        <div className="Contact" id="contact">
          <HeadingOne data={this.ContactHeading} />
          <BodyOne data={this.ContactListOne} />
          <BodyOne data={this.ContactListTwo} />
          <BodyOne data={this.ContactListThree} />
          <BodyOne data={this.ContactListFour} />
          <BodyOne data={this.ContactListFive} />
        </div>
      </div>
      
    );
  }
}

export default Faculty;
