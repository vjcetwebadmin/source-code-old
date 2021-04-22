import React from "react";
//import HeadingTwo from "../../Components/Texts/HeadingTwo";
import ImageOne from "../../Components/Images/ImageOne";
//import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import "../../FacilitiesPageContainers/styles.css";
import "../../Components/News/gallery.css";
import Header from "../../Components/Header&Footer/Header";
import Footer from "../../Components/Header&Footer/Footer";
import MenuOverlay from "../../Components/MenuOverlay/MenuOverlay";
import HeadingOne from "../../Components/Texts/HeadingOne";
//import ImageOne from "../../Components/Images/ImageOne";
import ImageTwo from "../../Components/Images/imageTwo";

/* import HeadingTwo from "../../Components/Texts/HeadingTwo";
import ImageOne from "../../Components/Images/ImageOne";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import "../styles.css"

import Header from "../../Components/Header&Footer/Header";
import Footer from "../../Components/Header&Footer/Footer";
import MenuOverlay from "../../Components/MenuOverlay/MenuOverlay"; 
import HeadingOne from "../../Components/Texts/HeadingOne";*/

class Newseight extends React.Component {
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


    NewsTitle = {
        instanceID: "NewsTitle",
        title: " KTU B.Tech Examination Details"
    };
    Newscontent = {
        instanceID: "Newscontent",
        title: " The 1st batch of KTU(2015-19) secured 91.82% pass"
    };
    
    NewsImagedata1 = {
        instanceID: "NewsImagedata1",
        image: "NewsImages/Mock_Test_Banner.jpg",
        width: "80%"
    }
    NewsImagedata2 = {
        instanceID: "NewsImagedata2",
        image: "NewsImages/ME_fdp_back.jpg",
        width: "80%"
    }
    NewsImagedata3 = {
        instanceID: "NewsImagedata3",
        image: "NewsImages/download.png",
        width: "7%"
    }
    

    render() {
        return (
            <React.Fragment>
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />

                <div className="contain">
                  <HeadingOne data={this.NewsTitle}></HeadingOne>
                   <br/>
            
                   <table id="tableformat">
                        <tr><th colspan="2">Downloads</th></tr>
                            <tr><td>Campus Layout</td><td><a href="https://vjcet.org/downloads/news/Campus-Layout.jpg" data-toggle="tooltip" title="Download" target="_blank" rel="noopener noreferrer"><ImageTwo data={this.NewsImagedata3}/></a></td></tr>
                            <tr><td>Layout- A Block</td><td><a href="https://vjcet.org/downloads/news/A-BLOCK.jpg" data-toggle="tooltip" title="Download" target="_blank" rel="noopener noreferrer"><ImageTwo data={this.NewsImagedata3}/></a></td></tr>
                            <tr><td>Layout- B Block</td><td><a href="https://vjcet.org/downloads/news/B-BLOCK.jpg" data-toggle="tooltip" title="Download" target="_blank" rel="noopener noreferrer"><ImageTwo data={this.NewsImagedata3}/></a></td></tr>
                            <tr><td>Layout- C Block</td><td><a href="https://vjcet.org/downloads/news/C-BLOCK.jpg" data-toggle="tooltip" title="Download" target="_blank" rel="noopener noreferrer"><ImageTwo data={this.NewsImagedata3}/></a></td></tr>
                            <tr><td>Layout- D Block</td><td><a href="https://vjcet.org/downloads/news/D-BLOCK.jpg" data-toggle="tooltip" title="Download" target="_blank" rel="noopener noreferrer"><ImageTwo data={this.NewsImagedata3}/></a></td></tr>
                            
                    </table>
                   
                    
                </div>
                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (<MenuOverlay closeMenuFunction={this.closeMenu} />) : ("")}

            </React.Fragment>
        )
    }

}

export default Newseight;