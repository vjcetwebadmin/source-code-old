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

class Unai extends Component {
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
     ResearchImg = {
         instanceID: "ResearchImg",
         image: "ED/unai.png",
         width: "40%"
     }
    UnaiHeading = {
        instanceID: "UnaiHeading",
        title: "United Nations Academic Impact (UNAI) Action by Students to Promote Innovation and Reform through Education (ASPIRE)  "
    }
    FoundationHeading = {
        instanceID: "Foundation",
        title: "Foundation"
    }
    FoundationData = {
        instanceID: "Foundation",
        title: "Viswajyothi College of Engineering and Technology has become a member of United Nations Academic Impact in June 2017. ASPIRE   chapter of VJCET started  functioning  from November 2017. The activities of   UNAI  were   coordinated  by the governing body consisting of faculty members and students from all the departments.  Governing body is led by Dr K K Rajan, Prof.EEE  and Dean III, the Chief  coordinator of UNAI.  "
    }
    UnaivisionHeading = {
        instanceID: "UnaivisionHeading",
        title: "UNAI Vision"
    }
    UnaiBody1 = {
        instanceID: "UnaiBody1",
        title: "The United Nations Academic Impact (UNAI) is a United Nations initiative which was formed on 18th November 2010, to align institutions of higher education, scholarship and research with the United Nations and with each other. The initiative was formally launched by United Nations Secretary-General Mr. Ban Ki-moon at UN Headquarters in New York City."
    }
    UnaiBody2 = {
        instanceID: "UnaiBody2",
        title: "ASPIRE, which stands for Action by Students to Promote Innovation and Reform through Education, is a student driven initiative uniting to promote United Nation’s Academic Impact’s vision of institutions of higher education and research. ASPIRE embodies UNAI’s ten basic principles within student communities around the globe and brings out the innovative ideas. It also shares its vision of Sharing a Culture of Intellectual Social Responsibility."
    }
    UnaiBody3 = {
        instanceID: "UnaiBody3",
        title: "Brilliance in social activities and research that promotes prosperity and economic opportunity, greater social well-being, and protection of the environment."
    }
    UnaiBody4 = {
        instanceID: "UnaiBody4",
        title: "The participating institutions are expected to support one of the 10 UNAI principles."
    }
    UnaiBody5 = {
        instanceID: "UnaiBody5",
        title: "Operating locally within their communities, the activities of each ASPIRE group contributes to UNAI’s overall message of unity and action to address global challenges. Since 2010, UNAI has created a vibrant and diverse network of students, academics, scientists, researchers, think tanks, institutions of higher education, continuing education and educational associations.  There are over 1000 member institutions in more than 120 countries that reach millions of people in the education and research sectors around the world. Since its inception some thirty international networks of universities and other institutes of higher education and research have endorsed UNAI and encouraged their members to join, representing a global diversity of regions and a thematic wealth of disciplines. ASPIRE personifies the saying, “Sharing a Culture of Intellectual Social Responsibility.” It connects student organizations and individuals to global opportunities through the United Nations, educational and academic institutions, and civil society groups that focus on the UNAI principles. ASPIRE groups are directly affiliated to UNAI, and when their institution is a UNAI member, to it as well. ASPIRE priorities above all else, activism and action by students to promote and support the ten universally accepted UNAI principles."
    }
    
