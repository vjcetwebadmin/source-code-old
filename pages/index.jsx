import React, { Component } from "react";
import DepartmentSection from "../components/PageComponents/HomePageContainers/DepartmentSection";
import FacilitiesSection from "../components/PageComponents/HomePageContainers/FacilitiesSection";
// import CarouselOne from "../components/PageComponents/HomePageContainers/CarouselOne";
import CarouselTwo from "../components/PageComponents/HomePageContainers/CarouselTwo";
//import CarouselThree from "../components/PageComponents/HomePageContainers/CarouselThree";
import CarouselFour from "../components/PageComponents/HomePageContainers/CarouselFour";
import Header from "../components/Header&Footer/Header";
import Footer from "../components/Header&Footer/Footer";
import MenuOverlay from "../components/MenuOverlay/MenuOverlay";
import Promo from "../components/Video/promo";
import CarouselFive from "../components/PageComponents/HomePageContainers/CarouselFive";
import NewsSection from "../components/PageComponents/HomePageContainers/NewsSection";
//import HomepageActivities from "../components/PageComponents/HomePageContainers/HomepageActivities";
class HomePage extends Component {
  state = { showMenu: false };

  openMenu = () => {
    this.setState({ showMenu: true });
  };
  closeMenu = () => {
    this.setState({ showMenu: false });
  };
  HomePageHeader = {
    instanceID: "HomePageHeader"
  };

  HomePageCarouselOne = {
    instanceID: "HomePageCarouselOne"
  };

  HomePageCarouselTwo = {
    instanceID: "HomePageCarouselTwo"
  };

  HomePageCarouselThree = {
    instanceID: "HomePageCarouselThree"
  };

  HomePageNewsSection = {
    instanceID: "HomePageNewsSection"
  }

  HomePageDepartmentSection = {
    instanceID: "HomePageDepartmentSection"
  };

  HomePageFacilitiesSection = {
    instanceID: "HomePageFacilitiesSection"
  };


  HomePageVisionSection = {
    instanceID: "HomePageVisionSection"
  };

  HomePageCarouselFour = {
    instanceID: "HomePageCarouselFour"
  };
  HomepageActivities = {
    instanceID: "HomepageActivities"
  };

  HomePageFooter = {
    instanceID: "HomePageFooter"
  };

  render() {
    return (
      <div className="HomePage">
        <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />
        <Promo />
        {/* <CarouselOne data={this.HomePageCarouselOne} /> */}
        <CarouselTwo data={this.HomePageCarouselTwo} />
        {/*<CarouselThree data={this.HomePageCarouselThree} />*/}
        <NewsSection data={this.HomePageNewsSection} />
        <DepartmentSection data={this.HomePageDepartmentSection} />
        <FacilitiesSection data={this.HomePageFacilitiesSection} />
        <CarouselFive data={this.HomepageActivities} />
        {/* <VisionSection data={this.HomePageFacilitiesSection} /> */}
        {/* <HomepageActivities data={this.HomepageActivities}/> */}
        <CarouselFour data={this.HomePageCarouselFour} />
        <Footer data={this.HomePageFooter} />
        {this.state.showMenu ? (
          <MenuOverlay closeMenuFunction={this.closeMenu} />
        ) : (
            ""
          )}
      </div>
    );
  }
}

export default HomePage;

/*
  <DepartmentSection />
        <FacilitiesSection />
        <VisionSection />
        <CarouselOne/>
        <CarouselTwo/>
        <CarouselThree/>
        <CarouselFour/>
        <Footer />
*/
