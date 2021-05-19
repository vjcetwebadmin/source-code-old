import React, { Component } from "react";
// import ImageOne from "../Components/Images/ImageOne";
import HeadingOne from "../Components/Texts/HeadingOne";
import BodyThree from "../Components/Texts/BodyThree";
import "./Research.css"
import Expandable from "../Components/NewComponents/Expandable";

//import Profile from "./csi";

class minutes extends Component {
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
    HomePageVisionSection = {
        instanceID: "HomePageVisionSection"
    };
    HomePageFacilitiesSection = {
        instanceID: "HomePageFacilitiesSection"
    };
    // ResearchImg = {
    //     instanceID: "ResearchImg",
    //     image: "cover2-1.jpg",
    //     width: "93%"
    // }
    ResearchHeading = {
        instanceID: "ResearchHeading",
        title: "Minutes And Reports"
    }
    ReserchBody1 = {
        instanceID: "ReserchBody1",
        title: "IQAC will facilitate /contribute"
    }
      
    render() {
        const IQAC_Data = [
            {
              year: "2019-2020",
              events: [
                {
                  date: "08-07-2019",
                  minutes: "ftp://202.88.251.252/Website/iqac/N15.pdf",
                  action: "ftp://202.88.251.252/Website/iqac/A16.pdf",
                },
                {
                  date: "07-10-2019",
                  minutes: "ftp://202.88.251.252/Website/iqac/N16.pdf",
                  action: "ftp://202.88.251.252/Website/iqac/A17.pdf",
                },
                {
                  date: "18-12-2019",
                  minutes: "ftp://202.88.251.252/Website/iqac/N17.pdf",
                  action: "ftp://202.88.251.252/Website/iqac/A18.pdf",
                },
                {
                  date: "17-02-2020",
                  minutes: "ftp://202.88.251.252/Website/iqac/N18.pdf",
                  action: "",
                },
              ],
              annualReport: "",
            },
            {
              year: "2018-2019",
              events: [
                {
                  date: "06-07-2018",
                  minutes: "ftp://202.88.251.252/Website/iqac/N10.pdf",
                  action: "ftp://202.88.251.252/Website/iqac/A11.pdf",
                },
                {
                  date: "04-10-2018",
                  minutes: "ftp://202.88.251.252/Website/iqac/N11.pdf",
                  action: "ftp://202.88.251.252/Website/iqac/A12.pdf",
                },
                {
                  date: "20-12-2018",
                  minutes: "ftp://202.88.251.252/Website/iqac/N12.pdf",
                  action: "ftp://202.88.251.252/Website/iqac/A13.pdf",
                },
                {
                  date: "26-02-2019",
                  minutes: "ftp://202.88.251.252/Website/iqac/N13.pdf",
                  action: "ftp://202.88.251.252/Website/iqac/A14.pdf",
                },
                {
                  date: "29-04-2019",
                  minutes: "ftp://202.88.251.252/Website/iqac/N14.pdf",
                  action: "ftp://202.88.251.252/Website/iqac/A15.pdf",
                },
              ],
              annualReport: "",
            },
            {
              year: "2017-2018",
              events: [
                {
                  date: "18-07-2017",
                  minutes: "ftp://202.88.251.252/Website/iqac/N07.pdf",
                  action: "ftp://202.88.251.252/Website/iqac/A08.pdf",
                },
                {
                  date: "13-11-2017",
                  minutes: "ftp://202.88.251.252/Website/iqac/N08.pdf",
                  action: "ftp://202.88.251.252/Website/iqac/A09.pdf",
                },
                {
                  date: "09-04-2018",
                  minutes: "ftp://202.88.251.252/Website/iqac/N09.pdf",
                  action: "ftp://202.88.251.252/Website/iqac/A10.pdf",
                },
               ],
              annualReport: "",
            },
            {
              year: "2016-2017",
              events: [
                {
                  date: "12-07-2016",
                  minutes: "ftp://202.88.251.252/Website/iqac/N07.pdf",
                  action: "ftp://202.88.251.252/Website/iqac/A08.pdf",
                },
                {
                  date: "17-11-2016",
                  minutes: "ftp://202.88.251.252/Website/iqac/N05.pdf",
                  action: "ftp://202.88.251.252/Website/iqac/A06.pdf",
                },
                {
                  date: "16-03-2017",
                  minutes: "ftp://202.88.251.252/Website/iqac/N04.pdf",
                  action: "ftp://202.88.251.252/Website/iqac/A05.pdf",
                },
               ],
              annualReport: "",
            },
            {
              year: "2015-2016",
              events: [
                {
                  date: "15-07-2015",
                  minutes: "ftp://202.88.251.252/Website/iqac/N01.pdf",
                  action: "ftp://202.88.251.252/Website/iqac/A01.pdf",
                },
                {
                  date: "18-11-2015",
                  minutes: "ftp://202.88.251.252/Website/iqac/N02.pdf",
                  action: "ftp://202.88.251.252/Website/iqac/A03.pdf",
                },
                {
                  date: "17-03-2016",
                  minutes: "ftp://202.88.251.252/Website/iqac/N03.pdf",
                  action: "ftp://202.88.251.252/Website/iqac/A04.pdf",
                },
               ],
              annualReport: "",
            },
          ];
        return (
            <div className="HomePage">
                
                <HeadingOne data={this.ResearchHeading}></HeadingOne>
                {/* <ImageOne data={this.ResearchImg}></ImageOne> 
                <BodyThree data={this.ReserchBody1} /><br />*/}
                <Expandable data={IQAC_Data} />
 
              </div>
        );
    }
}

export default minutes;