    UnaimissionHeading = {
        instanceID: "UnaimissionHeading",
        title: "UNAI Mission"
    }
    UnaiPrinciples = {
        instanceID: "UnaiPrinciples",
        title: "The Ten Principles"
    }
    UnaiAspire = {
        instanceID: "UnaiAspire",
        title: "ASPIRE"
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
        title: "To offer state of art, path forward for improving the lives of nearby people."
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
        title: "To undertake collaborative projects with government for the welfare of the society."
    }
    ReserchWork3 = {
        instanceID: "ReserchWork3",
        title: "To instill ethical, social and environmental perspectives for the sustainable development of the community."
    }
    ReserchWork4 = {
        instanceID: "ReserchWork4",
        title: "To nurture imagination, Intellectual social responsibility and interpersonal skills among students"
    }
    ReserchWork5 = {
        instanceID: "ReserchWork5",
        title: "To promote technical knowledge sharing culture and coordinate humanitarian relief operations"
    }
    ReserchWork6 = {
        instanceID: "ReserchWork1",
        title: "A commitment to the principles inherent in the United Nations Charter as values that education seeks to promote and help fulfill;"
    }
    ReserchWork7 = {
        instanceID: "ReserchWork2",
        title: "A commitment to human rights, among them freedom of inquiry, opinion, and speech;"
    }
    ReserchWork8 = {
        instanceID: "ReserchWork3",
        title: "A commitment to educational opportunity for all people regardless of gender, race, religion or ethnicity;"
    }
    ReserchWork9 = {
        instanceID: "ReserchWork4",
        title: "A commitment to the opportunity for every interested individual to acquire the skills and knowledge necessary for the pursuit of higher education;"
    }
    ReserchWork10 = {
        instanceID: "ReserchWork10",
        title: "A commitment to building capacity in higher education systems across the world;"
    }
    ReserchWork11 = {
        instanceID: "ReserchWork11",
        title: "A commitment to encouraging global citizenship through education;"
    }
    ReserchWork12 = {
        instanceID: "ReserchWork12",
        title: "A commitment to advancing peace and conflict resolution through education;"
    }
    ReserchWork13 = {
        instanceID: "ReserchWork13",
        title: "A commitment to addressing issues of poverty through education;"
    }
    ReserchWork14 = {
        instanceID: "ReserchWork14",
        title: "A commitment to promoting sustainability through education;"
    }
    ReserchWork15 = {
        instanceID: "ReserchWork15",
        title: "A commitment to promoting inter-cultural dialogue and understanding, and the unlearning of intolerance, through education."
    }
    ReserchWork16 = {
        instanceID: "ReserchWork16",
        title: "Automation of traditional systems through technology upgradation is the only way to uplift the rural people. Development of interdisciplinary technologies is essential way for overall development of the common people.   To realise the inspiration and enthusiasm of our student community into marketable products, it was essential to scale up the IEDC to the level of  an incubation centre. "
    }
    ReserchWork17 = {
        instanceID: "ReserchWork17",
        title: "The TBI will also be the beginning of a stronger industry-academia-consumer linkage where ideas can flow to and fro through the three stakeholder groups so that everyone benefits. The industry will benefit from technological developments initiated by the TBI as well as qualified students who have an innovative mind to join their workforce. Academia will stand to gain from its constant interaction with industry, and consumers will gain from the innovations that are rolled out through the association."
    }
    ReserchWork18 = {
        instanceID: "ReserchWork17",
        title: "17 SDG Goals"
    }
    ReserchWork19 = {
        instanceID: "ReserchWork17",
        title: "In 2015, the United Nations set a number of ambitious goals to be achieved in the next 15 years to make our world a better place for everyone: end poverty, protect the planet, and ensure prosperity for all. The UN Sustainable Development Goals, a collection of 17 global goals set by the UN’s member countries, are a roadmap on how to transform our planet where everyone can live in peace, prosperity, and dignity."
    }
    ReserchWork20 = {
        instanceID: "ReserchWork17",
        title: "The 17 sustainable development goals (SDGs) to transform our world:"
    }
    GoverningHeading = {
        instanceID: "ReserchWork17",
        title: "Governing Body"
    }
   
