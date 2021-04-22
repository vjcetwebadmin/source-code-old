import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne";
import HeadingTwo from "../../Components/Texts/HeadingTwo";
import Bodythree from "../../Components/Texts/BodyThree";
import "../../Components/Tables/tableformat.css";
class Lab extends Component {
  state = {};
  DeptLibHeading = {
    instanceID: "DeptLibHeading",
    title: "Department Labs"
  };
  MMMLabHeading = {
    instanceID: "MMMLabHeading",
    title: "Metrology and Mechanical Measurements Lab"
  };
  MMMLabContent = {
    instanceID: "MMMLabContent",
    title: "The metrology and mechanical measurements labs display various measuring equipment used in the field of mechanical engineering. It consists of various measuring equipment like autocollimator, load cell, pressure gauge apparatus, profile projector, gauge block, sine bar, strain gauge, stroboscope, temperature measurement apparatus and tool maker’s microscope. The lab is utilized by seventh semester mechanical engineering students."
  };
  MELabHeading = {
    instanceID: "MELabHeading",
    title: "Mechanical Engineering Lab"
  };
  MELabContent = {
    instanceID: "MELabContent",
    title: "The mechanical engineering lab consists of air compressor test rig, centrifugal blower test rig, fluidized bed apparatus, whirling of shaft apparatus, gyroscope test rig, governor apparatus, static and dynamic balancing apparatus, governor apparatus and cam analysis apparatus. The lab is mainly utilized by mechanical engineering students. "
  };
  MTLabHeading = {
    instanceID: "MTLabHeading",
    title: "Machine Tool Lab"
  };
  MTLabContent = {
    instanceID: "MTLabContent",
    title: "The machine tool lab is one of the biggest labs in the department which is equipped with sufficient number of machines as prescribed in the syllabus and beyond. The lab is equipped with Lathes, Shaping machines, Slotting machines, Milling machines, Radial drilling machine, Surface grinding machine, Tool and cutter grinder and a CNC lathe. The lab is well lit and properly ventilated. The lab is provided with additional computer facility for improved learning experience. The lab is utilized for different lab courses in mechanical engineering B.Tech program and for various project works."
  };
  MWLabHeading = {
    instanceID: "MWLabHeading",
    title: "Metallurgy and Welding Lab"
  };
  MWLabContent = {
    instanceID: "MWLabContent",
    title: "The Metallurgy and welding lab consists of Arc Welding machines, MIG Welding machine, Gas welding and Cutting equipment, Muffle furnace, Belt Grinder, Double disc polishing machine, Metallurgical microscope etc.  The lab is utilized by the Manufacturing technology lab course and mechanical engineering workshop course and is also utilized for various project works."
  };
  MWorkshopLabHeading = {
    instanceID: "MWorkshopLabHeading",
    title: "Mechanical Engineering Workshop"
  };
  MWorkshopLabContent = {
    instanceID: "MWorkshopLabContent",
    title: "The mechanical Engineering workshop is equipped with all the experimental set ups as prescribed in the syllabus. The workshop consists mainly of six sections: Fitting, Carpentry, Foundry, Sheet Metal, Welding and Smithy. The lab is well lit and properly ventilated. The lab is provided with additional computer facility for improved learning experience. The lab is utilized by first year students for the course ‘Mechanical Engineering Workshop’."
  };
  CADLabHeading = {
    instanceID: "CADLabHeading",
    title: "CAD LAB"
  };
  CADLabContent = {
    instanceID: "CADLabContent",
    title: "The computer lab equipped with 36 computers with uninterrupted power supply and centralized air-condition. The lab is mainly utilized by students of third and fifth semester mechanical engineering and first year students. The lab is extensively used for various departmental purposes and for conducting seminars, online conferences and other activities."
  };
  ARLabHeading = {
    instanceID: "ARLabHeading",
    title: "Aerodynamics Lab"
  };
  ARLabContent = {
    instanceID: "ARLabContent",
    title: "The aerodynamics lab consists mainly of a subsonic wind tunnel apparatus. The lab is mainly utilized by mechanical engineering students and also used for various projects and research activities."
  };
  FMLabHeading = {
    instanceID: "FMLabHeading",
    title: "Fluid Mechanics Lab"
  };
  FMLabContent = {
    instanceID: "FMLabContent",
    title: "The fluid mechanics lab consists of various flow measuring devices like notches, venturimeter and orifice meter, orifice and mouthpiece apparatus, Reynolds apparatus, pipe friction apparatus, Bernoulli’s theorem apparatus, minor losses determination apparatus and adjustable channel apparatus. The lab consists of experimental set ups beyond the syllabus for improved learning experience."
  };
  HMLabHeading = {
    instanceID: "HMLabHeading",
    title: "Heat Engines Lab"
  };
  HMLabContent = {
    instanceID: "HMLabContent",
    title: "The heat engines lab consists of various engine test rigs, computerized engine test rig, boiler and turbine test rigs, redwood viscometer, flash and fire point tester and bomb calorimeter. The lab is also equipped with cut section of engines, various automobile parts accessories for better learning experience.  The lab is extensively used for various project works. The lab is having additional computer facility for improved learning experience."
  };
  HTLabHeading = {
    instanceID: "HTLabHeading",
    title: "Heat Transfer Lab"
  };
  HTLabContent = {
    instanceID: "HTLabContent",
    title: "The lab consists of various equipment which describe basic heat transfer modes of conduction, convection and radiation and refrigeration and air conditioning equipment. The lab is mainly utilized by students of mechanical engineering department."
  };
  HydLabHeading = {
    instanceID: "HydLabHeading",
    title: "Hydraulic Machines Lab"
  };
  HydLabContent = {
    instanceID: "HydLabContent",
    title: "The hydraulic machines lab consists of various types of pumps, turbines and hydraulic ram. The lab is provided with additional computer facility for improved learning experience. The lab is utilized by students of various branches."
  };


