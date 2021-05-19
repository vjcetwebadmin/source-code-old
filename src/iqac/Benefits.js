import React, { Component } from "react";
// import ImageOne from "../Components/Images/ImageOne";
import HeadingOne from "../Components/Texts/HeadingOne";
import BodyThree from "../Components/Texts/BodyThree";
import BodyOneJustified from "../Components/Texts/BodyOneJustified";
import "./Research.css"

//import Profile from "./csi";

class Benefits extends Component {
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
        title: "Benefits"
    }
    ReserchBody1 = {
        instanceID: "ReserchBody1",
        title: "IQAC will facilitate /contribute"
    }
    ReserchBody2 = {
        instanceID: "ReserchBody2",
        title: "To heighten the level of clarity and focus in Institutional functioning towards quality enhancement and facilitate internalization of the quality culture."
    }
    ReserchBody3 = {
      instanceID: "ReserchBody3",
      title: "To the enhancement and integration among the various activities of the institution and institutionalize many good practices."
  }
  ReserchBody4 = {
    instanceID: "ReserchBody4",
    title: "To provide a sound basis for decision making to Improve Institutional functioning."
}
ReserchBody5 = {
  instanceID: "ReserchBody5",
  title: "To act as a change agent In the Institution."
}
ReserchBody6 = {
  instanceID: "ReserchBody6",
  title: "To ensure better internal communication."
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

export default Benefits;