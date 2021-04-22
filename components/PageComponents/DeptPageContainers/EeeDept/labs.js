import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne";
import HeadingTwo from "../../Components/Texts/HeadingTwo"
import "../../Components/Tables/tableformat.css";
class Labs extends Component {
  state = {};
  DeptLibHeading = {
    instanceID: "DeptLibHeading",
    title: "Department Labs"
  };
  CompLabHeading = {
    instanceID: "CompLabHeading",
    title: "Computer Laboratory"
  };
  EMPSLabHeading = {
    instanceID: "EMPSLabHeading",
    title: "ELECTRICAL MEASUREMENTS & POWER SYSTEM LABORATORY"
  };
  EMLabHeading = {
    instanceID: "EMLabHeading",
    title: "ELECTRICAL MACHINES LABORATORY"
  };
  SysLabHeading = {
    instanceID: "SysLabHeading",
    title: "SYSTEMS  LABORATORY"
  };
  CircuitsLabHeading = {
    instanceID: "CircuitsLabHeading",
    title: "CIRCUITS LABORATORY"
  };
  EEWorkshopHeading = {
    instanceID: "EEWorkshopHeading",
    title: "ELECTRICAL ENGINEERING WORKSHOP"
  };
  render() {
    return (
      <div className="DeptLibrary" id="dept-library">
        <HeadingOne data={this.DeptLibHeading} />
        <HeadingTwo data={this.CompLabHeading} />
        
        <table id="tableformat">
	      <tbody>
          <tr>
            <th>ITEMS</th><th>QUANTITY</th>
          </tr>
		      <tr>
	          	<td>Computer- DELL OPTIPLEX 3010MT,Core i5 3470,4 GB RAM,500GBHDD,18.5" TFT Monitor</td>
		          <td>33</td>
	       </tr>
	       <tr>
		          <td>Laser Printer - Canon LBP 2090</td>
		          <td>1</td>
	       </tr>
	       <tr>
		          <td>Projector - Panasonic PT LX 270</td>
	        	  <td>1</td>
	       </tr>
	       <tr>
	        	  <td>Scanner - HP Scanjet 200</td>
		          <td>1</td>
	      </tr>	
      	</tbody>
      </table>
      
      <br />
      <HeadingTwo data={this.EMPSLabHeading} />
      <table id="tableformat">
	      <tbody>
          <tr>
            <th colSpan="2">INSTRUMENTS</th>
          </tr>
		      <tr>
	          	<td>High Voltage oil tester, 0- 60kV</td>
		          <td>Kelvin’s double bridge </td>
	       </tr>
	       <tr>
		          <td>High Voltage Test Set,  0- 60kV  </td>
		          <td>P.O. Box 6 Dial</td>
	       </tr>
	       <tr>
		          <td>Rectifier unit, 25A </td>
	        	  <td>Hibbertz magnetic standard</td>
	       </tr>
	       <tr>
	        	  <td>Double wound Transformer, 400/440V</td>
		          <td>Slide wire potentiometer</td>
	      </tr>	
        <tr>
          <td>Double wound Transformer, 220/230 V</td>
          <td>LVDT Trainer </td>
        </tr>
        <tr>
          <td>Wheatstone Bridge </td>
          <td>Vernier potentiometer </td>
        </tr>
        <tr>
          <td>Crompton potentiometer </td>
          <td>Lloyd fisher square, 10A </td>
        </tr>
        <tr>
          <td>Phase shifting transformer, 500VA </td>
          <td>Kelvin’s double bridge </td>
        </tr>
      	</tbody>
      </table>
      <br />
      <HeadingTwo data={this.EMLabHeading} />
      <table id="tableformat">
	      <tbody>
          <tr>
            <th colSpan="2">MACHINES</th>
          </tr>
		      <tr>
	          	<td>DC Compound motor, 5HP coupled with 5HP DC Compound Generator </td>
		          <td> DC Series motor, 5HP with Loading arrangement </td>
	       </tr>
	       <tr>
	          	<td>DC Series Motor, 2 KW coupled with DC Series Generator</td>
		          <td>DC Compound motor, 5HP with Loading arrangement </td>
	       </tr>
		<tr>
	          	<td>Single phase Induction  motor, 1 HP  with Loading arrangement 
		</td>
		          <td>Slip ring Induction motor, 4HP with Loading arrangement </td>
	       </tr>
		<tr>
	          	<td>Three phase Induction motor, 5 HP with Loading arrangement </td>
		          <td>Winding study motor, 3Ph, 1400/2880 rpm </td>
	       </tr>
         <tr>
	          	<td>DC Shunt motor, 5HP with Loading arrangement </td>
		          <td>DC Shunt Motor, 1.5kW and Alternator, 1kVA, 1Ph 230V, 40Hz to 60Hz </td>
	       </tr>
		<tr>
	          	<td>AC/DC Motor, 1/2 HP, 4500 RPM </td>
		          <td>Cascade Set -  Slip ring I/M, Squirrel cage I/M, DC Compound Generator </td>
	       </tr>
		<tr>
	          	<td>Single phase transformer , 3kVA, 400/440</td>
		          <td>AC/DC motor, 230V,1HP, Shunt Motor </td>
	       </tr>
         <tr>
	          	<td>Three Phase Transformer ,Y/Y double wound, 2KVA, 400/230V </td>
		          <td>Synchronous Induction motor, 3kW, DC Shunt motor, 3.7kW, 1500 rpm </td>
	       </tr>
		<tr>
	          	<td>Stepper Motor, 6V, 1.4A </td>
		          <td>Induction Generator, 2.2 kW, 3Ph, 1540 rpm, DC Shunt motor, 3.7kW  </td>
	       </tr>
		<tr>
	          	<td>DC Compound Motor- Alternator set, 5HP, 400V </td>
		          <td>Synchronizing Panel </td>
	       </tr>
         </tbody>
      </table>
      <br />
      <HeadingTwo data={this.SysLabHeading} />
      <table id="tableformat">
	      <tbody>
          <tr>
            <th colSpan="2">EQUIPMENTS</th>
          </tr>
		      <tr>
	          	<td>AC Servo motor PEC 00A</td>
		          <td>Amplidyne,1kW with prime mover </td>
	       </tr>
	       <tr>
	          	<td>DC motor generator set transfer function study trainer</td>
		          <td>Microprocessor/Microcontroller Trainer  LCD </td>
	       </tr>
		<tr>
	          	<td>DC motor generator Load test module ITB PEC 03ACCIA</td>
		          <td>Interface boards </td>
	       </tr>
		<tr>
	          	<td>DC motor Load test module ITB PEC 03 ACCIB</td>
		          <td>Stepper motor  with control VBMB 013A LC  </td>
	       </tr>
         <tr>
	          	<td>DC Shunt motor,2.2kW, 230V,1500rpm</td>
		          <td>Multiplexed display board 8 Digit, VBMB 016  </td>
	       </tr>	
         <tr>
	          	<td>UPS, 4kVA</td>
		          <td>Traffic light control system TLC  </td>
	       </tr>
         <tr>
	          	<td>2 Phase motor, GVD make,  1Hp, 230 V per phase,1500rpm, with loading,  3 to 2 phase power supply,digital speed indicator</td>
		          <td>Servo voltage stabilizer, 5kVA,  Auto/manual  </td>
	       </tr>
         <tr>
	          	<td>DC servo motor with controller and loading</td>
		          <td>Digital Oscilloscope, Rigol, 50MHz DS1052E </td>
	       </tr>
         <tr>
	          	<td>Temperature Process control</td>
		          <td>Microcontroller Universal programmer No TOP 3000  </td>
	       </tr>
      	</tbody>
      </table>
      <br />
      <HeadingTwo data={this.CircuitsLabHeading} />
      <table id="tableformat">
	      <tbody>
          <tr>
            <th>EQUIPMENTS</th>
          </tr>
		      <tr>
	          	<td>CRO</td>
		          
	       </tr>
	       <tr>
	          	<td>Function generator, Aplab,2 MHz</td>
              		          
	       </tr>
		<tr>
	          	<td>DC Power supply,0-30V, 1A, variable, single</td>
		          
	       </tr>
		<tr>
	          	<td>Static characteristics module PEC16M1-A</td>
		          
	       </tr>
         <tr>
	          	<td>R, RC, & UJT Firing circuit module ITB PEC 14M12</td>
		          
	       </tr>
         <tr>
	          	<td>AC Phase control  using SCR , TRIAC&DIAC ITB PEC14M22</td>
		          
	       </tr>
         <tr>
	          	<td>Single phase bridge converter firing circuit PEC 14HV4</td>
		          
	       </tr>
         <tr>
	          	<td>Speed control of DC motor VPET208 VPET205 & Pm DC motor</td>
		          
	       </tr>
         <tr>
	          	<td>Three phase IGBT inverter PEC 16HV2</td>
		          
	       </tr>
           	</tbody>
      </table>
      <br />
      <HeadingTwo data={this.EEWorkshopHeading} />
      <table id="tableformat">
	      <tbody>
          <tr>
            <th colSpan="2">EQUIPMENTS</th>
          </tr>
		      <tr>
	          	<td>Exhaust Fan Almonard</td>
		          <td>Iron box, Philips GC 83 </td>
	       </tr>
	       <tr>
	          	<td>Ceiling fan, Crompton Greaves 48" </td>
		          <td>Monoblock Motor pumpset, 0.5HP,  Vguard make neon - CH 45  </td>
	       </tr>
		<tr>
	          	<td>Coil winding Machine, Hand driven DB-RH</td>
		          <td>Working model of 3Ph A C Generator </td>
	       </tr>
		<tr>
	          	<td>Bench drill MEW with AERO motor, single phase, 0.5HP</td>
		          <td>Working model of DC Machine </td>
	       </tr>

         <tr>
	          	<td>ench grinder Double end, 0.5 HP, single phase,
 Engee make</td>
		          <td>Demonstration model of 1 Ph Induction Motor </td>
	       </tr>
         <tr>
	          	<td>DB, 3Ph, 4way with phase selector </td>
		          <td>Cut section of DC Machine with windings </td>
	       </tr>
         <tr>
	          	<td>Inverter, 150VA, CP35 Battery</td>
		          <td>Cut section of Squirrel Cage Induction Motor with windings </td>
	       </tr>


      	</tbody>
      </table>

      </div>
    );
  }
}

export default Labs;
