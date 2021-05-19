import React, { Component } from "react";
import "../Components/SideNav.css";
import Profile from "./profile";
import Functio from "./Functions";
import Strateg from "./Strategies";
import Objecti from "./Objectives";
import Benifit from "./Benefits";
import MinutesR from "./minutes";
//import Result from "./result";
//import FacultyNav from "./facultynav";
class SideNav extends Component {
  state = {
    showProfile: true,
    showVision: false,
    showPeo: false,
    showProgram: false,
    showLib: false,
    showAss: false,
    showRes: false,
    showfac: false
  };
  onClickP = () => {
    this.setState({
      showProfile: true,
      showVision: false,
      showPeo: false,
      showProgram: false,
      showLib: false,
      showAss: false,
      showRes: false,
      showfac: false
    });
  };
  onClickV = () => {
    this.setState({
      showProfile: false,
      showVision: true,
      showPeo: false,
      showProgram: false,
      showLib: false,
      showAss: false,
      showRes: false,
      showfac: false
    });
  };
  onClickPeo = () => {
    this.setState({
      showProfile: false,
      showVision: false,
      showPeo: true,
      showProgram: false,
      showLib: false,
      showAss: false,
      showRes: false,
      showfac: false
    });
  };
  onClickProg = () => {
    this.setState({
      showProfile: false,
      showVision: false,
      showPeo: false,
      showProgram: true,
      showLib: false,
      showAss: false,
      showRes: false,
      showfac: false
    });
  };
  onClickLib = () => {
    this.setState({
      showProfile: false,
      showVision: false,
      showPeo: false,
      showProgram: false,
      showLib: true,
      showAss: false,
      showRes: false,
      showfac: false
    });
  };
  onClickAss = () => {
    this.setState({
      showProfile: false,
      showVision: false,
      showPeo: false,
      showProgram: false,
      showLib: false,
      showAss: true,
      showRes: false,
      showfac: false
    });
  };
  onClickRes = () => {
    this.setState({
      showProfile: false,
      showVision: false,
      showPeo: false,
      showProgram: false,
      showLib: false,
      showAss: false,
      showRes: true,
      showfac: false
    });
  };
  onClickFac = () => {
    this.setState({
      showProfile: false,
      showVision: false,
      showPeo: false,
      showProgram: false,
      showLib: false,
      showAss: false,
      showRes: false,
      showfac: true
    });
  };

  render() {
    return (
      <React.Fragment>

        <div class="Deptcontent">
          <div class="sidenav">
            <input

              value="Profile"
              class="button"
              onClick={this.onClickP}
            />
            <input

              value="Objectives"
              class="button"
              onClick={this.onClickV}
            />
            <input

              value="Functions"
              class="button"
              onClick={this.onClickPeo}
            />
             <input

              value="Strategies"
              class="button"
              onClick={this.onClickProg}
            />  
            <input

              value="Benefits"
              class="button"
              onClick={this.onClickLib}
              />  
              <input

              value="Minutes"
              class="button"
              onClick={this.onClickAss}
            />  
          </div>
         
          <div class="content">
            {this.state.showProfile ? <Profile /> : null}
            {this.state.showVision ? <Objecti /> : null}
            {this.state.showPeo ? <Functio /> : null}
            {this.state.showProgram ? <Strateg /> : null}
            {this.state.showLib ? <Benifit /> : null}
            {this.state.showAss ? <MinutesR /> : null}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SideNav;
