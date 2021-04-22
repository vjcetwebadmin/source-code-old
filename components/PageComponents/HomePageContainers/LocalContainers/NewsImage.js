import React, { Component } from "react";

class NewsImage extends Component {
  render() {
    const { instanceID, image, width } = this.props.data;
    return (

      <img
        className={"NewsImg" + instanceID}
        src={require("../../Assets/" + image)}
        width={width}
        alt={"Unable to load!"}
      //height="50%"
      />
    )
  }
}

export default NewsImage;
