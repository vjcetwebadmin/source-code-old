import React, { Component } from "react";

class Line extends Component {
  render() {
    const { instanceID } = this.props.data;
    return (
      <div className="Line" id={instanceID}>
        {/* <hr /> */}
      </div>
    );
  }
}
export default Line;
