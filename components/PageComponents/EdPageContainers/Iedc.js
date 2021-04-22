import React, { Component } from "react";
import Header from "../Components/Header&Footer/Header";
import Footer from "../Components/Header&Footer/Footer";
import MenuOverlay from "../Components/MenuOverlay/MenuOverlay";
import ImageOne from "../Components/Images/ImageOne";
import HeadingOne from "../Components/Texts/HeadingOne";
import BodyThree from "../Components/Texts/BodyThree";
import BodyOneJustified from "../Components/Texts/BodyOneJustified";
import "../Pages/Research.css";
import "../Components/Tables/tableformat.css";
import HeadingThree from "../Components/Texts/HeadingThree";

class Iedc extends Component {
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
    IedcHeading = {
        instanceID: "IedcHeading",
        title: "Innovation and Entrepreneurship Development Centre (IEDC)"
    }
    IedcBody1 = {
        instanceID: "IedcBody1",
        title: "Innovation and Entrepreneurship Development Centre (IEDC) was established in Viswajyothi College of Engineering and Technology (VJCET) and had been successfully functioning for the last three academic years. The mission of the IEDCs is to develop institutional mechanism to create entrepreneurial culture in academic institutions to foster growth of innovation and entrepreneurship amongst the faculty and students . In VJCET, Mr. Vinoj K, Associate Professor, Mechanical Engineering is appointed as the nodal officer for IEDC activities. Mr. Robin Augustine, Assistant Professor, Department of S&H, is the Assistant Nodal Officer. An IEDC Coordination Committee is constituted for the current academic year with the participation of students and faculty members from all the departments. Following are the members of the IEDC Coordination Committee for the year 2019-20. The IEDC of VJCET is recognised by Kerala Start-up Mission(KSU) and all activities are carried out with the guidance and support of them."
    }
    LogoImagedata = {
        instanceID: "LogoImage",
        image: "ED/iedc.jpg",
        width: "15%"
    }
    InchargesHeading = {
        instanceID: "InchargesHeading",
        title: "IEDC Team"
      };
    ObjectiveHeading = {
        instanceID: "ObjectiveHeading",
        title: "Objectives"
      };
      FunctionHeading = {
        instanceID: "FunctionHeading",
        title: "Functions of IEDC"
      };
      HighlightHeading = {
        instanceID: "highlightHeading",
        title: "Some highlighted activities of  IEDC at VJCET"
      };
    ReserchBody2 = {
        instanceID: "ReserchBody2",
        title: "Some major initiatives taken by CRD are :"
    }
    ReserchWork1 = {
        instanceID: "ReserchWork1",
        title: "To act as an institutional mechanism for providing various services including information on all aspects of enterprise building for  budding S&T entrepreneurs."
    }
    ReserchWork2 = {
        instanceID: "ReserchWork2",
        title: "To create Entrepreneurial culture in the Parent Institution and other institutions in the region and to promote the objectives of NSTEDB, including programmes related to women and the backward sections of the society."
    }
    ReserchWork3 = {
        instanceID: "ReserchWork3",
        title: "To inculcate a culture of innovation driven entrepreneurship through student projects."
    }
    ReserchWork4 = {
        instanceID: "ReserchWork4",
        title: "To catalyse and promote development of S&T knowledge-based enterprises and to promote employment opportunities in the innovative areas."
    }
    ReserchWork5 = {
        instanceID: "ReserchWork5",
        title: "To respond effectively to the emerging challenges and opportunities both at national and international level relating to SMEs and micro enterprises."
    }
    ReserchWork6 = {
        instanceID: "ReserchWork1",
        title: "To organise Entrepreneurship Awareness Camps, Entrepreneurship Development Programmes, Faculty Development Programmes and Skill Development Programmes in the college/institution for the benefit of S&T persons."
    }
    ReserchWork7 = {
        instanceID: "ReserchWork2",
        title: "To initiate innovative student projects each year for the new innovative product development."
    }
    ReserchWork8 = {
        instanceID: "ReserchWork3",
        title: "To organize Business Plan Competitions every year."
    }
    ReserchWork9 = {
        instanceID: "ReserchWork4",
        title: "To guide and assist prospective entrepreneurs on various aspects such as preparing project reports, obtaining project approvals, loans and facilities from agencies of support system, information on technologies, etc."
    }
    ReserchWork10 = {
        instanceID: "ReserchWork5",
        title: "To arrange interaction with entrepreneurs and create a mentorship scheme for student entrepreneurs."
    }
    ReserchWork11 = {
        instanceID: "ReserchWork11",
        title: "In VJCET every  year   college level idea fest is conducted and  this year   25 teams were participated in the   contest.  A panel  of experts evaluated   the  ideas  during idea presentation by students and  six projects were selected for  prototype development and financial support.   Financial support  to the maximum extent of Rs. 5000 were given to selected teams.      For  KSU  idea fest  2019  there   were   63 applicants from VJCET and  8  teams were selected for final presentation.  Five teams selected for  financial and technical  support in  2018  idea fest and had   received the KSU grant this year for prototype development.  In addition IEDC has  conducted few  work shops, technical talks and  Industry  interaction programmes during this academic year. Students  and faculty members   participated   in  IEDC summit and  other  programmes organised by Kerala start-up mission at  various  places. "
    }
    ReserchWork12 = {
        instanceID: "ReserchWork11",
        title: "IEDC has an office cum work space of around 500 square feet in the Civil Engineering block,  adjacent to VJCET startup hub. "
    }
    ReserchWork13 = {
        instanceID: "ReserchWork11",
        title: "In VJCET, college level idea fest is conducted every year and an idea fest is planned in the Academic year 2019-2020.  "
    }
    ReserchWork14 = {
        instanceID: "ReserchWork11",
        title: "For the benefit of the students and faculty numbers an Idea discussion meet was conducted on 30 th August 2019. Dr. K C Chandrasekharan Nair, former CFO and founder, Techno park, Trivandrum, chaired the discussion meet.In the discussion meet, separate time slots were allotted to students of each department and all together  more than  100 students  attended the meet and had  discussions and interactions with  Dr. K C  Chandrasekharan Nair.   "
    }
    ReserchWork15 = {
        instanceID: "ReserchWork11",
        title: "Five teams were selected in support of the Idea Fest 2018 conducted by KSUM. Two teams received   financial support and other three teams received technical support for their projects.  "
    }
    ReserchWork16 = {
        instanceID: "ReserchWork11",
        title: "For the Idea Fest-19 conducted by Kerala Start Up Mission (KSUM), 63 teams from VJCET submitted their ideas. Eight teams were short listed in the first round.  One team was selected for funding support up to rupees two lakhs for their project, AGR-E (AGR- E is a CNC Farming Machine). This is one of the 18 projects selected by Kerala Start Up Mission out of 1600 projects from all over Kerala. The members of team are Firoz  S, Erfan Muhammed C.K  [C],  Bilal Shamsudhin and Sanjay M S of S7 A, Department of Mechanical Engineering."
    }
    ReserchWork17 = {
        instanceID: "ReserchWork11",
        title: "Separate Orientation workshop was conducted for all the first year students in each department and explained about the relevance and functioning of IEDC."
    }
    ReserchWork18 = {
        instanceID: "ReserchWork11",
        title: "Students and faculty members of IEDC VJCET are participating in IEDC summit-2019, workshops organised by ICT academy on behalf of Kerala start-up mission, the event Huddle 2019   and other programmes organised by Kerala start-up mission at various places. "
    }
    ReserchWork19 = {
        instanceID: "ReserchWork11",
        title: "In addition IEDC, VJCET is conducting workshops, skill development programmes, technical talks and Industry Interaction programmes  regularly."
    }
    render() {
        return (
            <div className="HomePage">
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />
                <HeadingOne data={this.IedcHeading} />
                <p align="center"><ImageOne data={this.LogoImagedata} /></p>
                {/* <ImageOne data={this.ResearchImg}></ImageOne> */}
                <BodyThree data={this.IedcBody1} /><br />
                <HeadingThree data={this.InchargesHeading} /> 
                
                <div className="inner-para">
                <table id="tableformat">
                            <tr><th>Name</th><th>Dept. Designation </th><th>IEDC Designation</th></tr>
                            <tr><td>Mr. Vinoj K</td><td>Associate Professor, ME</td><td>Nodal officer, IEDC</td></tr>
                            <tr><td>Mr. Robin  Augustine</td><td>Asst. Professor, S & H</td><td>Assistant Nodal officer, IEDC</td></tr>
                            <tr><td>Mrs. Nisa Ann Mathew</td><td>Asst. Professor, CE</td><td>CE  Dept. Coordinator, IEDC </td></tr>
                            <tr><td>Mrs. Rini Simon</td><td>Asst. Professor, CSE</td><td>CSE Dept. Coordinator, IEDC </td></tr>
                            <tr><td>Mrs. Femy John</td><td>Asst. Professor, ECE</td><td>ECE Dept. Coordinator,IEDC</td></tr>
                            <tr><td>Mr. Jomu  M George </td><td>Asst. Professor, EEE</td><td>EEE Dept. Coordinator, IEDC</td></tr>
                            <tr><td>Dr. Sheela V K</td><td>Associate Professor, IT</td><td>IT  Dept. Coordinator,IEDC</td></tr>
                            <tr><td>Mr. Basil Baby </td><td>Asst. Professor, ME</td><td>ME  Dept. Coordinator,IEDC</td></tr>
                            <tr><td>Mr. Mavin C</td><td>Placement officer</td><td>Placement and Training Cell</td></tr>
                            <tr><td>Mr. Basil Eldhose</td><td>Student S3 EEE B</td><td>Chief Executive officer</td></tr>
                            <tr><td>Ms. Gayathri Suresh</td><td>Student S5 ECE B</td><td>Chief Operating officer</td></tr>
                            <tr><td>Ms. Megha Sukumar</td><td>Student S7ECE A</td><td>Chief Marketing officer</td></tr>
                            <tr><td>Mr. Allen Peter</td><td>Student S5 IT</td><td>Chief Finance officer</td></tr>
                            <tr><td>Mr. Eldhose Raju</td><td>Student S7 ME B</td><td>Chief Technical officer</td></tr>
                            <tr><td>Ms.Riyamol Sara Jayan </td><td>Student S5 EEE A</td><td>Chief Creative Officer </td></tr>
                            <tr><td>Ms. Kavya R</td><td>Student S3 CSE B</td><td>Chief Social Officer</td></tr>
                </table> 
                <HeadingThree data={this.ObjectiveHeading} /> 
                    <ul>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchWork1} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchWork2} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchWork3} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchWork4} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchWork5} />
                            </p>
                        </li>
                    </ul>
                    <HeadingThree data={this.FunctionHeading} /> 
                    <ul>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchWork6} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchWork7} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchWork8} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchWork9} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchWork10} />
                            </p>
                        </li>
                    </ul>
                    <p>
                                <BodyOneJustified data={this.ReserchWork11} />
                            </p>
                            <HeadingThree data={this.HighlightHeading} /> 
                            <ul>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchWork12} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchWork13} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchWork14} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchWork15} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchWork16} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchWork17} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchWork18} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchWork19} />
                            </p>
                        </li>
                    </ul>
                </div>
                
                
                
                
                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (
                    <MenuOverlay closeMenuFunction={this.closeMenu} />
                ) : (
                        ""
                    )}
            </div>
        );
    }
}

export default Iedc;