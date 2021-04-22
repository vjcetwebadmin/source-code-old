import React from "react";

import "../Components/Tables/tableformat.css";

//import BodyOneJustified from "../Components/Texts/BodyOneJustified";
import Header from "../Components/Header&Footer/Header";
import Footer from "../Components/Header&Footer/Footer";
import MenuOverlay from "../Components/MenuOverlay/MenuOverlay";
/* import HeadingOne from "../Components/Texts/HeadingOne"; */
import HeadingTwo from "../Components/Texts/HeadingTwo";
//import HeadingFour from "../Components/Texts/HeadingFour";

class collegecouncil extends React.Component {
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


    CollegecouncilTitle = {
        instanceID: "CollegecouncilTitle",
        title: "Statutory Committees"
    };
    MajoreventsTitle = {
        instanceID: "MajoreventsTitle",
        title: "Major Events"
    };
    EventTitle1 = {
        instanceID: "EventTitle1",
        title: "1. Election 2019-20"
    };
    EventTitle2 = {
        instanceID: "EventTitle2",
        title: "2. Students Council Oath taking Ceremony"
    };
    EventTitle3 = {
        instanceID: "EventTitle3",
        title: "3. Student Council Inauguration"
    };
    EventTitle4 = {
        instanceID: "EventTitle4",
        title: "4. Annual Sports- DRONA 2K19"
    };
    EventTitle5 = {
        instanceID: "EventTitle5",
        title: "5. Inter Collegiate Technical Fest – BODHI’19 and College Arts Festival- DRISHYA’19"
    };
    EventTitle6 = {
        instanceID: "EventTitle6",
        title: "6. Basket Ball Tournament-Magnum 2019"
    };
    EventContent1 = {
        instanceID: " EventContent1",
        title: "Students Council Election was held on 17th August 2019. Dr.Anoop CK (Professor Civil Engineering Department) was the election returning officer. Twenty two student council members were elected."
    }
    EventContent2 = {
        instanceID: " EventContent2",
        title: "Oath taking ceremony of student’s council (2018-19) is conducted on 14th August 2018 at PTC seminar Hall in the presence of Principal. "
    }
    EventContent3 = {
        instanceID: " EventContent3",
        title: "Hon’ble Justice Cyriac Joseph inaugurated student’s council (18-19) on 9th October 2018.Students performed various cultural programs as part of the inauguration."
    }
    EventContent4 = {
        instanceID: " EventContent4",
        title: "Annual sports meet is conducted on 15th and 16th February 2019.Mr.Samson (Sub Inspector Muvattupuzha ) was  inaugurated the event in the presence of Manager and Principal."
    }
    EventContent51 = {
        instanceID: " EventContent51",
        title: "National Level Technical Fest (BODHI 2019) was conducted on 20th March and 21st March 2019. Mr. Sreedharan Radhakrishnan Nair (Managing Director,Team Front Line Ltd & Team e-Biz) inaugurated the program. Departments conducted various technical events as part of BODHI’19 and more than 1000 students were participated from other colleges. "
    }
    EventContent52 = {
        instanceID: " EventContent52",
        title: "College arts festival (DRISHYA – 2019) was held on 22nd March and 23rd March 2019.Mr.K.S. Harisankar (Playback Singer) was inaugurated the program. Different cultural competitions were conducted as part of DRISHYA- 2019. Inauguration Ceremony of BODHI’19 and DRISHYA’19 are held on 20th March 2019."
    }
    EventContent6 = {
        instanceID: " EventContent6",
        title: "Inter Collegiate Basket Ball Tournament was conducted on 19th to 21st March 2019.Mr.Sejin Mathew (Indian youth basket ball team caption) inaugurated the event in the presence Principal."
    }
    
   

    render() {
        return (
            <React.Fragment>
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />

                <div className="contain">
                    <HeadingTwo data={this.CollegecouncilTitle} className="Heading" />
                   
             <div >
             <p id="blankspace" align="right"></p>             
             </div>
                    
                    <br />
                   
                        <table id="tableformat">
                        <tr><th>Post</th><th>Faculty Name</th></tr>
                            <tr><td>FACULTY ADVISOR/ COUNSELLOR</td><td>Mr. Tijo Jose, AP MED & Mrs. Tina Jose, AP CED</td></tr>
                            <tr><td>COURSE COMMITTEES AND CLASS COMMITTEES</td><td>Mrs. Rose Mary Baby, AP S&H</td></tr>
                            <tr><td>DISCIPLINARY ACTION COMMITTEE(DAC)</td><td>Dr. Shunmughesh K., Prof MED</td></tr>
                            <tr><td>STUDENT'S WELFARE COMMITTEE</td><td>Dr. Geo Baby HOD MBA</td></tr>
                            <tr><td>GRIEVANCES AND APPEALS COMMITTEE</td><td>Mrs. Shine George, HOD  CED</td></tr>
                        </table>
                        
                </div>
                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (<MenuOverlay closeMenuFunction={this.closeMenu} />) : ("")}

            </React.Fragment>
        )
    }

}

export default collegecouncil;