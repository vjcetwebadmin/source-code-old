import React from "react";
import HeadingOne from "../Components/Texts/HeadingOne";
import Header from "../Components/Header&Footer/Header";
import Footer from "../Components/Header&Footer/Footer";
import MenuOverlay from "../Components/MenuOverlay/MenuOverlay";

import "../FacilitiesPageContainers/styles.css";
import "../Components/News/gallery.css";

class RTI extends React.Component {
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
    title: "Right To Information"
  };
  EnquiryHeading = {
    instanceID: "EnquiryHeading",
    title: "Reach Us"
  };
  render() {
    return (
      <React.Fragment>
        <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />
        <div className="contain">
            <HeadingOne data={this.ReachUsHeading} className="Heading" />
                {/*<table id="tableformat">
                            <tr><th >SL No</th><th>Name</th><th>View</th></tr>
                            <tr><td>1</td><td>Program Officer</td><td>2008-'09</td></tr>                            
                 </table>*/}                

                <p><a href="https://vjcet.org/downloads/rti2005.pdf" target="_blank" rel="noopener noreferrer"><b>RTI Act 2005</b></a></p>
                <p><a href="https://vjcet.org/downloads/RTICommittee.pdf" target="_blank" rel="noopener noreferrer"><b>RTI - Public Information Officers</b></a></p>               
        <Footer data={this.HomePageFooter} />
        {this.state.showMenu ? (
          <MenuOverlay closeMenuFunction={this.closeMenu} />
        ) : (
            ""
          )}           

          </div>
       </React.Fragment>
    );
  }
}

export default RTI;
