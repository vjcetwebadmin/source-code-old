import React from "react";

import "../Components/Tables/tableformat.css";

import BodyOneJustified from "../Components/Texts/BodyOneJustified";
import Header from "../Components/Header&Footer/Header";
import Footer from "../Components/Header&Footer/Footer";
import MenuOverlay from "../Components/MenuOverlay/MenuOverlay";
/* import HeadingOne from "../Components/Texts/HeadingOne"; */
import HeadingTwo from "../Components/Texts/HeadingTwo";
import HeadingFour from "../Components/Texts/HeadingFour";

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
        title: "Student Council 2019-20"
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
                    <div class="absolute">
             <p id="rcorners1" align="right"><a href="https://vjcet.org/downloads/gallery/collegeunion.html" target="_blank" rel="noopener noreferrer"><font color="white">Picture Book</font></a></p>
             </div>
             <div >
             <p id="blankspace" align="right"></p>             
             </div>
                    
                    <br />
                   
                        <table id="tableformat">
                        <tr><th>Post</th><th>Student Name</th><th>Branch & Semester</th></tr>
                            <tr><td>CHAIRMAN</td><td>SEAN SANTOSH JOSEPH</td><td>S5 CSE A</td></tr>
                            <tr><td>VICE CHAIRMAN</td><td>MARIYA GEORGE</td><td>S5 ECE A</td></tr>
                            <tr><td>GENERAL SECRETARY</td><td>H. ANAND</td><td>S5 EEE B</td></tr>
                            <tr><td>UNIVERSITY UNION COUNCILLORS</td><td>AMAN IBRAHIM</td><td>S3 CE A</td></tr>
                            <tr><td>UNIVERSITY UNION COUNCILLORS</td><td>CYRIAC JACOB</td><td>S3 ME A</td></tr>
                            <tr><td>EDITOR</td><td>JUSTIN SIBY</td><td>S5 ME B</td></tr>
                            <tr><td>ARTS CLUB SECRETARY</td><td>ALAN JOSE</td><td>S5 ECE B</td></tr>
                            <tr><td>SPORTS CLUB SECRETARY</td><td>MELWIN VINCENT</td><td>S5 CSE B</td></tr>
                            <tr><td>LADY REPRESENTATIVES</td><td>MINNU MARIA SAJI</td><td>S5 CE B</td></tr>
                            <tr><td>LADY REPRESENTATIVES</td><td>UTHARA PRADEEP</td><td>S5 EEE B</td></tr>
                            <tr><td>MBA ASSOCIATION SECRETARY</td><td>UNNIKRISHNAN RAJAN</td><td>T1 MBA</td></tr>
                            <tr><td>CS ASSOCIATION SECRETARY</td><td>JOSE ANTONY</td><td>S7 CSE B</td></tr>
                            <tr><td>CE ASSOCIATION SECRETARY</td><td>PETER JOSE</td><td>S5 CE B</td></tr>
                            <tr><td>ME ASSOCIATION SECRETARY</td><td>AJAY SAJEEV</td><td>S7 ME B</td></tr>
                            <tr><td>EC ASSOCIATION SECRETARY</td><td>ANU MARIA SUNNY</td><td>S7 ECE B</td></tr>
                            <tr><td>EEE ASSOCIATION SECRETARY</td><td>ALEN MARTIN</td><td>S7 EEE A</td></tr>
                            <tr><td>IT ASSOCIATION SECRETARY</td><td>LEO JOHNSON</td><td>S5 IT</td></tr>
                            <tr><td>PG REPRESENTATIVE</td><td>ATHULYA RAJEEV</td><td>T4 MBA</td></tr>
                            <tr><td>FIRST YEAR REPRESENTATIVE</td><td>JOEL RAJU</td><td>S1 CSE A</td></tr>
                            <tr><td>SECOND YEAR REPRESENTATIVE</td><td>AJAY SAJEEVAN</td><td>S3 ECE A</td></tr>
                            <tr><td>THIRD YEAR REPRESENTATIVE</td><td>MARIA BENNY</td><td>S5 EEE A</td></tr>
                            <tr><td>FOURTH YEAR REPRESENTATIVE</td><td>TINU GEORGE</td><td>S7 EE B</td></tr>
                            
                        </table>
                        <HeadingTwo data={this.MajoreventsTitle} className="Heading" />
                        <HeadingFour data={this.EventTitle1} className="Heading" />
                        <BodyOneJustified data={this.EventContent1} />
                        {/* <HeadingFour data={this.EventTitle2} className="Heading" />
                        <BodyOneJustified data={this.EventContent2} />
                        <HeadingFour data={this.EventTitle3} className="Heading" />
                        <BodyOneJustified data={this.EventContent3} />
                        <HeadingFour data={this.EventTitle4} className="Heading" />
                        <BodyOneJustified data={this.EventContent4} />
                        <HeadingFour data={this.EventTitle5} className="Heading" />
                        <BodyOneJustified data={this.EventContent51} />
                        <BodyOneJustified data={this.EventContent52} />
                        <HeadingFour data={this.EventTitle6} className="Heading" />
                        <BodyOneJustified data={this.EventContent6} /> */}
                         
                        
                </div>
                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (<MenuOverlay closeMenuFunction={this.closeMenu} />) : ("")}

            </React.Fragment>
        )
    }

}

export default collegecouncil;