import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne";

import HeadingTwo from "../../Components/Texts/HeadingTwo";
import "../../Components/Tables/tableformat.css";
class Labs extends Component {
  state = {};
  DeptLibHeading = {
    instanceID: "DeptLibHeading",
    title: "Department Labs"
  };
  DeptLibHeading = {
    instanceID: "DeptLibHeading",
    title: "Department Labs"
  };
  ICLabHeading = {
    instanceID: "ICLabHeading",
    title: "INTEGRATED CIRCUITS LAB"
  };
  MCLabHeading = {
    instanceID: "MCLabHeading",
    title: "MICROCONTROLLER & SYSTEMS LAB"
  };
  COMMLabHeading = {
    instanceID: "COMMCLabHeading",
    title: "COMMUNICATION LAB-1"
  };
  ProjLabHeading = {
    instanceID: "ProjLabHeading",
    title: "Project Lab"
  };
  CircLabHeading = {
    instanceID: "CircLabHeading",
    title: "CIRCUITS LAB-I"
  };
  Comm2LabHeading = {
    instanceID: "Comm2LabHeading",
    title: "COMMUNICATION LAB-II"
  };
  Cir2LabHeading = {
    instanceID: "Cir2LabHeading",
    title: "CIRCUITS LAB II"
  };
  EmbdLabHeading = {
    instanceID: "EmbdLabHeading",
    title: "EMBEDDED SYSTEM LAB"
  };
  render() {
    return (
      <div className="DeptLibrary" id="dept-library">
        <HeadingOne data={this.DeptLibHeading} />
        <HeadingTwo data={this.ICLabHeading} />
        <table id="tableformat">
	      <tbody>
		      <tr>
          <th>#</th><th>Equipment Name</th><th>Make</th><th>Specification</th><th>Quantity</th>
	       </tr>
         <tr>
           <td>1</td>
           <td>Digital IC Trainer Kit</td>
           <td>Scientific Tech</td>
           <td></td>
           <td>12</td>
         </tr>
         <tr>
           <td>2</td>
           <td>CRO</td>
           <td>Aplab</td>
           <td>30MHz</td>
           <td>4</td>
         </tr>
         <tr>
           <td>3</td>
           <td>CRO</td>
           <td>EZ</td>
           <td>30MHz</td>
           <td>6</td>
         </tr>
         <tr>
           <td>4</td>
           <td>CRO</td>
           <td>Scientech</td>
           <td>20MHz</td>
           <td>2</td>
         </tr>
         <tr>
           <td>5</td>
           <td>Function Generator</td>
           <td>Aplab</td>
           <td>MSG2M</td>
           <td>10</td>
         </tr>
         <tr>
           <td>6</td>
           <td>Function Generator</td>
           <td>Aplab</td>
           <td>FG1M</td>
           <td>1</td>
         </tr>
         <tr>
           <td>7</td>
           <td>Function Generator</td>
           <td>Aplab</td>
           <td>2011A</td>
           <td>6</td>
         </tr>
         <tr>
           <td>8</td>
           <td>Function Generator</td>
           <td>Scientech</td>
           <td>Scientech</td>
           <td>5</td>
         </tr>
         <tr>
           <td>9</td>
           <td>Variable Power Supply</td>
           <td>Scientific Tech</td>
           <td>STVD3001</td>
           <td>9</td>
         </tr>
         <tr>
           <td>10</td>
           <td>Fixed Power Supply</td>
           <td>Spectrum</td>
           <td>SPS-8031</td>
           <td>2</td>
         </tr>
         <tr>
           <td>11</td>
           <td>Fixed Power Supply</td>
           <td>Spectrum</td>
           <td>SPS-8057</td>
           <td>6</td>
         </tr>
         <tr>
           <td>12</td>
           <td>Rheostat</td>
           <td>Stead</td>
           <td></td>
           <td>7</td>
         </tr>
         <tr>
           <td>13</td>
           <td>Multimeter</td>
           <td>KusamMeco</td>
           <td></td>
           <td>5</td>
         </tr>
         <tr>
           <td>14</td>
           <td>Multimeter</td>
           <td>Classic</td>
           <td>LCR</td>
           <td>1</td>
         </tr>
         <tr>
           <td>15</td>
           <td>Multimeter</td>
           <td>Classic</td>
           <td>LCR</td>
           <td>1</td>
         </tr>
         <tr>
           <td>16</td>
           <td>Multimeter</td>
           <td>Metravi</td>
           <td></td>
           <td>1</td>
         </tr>
         <tr>
           <td>17</td>
           <td>Computer</td>
           <td>Dell</td>
           <td>Optiplex 3010</td>
           <td>1</td>
         </tr>
         <tr>
           <td>18</td>
           <td>LVDT Trainer kit</td>
           <td>Unitech Banglore</td>
           <td></td>
           <td>3</td>
         </tr>
         <tr>
           <td>19</td>
           <td>Unitech Banglore</td>
           <td></td>
           <td></td>
           <td>3</td>
         </tr>
         <tr>
           <td>20</td>
           <td>Strain Measurement Trainer Kit</td>
           <td>Unitech scales</td>
           <td></td>
           <td>3</td>
         </tr>
         <tr>
           <td>21</td>
           <td>Strain Gage</td>
           <td>Unitech scales</td>
           <td></td>
           <td>3</td>
         </tr>
         <tr>
           <td>22</td>
           <td>Pressure Measurement Trainer Kit</td>
           <td></td>
           <td>UITM 05</td>
           <td>3</td>
         </tr>
         <tr>
           <td>23</td>
           <td>Pressure Measurement setup</td>
           <td></td>
           <td>UPD-210</td>
           <td>3</td>
         </tr>
         <tr>
           <td>24</td>
           <td>Air Pump</td>
           <td></td>
           <td></td>
           <td>3</td>
         </tr>
         
      	</tbody>
      </table>
      <HeadingTwo data={this.MCLabHeading} />
      <table id="tableformat">
      <tbody>
		      <tr>
          <th>#</th><th>Equipment Name</th><th>Make</th><th>Specification</th><th>Quantity</th>
	       </tr>
         <tr>
           <td>1</td>
           <td>Computer</td>
           <td>HP</td>
           <td>
             <li>22 X Core i3</li>
             <li>20 X Core i5</li>
             <li>4 X dx 7400</li>
           </td>
           <td>36</td>
         </tr>
         <tr>
           <td>2</td>
           <td>DSP</td>
           <td>Vi Micro</td>
           <td>TMS 32016748</td>
           <td>4</td>
         </tr>
         <tr>
           <td>3</td>
           <td>Microcontroller 8051 kitv</td>
           <td>Vi Micro</td>
           <td></td>
           <td>13</td>
         </tr>
         <tr>
           <td>4</td>
           <td>Microcontroller 8055 kit</td>
           <td>Vi Micro</td>
           <td></td>
           <td>16</td>
         </tr>
         <tr>
           <td>5</td>
           <td>PAL/GAL trainer kit</td>
           <td>Silicon Micro Systems</td>
           <td></td>
           <td>2</td>
         </tr>
         <tr>
           <td>6</td>
           <td>LCD Projector</td>
           <td>Hitachi</td>
           <td></td>
           <td>1</td>
         </tr>
         <tr>
           <td>7</td>
           <td>CRO</td>
           <td>Aplab</td>
           <td>30MHz</td>
           <td>4</td>
         </tr>
         <tr>
           <td>8</td>
           <td>Microprocessor 8086</td>
           <td>Vi Micro</td>
           <td></td>
           <td>1</td>
         </tr>
         <tr>
           <td>9</td>
           <td>89C51 Micro Controller Development Board</td>
           <td>Vi Micro</td>
           <td>Vput -01</td>
           <td>1</td>
         </tr>
         </tbody>
        </table>
        <HeadingTwo data={this.COMMLabHeading} />
        <table id="tableformat">
      <tbody>
		      <tr>
          <th>#</th><th>Equipment Name</th><th>Make</th><th>Specification</th><th>Quantity</th>
	       </tr>
         <tr>
           <td>1</td>
           <td>DSO</td>
           <td>AGILENT</td>
           <td>70 MHz,1GSa/s</td>
           <td>12</td>
         </tr>
         <tr>
           <td>2</td>
           <td>Function Generator</td>
           <td>Anshuman</td>
           <td>2 MHz</td>
           <td>15</td>
         </tr>
         <tr>
           <td>3</td>
           <td>Power Supply</td>
           <td>Spectrum</td>
           <td>15 v ,Fixed</td>
           <td>2</td>
         </tr>
         <tr>
           <td>4</td>
           <td>Power Supply</td>
           <td>Scientific Tech</td>
           <td>(0-30)v, Variable</td>
           <td>20</td>
         </tr>
         <tr>
           <td>5</td>
           <td>Inductance Box</td>
           <td>ADD</td>
           <td>1mH - 1H, 100 microH -900mH</td>
           <td>20</td>
         </tr>
         <tr>
           <td>6</td>
           <td>IC Tester</td>
           <td>Minimax</td>
           <td>Linear</td>
           <td>1</td>
         </tr>
         <tr>
           <td>7</td>
           <td>Multimeter</td>
           <td>Meco</td>
           <td></td>
           <td>1</td>
         </tr>
         <tr>
           <td>8</td>
           <td>Series Universal Programmer</td>
           <td>Superpro</td>
           <td></td>
           <td>1</td>
         </tr>
         
         </tbody>
        </table>
        <HeadingTwo data={this.ProjLabHeading} />
        <table id="tableformat">
      <tbody>
		      <tr>
          <th>#</th><th>Equipment Name</th><th>Make</th><th>Specification</th><th>Quantity</th>
	       </tr>
         <tr>
           <td>1</td>
           <td>DC POWER SUPPLY</td>
           <td>Scientific Tech</td>
           <td>(0-30)V, Variable</td>
           <td>5</td>
         </tr>
         <tr>
           <td>2</td>
           <td>FUNCTION GENERATOR</td>
           <td>ANSHUMAN</td>
           <td>2MHz</td>
           <td>3</td>
         </tr>
         <tr>
           <td>3</td>
           <td>DSO</td>
           <td>Tektronix</td>
           <td>TDS 2002 B,60MHz,1 GS/s</td>
           <td>1</td>
         </tr>
         <tr>
           <td>4</td>
           <td>CRO</td>
           <td>Aplab Scientific</td>
           <td>20MHz</td>
           <td>3</td>
         </tr>
         <tr>
           <td>5</td>
           <td>DIGITAL IC TRAINER KIT</td>
           <td>Scientific Tech</td>
           <td></td>
           <td>1</td>
         </tr>
         <tr>
           <td>6</td>
           <td>COMPUTER</td>
           <td>HP</td>
           <td>Intel Core 2 Duo 2 .93GHz, 3GB</td>
           <td>3</td>
         </tr>
         
         </tbody>
        </table>
        <HeadingTwo data={this.CircLabHeading} />
        <table id="tableformat">
      <tbody>
		      <tr>
          <th>#</th><th>Equipment Name</th><th>Make</th><th>Specification</th><th>Quantity</th>
	       </tr>
         <tr>
           <td>1</td>
           <td>DSO</td>
           <td>Tektronix</td>
           <td>40MHz,500MS/s</td>
           <td>10</td>
         </tr>
         <tr>
           <td>2</td>
           <td>Function Generator</td>
           <td>Aplab</td>
           <td>2MHz</td>
           <td>15</td>
         </tr>
         <tr>
           <td>3</td>
           <td>Power Supply</td>
           <td>Scientific Tech</td>
           <td>(0-30)v, Variable</td>
           <td>12</td>
         </tr>
         <tr>
           <td>4</td>
           <td>Multimeter</td>
           <td>Classic 333</td>
           <td>LCR</td>
           <td>2</td>
         </tr>
         <tr>
           <td>5</td>
           <td>Voltmeter</td>
           <td>Nippen, Meco</td>
           <td>(0-1)v,(0-5)v,(0-10)v</td>
           <td>25</td>
         </tr>
         <tr>
           <td>6</td>
           <td>Ammeter</td>
           <td>Nippen, Meco</td>
           <td>(0-1)mA,(0-10)mA,(0-100)mA</td>
           <td>25</td>
         </tr>
         <tr>
           <td>7</td>
           <td>Rheostat</td>
           <td>Stead</td>
           <td>1000 OHMS, 0.5A</td>
           <td>15</td>
         </tr>
         <tr>
           <td>8</td>
           <td>Inductance Box</td>
           <td>ADD</td>
           <td>1mH - 1H, 100 microH -900mH</td>
           <td>10</td>
         </tr>
         <tr>
           <td>9</td>
           <td>Computer</td>
           <td>HP</td>
           <td>Intel Core2 Duo 2.93 GHz</td>
           <td>1</td>
         </tr>
         </tbody>
        </table>
        <HeadingTwo data={this.Comm2LabHeading} />
        <table id="tableformat">
      <tbody>
		      <tr>
          <th>#</th><th>Equipment Name</th><th>Make</th><th>Specification</th><th>Quantity</th>
	       </tr>
         <tr>
           <td>1</td>
           <td>DSO</td>
           <td>Tektronix</td>
           <td>TDS 2002 B,60MHz,1GS/s</td>
           <td>10</td>
         </tr>
         <tr>
           <td>2</td>
           <td>Function Generator</td>
           <td>Anshuman</td>
           <td>2MHz</td>
           <td>16</td>
         </tr>
         <tr>
           <td>3</td>
           <td>Power Supply</td>
           <td>Scientific Tech</td>
           <td>(0-30)V, Variable</td>
           <td>12</td>
         </tr>
         <tr>
           <td>4</td>
           <td>Microwave Training System</td>
           <td>Scientific Tech</td>
           <td></td>
           <td>3</td>
         </tr>
         <tr>
           <td>5</td>
           <td>Antenna Trainer Kit</td>
           <td>Scientech</td>
           <td></td>
           <td>1</td>
         </tr>
         <tr>
           <td>6</td>
           <td>Satelite Comm.Training System</td>
           <td>Satcomm</td>
           <td></td>
           <td>1</td>
         </tr>
         <tr>
           <td>7</td>
           <td>Digital Comm. Lab Trainer</td>
           <td>United Electrotech</td>
           <td></td>
           <td>8</td>
         </tr>
         <tr>
           <td>8</td>
           <td>Multimeter</td>
           <td>Meco</td>
           <td></td>
           <td>1</td>
         </tr>
         <tr>
           <td>9</td>
           <td>Computer</td>
           <td>ell Optiplex 3010</td>
           <td>Intel Core i5 3.2GHz, 4GB RAM</td>
           <td>15</td>
         </tr>
         <tr>
           <td>10</td>
           <td>Computer</td>
           <td>Hp DX 7400</td>
           <td>Intel Core 2 Duo 2.93GHz, 2GB RAM</td>
           <td>2</td>
         </tr>
         <tr>
           <td>11</td>
           <td>Lab VIEW Software</td>
           <td>National Instruments</td>
           <td></td>
           <td></td>
         </tr>
         
         </tbody>
        </table>
        <HeadingTwo data={this.Cir2LabHeading} />
        <table id="tableformat">
      <tbody>
		      <tr>
          <th>#</th><th>Equipment Name</th><th>Make</th><th>Specification</th><th>Quantity</th>
	       </tr>
         <tr>
           <td>1</td>
           <td>CRO</td>
           <td>Aplab</td>
           <td>30MHz,Dual Channel</td>
           <td>16</td>
         </tr>
         <tr>
           <td>2</td>
           <td>Function Generator</td>
           <td>Aplab</td>
           <td>2MHz</td>
           <td>12</td>
         </tr>
         <tr>
           <td>3</td>
           <td>Power Supply</td>
           <td>Scientific Tech</td>
           <td>(0-30)V, Variable</td>
           <td>9</td>
         </tr>
         <tr>
           <td>4</td>
           <td>Ammeter</td>
           <td>Meco</td>
           <td>(0-1)mA, (0-10)mA, (0-100)mA</td>
           <td>15</td>
         </tr>
         <tr>
           <td>5</td>
           <td>Volt Meter</td>
           <td>Meco</td>
           <td>(0-1)V,(0-10)V</td>
           <td>15</td>
         </tr>
         <tr>
           <td>6</td>
           <td>Rheostat</td>
           <td>Stead</td>
           <td>1000 OHMS, 0.5A</td>
           <td>12</td>
         </tr>
         <tr>
           <td>7</td>
           <td>Multimeter</td>
           <td>Vaa Tech</td>
           <td></td>
           <td>8</td>
         </tr>
         <tr>
           <td>8</td>
           <td>Computer</td>
           <td>HP DX 7400</td>
           <td>Intel Core 2 Duo 2.33GHz, 2GB RAM</td>
           <td>2</td>
         </tr>
         <tr>
           <td>9</td>
           <td>IC Tester</td>
           <td>Minimax</td>
           <td>Linear</td>
           <td>1</td>
         </tr>
         </tbody>
        </table>
        <HeadingTwo data={this.EmbdLabHeading} />
        <table id="tableformat">
      <tbody>
		      <tr>
          <th>#</th><th>Equipment Name</th><th>Make</th><th>Specification</th><th>Quantity</th>
	       </tr>
         <tr>
           <td>1</td>
           <td>Computer</td>
           <td>HP</td>
           <td>Intel core 2 Duo, 4GB</td>
           <td>20</td>
         </tr>
         <tr>
           <td>2</td>
           <td>Computer</td>
           <td>Dell</td>
           <td>Intel core i5, 4GB</td>
           <td>6</td>
         </tr>
         <tr>
           <td>3</td>
           <td>ARM 7</td>
           <td>Big Technologies</td>
           <td>LPC2129</td>
           <td>1</td>
         </tr>
         <tr>
           <td>4</td>
           <td>ARM 9</td>
           <td>Big Technologies</td>
           <td>ARM 926EJS</td>
           <td>3</td>
         </tr>
         <tr>
           <td>5</td>
           <td>Xilinx Software</td>
           <td></td>
           <td>12.4</td>
           <td>15</td>
         </tr>
         <tr>
           <td>6</td>
           <td>DSP Kit</td>
           <td>Spectrum Digital</td>
           <td>TMS 320C6713</td>
           <td>3</td>
         </tr>
         <tr>
           <td>7</td>
           <td>CPLD/FPGA</td>
           <td>Advanced Electronics</td>
           <td>XC3S50</td>
           <td>3</td>
         </tr>       
         
         </tbody>
        </table>

      </div>
    );
  }
}

export default Labs;
