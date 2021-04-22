import React, { Component } from "react";
import HeadingOne from "../../../Components/Texts/HeadingOne";
import honours from "../../../Components/honours";
import "./honours.css";
class Ithonours extends Component {
  state = {};
  IthonoursHeading = {
    instanceID: "IthonoursHeading",
    title: "honours of Information Technology"
  };
  Ithonours1 = {
    instanceID: "ithonours1",
    image: "honours/ithonours1.jpg",
    width: "30%",
    name: "Sonam Susan Mathews",
    content: "Secured Second Rank in B.Tech IT May 2018"
  };
  Ithonours2 = {
    instanceID: "ithonours2",
    image: "honours/ithonours2.jpeg",
    width: "30%",
    name: " Jeesmon Johny",
    content: "Secured Sixth Rank in B.Tech IT May 2017"
  };
  
  Ithonours5 = {
    instanceID: "ithonours5",
    image: "honours/ithonours5.png",
    width: "30%",
    name: "Akshay Aggarwal",
    content: "Secured First Rank in B.Tech IT May 2014"
  };
  Ithonours6 = {
    instanceID: "ithonours6",
    image: "honours/ithonours6.JPEG",
    width: "30%",
    name: "Dincy Devasia",
    content: "Secured Third rank in B.Tech Information Technology May 2013"
  };
  Ithonours7 = {
    instanceID: "ithonours7",
    image: "honours/ithonours7.jpg",
    width: "30%",
    name: "Rhimi KX",
    content: "Secured Second Rank in B.Tech IT May 2012"
  };
  
  Ithonours8 = {
    instanceID: "ithonours8",
    image: "honours/ithonours8.JPEG",
    width: "30%",
    name: "Soumya Joseph",
    content: "Secured First Rank in B.Tech Information Technology May 2011"
  };
  Ithonours9 = {
    instanceID: "ithonours9",
    image: "honours/ithonours9.JPEG",
    width: "30%",
    name: "Neethu Devassy",
    content: "Secured First Rank in B.Tech Information Technology May 2010"
  };
  Ithonours10 = {
    instanceID: "ithonours10",
    image: "honours/ithonours10.JPEG",
    width: "30%",
    name: "Priya Joseph",
    content: "Secured First Rank in B.Tech Information Technology May 2009"
  };
 
  Ithonours14 = {
    instanceID: "ithonours14",
    image: "honours/ithonours14.JPEG",
    width: "30%",
    name: "Jithin Joy",
    content: "Secured First Rank in B.Tech Information Technology May 2005"
  };
  Ithonours15 = {
    instanceID: "ithonours15",
    image: "honours/ithonours15.jpg",
    width: "30%",
    name: "Swathi Krishna",
    content: "Secured Third Rank in B.Tech IT May 2018"
  };
  Ithonours16 = {
    instanceID: "ithonours16",
    image: "honours/ithonours16.jpg",
    width: "30%",
    name: "Manya Kurian",
    content: "Secured Seventh Rank in B.Tech IT May 2018"
  };
  Ithonours17 = {
    instanceID: "ithonours17",
    image: "honours/ithonours17.jpg",
    width: "30%",
    name: "Daya Philip",
    content: "Secured Fourth Rank in B.Tech IT May 2013"
  };
  Ithonours18 = {
    instanceID: "ithonours18",
    image: "honours/ithonours18.jpg",
    width: "30%",
    name: "Nimitha Joy",
    content: "Secured First Rank in B.Tech IT May 2015"
  };
  Ithonours19 = {
    instanceID: "ithonours19",
    image: "honours/ithonours19.jpg",
    width: "30%",
    name: "Maria Jolly",
    content: "Secured Fifth Rank in B.Tech IT May 2016"
  };
  Ithonours20 = {
    instanceID: "ithonours20",
    image: "honours/ithonours20.jpg",
    width: "30%",
    name: "Anjana Krishnan",
    content: "Secured Seventh Rank in B.Tech IT May 2016"
  };
  Ithonours21 = {
    instanceID: "ithonours21",
    image: "honours/ithonours21.jpg",
    width: "30%",
    name: " Reshma Saju",
    content: "Secured Third Rank in B.Tech IT May 2015"
  };
  Ithonours22 = {
    instanceID: "ithonours22",
    image: "honours/ithonours22.jpg",
    width: "30%",
    name: " Noyal Wilson",
    content: "Secured Seventh Rank in B.Tech IT May 2015"
  };
  Ithonours23 = {
    instanceID: "ithonours23",
    image: "honours/ithonours23.jpg",
    width: "30%",
    name: " Amalraj Vidhyadharan",
    content: "Secured Fifth Rank in B.Tech IT May 2019(KTU)"
  };



  render() {
    return (
      <div className="honours">
        <HeadingOne data={this.IthonoursHeading} />
        <div className="photos">
        <div>
            <honours data={this.Ithonours23} />
          </div>
          <div>
            <honours data={this.Ithonours1} />
          </div>
          <div>
            {<honours data={this.Ithonours15} />}
          </div>
          <div>
            {<honours data={this.Ithonours16} />}
          </div>
          <div>
            <honours data={this.Ithonours2} />
          </div>
          <div>
            <honours data={this.Ithonours19} />
          </div>
          <div>
            <honours data={this.Ithonours20} />
          </div>
          <div>
            <honours data={this.Ithonours18} />
          </div>
          <div>
            <honours data={this.Ithonours21} />
          </div>
          <div>
            <honours data={this.Ithonours22} />
          </div>
          <div>
            <honours data={this.Ithonours5} />
          </div>
          <div>
            <honours data={this.Ithonours6} />
          </div>
          <div>
            <honours data={this.Ithonours17} />
          </div>
          <div>
            <honours data={this.Ithonours7} />
          </div>
          <div>
            <honours data={this.Ithonours8} />
          </div>
          <div>
            <honours data={this.Ithonours9} />
          </div>
          <div>
            <honours data={this.Ithonours10} />
          </div>
          <div>
            {<honours data={this.Ithonours14} />}
          </div>
        </div>
      </div>
    );
  }
}

export default Ithonours;
