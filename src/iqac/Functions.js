import React, { Component } from "react";
// import ImageOne from "../Components/Images/ImageOne";
import HeadingOne from "../Components/Texts/HeadingOne";
import BodyThree from "../Components/Texts/BodyThree";
import BodyOneJustified from "../Components/Texts/BodyOneJustified";
import "./Research.css"

//import Profile from "./csi";

class Profile extends Component {
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
        title: "Functions"
    }
    ReserchBody1 = {
        instanceID: "ReserchBody1",
        title: "Some of the functions of the IQAC are"
    }
    ReserchBody2 = {
        instanceID: "ReserchBody2",
        title: "Development and application of quality benchmarks /parameters for various academic and administrative activities of the Institution."
    }
    ReserchBody3 = {
      instanceID: "ReserchBody3",
      title: "Dissemination of information on various quality parameters of higher education."
  }
  ReserchBody4 = {
    instanceID: "ReserchBody4",
    title: "Organization of workshops, seminars on quality related themes and promotion of quality circles."
}
ReserchBody5 = {
  instanceID: "ReserchBody5",
  title: "Documentation of the various program activities leading to quality improvement."
}
ReserchBody6 = {
  instanceID: "ReserchBody6",
  title: "Preparation of the Annual Quality Assurance Report (AQAR) to be submitted to NAAC based on the quality parameters."
}
  
    render() {
        return (
            <div className="HomePage">
                
                <HeadingOne data={this.ResearchHeading}></HeadingOne>
                {/* <ImageOne data={this.ResearchImg}></ImageOne> */}
                <BodyThree data={this.ReserchBody1} /><br />
                
                 <div className="inner-para">
                 <ul>
                        
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
              </div> 
           </div>
        );
    }
}

export default Profile;