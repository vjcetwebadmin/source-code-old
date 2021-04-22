import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne";
import Bodythree from "../../Components/Texts/BodyThree";
import HeadingTwo from "../../Components/Texts/HeadingTwo";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified"
import "../../Components/DeptNewsBanner/gallery.css";
class Profile extends Component {
  state = {};
  ProfileHeading = {
    instanceID: "ProfileHeading",
    title: "Profile"
  };

  render() {
    const { ProfileDescriptionOne, Ceheading, Features } = this.props.data;
    return (

      <div className="Profile" id="profile">
        <div class="absolute">
          <p id="rcorners3" align="right"><font color="white">Way to go! 1st batch KTU-91.82% pass!</font></p>
        </div>
        <div >
          <p id="blankspace" align="right"></p>

        </div>
        <HeadingOne data={this.ProfileHeading} />
        <Bodythree data={ProfileDescriptionOne} />
        <div className="bodyContainer">
          <HeadingTwo data={Ceheading} className="Heading" />
          {Features.map(feature => (
            <div>
              <p><BodyOneJustified data={feature} /></p>
              <div className="bodyContainerInner">
                {feature.list.map(item => (<p><BodyOneJustified data={item}></BodyOneJustified></p>))}
              </div>
            </div>
          ))
          }
        </div>
      </div>
    );
  }
}

export default Profile;
