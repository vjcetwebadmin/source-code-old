import React from "react";
import HeadingOne from "../../Components/Texts/HeadingOne";
import MenuOverlay from "../../Components/MenuOverlay/MenuOverlay";
import "../../Components/Images/gallery.css";
import ImageOne from "../../Components/Images/ImageOne";


class Publications extends React.Component {
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

    LogoImagedata = {
        instanceID: "LogoImage",
        image: "ED/iedc_qr.jpg",
        width: "15%"
    }
    CampustTitle = {
        instanceID: "CampustTitle",
        title: "To Register New Startup"
    };
    
    
    
   

    render() {
        return (
            <React.Fragment>
                

                <div className="Profile" id="profile">
                <HeadingOne data={this.CampustTitle} />
                <ImageOne data={this.LogoImagedata} />
                <div className="bodyContainer">
                    
                    <p align="center">OR</p>
                   
                </div>
                <p align="center">Register <a href="https://forms.gle/uWaSVpTx8wWsVt7H9" target="_blank" rel="noopener noreferrer"> Online</a> or <a href="https://vjcet.org/downloads/iedc/IEDC_registration.pdf" target="_blank" rel="noopener noreferrer">Download</a> the Registration from</p>
            </div>      
               
                
                {this.state.showMenu ? (<MenuOverlay closeMenuFunction={this.closeMenu} />) : ("")}

            </React.Fragment>
        )
    }

}

export default Publications;