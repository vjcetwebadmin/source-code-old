import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./NewsCarousel.css";
import NewsImage from "./NewsImage";
//import CarouselCaption from "react-bootstrap/CarouselCaption";

//This is Carousal Component. Uses a library called react-bootstrap. Don't Mess with..

class NewsCarousel extends Component {

  Title2 = {
    instanceID: "NewsSecondaryBLOneTitle",
    title: "Bodhi 2k19",
    link: "https://vjcet.org/#/campus-life/techfest"
  }

  Image2 = {
    instanceID: "NewsSecondaryBLOneImage",
    image: "NewsSection/Section3/Section1.jpg",
    //Recommended Image Size is 733px x 400px.
    width: "100%"
  }


  Title1 = {
    instanceID: "NewsSecondaryBLTwoTitle",
    title: "Election 2019 – 20",
    link: "/#/campus-life/collegecouncil"
  }

  Image1 = {
    instanceID: "NewsSecondaryBLTwoImage",
    image: "NewsSection/Section3/Section2.jpg",
    
    //Recommended Image Size is 733px x 400px.
    width: "100%"
  }

  Title3 = {
    instanceID: "NewsSecondaryBLThreeTitle",
    title: "Professional Bodies",
    link: "/#/campus-life/professionalbodies"
  }

  Image3 = {
    instanceID: "NewsSecondaryBLThreeImage",
    image: "NewsSection/Section3/Section3.jpg",
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