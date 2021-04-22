import React, { Component } from "react";
// import ImageOne from "../Components/Images/ImageOne";
import HeadingOne from "../../Components/Texts/HeadingOne";
import BodyThree from "../../Components/Texts/BodyThree";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import "./Research.css"
import "../../Components/Tables/tableformat.css";

//import Profile from "./csi";

class Activities extends Component {
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
        title: "Activities"
    }
    ReserchBody1 = {
        instanceID: "ReserchBody1",
        title: "Some major initiatives taken by IIIC are"
    }
    ReserchBody2 = {
        instanceID: "ReserchBody2",
        title: "Formalizing the interaction with Industries  through  memorandums of understanding (MOUs)"
    }
    ReserchBody3 = {
      instanceID: "ReserchBody3",
      title: "Taking up Consultancy Works of Industry "
  }
  ReserchBody4 = {
    instanceID: "ReserchBody4",
    title: "Membership in Board of  Directors  of Public Sector Undertaking"
}
ReserchBody5 = {
  instanceID: "ReserchBody5",
  title: "Research and collaborative projects with  BRNS and DST. "
}
ReserchBody6 = {
  instanceID: "ReserchBody6",
  title: "Organizing Discussion Meet with local  Farmers  and BARC Scientists. "
}
ReserchBody7 = {
  instanceID: "ReserchBody7",
  title: "Organizing  Outreach Programmes of  BARC and other  research institutions. "
}
ReserchBody8 = {
  instanceID: "ReserchBody8",
  title: "Industrial visits and Interaction with  Industries. "
}
ReserchBody9 = {
  instanceID: "ReserchBody9",
  title: "Rural Housing project for economically backward families. "
}
ReserchBody10 = {
  instanceID: "ReserchBody10",
  title: "Expert Talks  of Industrialists."
}
ReserchBody11 = {
  instanceID: "ReserchBody11",
  title: "Technical Workshops  for Students."
}
ReserchBody12 = {
  instanceID: "ReserchBody12",
  title: "Industrial visits, Internship and Training programmes."
}
ReserchBody13 = {
  instanceID: "ReserchBody13",
  title: "Visit of VJCET   Team to  International  Institutions."
}
ReserchBody14 = {
  instanceID: "ReserchBody14",
  title: "Organising FDPs  with the  support of Senior Experten Services, Germany."
}


    
    render() {
        return (
            <div className="HomePage">
                
                <HeadingOne data={this.ResearchHeading}></HeadingOne>
                {/* <ImageOne data={this.ResearchImg}></ImageOne> */}
                <BodyThree data={this.ReserchBody1} /><br />
                
                 <div className="inner-para">
                 <ul>
                        
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody2} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody3} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody4} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody5} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchBody6} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody7} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody8} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody9} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody10} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchBody11} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody12} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody13} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody14} />
                            </p>
                        </li>
                        
                    </ul>

                   </div>                              
            </div>
           
        );
    }
}

export default Activities;