  render() {
    return (
      <div className="DeptLibrary" id="dept-library">
        <HeadingOne data={this.DeptLibHeading} />
        <HeadingTwo data={this.MMMLabHeading} />
        <Bodythree data={this.MMMLabContent} />
        <table id="tableformat">
	      <tbody>
		      <tr>
	          	<td>Lab Name</td>
		          <td>Metrology and MechanicalMeasurements Lab</td>
	       </tr>
	       <tr>
		          <td>Room No.</td>
		          <td>L 215, L 216</td>
	       </tr>
	       <tr>
		          <td>Floor Area</td>
	        	  <td>119msq, 119msq,</td>
	       </tr>
	       <tr>
	        	  <td>Batch Size</td>
		          <td>30</td>
	      </tr>	
      	</tbody>
      </table>

      
        <HeadingTwo data={this.MELabHeading} />
        <Bodythree data={this.MELabContent} />
        <table id="tableformat">
	      <tbody>
		      <tr>
	          	<td>Lab Name</td>
		          <td>Mechanical Engineering Lab </td>
	       </tr>
	       <tr>
		          <td>Room No.</td>
		          <td>L 213</td>
	       </tr>
	       <tr>
		          <td>Floor Area</td>
	        	  <td>158msq</td>
	       </tr>
	       <tr>
	        	  <td>Batch Size</td>
		          <td>30</td>
	      </tr>	
      	</tbody>
      </table>

      <HeadingTwo data={this.MTLabHeading} />
        <Bodythree data={this.MTLabContent} />
        <table id="tableformat">
	      <tbody>
		      <tr>
	          	<td>Lab Name</td>
		          <td>Machine Tools Lab </td>
	       </tr>
	       <tr>
		          <td>Room No.</td>
		          <td>L 113</td>
	       </tr>
	       <tr>
		          <td>Floor Area</td>
	        	  <td>551msq</td>
	       </tr>
	       
      	</tbody>
      </table>


      <HeadingTwo data={this.MWLabHeading} />
        <Bodythree data={this.MWLabContent} />
        <table id="tableformat">
	      <tbody>
		      <tr>
	          	<td>Lab Name</td>
		          <td>Metallurgy and Welding Lab</td>
	       </tr>
	       <tr>
		          <td>Room No.</td>
		          <td>L 209A</td>
	       </tr>
	       <tr>
		          <td>Floor Area</td>
	        	  <td>133msq</td>
	       </tr>
	       
      	</tbody>
      </table>

      <HeadingTwo data={this.MWorkshopLabHeading} />
        <Bodythree data={this.MWorkshopLabContent} />
        <table id="tableformat">
	      <tbody>
		      <tr>
	          	<td>Lab Name</td>
		          <td>Mechanical Engineering Workshop</td>
	       </tr>
	       <tr>
		          <td>Room No.</td>
		          <td>L 202</td>
	       </tr>
	       <tr>
		          <td>Floor Area</td>
	        	  <td>436msq</td>
	       </tr>
	       <tr>
	        	  <td>Batch Size</td>
		          <td>60</td>
	      </tr>	
      	</tbody>
      </table>


      <HeadingTwo data={this.CADLabHeading} />
        <Bodythree data={this.CADLabContent} />
        <table id="tableformat">
	      <tbody>
		      <tr>
	          	<td>Lab Name</td>
		          <td>CAD Lab</td>
	       </tr>
	       <tr>
		          <td>Room No.</td>
		          <td>C 303</td>
	       </tr>
	       <tr>
		          <td>Floor Area</td>
	        	  <td>91.5 msq</td>
	       </tr>
	       <tr>
	        	  <td>Batch Size</td>
		          <td>35</td>
	      </tr>	
        <tr>
	          	<td>No of systems/ Configuration</td>
		          <td>36 systems with Intel Core 2 Duo, 4 GB RAM, 2 GB Graphics Card</td>
	       </tr>
	       <tr>
		          <td>Room No.</td>
		          <td>C 303</td>
	       </tr>
	       <tr>
		          <td>Licensed software</td>
	        	  <td>Window XP, Linux, PTC Creo 2.0,ALTAIR HYPERWORKS, AutoCAD 2014, Turbo C</td>
	       </tr>
	       <tr>
	        	  <td>Other facilities</td>
		          <td>LCD Projector and Screen, Printers, Scanner, Uninterrupted Power Supply and Air Conditioner</td>
	      </tr>	
      	</tbody>
      </table>

      <HeadingTwo data={this.ARLabHeading} />
        <Bodythree data={this.ARLabContent} />
        <table id="tableformat">
	      <tbody>
		      <tr>
	          	<td>Lab Name</td>
		          <td>Aerodynamics Lab</td>
	       </tr>
	       <tr>
		          <td>Room No.</td>
		          <td>L113 - A</td>
	       </tr>
	       <tr>
		          <td>Floor Area</td>
	        	  <td>111msq</td>
	       </tr>
	       <tr>
	        	  <td>Batch Size</td>
		          <td>15</td>
	      </tr>	
      	</tbody>
      </table>

      <HeadingTwo data={this.FMLabHeading} />
        <Bodythree data={this.FMLabContent} />
        <table id="tableformat">
	      <tbody>
		      <tr>
	          	<td>Lab Name</td>
		          <td>Fluid Mechanics Lab</td>
	       </tr>
	       <tr>
		          <td>Room No.</td>
		          <td>L - 208</td>
	       </tr>
	       <tr>
		          <td>Floor Area</td>
	        	  <td>198 msq</td>
	       </tr>
	       <tr>
	        	  <td>Batch Size</td>
		          <td>35</td>
	      </tr>	
      	</tbody>
      </table>


      <HeadingTwo data={this.HMLabHeading} />
        <Bodythree data={this.HMLabContent} />
        <table id="tableformat">
	      <tbody>
		      <tr>
	          	<td>Lab Name</td>
		          <td>Heat Engines Lab</td>
	       </tr>
	       <tr>
		          <td>Room No.</td>
		          <td>L - 114</td>
	       </tr>
	       <tr>
		          <td>Floor Area</td>
	        	  <td>282 msq</td>
	       </tr>
	       <tr>
	        	  <td>Batch Size</td>
		          <td>30</td>
	      </tr>	
      	</tbody>
      </table>


      <HeadingTwo data={this.HTLabHeading} />
        <Bodythree data={this.HTLabContent} />
        <table id="tableformat">
	      <tbody>
		      <tr>
	          	<td>Lab Name</td>
		          <td>Heat Transfer Lab</td>
	       </tr>
	       <tr>
		          <td>Room No.</td>
		          <td>L - 214</td>
	       </tr>
	       <tr>
		          <td>Floor Area</td>
	        	  <td>158 msq</td>
	       </tr>
	       <tr>
	        	  <td>Batch Size</td>
		          <td>30</td>
	      </tr>	
      	</tbody>
      </table>

      <HeadingTwo data={this.HTLabHeading} />
        <Bodythree data={this.HTLabContent} />
        <table id="tableformat">
	      <tbody>
		      <tr>
	          	<td>Lab Name</td>
		          <td>Hydraulic Machines Lab</td>
	       </tr>
	       <tr>
		          <td>Room No.</td>
		          <td>L - 111</td>
	       </tr>
	       <tr>
		          <td>Floor Area</td>
	        	  <td>277 msq</td>
	       </tr>
	       <tr>
	        	  <td>Batch Size</td>
		          <td>35</td>
	      </tr>	
      	</tbody>
      </table>

      </div>
    );
  }
}

export default Lab;
