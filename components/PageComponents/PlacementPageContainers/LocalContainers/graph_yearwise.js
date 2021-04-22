import React, { Component } from "react";
import HeadingTwo from "../../../../src/Components/Texts/HeadingTwo";
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import "./graph.css";
class Graph10 extends Component {
  state = {
    dataBar: {
      labels: [ "2014", "2015", "2016","2017","2018","2019","2020"],
      datasets: [
        {
          label: "No. of students placed",
          data: [ 217, 266, 267, 274,176,403,326 ],
          backgroundColor: [
            "rgba(255, 153, 51,0.4)",
            "rgba(255, 134,159,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(255, 218, 128,0.4)",
            "rgba(113, 205, 205,0.4)",
            "rgba(170, 128, 252,0.4)",
            "rgba(255, 177, 101,0.4)"
          ],
          borderWidth: 2,
          borderColor: [
            "rgba(255, 153, 51, 1)",
            "rgba(255, 134, 159, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(255, 218, 128, 1)",
            "rgba(113, 205, 205, 1)",
            "rgba(170, 128, 252, 1)",
            "rgba(255, 177, 101, 1)"
          ]
        }
      ]
    },
    barChartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            barPercentage: 1,
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)"
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)"
            },
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  }
  Graphheading = {
    instanceID: "GraphHeading",
    title: "Year-wise Placement Statistics"
  };
  render() {
    return (
      <MDBContainer>
        <HeadingTwo data={this.Graphheading} />
        <Bar data={this.state.dataBar} options={this.state.barChartOptions} />
      </MDBContainer>
    );
  }
  }


export default Graph10;

