import React from "react";
import HeadingTwo from "../../Components/Texts/HeadingTwo";
import ImageOne from "../../Components/Images/ImageOne";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import "../styles.css"

class BankPost extends React.Component {
    BankPostTitle = {
        instanceID: "BankPostTitle",
        title: "Banking and Postal Services"
    };
    StoreTitle = {
        instanceID: "StoreTitle",
        title: "Store"
    };
    BankPostContent1 = {
        instanceID: "BankPostContent1",
        title: "Viswajyothi provides banking and postal services within premises of the college itself which offers all kinds of National and International Banking Facilities.ATM counters of State Bank of India and South Indian Bank are there in front of the college gate.  The college also additionally provide postal services for that students. The purpose is to meet the communication needs of the students, faculty, and staff. These services help the college in its mission of providing excellence in education, research, and public service by providing efficient and cost-effective."
    }
    StoreContent = {
        instanceID: "StoreContent",
        title: "Viswajyothi store facility provides all stationary items for the staffs and students. The store runs in the interval time and it is managed by the Administrative department."
    }
    BankPostImagedata = {
        instanceID: "BankPostImagedata",
        image: "IMG_7366.JPG",
        width: "100%"
    }
    render() {
        return (
            <React.Fragment>
                <div className="contain">
                    <HeadingTwo data={this.BankPostTitle} className="Heading" />
                    <ImageOne data={this.BankPostImagedata} />
                    <div className="bodyContainer">
                        <BodyOneJustified data={this.BankPostContent1} />
                    </div>
                    <div>
                    <HeadingTwo data={this.StoreTitle} className="Heading" />
                    <BodyOneJustified data={this.StoreContent} /> 
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

export default BankPost;