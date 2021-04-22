import React, { Component } from "react";
import "./NewsSection.css";
import NewsHeading from "../Components/Texts/NewsHeading";
import NewsCarouselPrimary from "./LocalContainers/NewsCarouselPrimary";
import NewsCarouselSecOne from "./LocalContainers/NewsCarouselSecOne";
import NewsCarouselSecTwo from "./LocalContainers/NewsCarouselSecTwo";
import NewsCarouselSecThree from "./LocalContainers/NewsCarouselSecThree";
import NewsCarouselSecFour from "./LocalContainers/NewsCarouselSecFour";

class NewsSection extends Component {
  state = {};

  News = {
    instanceID: "NewsSectionHead",
    title: "News"
  };

  render() {

    const { instanceID } = this.props.data;

    return (
      <div className="HomePageNewsSection" id={instanceID}>
        <NewsHeading data={this.News} />
        <div className="BigNews">
          <NewsCarouselPrimary />
        </div>
        <div className="SmallNews">
          <div className="SmallNewsRow">
            <div className="SmallNewsItem SmallNewsFirst">
              <NewsCarouselSecOne />
            </div>
            <div className="SmallNewsItem SmallNewsSecond">
              <NewsCarouselSecTwo />
            </div>
          </div>
          <div className="SmallNewsRow">
            <div className="SmallNewsItem SmallNewsFirst">
              <NewsCarouselSecThree />
            </div>
            <div className="SmallNewsItem SmallNewsSecond">
              <NewsCarouselSecFour />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsSection;