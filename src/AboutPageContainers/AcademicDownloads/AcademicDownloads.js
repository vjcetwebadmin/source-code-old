import React, { Component } from "react";
import "./ResourcesGroup.css";
import ResourcesList from "./LocalContainers/ResourcesList";
import HeadingOne from "../../Components/Texts/HeadingOne";

class ResourcesGroup extends Component {
  ResourcesGroupTitle = {
    instanceID: "ResourcesGroupTitle",
    title: "Curriculum Plan"
  };
  SyllabusTitle = {
    instanceID: "SyllabusTitle",
    title: "Syllabus"
  };


  ResourceListSeven = {
    instanceID: "ResourceListSeven",
    listID: "Three",
    title: "First Year",
    icon: "Icons/firstyearsyllabuslogo.svg",
    /*filePath: "https://vjcetwebadmin.github.io/downloads/firstyearsyllabus.zip"*/
    filePath: "ftp://202.88.251.252/Website/downloads/firstyearsyllabus.zip"
  };

  ResourceListEight = {
    instanceID: "ResourceListEight",
    listID: "Four",
    title: "Civil Engineering",
    icon: "Icons/civilsyllabuslogo.png",
    filePath: "ftp://202.88.251.252/Website/downloads/cesyllabus.zip"

  };

  ResourceListThree = {
    instanceID: "ResourceListThree",
    listID: "Five",
    title: "Computer Science & Engineering",
    icon: "Icons/csesyllabuslogo.svg",
    filePath: "ftp://202.88.251.252/Website/downloads/csesyllabus.zip"

  };

  ResourceListFour = {
    instanceID: "ResourceListFour",
    listID: "Six",
    title: "Electronics & Communications Engineering",
    icon: "Icons/ecesyllabuslogo.svg",
    filePath: "ftp://202.88.251.252/Website/downloads/ecesyllabus.zip"
  };

  ResourceListFive = {
    instanceID: "ResourceListFive",
    listID: "Seven",
    title: "Electrical & Electronics Engineering",
    icon: "Icons/eeesyllabuslogo.svg",
    filePath: "ftp://202.88.251.252/Website/downloads/eeesyllabus.zip"
  };

  ResourceListSix = {
    instanceID: "ResourceListSix",
    listID: "Eight",
    title: "Information Technology",
    icon: "Icons/itsyllabuslogo.png",
    filePath: "ftp://202.88.251.252/Website/downloads/itsyllabus.zip"

  };
  ResourceListNine = {
    instanceID: "ResourceListNine",
    listID: "Nine",
    title: "Mechanical Engineering",
    icon: "Icons/mesyllabuslogo.svg",
    filePath: "ftp://202.88.251.252/Website/downloads/mesyllabus.zip"

  };
  ResourceListOne = {
    instanceID: "ResourceListOne",
    listID: "One",
    title: "Curriculum Plan",
    icon: "Icons/calender.svg",
    filePath: "https://vjcetwebadmin.github.io/downloads/Academic_Calander_odd_20.pdf"

  };
  ResourceListTwo = {
    instanceID: "ResourceListTwo",
    listID: "Two",
    title: "Semester Plan",
    icon: "Icons/calendar.png",
    filePath: "https://vjcetwebadmin.github.io/downloads/Semester_Plan2019even.pdf"

  };

  render() {
    return (
      <div className="ResourcesGroup">
        <HeadingOne data={this.ResourcesGroupTitle} />
        <div className="ResourcesContainer" id="AboutPageResourcesContainer">
          <ResourcesList data={this.ResourceListOne} />
          <ResourcesList data={this.ResourceListTwo} />
        </div>        
          <HeadingOne data={this.SyllabusTitle} />
          <div className="ResourcesContainer" id="AboutPageResourcesContainer">
          
          <ResourcesList data={this.ResourceListThree} />
          <ResourcesList data={this.ResourceListFour} />
          <ResourcesList data={this.ResourceListFive} />
          <ResourcesList data={this.ResourceListSix} />
          <ResourcesList data={this.ResourceListSeven} />
          <ResourcesList data={this.ResourceListEight} />
          <ResourcesList data={this.ResourceListNine} />
          
        </div>
      </div>
    );
  }
}

export default ResourcesGroup;
