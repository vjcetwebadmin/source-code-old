import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./NewsCarousel.css";
import NewsImage from "./NewsImage";
//import CarouselCaption from "react-bootstrap/CarouselCaption";

//This is Carousal Component. Uses a library called react-bootstrap. Don't Mess with..

class NewsCarousel extends Component {

  Title1 = {
    instanceID: "NewsSecondaryTROneTitle",
    title: "Admissions",
    link: "http://admission.vjcet.ac.in/"
  }

  Image1 = {
    instanceID: "NewsSecondaryTROneImage",
    image: "NewsSection/Section2/Section1.jpg",
    //Recommended Image Size is 733px x 400px.
    width: "100%"
  }


  Title2 = {
    instanceID: "NewsSecondaryTRTwoTitle",
    title: "Admissions",
    link: "/#/admission/mtech"
  }

  Image2 = {
    instanceID: "NewsSecondaryTRTwoImage",
    image: "NewsSection/Section2/Section2.jpg",
    //Recommended Image Size is 733px x 400px.
    width: "100%"
  }

  Title3 = {
    instanceID: "NewsSecondaryTRThreeTitle",
    title: "Admissions",
    link: "/#/admission/phd"
  }

  Image3 = {
    instanceID: "NewsSecondaryTRThreeImage",
    image: "NewsSection/Section2/Section3.jpg",
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

export default NewsCarousel;