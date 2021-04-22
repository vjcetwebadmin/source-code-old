import React from "react";
import HeadingTwo from "../../Components/Texts/HeadingTwo";
import ImageOne from "../../Components/Images/ImageOne";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import "../styles.css"
import "../../Components/Tables/tableformat.css";

import Header from "../../Components/Header&Footer/Header";
import Footer from "../../Components/Header&Footer/Footer";
import MenuOverlay from "../../Components/MenuOverlay/MenuOverlay";
import HeadingOne from "../../Components/Texts/HeadingOne";

class building extends React.Component {
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


    CCCNATitle = {
        instanceID: "CCCTitle",
        title: "Building Area"
    };
    CCCTitle = {
        instanceID: "CCCTitle",
        title: "Building Area"
    };
    NATitle = {
        instanceID: "CCCTitle",
        title: "Auditorium & Seminar Halls"
    };
    WifiTitle = {
        instanceID: "CCCTitle",
        title: "Residential Complex"
    };
    ServerTitle = {
        instanceID: "Servernames",
        title: "Auditorium & Seminar Halls"
    };
    CCCContent1 = {
        instanceID: "CCCContent1",
        title: "The building Complex of the college with an area of over 6 Lakh Sq.Ft, is situated in a sprawling campus of 26 acres. The building is divided into blocks A B C D, Laboratory Block, Gents Hostel, Ladies Hostel and Auditorium Annexure. All academic and non academic departments are included in the A,B,C and D blocks. Separate Laboratory block is provided in addition to the academic blocks. Civil, Electrical and Mechanical workshops are in this block. "
    }
    CCCContent2 = {
        instanceID: "CCCContent2",
        title: "College has a main auditorium which has 1500 seating capacity and a mini auditorium with 250 seating capacity. All college level events are being conducted in the main auditorium and mini auditorium. All the department has Seminar hall facility with 100 seating capacity along with mounted projector setup. "
    }
    CCCContent3 = {
        instanceID: "CCCContent3",
        title: " Viswajyothi provides excellent residential facilities for staff and students. Gent's hostel and ladies hostels are located in the campus itself so it makes easy access between college  and students. The hostels and hostel facilities are of high quality and well equipped. The boys hostel can accommodate 450 boys and girls hostel 350 girls respectively Members of the teaching staff are appointed as Resident Tutors in the hostel. The rooms provide most modern facilities and privacy. All the hostels have mess facilities for students. The mess is spacious, highly hygienic and elegant. Internet  and Computer Facilities are  also available in the hostel."
    }
    SmartTitle = {
        instanceID: "SmartTitle",
        title: "Smart Class Room"
    };
    Smartontent3 = {
        instanceID: "Smartcontent3",
        title: " Viswajyothi has implemented the smart class room concept for the betterment of the teaching  and learning process. The smart room has an instructor space equipped with computer and audiovisual equipment, allowing the instructor to teach using a wide variety of media. These include DVD, PowerPoint presentations, and more all displayed through a data projector. The instructors can access the internet directly from the Wifi setup give video lectures from eminent professors.  We are encouraging our faculty and students to use these facilities to improve their presentations. Most of the laboratories are also using this kind of facilities to explain the practical sessions. Many workshops, Paper presentations, Student seminars, Industry webinars, Project presentations are done through this facility."
    }
    CCCImagedata = {
        instanceID: "CCCVjcImage",
        image: "Buildingarea.JPG",
        width: "100%"
    }
   

    render() {
        return (
            <React.Fragment>
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />

                <div className="contain">
                    <HeadingOne data={this.CCCNATitle} className="Heading" />
                    <ImageOne data={this.CCCImagedata} />
                    <br />
                    <div className="bodyContainer">
                        <HeadingTwo data={this.CCCTitle} className="Heading" />
                        <BodyOneJustified data={this.CCCContent1} />
                        <HeadingTwo data={this.NATitle} className="Heading" />
                        <BodyOneJustified data={this.CCCContent2} />
                        
                                           
                        <div>
                        <p>
                        <font size="5">
                        <table id="tableformat">
                            <tr><th>Auditorium/Seminar Hall</th><th>Seating Capacity</th></tr>
                            <tr><td>Main Auditorium Annexure</td><td>1500</td></tr>
                            <tr><td>Mini Auditorium </td><td>250</td></tr> 
                            <tr><td>Seminar Hall –Department of CE </td><td>100</td></tr> 
                            <tr><td>Seminar Hall –Department of CSE </td><td>100</td></tr> 
                            <tr><td>Seminar Hall –Department of ECE </td><td>100</td></tr> 
                            <tr><td>Seminar Hall –Department of EEE </td><td>100</td></tr>
                            <tr><td>Seminar Hall –Department of IT </td><td>100</td></tr>
                            <tr><td>Seminar Hall –Department of ME </td><td>100</td></tr>                           
                            <tr><td>Seminar Hall –Department of MBA </td><td>100</td></tr> 
                            <tr><td>Seminar Hall –Department of Placement & Training </td><td>100</td></tr> 
                            <tr><td>Seminar Hall –Department of R & D </td><td>100</td></tr> 
                            <tr><td>Seminar Hall –PG Seminar Hall </td><td>100</td></tr> 
                        </table>
                        </font></p>
                         
                            </div>
                        <HeadingTwo data={this.WifiTitle} className="Heading" />
                        <BodyOneJustified data={this.CCCContent3} />
                        <HeadingTwo data={this.SmartTitle} className="Heading" />
                        <BodyOneJustified data={this.Smartontent3} />


                    </div>
                </div>
                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (<MenuOverlay closeMenuFunction={this.closeMenu} />) : ("")}

            </React.Fragment>
        )
    }

}

export default building;