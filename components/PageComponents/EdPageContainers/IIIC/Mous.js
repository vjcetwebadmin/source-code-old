import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne"; 
import Bodythree from "../../Components/Texts/BodyThree";
import "../../Components/Tables/tableformat.css";
class Mous extends Component {
  state = {};
  
  MousHeading = {
    instanceID: "MousHeading",
    title:
      "Memorandums of Understanding With Industries"
  };
  MouDescriptionOne = {
    instanceID: "MouDescriptionOne",
    title:
      "VJCET was interacting with many industries in Kerala and southern part of India in the last one decade. Realizing the need for formalizing the interaction and continue in a systematic manner memorandums of understanding (MOUs) were signed with industries. MOU’s are for a period 5 years and it clearly mentions the areas of mutual exchange and responsibilities.   MOUs were signed  with 21 industries so far and the list   is given below. "
  };
  

  render() {
    return (
      <div className="Program" id="program">
         <HeadingOne data={this.MousHeading} />
        <Bodythree data={this.MouDescriptionOne} />
        <table id="tableformat">
                            <tr><th>#</th><th>COMPANY NAME</th><th>MOU DATE</th></tr>
                            <tr><td>1</td><td>M/s Progressive Cybernetics Pvt.Ltd,41672/A1, II nd Floor, Lovely Avenue, Puthiya road, Kaloor, Cochin &ndash; 682017,Kerala, India.</td><td>18.08.2016</td></tr>
                            <tr><td>2</td><td>M/s Jocyt Aerospace, Olamattom, Thodupuzha, Idukki Dist, Kerala, India, PIN-685584 </td> <td>18.08.2016</td></tr>
                            <tr><td>3</td><td>M/s Pepperpot Systems and Solutions Pvt. Ltd,Devadaram, Infopark Thrissur, Nalukettu Road, Koratty,PIN &ndash; 680 308</td><td>20.08.2016</td></tr>
                            <tr><td>4</td><td>M/s C T Control Technology (India) Private Ltd.,Srishti, #7, Sharada Colony, 8th Main Road, Basaveshwara Nagar,Bengaluru, Karnataka, PIN- 560079</td><td>03.09.2016</td></tr>
                            <tr><td>5</td><td>M/s Infra Housing Pvt. Ltd, CLS Building, M G Road,Cochin, Kerala,PIN- 682 011</td><td>08.09.2016</td></tr>
                            <tr><td>6</td><td>M/s Renaisoft Solutions Pvt. Ltd,1st Floor, Puzhakkarayil Building, SH15, Thalayolaparambu, Kerala, PIN- 686605</td><td>04.10.2016</td></tr>
                            <tr><td>7</td><td>M/s G & G Constructions,Georgetown, Adam Star Complex, Thodupuzha, Kerala ,PIN-685584</td><td>07.10.2016</td></tr>
                            <tr><td>8</td><td>M/sLunars Rubbers Pvt. Ltd., Post Box No: 34, Matha Shopping Arcade, Thodupuzha,Kerala , India,PIN : 685584</td><td>11.11.2016</td></tr>
                            <tr><td>9</td><td>M/s Bitsforge Technologies (P) Ltd.7/570k, Chithranjali Studio Building, NGO Quarters, Kakkanad, Thrikkakara P.O. PIN-682021</td><td>23.11.2016</td></tr>
                            <tr><td>10</td><td>M/s Antonal Group of Companies ,Pulinattu Properties, Muvattupuzha, Cochin, Kerala, India, PIN -686673</td><td>08.12.2016</td></tr>
                            <tr><td>11</td><td>M/s Suvire Electric P ltd, G-12, SIPCOT, Industrial park, Sriperumbadur, Kancheepuram, Tamil Nadu</td><td>10.01.2017</td></tr>
                            <tr><td>12</td><td>M/s Metrolla Steels mltd, Pezhakkapplilly P O, Paipra, Muvattupuzha- PIN 686674</td><td>01.07.2017 </td></tr>
                            <tr><td>13</td><td>M/s Zixent Technologies,Plathinkl building, EEC market Road, Muvattupuzha,Cochin, Kerala </td><td>10.07.2017</td></tr>
                            <tr><td>14</td><td>M/s Intercad system Pvt Ltd ,2 nd floor, Balakrishna Pillai Building,Opp st. Ignatius Knanaya Church, Trivandrum Kerala</td><td>09.8.2017</td></tr>
                            <tr><td>15</td><td>M/s Amaze logistic Pvt ltd , Third floor, Sreevalsam Complex, Thodupuzha,Indukki, Kerla, India </td><td>13.10.2017</td></tr>                            
                            <tr><td>16</td><td>M/s Supertech Tools & Components Pvt Ltd.Aiswarya Colony, Madakkathanam, Muvattupuzha Kerala</td><td>20.10.2017</td></tr>
                            <tr><td>17</td><td>M/s BIMIT CAD and BIM Training services Ernakulam</td><td>22.12.2017</td></tr>
                            <tr><td>18</td><td>M/s Reecco Energy India Pvt. Ltd</td><td>09.02.2018</td></tr>
                            <tr><td>19</td><td>M/s HKT- Haus Konzept Thadathil, Hauptsre.1, 58332 Schwelm, Germany</td><td>12.06.2018</td></tr>
                            <tr><td>20</td><td>M/s InXpire GmbH, Erkrather Stra&beta;e. 401,40321 D&uuml;sseldorf, Germany </td><td>12.06.2018</td></tr>
                            <tr><td>21</td><td>M/s Technopower Engineering Company</td><td>20.06.2018</td></tr>
                            
                </table>
      </div>
    );
  }
}

export default Mous;
