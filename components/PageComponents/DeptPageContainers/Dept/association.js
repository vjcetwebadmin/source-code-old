import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne";
import Bodythree from "../../Components/Texts/BodyThree";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified"
class Library extends Component {
  state = {};
  DeptAssociationHeadingOne = {
    instanceID: "DeptAssociationHeadingOne",
    title: "Association"
  };
  render() {
    const { desc, list } = this.props.data;
    return (
      <div className="DeptAssociation" id="dept-association">
        <HeadingOne data={this.DeptAssociationHeadingOne} />
        {desc.map(i => (<Bodythree data={i} />))}
        <div className="bodyContainer">
          <div className="bodyContainerInner">
            {list.map(i => (<p><BodyOneJustified data={i}></BodyOneJustified></p>))}
          </div>
        </div>
      </div>
    );
  }
}

export default Library;
