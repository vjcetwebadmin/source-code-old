
import React from "react";
import HeadingTwo from "../../Components/Texts/HeadingTwo";
import ImageOne from "../../Components/Images/ImageOne";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import "../styles.css"


import Header from "../../Components/Header&Footer/Header";
import Footer from "../../Components/Header&Footer/Footer";
import MenuOverlay from "../../Components/MenuOverlay/MenuOverlay";
import HeadingOne from "../../Components/Texts/HeadingOne";

class powerandbackup extends React.Component {
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


    PowerBackupTitle = {
        instanceID: "PowerBackupTitle",
        title: "Power & Backup"
    };
    GeneratorTitle = {
        instanceID: "GeneratorTitle",
        title: "Generators"
    };
    UPSTitle = {
        instanceID: "CCCTitle",
        title: "Uninterrupted Power Supply"
    };
    SolarTitle = {
        instanceID: "CCCTitle",
        title: "Solar On-Grid Power Generation"
    };
    
    Generatorcontent = {
        instanceID: "Generatorcontent",
        title: "To provide uninterrupted power, the college has two on-camps indoor diesel powered generator of 200 kVA and 320kVA capacities. The 200kVA generator is provided by an auto start mechanism and is mainly used during off peak hours. The 320kVA generator is manually operated and is operated during peak hours. "
    }
    UPScontent = {
        instanceID: "UPSContent",
        title: "All labs in Viswajyothi have back up power system  through UPS which has 60 Minutes stand by time."
    }
    Solarcontent = {
        instanceID: "Solarontent",
        title: " VJCET has a solar power generation of 250kW  worth 1.6 crores which annually produces 365000 unit per year. This plant is on grid solar power generator."
    }
    SubstationTitle = {
        instanceID: "Substation",
        title: "INDOOR SUBSTATION"
    };
    CCCImagedata = {
        instanceID: "CCCVjcImage",
        image: "Power and Back up.jpg",
        width: "100%"
    }
   

    render() {
        return (
            <React.Fragment>
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />

                <div className="contain">
                    <HeadingOne data={this.PowerBackupTitle} className="Heading" />
                    <ImageOne data={this.CCCImagedata} />
                    <br />
                    <div className="bodyContainer">
                        <HeadingTwo data={this.GeneratorTitle} className="Heading" />
                        <BodyOneJustified data={this.Generatorcontent} />
                        <HeadingTwo data={this.UPSTitle} className="Heading" />
                        <BodyOneJustified data={this.UPScontent} />                 
                        <HeadingTwo data={this.SolarTitle} className="Heading" />
                        <BodyOneJustified data={this.Solarcontent} />
                        <HeadingTwo data={this.SubstationTitle} className="Heading" />                    
                                <ol><font size="3">1. 11000V/433V ,315 kVA TRANSFORMER. Make: KEL</font></ol>
                                <ol><font size="3">2. 200 kVA DIESEL GENERATOR SET WITH AMF RELAY. Alternator : STARMFORD. Engine :CUMMINS</font></ol>
                                <ol><font size="3">3. 320 kVA DIESEL GENERATOR SET. Alternator : STARMFORD. Engine :CUMMINS</font></ol>
                            
                                
                            
                        
                    </div>
                </div>
                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (<MenuOverlay closeMenuFunction={this.closeMenu} />) : ("")}

            </React.Fragment>
        )
    }

}

export default powerandbackup;