import "./mocktest.css";
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
    title: "KEAM Mock Test 2021"
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
              <table width="60%"><tr><td colSpan="2"><h3><b>Click the link to attend the Mock Test. Your Score will be informed via SMS.</b></h3></td></tr>
              <tr><td rowspan="2"><h3> Level 1</h3></td><td><a href="https://forms.gle/fuoRWBMs1gQnNASj7" target="_blank" rel="noopener noreferrer"><b>Paper 1 - Physics & Chemistry</b></a></td></tr>
              <tr><td><a href="https://forms.gle/Ez6tRswMSidn4nYt5" target="_blank" rel="noopener noreferrer"><b>Paper 2 - Mathematics</b></a></td></tr>

              <tr><td rowspan="2"><h3> Level 2</h3></td><td><a href="https://forms.gle/8kis3WuGuPNe8A8cA" target="_blank" rel="noopener noreferrer"><b>Paper 1 - Physics & Chemistry</b></a></td></tr>
              <tr><td><a href="https://forms.gle/4j1VX8gGZ1Rw8qUF8" target="_blank" rel="noopener noreferrer"><b>Paper 2 - Mathematics</b></a></td></tr>

              <tr><td><h3> Level 3</h3></td><td>On third week of May 2021</td></tr>

              <tr><td><h3> Level 4</h3></td><td>On fourth week of May 2021</td></tr>
              
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
