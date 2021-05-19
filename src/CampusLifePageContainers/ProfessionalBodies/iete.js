import React, { Component } from "react";
/* import HeadingOne from "../../Components/Texts/HeadingOne"; */
import BodyOneJustified from "../../Components/Texts/BodyOneJustified"

import ImageTwo from "../../Components/Images/imageTwo";
import HeadingThree from "../../Components/Texts/HeadingThree";

import "../../Components/Tables/tableformat.css";
import Header from "../../Components/Header&Footer/Header";
class iete extends Component {
  state = {};
 
  IEEEImage = {
    instanceID: "IEEEImage",
    image: "ProfessionalBodies/iete.jpg",
    width: "15%",    
    
}
GalleryImage = {
  instanceID: "GalleryImage",
  image: "Icons/ImageGallery.gif",
  width: "10%"
}
InchargesHeading = {
  instanceID: "InchargesHeading",
  title: "Office-Bearers"
};
ActivitiesHeading = {
  instanceID: "ActivitiesHeading",
  title: "Student Branch Events"
};
  Features1 = {
    instanceID: "Features1",
    title: "The Institution of Electronics and Telecommunication Engineers (IETE) is India's leading recognized professional society devoted to the advancement of science, technology, electronics, telecommunication and information technology.   IETE Students Forum (ISF) of our college is organizing various programs like workshops, seminars, technical talks and other activities to improve the technical knowledge of students. All IETE members actively participated in different levels of events conducted by our college and other colleges also. "
  };

  render() {
    return (
      <div className="Profile" id="profile">
        
      {/*  <p align="right"><a href="https://vjcet.org/downloads/Gallery/Drishya.html" target="_blank" rel="noopener noreferrer"><ImageTwo data={this.Imagegallerydata} /></a></p> */}
       {/* <HeadingOne data={this.ProfileHeading} />  */}
      {/*  <p align="right"><a href="https://vjcet.org/downloads/Gallery/Drishya.html" target="_blank" rel="noopener noreferrer"><ImageTwo data={this.GalleryImage} /></a></p> */}
      <p align="center"><ImageTwo data={this.IEEEImage} /></p>
        <div className="bodyContainer">
          <p><BodyOneJustified data={this.Features1} /></p>
          <HeadingThree data={this.InchargesHeading} />  
          <table id="tableformat">
                            <tr><th>FACULTY IN CHARGE</th></tr>
                            <tr><td>Mr. Naveen Jacob, Associate Professor, ECE</td></tr>
                            <tr><td>Mrs. Niji Mathews, Assistant Professor, ECE</td></tr>
                            
                            </table>
                            <HeadingThree data={this.ActivitiesHeading} /> 
                            <table id="tableformat">
                           
                            <tr><th>#</th><th>Event</th><th>Date</th></tr>
 
                            <tr><td>1</td><td>A workshop on introduction to ARDUINO Board</td><td>08/09/2018</td></tr>
                            <tr><td>2</td><td>FDP on Digital Fabrication – Fab lab</td><td>18/10/18- 21/10/18</td></tr> 
                            <tr><td>3</td><td>A workshop on’Digital Fabrication – Mini Fab lab</td><td>5/11/18-6/11/18</td></tr>
                            <tr><td>4</td><td>4 ISF members attended IETE foundation day celebration -2018 </td><td>10/11/18</td></tr>
                            <tr><td>5</td><td>Technical talk on ‘Artificial Intelligence’by Mr. Ramesh C R, AP, ECE dept., Vidya Academy of Science & Technology, Trissur</td><td>22/2/2019</td></tr>
                            <tr><td>6</td><td>A workshop on 'PCB Designing'</td><td>28/09/2019</td></tr> 
                            <tr><td>7</td><td>Technical talk on 'Blockchain Technology' by Mr. Prince Kurian, AP, IT dept.of VJCET</td><td>07/11/2019</td></tr> 
                            <tr><td>8</td><td>Webinar on 'Electronic Industry-Post Covid' by Mr. K Narayanan Ranjith. Hardware Architect, Robert Bosch</td><td>18/10/18- 21/10/18</td></tr> 
                            <tr><td>9</td><td>Workshop on Introduction to Python Programming for S5 ECE students</td><td>17/10/2010- 19/10/2010</td></tr> 
                            <tr><td>10</td><td>6 ISF members attended IETE foundation day celebration-2019.</td><td>2/11/2020</td></tr> 
                            <tr><td>11</td><td>International Webinar on 'Converting Challenges into Oppurtunities' by Mr. George Tharakan, Senior Delivery Director, NTT DATA </td><td>5/12/2020</td></tr> 
                            </table>

                            
        </div>
      </div>
    );
  }
}

export default iete;
