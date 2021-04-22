import React, { Component } from "react";
import "./DepartmentSection.css";
import HeadingOne from "../Components/Texts/HeadingOne";
import BodyOne from "../Components/Texts/BodyOne";
import DepartmentList from "./LocalContainers/DepartmentList";
import { Link } from "react-router-dom";
class DepartmentSection extends Component {
  DepartmentSectionTitle = {
    instanceID: "DepartmentSectionTitle",
    title: "Departments"
  };

  DepartmentSectionSubTitle = {
    instanceID: "DepartmentSectionSubTitle",
    title:
      "All B.Tech courses are NBA accredited.We are offering UG and PG courses ranging from B.Tech, M.Tech, and Master of Bussiness Administration"
  };

  DepartmentListOne = {
    instanceID: "DepartmentListOne",
    title: "Civil (CE)",
    description:
      "Civil engineers are entrusted by the society to create a sustainable world and enhance the global quality of life- they serve competently, collaboratively, and ethically as innovators and integrators of ideas and technology across the public, private, and academic sectors; managers of risk and uncertainty caused by natural disasters and other threats; and leaders in discussions and decisions shaping public environmental and infrastructure policy."
  };

  DepartmentListTwo = {
    instanceID: "DepartmentListTwo",
    title: "Computer Science (CSE)",
    description:
      "We aim at exposing our students to the world of zeros and ones by inculcating design thinking, empathy and ethics in them. Rather than building supercomputers, we want the scholars to use their human intelligence to build green artificial intelligence and support humanity by addressing the real issues of the world."
  };

  DepartmentListThree = {
    instanceID: "DepartmentListThree",
    title: "Electronics & Communication (ECE)",
    description:
      "In this era of globalization where the whole world is well knit and networked, the electronics engineering students are transformed with the practical and technological aspects of the newly evolving technologies."
  };

  DepartmentListFour = {
    instanceID: "DepartmentListFour",
    title: "Electrical & Electronics (EEE)",
    description:
      "The Electrical and electronics engineers are working today in all spheres of modern society, be it internet, power systems, DC and AC transmission systems , a quality engineer with the ability to explore, experiment and exhibit are refined. "
  };

  DepartmentListFive = {
    instanceID: "DepartmentListFive",
    title: "Information Technology (IT)",
    description:
      "With the excellence in providing the right environment for development of physical, intellectual, emotional and spiritual quotients with a view to produce total quality engineers preparing them to face challenges of modern information society."
  };

  DepartmentListSix = {
    instanceID: "DepartmentListSix",
    title: "Mechanical (ME)",
    description:
      "The students of Mechanical Engineering are provided with the most advanced equipment in our laboratories on which to experiment and innovate thereby moulding students  by coupling the theoretical knowledge with the industry exposure."
  };

  DepartmentListSeven = {
    instanceID: "DepartmentListSeven",
    title: "Management of Business Administration (MBA)",
    description:
      "A dynamic institute of repute in developing management professionals with value integration for social transformation."
  };

  DepartmentListEight = {
    instanceID: "DepartmentListEight",
    title: "Science & Humanities",
    description:
      "The Department deals in the disciplines of Chemistry, Physics, Mathematics, Statistics, Communicative English and Economics."
  };

  render() {
    const { instanceID } = this.props.data;

    return (
      <div className="DepartmentSection" id={instanceID}>
        <HeadingOne data={this.DepartmentSectionTitle} />
        <BodyOne data={this.DepartmentSectionSubTitle} />
        <Link to="/departments/ce" style={{ textDecoration: "none" }}>
          <DepartmentList data={this.DepartmentListOne} />
        </Link>
        <Link to="/departments/cse" style={{ textDecoration: "none" }}>
          <DepartmentList data={this.DepartmentListTwo} />
        </Link>
        <Link to="/departments/ece" style={{ textDecoration: "none" }}>
          <DepartmentList data={this.DepartmentListThree} />
        </Link>
        <Link to="departments/eee" style={{ textDecoration: "none" }}>
          <DepartmentList data={this.DepartmentListFour} />
        </Link>
        <Link to="departments/it" style={{ textDecoration: "none" }}>
          <DepartmentList data={this.DepartmentListFive} />
        </Link>
        <Link to="departments/me" style={{ textDecoration: "none" }}>
          <DepartmentList data={this.DepartmentListSix} />
        </Link>
        <a href="http://www.vjcetmba.in/" style={{ textDecoration: "none" }}>
          <DepartmentList data={this.DepartmentListSeven} />
        </a>
        <Link to="departments/s&h" style={{ textDecoration: "none" }}>
          <DepartmentList data={this.DepartmentListEight} />
        </Link>
      </div>
    );
  }
}

export default DepartmentSection;
