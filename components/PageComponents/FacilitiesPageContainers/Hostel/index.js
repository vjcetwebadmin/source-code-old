import React from "react";
import HeadingTwo from "../../Components/Texts/HeadingTwo";
import ImageOne from "../../Components/Images/ImageOne";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import "../styles.css"

import Header from "../../Components/Header&Footer/Header";
import Footer from "../../Components/Header&Footer/Footer";
import MenuOverlay from "../../Components/MenuOverlay/MenuOverlay";
import HeadingOne from "../../Components/Texts/HeadingOne";
/* import HeadingThree from "../../Components/Texts/HeadingThree";
 */
class Hostal extends React.Component {
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

    HostalTitle = {
        instanceID: "HostalTitle",
        title: "RESIDENTIAL FACILITIES"
    };
    HostalContent = {
        instanceID: "HostalContent",
        title: "The hostel facilities are of high quality. Both Ladies and Men’s Hostel are located inside the campus. Members of the teaching staff are appointed as Resident Tutors in the hostel. The rooms provide most modern facilities and privacy.  Viswajyothi  provides excellent hostel facilities for students. The hostels have mess facilities for students and faculties. The mess is spacious, highly hygienic and elegant. College hostel is fully wifi enabled. Uninterrupted power supply is ensured using a 100KV Generator. Each student is provided with a cot, a table and a chair in their respective rooms. Counseling Hall Counseling and Prayer cells are available and active in each hostel to facilitate counseling the students and conduct prayers. Students of all faiths can avail of these services.  "
    }

    HostalFacilityTitle = {
        instanceID: "HostalFacilityTitle",
        title: "HOSTEL FACILITIES"
    };
    
    GentsHostalTitle = {
        instanceID: "GentsHostalTitle",
        title: "Gents Hostel"
    };
    HostalFacility1Content = {
        instanceID: "HostalFacility1Content",
        title: "We have computing facility in both Gents and Ladies Hostels. Gents hostel and Ladies hostel is Wi-Fi areas which is also controlled by the server room in the campus. In addition to Wi-Fi in both Gents and Ladies Hostel we do have separate computer labs there also they can do work."
    };
    HostalFacility2Content = {
        instanceID: "HostalFacility2Content",
        title: "Each hostel has a reading room where news papers, periodicals and popular magazines are made available."
    };
    HostalFacility3Content = {
        instanceID: "HostalFacility3Content",
        title: "Each hostel has a reading room where news papers, periodicals and popular magazines are made available."
    };
    HostalFacility4Content = {
        instanceID: "HostalFacility4Content",
        title: "Both Gents & Ladies Hostel has mess facility. Mess serves Non-Veg and Veg food. This food court  follows a buffet system. Viswajyothi is providing and maintaining exceedingly hygienic and healthy  food service for the inmates. The mess hall has a capacity of 300 seats. "
    };
    GentsContent = {
        instanceID: "GentsContent",
        title: "Each hostel has a reading room where news papers, periodicals and popular magazines are made available."
    }
    

    GirlsHostalTitle = {
        instanceID: "GirlsHostalTitle",
        title: "Ladies Hostel"
    };
    GirlsHostalContent = {
        instanceID: "GirlsHostalContent",
        title: "The hostel system runs under the control of the warden Sr. Lissy."
    };

    GentsFeature1 = {
        instanceID: "GentsFeature1",
        title: "Maximum Capacity: 357 bed "
    }
    GirlsFeature1 = {
        instanceID: "GirlsFeature1",
        title: "Maximum Capacity: 452 bed "
    }
    HostalImagedata = {
        instanceID: "HostalImagedata",
        image: "hostel.jpg",
        width: "100%"
    }
    render() {
        return (
            <React.Fragment>
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />

                <div className="contain">
                    <HeadingOne data={this.HostalTitle} className="Heading" />
                    <ImageOne data={this.HostalImagedata} />
                    <div className="bodyContainer">
                        <BodyOneJustified data={this.HostalContent} />
                        <HeadingTwo data={this.HostalFacilityTitle} className="Heading" />
                        <ol>
                        <b><font size="4"><li>Dining </li></font></b>
                       <p>
                        <BodyOneJustified data={this.HostalFacility4Content} />
                       </p>
                        <b><font size="4"><li>Computing and Wifi Access</li></font></b>
                       <p>
                        <BodyOneJustified data={this.HostalFacility1Content} />
                       </p>
                       <b><font size="4"><li>Reading Room</li></font></b>
                       <p>
                        <BodyOneJustified data={this.HostalFacility2Content} />
                       </p>
                       <b><font size="4"><li>Television Room</li></font></b>
                       <p>
                        <BodyOneJustified data={this.HostalFacility3Content} />
                       </p>
                       <b><font size="4"><li>Sports, Games & Health Facilities</li></font></b>
                       <p>
                        <ol><font size="3">1. Four indoor Shuttle Badminton courts</font></ol>
                        <ol><font size="3">2. Basket Ball Court</font></ol>
                        <ol><font size="3">3. Multi-Gym</font></ol>
                        <ol><font size="3">4. Cricket-Football Ground</font></ol>
                        <ol><font size="3">5. 200 Meter Track</font></ol>
                        <ol><font size="3">6. Volley Ball Court </font></ol>
                        
                       </p>
                       
                       
                        </ol>
                        <HeadingTwo data={this.GentsHostalTitle} className="Heading" />
                        <ul>
                            <li><BodyOneJustified data={this.GentsFeature1} /></li>
                        </ul>
                        <HeadingTwo data={this.GirlsHostalTitle} className="Heading" />
                        <ul>
                            <li><BodyOneJustified data={this.GirlsFeature1} /></li>
                        </ul>
                    </div>
                </div>
                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (<MenuOverlay closeMenuFunction={this.closeMenu} />) : ("")}
            </React.Fragment>
        )
    }

}

export default Hostal;