    render() {
        return (
            <div className="HomePage">
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />
                <ImageOne data={this.ResearchImg}></ImageOne>
                <HeadingOne data={this.UnaiHeading} />
                {/* <ImageOne data={this.ResearchImg}></ImageOne> */}
                <BodyThree data={this.UnaiBody1} /><br />
                <BodyThree data={this.UnaiBody2} /><br />
                <HeadingThree data={this.FoundationHeading} />
                <BodyThree data={this.FoundationData} /><br />
                <HeadingThree data={this.UnaivisionHeading} />
                <BodyThree data={this.UnaiBody3} /><br />
                <HeadingThree data={this.UnaimissionHeading} />
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
                 <BodyThree data={this.UnaiBody4} /><br />
                 <HeadingThree data={this.UnaiPrinciples} />
                 <ol>
                        
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
                        
                    </ol>
                    <HeadingThree data={this.ReserchWork18} />
                    <BodyThree data={this.ReserchWork19} /><br />
                    <HeadingThree data={this.ReserchWork20} />
                    <ul>
                        <li>
                        <p align="left">GOAL 1: No Poverty</p>
                        </li>
                        <li>
                        <p align="left">GOAL 2: Zero Hunger</p>
                        </li>
                        <li>
                        <p align="left">GOAL 3: Good Health and Well-being</p>
                        </li>
                        <li>
                        <p align="left">GOAL 4: Quality Education</p>
                        </li>
                        <li>
                        <p align="left">GOAL 5: Gender Equality</p>
                        </li>
                        <li>
                        <p align="left">GOAL 6: Clean Water and Sanitation</p>
                        </li>
                        <li>
                        <p align="left">GOAL 7: Affordable and Clean Energy</p>
                        </li>
                        <li>
                        <p align="left">GOAL 8: Decent Work and Economic Growth</p>
                        </li>
                        <li>
                        <p align="left">GOAL 9: Industry, Innovation and Infrastructure</p>
                        </li>
                        <li>
                        <p align="left">GOAL 10: Reduced Inequality</p>
                        </li>
                        <li>
                        <p align="left">GOAL 11: Sustainable Cities and Communities</p>
                        </li>
                        <li>
                        <p align="left">GOAL 12: Responsible Consumption and Production</p>
                        </li>
                        <li>
                        <p align="left">GOAL 13: Climate Action</p>
                        </li>
                        <li>
                        <p align="left">GOAL 14: Life Below Water</p>
                        </li>
                        <li>
                        <p align="left">GOAL 15: Life on Land</p>
                        </li>
                        <li>
                        <p align="left">GOAL 16: Peace and Justice Strong Institutions</p>
                        </li>
                        <li>
                        <p align="left">GOAL 17: Partnerships to achieve the Goal</p>
                        </li>
                    </ul>
                    <HeadingThree data={this.UnaiAspire} />
                    <BodyThree data={this.UnaiBody5} /><br />
                    <p align="center">ASPIRE groups are encouraged to:</p>
                    <ul>
                        <li>
                            <p align="left">Reinforce, suggest or initiate activities that actively support one or more of the ten UNAI principles.</p>
                        </li>
                        <li>
                            <p align="left">Participate in UNAI activities and initiatives, for example, the Classroom Conversation seminar series, and the “Unlearning Intolerance” discussion series.</p>
                        </li>
                        <li>
                            <p align="left">Participate in conferences organized by UNAI and UNAI member institutions.</p>
                        </li>
                        <li>
                            <p align="left">Contribute to the promotion of the ten UNAI principles via social media and UNAI platforms</p>
                        </li>
                    </ul>
                    <HeadingThree data={this.GoverningHeading} />
                    
                    <table id="tableformat">
                            <tr><th>NAME</th><th>UNAI DESIGNATION</th></tr>                            
                            <tr>
                                <td>Dr. K. K. Rajan, Prof. EEE  and  Dean  Industry  Institute  Interaction , VJCET</td>
                                <td>Chief Coordinator</td>
                            </tr>
                            <tr>
                                <td>Mrs. Shine George, Head, Department of Civil Engineering </td>
                                <td>Focal Point-1</td>
                            </tr>
                            <tr>
                                <td>Mr. Vinoj K, Head, Department  of Mechanical Engineering </td>
                                <td>Focal Point-2</td>
                            </tr>
                            <tr>
                                <td>Smt. Smitha Cyriac, Head,  Department of Electronics and Communication Engineering </td>
                                <td>Focal Point-3</td>
                            </tr>
                            <tr>
                                <td>Ron Ellickal, S3 CE</td>
                                <td>Student Coordinator</td>
                            </tr>
                            <tr>
                                <td>Rose Maria Varkey, S3 ECE</td>
                                <td>Joint Student Coordinator</td>
                            </tr>
                            <tr>
                                <td>Martin Siby, MBA, T3</td>
                                <td>Council Member</td>
                            </tr>
                            <tr>
                                <td>Augustina K Martin, S5 ECE</td>
                                <td>Council Member</td>
                            </tr>
                            <tr>
                                <td>Jijo Mathew, MBA, T3   </td>
                                <td>Head,Program Committee</td>
                            </tr>
                            <tr>
                                <td>Irene Meriyem Jos, S3 IT</td>
                                <td>Joint Head, Program Committee</td>
                            </tr>
                            <tr>
                                <td>Aarcha Paul, S5 IT</td>
                                <td>Head, Finance Committee </td>
                            </tr>
                            <tr>
                                <td>Kavya R, S3 CS</td>
                                <td>Joint Head, Finance Committee</td>
                            </tr>
                            <tr>
                                <td>Sreeparvathy M Subash, S4 CE</td>
                                <td>Head Documentation Committee</td>
                            </tr>
                            <tr>
                                <td>Rahul Sajeeth Mohan, S3 ECE</td>
                                <td>Joint Head, Documentation Committee</td>
                            </tr>
                            <tr>
                                <td>M Harisankar, S3 ME</td>
                                <td>Head Logistics Committee</td>
                            </tr>
                            
                            
                    </table>

                   
                    
                
                
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

export default Unai;