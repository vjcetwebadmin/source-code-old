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
        title: "To act as an institutional mechanism for providing various services including information on all aspects of enterprise building for  budding S&T entrepreneurs."
    }
    ReserchBody2 = {
        instanceID: "ReserchBody2",
        title: "To create Entrepreneurial culture in the Parent Institution and other institutions in the region and to promote the objectives of NSTEDB, including programmes related to women and the backward sections of the society."
    }
    ReserchBody3 = {
      instanceID: "ReserchBody3",
      title: "To inculcate a culture of innovation driven entrepreneurship through student projects."
  }
  ReserchBody4 = {
    instanceID: "ReserchBody4",
    title: "To catalyse and promote development of S&T knowledge-based enterprises and to promote employment opportunities in the innovative areas."
}
ReserchBody5 = {
  instanceID: "ReserchBody5",
  title: "To respond effectively to the emerging challenges and opportunities both at national and international level relating to SMEs and micro enterprises."
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
                       
                        
                    </ul>

                   </div>                              
            </div>
           
        );
    }
}

export default Objectives;