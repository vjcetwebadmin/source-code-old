import React, { Component } from "react";

class ExternalLink extends Component {
    render() {
        const { instanceID, title, link } = this.props.data;

        return (
            <div className="AnchorLink" id={instanceID}>
                <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
            </div>
        );
    }
}

export default ExternalLink;
