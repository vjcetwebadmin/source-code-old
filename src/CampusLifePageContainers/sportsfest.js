import React from "react";
import HeadingOne from "../Components/Texts/HeadingOne";
import Bodythree from "../Components/Texts/BodyThree";
import Header from "../Components/Header&Footer/Header";
import Footer from "../Components/Header&Footer/Footer";
import MenuOverlay from "../Components/MenuOverlay/MenuOverlay";
import "../Components/Images/gallery.css";


class sportsfest extends React.Component {
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
    ArtsfestTitle = {
        instanceID: "ArtsfestTitle",
        title: "Drishya 2019"
    };

    ProfileHeading = {
        instanceID: "ProfileHeading",
        title: "DRONA Sports Fest"
      };
      ProfileDescriptionOne = {
        instanceID: "ProfileDescriptionOne",
        title:
          "Every year, college conducts athletic championship “DRONA” where each house participates under the leadership of their respective house captains. It conducts as two day program in the month of January every year."
      };
      ProfileDescriptionTwo = {
        instanceID: "ProfileDescriptionTwo",
        title:
          "It comments with a colorful March pas of each house in a competitive spirit. It has been successful in proving platform for the students to exhibit their athletic skills. This proved to be healthy competition between the athletes setting new records in speed, height and distance."
      };
   

    render() {
        return (
            <React.Fragment>
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />
                <HeadingOne data={this.ProfileHeading} />
                 <Bodythree data={this.ProfileDescriptionOne} /> 
                 <Bodythree data={this.ProfileDescriptionTwo} />         
                <br></br>
               <div class="gallery">                    
                    <iframe src="https://vjcet.org/downloads/gallery/drona.html" width="90%" height="500" title="Drishya" ></iframe>
                </div>        
               
                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (<MenuOverlay closeMenuFunction={this.closeMenu} />) : ("")}

            </React.Fragment>
        )
    }

}

export default sportsfest;