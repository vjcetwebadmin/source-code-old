import React from "react";
import Canteen from "./Canteen";

import Health from "./Health";

import BankPost from "./BankPost";
import HeadingOne from "../Components/Texts/HeadingOne";

class FacilitiesPageContainers extends React.Component {
  FacTitle = {
    instanceID: "FacTitle",
    title: "Campus Amenities"
  };
  render() {
    return (
      <React.Fragment>
        <HeadingOne data={this.FacTitle} className="Heading" />
        <Canteen />
        <Health />
        <BankPost />
        <br /> <br />
      </React.Fragment>
    );
  }
}
export default FacilitiesPageContainers;
