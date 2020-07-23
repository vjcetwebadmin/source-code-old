import React, { Component } from "react";
import "./CarouselTwo.css";
import CustomOne from "../Components/Texts/CustomOne";

class CarouselTwo extends Component {
  state = { selected: 0 };
  data = [
  
    {
      instanceID: this.props.data.instanceID + "CustomOne",
      title: <a href="http://117.239.154.84:8001/ktuexam/index.html" target="_blank" rel="noopener noreferrer"><font color="FFFFF" size="4">KTU B.Tech Examination</font></a>
    },
    {
      instanceID: this.props.data.instanceID + "CustomOne",
      title: <a href="https://vjcet.org/downloads/news/Quotation.pdf" target="_blank" rel="noopener noreferrer"><font color="FFFFF" size="4">Inviting Quotation for CNC Milling Center</font></a>
    },
    {
      instanceID: this.props.data.instanceID + "CustomOne",
      title: <a href="https://vjcet.org/#/newsthree" target="_blank" rel="noopener noreferrer"><font color="FFFFF" size="4">ADVERTISEMENT FOR WALK-IN-INTERVIEW FOR THE POST OF AD-HOC FACULTY (CIVIL ENGINEERING)</font></a>
    },
    {
      instanceID: this.props.data.instanceID + "CustomOne",
      title: <a href="https://vjcet.org/#/newsnine" target="_blank" rel="noopener noreferrer"><font color="FFFFF" size="4">Congratulations to the Placed Students - 2016-2020 Batch</font></a>
    },
    
    {
      instanceID: this.props.data.instanceID + "CustomOne",
      title: <a href="https://vjcet.org/#/newsfive" target="_blank" rel="noopener noreferrer"><font color="FFFFF" size="4">Coursera MOOC registrations</font></a>
    },
    
   
    {
      instanceID: this.props.data.instanceID + "CustomOne",
      title: <a href="https://vjcet.org/#/newssix" target="_blank" rel="noopener noreferrer"><font color="FFFFF" size="4">Access to Study Materials- Video Lectures, PPTs & PDFs</font></a>
    },
    
   
    
    {
      instanceID: this.props.data.instanceID + "CustomOne",
      title: <a href="https://vjcet.org/#/newsfour" target="_blank" rel="noopener noreferrer"><font color="FFFFF" size="4">Information Regarding Online Classes</font></a>
    },
   
    
    {
      instanceID: this.props.data.instanceID + "CustomOne",
      title: <font color="FFFFF" size="4">CSI Student Branch BEST ACCREDITED STUDENT BRANCH AWARD</font>
    },
    {
      instanceID: this.props.data.instanceID + "CustomOne",
      title: <font color="FFFFF" size="4">IEEE students branch of VJCET selected as an outstanding students branch of Kochi subsection for the year 2019</font>
    },
   

    
    
    
    
            
    
  ];
  rotateRight = () => {
    this.setState({
      selected:
        this.state.selected + 1 >= this.data.length
          ? 0
          : this.state.selected + 1
    });
  };
  rotateLeft = () => {
    console.log(this.state.selected);
    this.setState({
      selected:
        this.state.selected - 1 < 0
          ? this.data.length - 1
          : this.state.selected - 1
    });
  };
  componentDidMount(){
    this.autoRotate();
    setTimeout(()=>{
      this.setState({
        selected: 0
      });
    });
  }
  autoRotate() {
    setTimeout(()=>{
      this.setState({
        selected:
        this.state.selected + 1 >=this.data.length
        ? 0
        : this.state.selected+1
      });
      
      this.autoRotate();
  }, 4000);
  }
  render() {
    const { instanceID } = this.props.data;

    return (
      <div className="CarouselTwo" id={instanceID}>
        <div className="CarouselTwoSlider">
          <div className="CarouselTwoSlide" id={instanceID} >
            <CustomOne
              data={this.data[this.state.selected]}
              className="CarouselTwoText"
              
            />
          </div>
        </div>
        <div className="CarouselTwoPagination">
          {this.data.map((item, index, arr) => {
            return (
              <a
                href
                onFocus={e => {
                  console.log("testfunction");
                  this.setState({ selected: index });
                }}
                onClick={e => {
                  this.setState({ selected: index });
                }}
              >
                <div
                  style={{
                    height: "6px",
                    width: "6px",
                    borderRadius: "100%",
                    backgroundColor:
                      this.state.selected === index ? "#fff" : "#ffffff77",
                    margin: "0px 2px"
                  }}
                />
              </a>
            );
          })}
        </div>
        <div
          className="CarouselTwoRightArrow"
          onClick={e => {
            this.rotateRight();
          }}
        >
          <img
            src={require("../Assets/carousaltwoarrow.png")}
            style={{ height: "15px", width: "15px" }}
            alt="img"
          />
        </div>

        <div
          className="CarouselTwoLeftArrow"
          onClick={e => {
            this.rotateLeft();
          }}
        >
          {" "}
          <img
            src={require("../Assets/carousaltwoarrow.png")}
            style={{
              height: "15px",
              width: "15px",
              transform: "rotate(180deg)"
            }}
            alt="img"
          />
        </div>
      </div>
    );
  }
}

export default CarouselTwo;
