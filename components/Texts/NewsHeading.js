import React, { Component } from "react";
import "./NewsHeading.css";

class NewsHeading extends Component {
  render() {
    const { instanceID, title } = this.props.data;

    return (
      <div className="NewsHeading" id={instanceID}>
        <h1>{title}</h1>
      </div>
    );
  }
}

export default NewsHeading;
