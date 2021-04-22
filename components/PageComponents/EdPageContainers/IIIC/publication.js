import React from "react";
import HeadingOne from "../../Components/Texts/HeadingOne";
import MenuOverlay from "../../Components/MenuOverlay/MenuOverlay";
import "../../Components/Images/gallery.css";


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


    CampustTitle = {
        instanceID: "CampustTitle",
        title: "TECH WAVES- Annual Report"
    };
    
    
    
   

    render() {
        return (
            <React.Fragment>
                

                <div className="Profile" id="profile">
                <HeadingOne data={this.CampustTitle} />
                <div className="bodyContainer">
                    
                    <iframe src="https://vjcet.org/downloads/iiic/TechWaves.pdf" width="90%" height="800" title="Campus Map" align="center"></iframe>
                </div>
            </div>      
               
                
                {this.state.showMenu ? (<MenuOverlay closeMenuFunction={this.closeMenu} />) : ("")}

            </React.Fragment>
        )
    }

}

export default Publications;