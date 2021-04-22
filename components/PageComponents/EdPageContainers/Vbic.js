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
        title: "Viswajyothi Business Incubation Centre (VBIC)"
    }
    CompanyHeading = {
        instanceID: "IedcHeading",
        title: "Companies Functioning Form V-BIC"
    }
    LogoImagedata = {
        instanceID: "LogoImage",
        image: "ED/vbic.jpg",
        width: "15%"
    }
    IedcBody1 = {
        instanceID: "IedcBody1",
        title: "Realizing the need of entrepreneur development among the students and to incubate startup companies in the Campus Viswajyothi Business Incubation Centre (V-BIC) is launched in VJCET on 26.04.2019. Inauguration of V-BIC was carried out by Shri Eldho Abraham honourable MLA Muvattupuzha. Dr Saji Gopinath, CEO Kerala Start Up Mission delivered the keynote address during the occasion. In the business incubation centre, startup companies of students, faculty members, aluminis and technically or professionally qualified youngsters from surrounding area are functioning for business incubation. The space available in VJCET, V-BIC is around 3000 square feet, with up-to-date infra structure for business development. "
    }
    InchargesHeading = {
        instanceID: "InchargesHeading",
        title: "V-BIC Team"
      };
    ObjectiveHeading = {
        instanceID: "ObjectiveHeading",
        title: "Objectives"
      };
      ReserchWork1 = {
        instanceID: "ReserchWork1",
        title: "Objectives of the venture,  V-BIC  is to achieve a transformation of minds of the students from being job-seekers to entrepreneurs themselves and become  job providers by effectively utilizing the theoretical and practical knowledge they are  acquiring  from the institution. Students and faculty will be encouraged to find innovative solutions to social problems."
    }
      FunctionHeading = {
        instanceID: "FunctionHeading",
        title: "Our Thrust Areas"
      };
    ReserchBody2 = {
        instanceID: "ReserchBody2",
        title: "Some major initiatives taken by CRD are :"
    }
    
    ReserchWork2 = {
        instanceID: "ReserchWork2",
        title: "Introduction of Entrepreneurial culture to the students, faculty and common people."
    }
    ReserchWork3 = {
        instanceID: "ReserchWork3",
        title: "Promote students and faculty to come up with commercially viable innovative products. "
    }
    ReserchWork4 = {
        instanceID: "ReserchWork4",
        title: "Create student and faculty entrepreneurs."
    }
    ReserchWork5 = {
        instanceID: "ReserchWork5",
        title: "Help to create value-added jobs and services. "
    }
    ReserchWork6 = {
        instanceID: "ReserchWork1",
        title: "Create effective networking for the development of technology based startups. "
    }
    ReserchWork7 = {
        instanceID: "ReserchWork2",
        title: "Develop internationally accepted technologies. "
    }
    ReserchWork8 = {
        instanceID: "ReserchWork3",
        title: "Promote small and medium industries. "
    }
    ReserchWork9 = {
        instanceID: "ReserchWork4",
        title: "Startup Hub at Viswajyothi College of Engineering and Technology Vazhakulam, Muvattupuzha, will concentrate on the following thrust areas."
    }
    ReserchWork10 = {
        instanceID: "ReserchWork10",
        title: "Agro Technology."
    }
    ReserchWork11 = {
        instanceID: "ReserchWork11",
        title: "Green Technology."
    }
    ReserchWork12 = {
        instanceID: "ReserchWork12",
        title: "Information Technology."
    }
    ReserchWork13 = {
        instanceID: "ReserchWork13",
        title: "Robotics and Automation."
    }
    ReserchWork14 = {
        instanceID: "ReserchWork14",
        title: "Artificial Intelligence."
    }
    ReserchWork15 = {
        instanceID: "ReserchWork15",
        title: "Value  added Products & Services."
    }
    ReserchWork16 = {
        instanceID: "ReserchWork16",
        title: "Automation of traditional systems through technology up gradation is the only way to uplift the rural people. Development of interdisciplinary technologies is essential way for overall development of the common people. To realize the enthusiasm of our student community into marketable products, it was essential to scale up the IEDC to the level of an incubation centre. "
    }
    ReserchWork17 = {
        instanceID: "ReserchWork17",
        title: "The V-BIC is also be the beginning of a stronger industry-academia-consumer linkage where ideas can flow to and fro, through the three stake holder groups so that everyone benefits. The industry will benefit from technological developments initiated by the V-BIC as well as qualified students who have an innovative mind to join their workforce. Academia will stand to gain from its constant interaction with industry, and consumers will gain from the innovations that are rolled out through the association."
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
                            <tr><th>Name</th><th>V-BIC Designation</th></tr>
                            <tr><td>Mr. Johnson Parayannilam</td><td>Management   Coordinator  - V-BIC</td></tr>
                            <tr><td>Dr. K K Rajan</td><td>Chief Executive Officer - CEOC</td></tr>
                            <tr><td>Mr. Joe Mathew Jacob</td><td>Executive Officer </td></tr>
                            <tr><td>Mr. Jomu M George</td><td>Executive Officer</td></tr>
                            <tr><td>Mr. Sanoj Saju</td><td>Chief Technology Officer – CTO</td></tr>
                            
                </table> 
                <HeadingThree data={this.ObjectiveHeading} /> 
                <BodyOneJustified data={this.ReserchWork1} />
                    <ul>
                        
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
                    </ul>
                    <HeadingThree data={this.FunctionHeading} /> 
                    <BodyOneJustified data={this.ReserchWork9} />
                    <ul>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchWork10} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchWork11} />
                            </p>
                        </li>
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
                    </ul>
                    <p>
                                <BodyOneJustified data={this.ReserchWork16} />
                            </p>
                            <p>
                                <BodyOneJustified data={this.ReserchWork17} />
                            </p>
                            <HeadingThree data={this.CompanyHeading} /> 
                            <ul>
                                <li>
                                <p align="left">M/s Teqnocart Innovations (OPC) Pvt. Ltd </p>
                                </li>
                                <li>
                                <p align="left">M/s  One Cup Beverages Pvt. Ltd.   </p>
                                </li>
                                <li>
                                <p align="left">M/s Tinos Software  and Security Solutions LLP </p>
                                </li>
                                <li>
                                <p align="left">M/s  Ezoro Technologies  Pvt. Ltd. </p>
                                </li>
                                <li>
                                <p align="left">M/s  Antilia Solutions</p>
                                </li>
                            </ul>

                </div>
                <p>
                                <b>To know more about Viswajyothi Business Incubation Centre, kindly visit the <a href="https://vbic.in/" target="_blank" rel="noopener noreferrer">official website </a></b> 
                               
                         
                    </p>
                
                
                
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