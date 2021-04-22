import React from "react";
import HeadingTwo from "../../Components/Texts/HeadingTwo";
import ImageOne from "../../Components/Images/ImageOne";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import "../styles.css"

class Gym extends React.Component {
    GymTitle = {
        instanceID: "GymTitle",
        title: "Multi Gymnasium & Fitness Center"
    };
    GymContent = {
        instanceID: "GymContent",
        title: "Viswajyothi College of Engineering and Technology has a Multi Gym with a wide range of Gym equipments. Students and faculty members can use this facility in the morning as well as in the evening."
    }
    GymImagedata = {
        instanceID: "GymImagedata",
        image: "Gym.jpg",
        width: "100%"
    }
    render() {
        return (
            <React.Fragment>
                <div >
                    <HeadingTwo data={this.GymTitle} className="Heading" />
                    <ImageOne data={this.GymImagedata} />
                    <div >
                        <BodyOneJustified data={this.GymContent} />
                        <p>
                        <font size ="4"><b>Gym Facilities</b></font>
                        <p>
                        <ol>Pec deck</ol>
                        <ol>High Lat & Rowing</ol>
                        <ol>Cable Cross over</ol>
                        <ol>Squat Machine</ol>
                        <ol>Leg Curl and Extension</ol>
                        <ol>Biceps Curl</ol>
                        <ol>Triceps Curl</ol>
                        <ol>Wrist Curl</ol>
                        <ol>Bench Press Parallel</ol>
                        <ol>Bench Press Incline</ol>
                        <ol>Tread Mill(Manuel)</ol>
                        <ol>Abdominal Board</ol>
                        <ol>Ab-King Pro</ol>
                        <ol>Double twister</ol>
                        <ol>Weight Bar and Dumbbells</ol>
                        <ol>Gym Bench</ol>
                        <ol>Gym Stool</ol>
                        <ol>T-Bar</ol>
                        <ol>Barbells</ol>
                        </p>
                        </p>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

export default Gym;