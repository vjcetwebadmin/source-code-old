import React, { Component } from "react";
// import ImageOne from "../Components/Images/ImageOne";
import HeadingOne from "../../Components/Texts/HeadingOne";
//import BodyThree from "../../Components/Texts/BodyThree";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import "./Research.css"
import "../../Components/Tables/tableformat.css";

//import Profile from "./csi";

class Activities extends Component {
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
        title: "Innovative Student Projects"
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
                 <ul>
                        
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody1} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody2} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody3} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody4} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchBody5} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody6} />
                            </p>
                        </li>
                        
                        
                    </ul>
                    <div className="bodyContainer">
                    
                    <iframe src="https://vjcet.org/downloads/iedc/IEDC Stud Projects.pdf" width="120%" height="800" title="Campus Map" align="center"></iframe>
                </div>
                   </div>                              
            </div>
           
        );
    }
}

export default Activities;