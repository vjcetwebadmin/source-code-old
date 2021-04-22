import React, { Component } from "react";
import HeadingOne from "../../../Components/Texts/HeadingOne";

// import ImageOne from "../Components/Images/ImageOne";


//import BodyOneJustified from "../../../Components/Texts/BodyOneJustified";


import "./honours.css";
class Cshonours extends Component {
  state = {};
  state = { showMenu: false };
    openMenu = () => {
        console.log("opening Menu");
        this.setState({ showMenu: true });
    };
    closeMenu = () => {
        this.setState({ showMenu: false });
    };

    HomePageHeader = {
        instanceID: "HomePageHeader"
    };
    HomePageFooter = {
        instanceID: "HomePageFooter"
    };
    HomePageVisionSection = {
        instanceID: "HomePageVisionSection"
    };
    HomePageFacilitiesSection = {
        instanceID: "HomePageFacilitiesSection"
    };
    // ResearchImg = {
    //     instanceID: "ResearchImg",
    //     image: "cover2-1.jpg",
    //     width: "93%"
    // }
    ResearchHeading = {
        instanceID: "ResearchHeading",
        title: "Mentoring Scheme  for  Student Entrepreneurs"
    }
    ReserchBody1 = {
        instanceID: "ReserchBody1",
        title: "SAARIS –Automated Attendance Registering S"
    }
    ReserchBody2 = {
        instanceID: "ReserchBody2",
        title: "Stroke Rehab and Exercising Glove"
    }
    ReserchBody3 = {
      instanceID: "ReserchBody3",
      title: "Nut X - Portable Nutmeg Separator "
  }
  ReserchBody4 = {
    instanceID: "ReserchBody4",
    title: "AGROBUY APP Your Own Market"
}
ReserchBody5 = {
  instanceID: "ReserchBody5",
  title: "Beyond : Connect And Learn"
}
ReserchBody6 = {
  instanceID: "ReserchBody6",
  title: "Amphibious Structure for Lifestocks"
}



    
    render() {
        return (
            <div className="HomePage">
                
                <HeadingOne data={this.ResearchHeading}></HeadingOne>
                {/* <ImageOne data={this.ResearchImg}></ImageOne> */}
               
                
                 <div className="inner-para">
                
                    <div className="bodyContainer">
                    
                    <iframe src="https://vjcet.org/downloads/iedc/IEDC Menoring.pdf" width="120%" height="800" title="Campus Map" align="center"></iframe>
                </div>
                   </div>                              
            </div>
           
        );
    }
}

export default Cshonours;
