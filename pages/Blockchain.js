import React from "react";
import HeadingTwo from "../Components/Texts/HeadingTwo";
import ImageOne from  "../Components/Images/ImageOne";
import BodyOneJustified from "../Components/Texts/BodyOneJustified";
import "../FacilitiesPageContainers/styles.css";

import Header from "../Components/Header&Footer/Header";
import Footer from "../Components/Header&Footer/Footer";
import MenuOverlay from "../Components/MenuOverlay/MenuOverlay";
import HeadingOne from "../Components/Texts/HeadingOne";

/* import HeadingTwo from "../../Components/Texts/HeadingTwo";
import ImageOne from "../../Components/Images/ImageOne";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import "../styles.css"

import Header from "../../Components/Header&Footer/Header";
import Footer from "../../Components/Header&Footer/Footer";
import MenuOverlay from "../../Components/MenuOverlay/MenuOverlay";
import HeadingOne from "../../Components/Texts/HeadingOne";
 */
class Blockchain extends React.Component {
    state = { showMenu: false };
    openMenu = () => {
        console.log("opening Menu");
        this.setState({ showMenu: true });
    };
    closeMenu = () => {
        this.setState({ showMenu: false });
    };
    HomePageHeader = {
        instanceID: "HomePageHeader"
    };
    HomePageFooter = {
        instanceID: "HomePageFooter"
    };


    CCCNATitle = {
        instanceID: "CCCTitle",
        title: "Kerala Block Chain Academy Membership"
    };
    CCCTitle = {
        instanceID: "CCCTitle",
        title: ""
    };
    NATitle = {
        instanceID: "CCCTitle",
        title: ""
    };
    CCCContent1 = {
        instanceID: "CCCContent1",
        title: ""
    }
    CCCContent2 = {
        instanceID: "CCCContent2",
        title: ""
    }
    CCCImagedata = {
        instanceID: "CCCVjcImage",
        image: "blockchain.jpg",
        width: "60%"
    }
    Server1 = {
        instanceID: "Server1",
        title: ""
    }
    Server2 = {
        instanceID: "Server2",
        title: ""
    }
    Server3 = {
        instanceID: "Server3",
        title: ""
    }
    Server4 = {
        instanceID: "Server4",
        title: ""
    }
    Server5 = {
        instanceID: "Server5",
        title: ""
    }
    Server6 = {
        instanceID: "Server6",
        title: ""
    }
    Server7 = {
        instanceID: "Server7",
        title: ""
    }
    Server8 = {
        instanceID: "Server8",
        title: ""
    }

    render() {
        return (
            <React.Fragment>
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />

                <div className="contain">
                    <HeadingOne data={this.CCCNATitle} className="Heading" />
                    <p align="center">  <ImageOne data={this.CCCImagedata} /></p>
                    <br />
                    <div className="bodyContainer">
                        <HeadingTwo data={this.CCCTitle} className="Heading" />
                        <BodyOneJustified data={this.CCCContent1} />
                        <HeadingTwo data={this.NATitle} className="Heading" />
                        <BodyOneJustified data={this.CCCContent2} />
                        <div className="bodyContainerInner">
                            <p><BodyOneJustified data={this.Server1} /></p>
                            <p><BodyOneJustified data={this.Server2} /></p>
                            <p><BodyOneJustified data={this.Server3} /></p>
                            <p><BodyOneJustified data={this.Server4} /></p>
                            <p><BodyOneJustified data={this.Server5} /></p>
                            <p><BodyOneJustified data={this.Server6} /></p>
                            <p><BodyOneJustified data={this.Server7} /></p>
                            <p><BodyOneJustified data={this.Server8} /></p>
                        </div>

                    </div>
                </div>
                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (<MenuOverlay closeMenuFunction={this.closeMenu} />) : ("")}

            </React.Fragment>
        )
    }

}

export default Blockchain;