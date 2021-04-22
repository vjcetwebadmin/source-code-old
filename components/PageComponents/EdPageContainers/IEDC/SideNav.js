import React, { Component } from "react";
import "../../Components/SideNav.css";
import Profile from "./profile";
import Vision from "./Objectives";
import PEO from "./functions";
import Program from "./recentactivity";
import Library from "./projects";
import Association from "./registration";
import Result from "./result";
import FacultyNav from "./facultynav";
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

              value="Activities"
              class="button"
              onClick={this.onClickProg}
            /> 
             {/* <input

              value="Mentoring"
              class="button"
              onClick={this.onClickFac}
            />   */}
             <input

              value="Projects"
              class="button"
              onClick={this.onClickLib}
            />
             <input

              value="Mentoring"
              class="button"
              onClick={this.onClickRes}
            /> 
            <input

              value="Register now"
              class="button"
              onClick={this.onClickAss}
            />
           
          </div>
          <div class="dropdownD">
            <button class="button">Menu</button>
            <div class="dropdownD-content">
              <input

                value="Profile"
                class="button"
                onClick={this.onClickP}
              />
              <input

                value="Vision"
                class="button"
                onClick={this.onClickV}
              />
              <input

                value="PEO & PSO"
                class="button"
                onClick={this.onClickPeo}
              />
              <input

                value="Program"
                class="button"
                onClick={this.onClickProg}
              />
              <input

                value="Faculty"
                class="button"
                onClick={this.onClickFac}
              />
              <input

                value="Library"
                class="button"
                onClick={this.onClickLib}
              />
              <input

                value="Association"
                class="button"
                onClick={this.onClickAss}
              />
              <input

                value="Result"
                class="button"
                onClick={this.onClickRes}
              />
            </div>
          </div>
          <div class="content">
            {this.state.showProfile ? <Profile /> : null}
            {this.state.showVision ? <Vision /> : null}
            {this.state.showPeo ? <PEO /> : null}
            {this.state.showProgram ? <Program /> : null}
            {this.state.showfac ? <FacultyNav /> : null}
            {this.state.showLib ? <Library /> : null}
            {this.state.showAss ? <Association /> : null}
            {this.state.showRes ? <Result /> : null}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SideNav;
