import React, { Component } from "react";
/* import HeadingOne from "../../Components/Texts/HeadingOne"; */
import Bodythree from "../../Components/Texts/BodyThree";
import ImageTwo from "../../Components/Images/imageTwo";
class Program extends Component {
  state = {};
  
  SaeindiaDescriptionOne = {
    instanceID: "SaeindiaDescriptionOne",
    title:
      "The Society of Automotive Engineers (SAE) is an international organization, which   is the leader in connecting and educating mobility professionals to enable safe, clean, and accessible mobility solutions. SAEINDIA is a subsidiary of SAE International, which promotes knowledge dissemination & skill development of mobility professionals, students, and faculty in the country through its various value added programs. Student chapters are an inevitable part of SAEINDIA. It has over 50,000 student members in more than 480 collegiate clubs located all over India. Collegiate clubs provide practical exposure to a professional engineering society as well as focal point for campus engineering programs and projects. The SAEINDIA Collegiate club started functioning in our college in 2017 with over 80 student members along with two faculty advisors in the department of Mechanical engineering. Since its inception, the students of the collegiate club are actively participating in various activities conducted by SAEINDIA. Last year 5 students were participated in the Tier 3 events of the SAEINDIA student convention held at Chennai. Also, a team of seven students went for Aero Design Challenge competition in which the students have to make their on aeroplane according to the criterion laid down by SAEINDIA. This year, the collegiate club have conducted a Student Knowledge Improvement Program (SKIP) under SAEINDIA Southern Section which was first of its kind conducted inside Kerala. Two renowned industrial experts have taken the session and 29 students participated from within and outside the college and the program was a grand success."
  };
  SaeIImage = {
    instanceID: "SaeIImage",
    image: "ProfessionalBodies/SAEINDIA.jpg",
    width: "35%"
}

  render() {
    return (
      <div className="Program" id="program">
          <p align="center"><ImageTwo data={this.SaeIImage} /></p>
        <Bodythree data={this.SaeindiaDescriptionOne} />
        
      </div>
    );
  }
}

export default Program;
