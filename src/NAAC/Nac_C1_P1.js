import "./naac.css";
import React from "react";
import HeadingOne from "../Components/Texts/HeadingOne";
import Header from "../Components/Header&Footer/Header";
import Footer from "../Components/Header&Footer/Footer";
import MenuOverlay from "../Components/MenuOverlay/MenuOverlay";

class mocktest extends React.Component {
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

  ReachUsHeading = {
    instanceID: "ReachUsHeading",
    title: "PROJECT WORK/FIELD WORK/INTERNSHIP"
  };
  EnquiryHeading = {
    instanceID: "EnquiryHeading",
    title: "Reach Us"
  };

  render() {
    return (
      <React.Fragment>
        <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />
        {/*<div classNameName="bgg" id="contactUsListing"> two column design
          <div className="root">
            <div>
    <div className="child">*/}
    <div className="contain">
            <HeadingOne data={this.ReachUsHeading} className="Heading" />
              <table width="60%"><tr><td colSpan="3"><h3><b>Document Name</b></h3></td></tr>
              <tr><td colSpan="3"><h3><b>NAAC_data</b></h3></td></tr>
              <tr><td>DesignProject_19-20_EEE_AARIS.pdf</td><td><a href="https://vjcetwebadmin.github.io/downloads/NAACFiles/NAAC_C1_P1/DesignProject_19-20_EEE_AARIS.pdf" target="_blank" rel="noopener noreferrer"><b>VIEW</b></a></td><td><a href="https://vjcetwebadmin.github.io/downloads/NAACFiles/NAAC_C1_P1/DesignProject_19-20_EEE_AARIS.pdf" download=""><b>DOWNLOAD</b></a></td></tr>
              <tr><td>DesignProject_19-20_EEE_AutomaticWaterPumpController.pdf</td><td><a href="https://vjcetwebadmin.github.io/downloads/NAACFiles/NAAC_C1_P1/DesignProject_19-20_EEE_AutomaticWaterPumpController.pdf" target="_blank" rel="noopener noreferrer"><b>VIEW</b></a></td><td><a href="https://vjcetwebadmin.github.io/downloads/NAACFiles/NAAC_C1_P1/DesignProject_19-20_EEE_AutomaticWaterPumpController.pdf" download="" >DOWNLOAD</a></td></tr>
              <tr><td>DesignProject_19-20_EEE_HomeAutomation.pdf</td><td><a href="https://vjcetwebadmin.github.io/downloads/NAACFiles/NAAC_C1_P1/DesignProject_19-20_EEE_HomeAutomation.pdf" target="_blank" rel="noopener noreferrer"><b>VIEW</b></a></td><td><a href="https://vjcetwebadmin.github.io/downloads/NAACFiles/NAAC_C1_P1/DesignProject_19-20_EEE_HomeAutomation.pdf" download="">DOWNLOAD</a></td></tr>
             
              </table>


               {/* <h3 className="add"> Level 1</h3>
                <p><a href=" https://forms.gle/fuoRWBMs1gQnNASj7" target="_blank" rel="noopener noreferrer"><b>Paper 1 - Physics & Chemistry</b></a></p>
  <p><a href="https://forms.gle/Ez6tRswMSidn4nYt5" target="_blank" rel="noopener noreferrer"><b>Paper 2 - Mathematics</b></a></p>               */}
        </div>
        <Footer data={this.HomePageFooter} />
        {this.state.showMenu ? (
          <MenuOverlay closeMenuFunction={this.closeMenu} />
        ) : (
            ""
          )}
      </React.Fragment>
    );
  }
}

export default mocktest;
