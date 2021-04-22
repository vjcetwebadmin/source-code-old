import React from "react";
//import HeadingTwo from "../../Components/Texts/HeadingTwo";
//import ImageOne from "../../Components/Images/ImageOne";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import "../../FacilitiesPageContainers/styles.css";

import Header from "../../Components/Header&Footer/Header";
import Footer from "../../Components/Header&Footer/Footer";
import MenuOverlay from "../../Components/MenuOverlay/MenuOverlay";
import HeadingOne from "../../Components/Texts/HeadingOne";
//import ImageTwo from "../../Components/Images/imageTwo";
//import BodyThree from "../../Components/Texts/BodyThree";
//import ButtonTwo from "../../Components/Buttons/ButtonTwo";
import "./news.css";
/* import HeadingTwo from "../../Components/Texts/HeadingTwo";
import ImageOne from "../../Components/Images/ImageOne";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import "../styles.css"

import Header from "../../Components/Header&Footer/Header";
import Footer from "../../Components/Header&Footer/Footer";
import MenuOverlay from "../../Components/MenuOverlay/MenuOverlay";
import HeadingOne from "../../Components/Texts/HeadingOne";
 */
class Newsone extends React.Component {
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
        title: "KTU 2016-2020 Batch Final Semester Results Published"
    };
    NewsContent1 = {
        instanceID: "NewsContent1",
        title: ""
    };
   
    
    NewsImagedata1 = {
        instanceID: "NewsImagedata1",
        image: "NewsImages/ME_fdp_front.jpg",
        width: "80%"
    }
    NewsImagedata2 = {
        instanceID: "NewsImagedata2",
        image: "NewsImages/ME_fdp_back.jpg",
        width: "80%"
    }
    NewsImagedata3 = {
        instanceID: "NewsImagedata3",
        image: "NewsImages/Registernow.jpg",
        width: "20%"
    }
    

    render() {
        return (
            <React.Fragment>
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />

                <div className="contain">
                    
                    <div className="bodyContainer">
                    <HeadingOne data={this.NewsTitle}></HeadingOne>
                    <BodyOneJustified data={this.NewsContent1}/>
                    <p><h5>549 Out of 552 Students Passed in the Final Semester Examinations (99.5%)</h5></p>
                    <p><h5><a href="https://vjcet.org/downloads/news/students48.pdf" target="_blank" rel="noopener noreferrer">48 Students scored SGPA 10 out of 10</a></h5></p>
                    <p><h5><a href="https://vjcet.org/downloads/news/Placement_19-20.pdf" target="_blank" rel="noopener noreferrer">More than 300 students got placement in reputed firms</a></h5></p>
                </div>
             
                                    
                    <br />                 

                  
            
             
 
             
           
                </div>
                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (<MenuOverlay closeMenuFunction={this.closeMenu} />) : ("")}

            </React.Fragment>
        )
    }

}

export default Newsone;