import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
 
import NewsImage from "./NewsImage"
//import CarouselCaption from "react-bootstrap/CarouselCaption";
//import CarouselCaption from "react-bootstrap/CarouselCaption";

//This is Carousal Component. Uses a library called react-bootstrap. Don't Mess with..

class NewsCarouselSecOne extends Component {

  Title1 = {
    instanceID: "NewsSecondaryTLOneTitle",
    title: "Drishya 2k19",
    link: "https://vjcet.org/downloads/gallery/drishya.html"
  }

  Image1 = {
    instanceID: "NewsSecondaryTLOneImage",
    image: "NewsSection/Section1/Section1.jpg",
    //Recommended Image Size is 733px x 400px.
    width: "100%"
  }

  Title2 = {
    instanceID: "NewsSecondaryTLTwoTitle",
    title: "Magnum 2k19",
    link: "https://vjcet.org/downloads/gallery/magnum.html"
  }

  Image2 = {
    instanceID: "NewsSecondaryTLTwoImage",
    image: "NewsSection/Section1/Section2.jpg",
    //Recommended Image Size is 733px x 400px.
    width: "100%"
  }
  Title3 = {
    instanceID: "NewsSecondaryTLThreeTitle",
    title: "Drona 2k19",
    link: "https://vjcet.org/downloads/gallery/drona.html"
  }

  Image3 = {
    instanceID: "NewsSecondaryTLThreeImage",
    image: "NewsSection/Section1/Section3.png",
    //Recommended Image Size is 733px x 400px.
    width: "100%"
  }

  render() {

    //const { instanceID } = this.props.data;

    return (
      <Carousel>
        <Carousel.Item>
          <NewsImage data={this.Image1} />
          <a href={this.Title1.link}>
            <Carousel.Caption>
              <h3>{this.Title1.title}</h3>
            </Carousel.Caption>
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <NewsImage data={this.Image2} />
          <a href={this.Title2.link}>
            <Carousel.Caption>
              <h3>{this.Title2.title}</h3>
            </Carousel.Caption>
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <NewsImage data={this.Image3} />
          <a href={this.Title3.link}>
            <Carousel.Caption>
              <h3>{this.Title3.title}</h3>
            </Carousel.Caption>
          </a>
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default NewsCarouselSecOne;