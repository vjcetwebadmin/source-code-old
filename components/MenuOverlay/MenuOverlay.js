import React, { Component } from "react";
import { Link } from "react-router-dom";

class MenuOverlay extends Component {
  constructor() {
    super();
    this.state = {
      menuItem1: true,
      menuItem2: true,
      menuItem3: true,
      menuItem4: true,
      menuItem5: true,
      menuItem6: true,
      menuItem8: true,
      menuItem9: true,
      menuItem10: true

    };
  }

  menuItem1() {
    this.setState({
      menuItem1: !this.state.menuItem1
    });
  }

  menuItem2() {
    this.setState({
      menuItem2: !this.state.menuItem2
    });
  }

  menuItem3() {
    this.setState({
      menuItem3: !this.state.menuItem3
    });
  }

  menuItem4() {
    this.setState({
      menuItem4: !this.state.menuItem4
    });
  }

  menuItem5() {
    this.setState({
      menuItem5: !this.state.menuItem5
    });
  }

  menuItem6() {
    this.setState({
      menuItem6: !this.state.menuItem6
    });
  }
  menuItem8() {
    this.setState({
      menuItem8: !this.state.menuItem8
    });
  }
  menuItem9() {
    this.setState({
      menuItem9: !this.state.menuItem9
    });
  }
  menuItem10() {
    this.setState({
      menuItem10: !this.state.menuItem10
    });
  }


  render() {
    var menuItem1Style = {
      display: this.state.menuItem1 ? "none" : "grid"
    };

    var menuItem2Style = {
      display: this.state.menuItem2 ? "none" : "grid"
    };

    var menuItem3Style = {
      display: this.state.menuItem3 ? "none" : "grid"
    };

    var menuItem4Style = {
      display: this.state.menuItem4 ? "none" : "grid"
    };

    var menuItem5Style = {
      display: this.state.menuItem5 ? "none" : "grid"
    };

    var menuItem6Style = {
      display: this.state.menuItem6 ? "none" : "grid"
    };
    var menuItem8Style = {
      display: this.state.menuItem8 ? "none" : "grid"
    };
    var menuItem9Style = {
      display: this.state.menuItem9 ? "none" : "grid"
    };
    var menuItem10Style = {
      display: this.state.menuItem10 ? "none" : "grid"
    };


    return (
      <div
        className="MenuOverlay"
        style={{
          position: "fixed",
          top: "0px",
          left: "0px",
          right: "0px",
          bottom: "0px"
        }}
      >
        <div className="MenuOverlayContent">
          <img
            id="MenuOverlayCloseButton"
            src={require("../../Assets/close.svg")}
            width="30px"
            alt="img"
            onClick={e => {
              this.props.closeMenuFunction();
            }}
          />

          <div id="menuItem1">
            <div
              className="MenuOverlayItem"
              onClick={this.menuItem1.bind(this)}
            >
              <Link to="#">About VJCET</Link>
            </div>
            <div className="separator"></div>
            <div className="MenuOverlaySubLinkGroup" style={menuItem1Style}>
              <Link className="MenuOverlaySubLinks" to="/about">
                About College
              </Link>
              <div className="wseparator"></div>
              <Link className="MenuOverlaySubLinks" to="/about/accreditation">
                Accreditation
              </Link>
              <div className="wseparator"></div>
              <Link className="MenuOverlaySubLinks" to="/about/keyfunctionaries">
                Key Functionaries
              </Link>
              <div className="wseparator"></div>
              <Link
                to="/about/vision"
                className="MenuOverlaySubLinks"
              >
                Vision & Mission
            </Link>
              <div className="wseparator"></div>
              <Link
                to="/about/affliations"
                className="MenuOverlaySubLinks"
              >
                Affiliations
            </Link>
              <div className="wseparator"></div>
              <Link className="MenuOverlaySubLinks" to="/contact">
                Contact Us
              </Link>
            </div>
          </div>
          <div id="menuItem9">
            <div
              className="MenuOverlayItem"
              onClick={this.menuItem9.bind(this)}
            >
              <Link to="#">Admissions</Link>
            </div>

            <div className="separator"></div>
            <div className="MenuOverlaySubLinkGroup" style={menuItem9Style}>
              <a href="https://admission.vjcet.ac.in/" className="MenuOverlaySubLinks">B.Tech</a>
              <div className="wseparator"></div>
              <Link className="MenuOverlaySubLinks" to="/admission/mtech">
                M.Tech
              </Link>
              <div className="wseparator"></div>
              <a href="http://www.vjcetmba.in/" className="MenuOverlaySubLinks">MBA</a>
              <div className="wseparator"></div>
              <Link
                to="/admission/phd"
                className="MenuOverlaySubLinks"
              >
                Ph.D
            </Link>

            </div>
          </div>

          <div id="menuItem2">
            <div
              className="MenuOverlayItem"
              onClick={this.menuItem2.bind(this)}
            >
              <Link to="#">Portal</Link>
            </div>

            <div className="separator"></div>
            <div className="MenuOverlaySubLinkGroup" style={menuItem2Style}>
              <a href="https://portal.vjcet.ac.in" className="MenuOverlaySubLinks">
                VJCET Login
            </a>
              <div className="wseparator"></div>

              <a href="http://moodle.vjcet.ac.in" className="MenuOverlaySubLinks">
                Moodle
            </a>
              <div className="wseparator"></div>
              <a href="https://alumni.vjcet.ac.in/" className="MenuOverlaySubLinks">
                Alumni Login
            </a>

              {/* <Link className="MenuOverlaySubLinks" to="/about">
                Moodle
              </Link> */}

            </div>
          </div>

          <div id="menuItem3">
            <div
              className="MenuOverlayItem"
              onClick={this.menuItem3.bind(this)}
            >
              <Link to="#">Departments</Link>
            </div>

            <div className="separator"></div>
            <div className="MenuOverlaySubLinkGroup" style={menuItem3Style}>
              <Link className="MenuOverlaySubLinks" to="/departments/ce">
                Civil Engineering
              </Link>
              <div className="wseparator"></div>
              <Link className="MenuOverlaySubLinks" to="/departments/cse">
                Computer Science Engineering
              </Link>
              <div className="wseparator"></div>
              <Link className="MenuOverlaySubLinks" to="/departments/ece">
                Electronics & Communication Engineering
              </Link>
              <div className="wseparator"></div>
              <Link className="MenuOverlaySubLinks" to="/departments/eee">
                Electrical & Electronics Engineering
              </Link>
              <div className="wseparator"></div>
              <Link className="MenuOverlaySubLinks" to="/departments/it">
                Information Technology Engineering
              </Link>
              <div className="wseparator"></div>
              <Link className="MenuOverlaySubLinks" to="/departments/me">
                Mechanical Engineering
              </Link>
              <div className="wseparator"></div>
              <Link className="MenuOverlaySubLinks" to="/departments/s&h">
                Science & Humanities
              </Link>
              <div className="wseparator"></div>
              <a href="http://www.vjcetmba.in" className="MenuOverlaySubLinks" >
                MBA
            </a>
            </div>
          </div>

          <div id="menuItem4">
            <div
              className="MenuOverlayItem"
              onClick={this.menuItem4.bind(this)}
            >
              <Link to="#">Campus Life</Link>
            </div>

            <div className="separator"></div>
            <div className="MenuOverlaySubLinkGroup" style={menuItem4Style}>
              <Link className="MenuOverlaySubLinks" to="/campus-life">
                Campus
              </Link>
              <div className="wseparator"></div>
              <Link className="MenuOverlaySubLinks" to="/campus-life/collegecouncil">
                Student Council
              </Link>
              <div className="wseparator"></div>
              <Link className="MenuOverlaySubLinks" to="/campus-life/committees">
                Committees
              </Link>
              <div className="wseparator"></div>
              <Link className="MenuOverlaySubLinks" to="/campus-life/artsfest">
                Drishya- Arts Fest
              </Link>
              <div className="wseparator"></div>
              <Link className="MenuOverlaySubLinks" to="/campus-life/sportsfest">
                Drona- Sports Fest
              </Link>
              <div className="wseparator"></div>
              <Link className="MenuOverlaySubLinks" to="/campus-life/techfest">
                Bodhi- Tech Fest
              </Link>
              <div className="wseparator"></div>
              <Link className="MenuOverlaySubLinks" to="/campus-life/professionalbodies">
                Professional Bodies
              </Link>
              <div className="wseparator"></div>
              <Link className="MenuOverlaySubLinks" to="/campus-life/nss">
                National Service Scheme
              </Link>
            </div>
          </div>

          <div id="menuItem5">
            <div
              className="MenuOverlayItem"
              onClick={this.menuItem5.bind(this)}
            >
              <Link to="#">Facilities</Link>
            </div>

            <div className="separator"></div>
            <div className="MenuOverlaySubLinkGroup" style={menuItem5Style}>
              <Link className="MenuOverlaySubLinks" to="/facilities/ccc">
                Common Infrastructure
              </Link>
              <div className="wseparator"></div>
              <Link className="MenuOverlaySubLinks" to="/facilities/building">
                Building Infrastructure
              </Link>
              <div className="wseparator"></div>
              <Link className="MenuOverlaySubLinks" to="/facilities/library">
                Central Library
              </Link>
              <div className="wseparator"></div>
              <Link className="MenuOverlaySubLinks" to="/facilities/powerandbackup">
                Power & Backup
              </Link>
              <div className="wseparator"></div>
              <Link className="MenuOverlaySubLinks" to="/facilities/hostel">
                Residential Facility
              </Link>
              <div className="wseparator"></div>
              <Link className="MenuOverlaySubLinks" to="/facilities/healthandfitness">
                Health & Fitness
              </Link>
              <div className="wseparator"></div>
              <Link className="MenuOverlaySubLinks" to="/facilities/core-facilities">
                Campus Amenities
              </Link>
              <div className="wseparator"></div>
              <Link className="MenuOverlaySubLinks" to="/facilities/transportation">
                Transportation Facility
              </Link>
              {/* <Link className="MenuOverlaySubLinks" to="/about">
                Transportation
              </Link> */}
            </div>
          </div>

          <div id="menuItem6">
            <div
              className="MenuOverlayItem"
              onClick={this.menuItem6.bind(this)}
            >
              <Link to="#">Academics</Link>
            </div>

            <div className="separator"></div>
            <div className="MenuOverlaySubLinkGroup" style={menuItem6Style}>
              <Link className="MenuOverlaySubLinks" to="/academics/courses-offered">
                Courses-offered
              </Link>
              <div className="wseparator"></div>
              <Link className="MenuOverlaySubLinks" to="/academics/syllabusplan">
                Syllabus and Curriculam Plan
              </Link>
              <div className="wseparator"></div>
              <Link className="MenuOverlaySubLinks" to="/academics/syllabus">
                Academic Downloads
              </Link>
              <div className="wseparator"></div>
              <Link className="MenuOverlaySubLinks" to="/academics/honours">
                Honours
              </Link>

            </div>
          </div>
          <Link id="menuItem7" className="MenuOverlayItem" to="/placement">
            Placements
          </Link>
          <div className="separator"></div>
          <div id="menuItem10">
            <div
              className="MenuOverlayItem"
              onClick={this.menuItem10.bind(this)}
            >
              <Link to="#">E&D</Link>
            </div>

            <div className="separator"></div>
            <div className="MenuOverlaySubLinkGroup" style={menuItem10Style}>
              <Link className="MenuOverlaySubLinks" to="/ed/iedc">
                IEDC
              </Link>
              <div className="wseparator"></div>
              <Link className="MenuOverlaySubLinks" to="/ed/v-bic">
                V-BIC
              </Link>
              <div className="wseparator"></div>
              <Link className="MenuOverlaySubLinks" to="/ed/iiic">
                IIIC
              </Link>
              <div className="wseparator"></div>
              <Link className="MenuOverlaySubLinks" to="/ed/unai">
                UNAI-ASPIRE
              </Link>
            </div>
          </div>
          <Link id="menuItem7" className="MenuOverlayItem" to="/R&D">
            RD
          </Link>
          <div className="separator"></div>
          <Link id="menuItem7" className="MenuOverlayItem" to="iqac">
            IQAC
          </Link>


        </div>
      </div>
    );
  }
}
export default MenuOverlay;
