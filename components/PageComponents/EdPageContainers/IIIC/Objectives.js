import React, { Component } from "react";

// import ImageOne from "../Components/Images/ImageOne";
import HeadingOne from "../../Components/Texts/HeadingOne";

import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import "./Research.css"

import "../../Components/Tables/tableformat.css";

//import Profile from "./csi";

class Objectives extends Component {
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
        title: "Objectives"
    }
    ReserchBody1 = {
        instanceID: "ReserchBody1",
        title: "To evolve educational programmes which are consistent with the broad requirements of the industry and which can give rise to engineering personnel capable of coping-up with the accelerating pace of the technological development "
    }
    ReserchBody2 = {
        instanceID: "ReserchBody2",
        title: "To learn the industry practices and to create innovations and experiential learning environment for students"
    }
    ReserchBody3 = {
      instanceID: "ReserchBody3",
      title: "To strengthen Industry partnership for the students so as to expedite the process of beginning technology business Incubator for start ups"
  }
  ReserchBody4 = {
    instanceID: "ReserchBody4",
    title: "Establish contacts with international agencies, industries and research organizations and follow up for arranging joint interaction programmes. "
}
ReserchBody5 = {
  instanceID: "ReserchBody5",
  title: "Identify industries for internship, training and placement for students in the emerging areas of energy, Industrial automation and recycling. "
}
ReserchBody6 = {
  instanceID: "ReserchBody6",
  title: "To identify and facilitate Guest Lectures, Interactive Workshops, Conferences, Seminars, Brain Storming Sessions, Technical Discussions, Industrial Training, Orientation Courses, Industrial Visits with members of the Industry, outside experts and eminent personalities at regular interval."
}
ReserchBody7 = {
  instanceID: "ReserchBody7",
  title: "To facilitate joint research work and consultancy involving faculty and students."
}
ReserchBody8 = {
  instanceID: "ReserchBody8",
  title: "To identify continuing education opportunities, short term programmes and training needs of the industry, which the institution can provide."
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
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody7} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody8} />
                            </p>
                        </li>
                        
                    </ul>

                   </div>                              
            </div>
           
        );
    }
}

export default Objectives;