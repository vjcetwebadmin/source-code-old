import React, { Component } from "react";
import MenuOverlay from "../../Components/MenuOverlay/MenuOverlay";
//import ImageOne from "../../Components/Images/ImageOne";
import HeadingOne from "../../Components/Texts/HeadingOne";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import "./Research.css"
import "../../Components/Tables/tableformat.css";

class message extends Component {
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
        title: "Functions of IEDC"
    }
    MessageContent1 = {
        instanceID: "MessageContent",
        title: "To organise Entrepreneurship Awareness Camps, Entrepreneurship Development Programmes, Faculty Development Programmes and Skill Development Programmes in the college/institution for the benefit of S&T persons."
    }
    MessageContent2= {
        instanceID: "MessageContent",
        title: "To initiate innovative student projects each year for the new innovative product development."
    }
    MessageContent3 = {
        instanceID: "MessageContent",
        title: "To organize Business Plan Competitions every year."
    }
    MessageContent4 = {
        instanceID: "MessageContent",
        title: "To guide and assist prospective entrepreneurs on various aspects such as preparing project reports, obtaining project approvals, loans and facilities from agencies of support system, information on technologies, etc."
    }
    MessageContent5 = {
        instanceID: "MessageContent",
        title: "To arrange interaction with entrepreneurs and create a mentorship scheme for student entrepreneurs."
    }
   
    render() {
        return (
            <div className="HomePage">
                
                <HeadingOne data={this.ResearchHeading}></HeadingOne>
                <div>
                
                </div>                            
                <ul>
                        
                        <li>
                            <p>
                                <BodyOneJustified data={this.MessageContent1} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.MessageContent2} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.MessageContent3} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.MessageContent4} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.MessageContent5} />
                            </p>
                        </li>
                       
                        
                    </ul>

                
                
                
               
               
                {this.state.showMenu ? (
                    <MenuOverlay closeMenuFunction={this.closeMenu} />
                ) : (
                        ""
                    )}
            </div>
        );
    }
}

export default message;