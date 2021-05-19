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
        title: "Strategies"
    }
    ReserchBody1 = {
        instanceID: "ReserchBody1",
        title: "IQAC shall evolve mechanisms and procedures for:"
    }
    ReserchBody2 = {
        instanceID: "ReserchBody2",
        title: "Ensuring timely, efficient and progressive performance of academic, administrative and financial tasks."
    }
    ReserchBody3 = {
      instanceID: "ReserchBody3",
      title: "Optimization and integration of modem methods of teaching learning and evaluation."
  }
  ReserchBody4 = {
    instanceID: "ReserchBody4",
    title: "Ensuring the adequacy maintenance and functioning of the support structure."
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
                        
                                               
                    </ul>
                   </div>              
              </div>
        );
    }
}

export default Profile;