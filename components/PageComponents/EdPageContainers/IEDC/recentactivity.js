import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne"; 
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import "../../Components/Tables/tableformat.css";
class Mous extends Component {
  state = {};
  
  MousHeading = {
    instanceID: "MousHeading",
    title:
      "Highlights Activities of  IEDC at VJCET"
  };
  MouDescriptionOne = {
    instanceID: "MouDescriptionOne",
    title:
      "VJCET was interacting with many industries in Kerala and southern part of India in the last one decade. Realizing the need for formalizing the interaction and continue in a systematic manner memorandums of understanding (MOUs) were signed with industries. MOU’s are for a period 5 years and it clearly mentions the areas of mutual exchange and responsibilities.   MOUs were signed  with 21 industries so far and the list   is given below. "
  };
  MessageContent1 = {
    instanceID: "MessageContent",
    title: "EDC has an office cum work space of  around  500 square feet in the  Civil Engineering block,  adjacent to VJCET Startup hub.  "
}
MessageContent2= {
    instanceID: "MessageContent",
    title: "In VJCET, college level idea fest is conducted every year  and  an   idea fest is planned in the Academic year 2019-2020.  "
}
MessageContent3 = {
    instanceID: "MessageContent",
    title: "For the benefit of the students and faculty numbers and Idea  discussion meet was conducted  on 30 th August 2019.  Dr. K C Chandrasekharan Nair, former CFO and founder Technopark  park Trivandrum  Chaired  the discussion meet.    In the discussion meet separate time slots were allotted to students of each department and  all together  more than  100 students  attended the meet and had      one to one  discussion and interaction  Dr. Chandrasekharan Nair.   "
}
MessageContent4 = {
    instanceID: "MessageContent",
    title: "Five teams were selected for support in the Idea Fest 2018 conducted by KSUM. Two teams received   financial support and other three teams received technical support  for their projects.  "
}
MessageContent5 = {
    instanceID: "MessageContent",
    title: "For  the Idea Fest-19  conducted by Kerala Start Up Mission(KSUM)  63 teams from  VJCET submitted their ideas. Eight teams were  short listed in the first round.  One team was selected  for  funding support up to rupees  two lakhs for their project, AGR-E  (AGR- E is a CNC Farming Machine). This is one of the 18 projects selected  by  Kerala Start Up Mission out of 1600 projects  from all over Kerala. The members of team are are Firoz  S, Erfan Muhammed C.K  [C],  Bilal Shamsudhin    and Sanjay M S of S7 A, Department of Mechanical Engineering.  "
}
MessageContent6 = {
  instanceID: "MessageContent",
  title: "Separate Orientation   work shop was conducted for  all the first  year students in each department and explained  about the functioning of IEDC and its relevance."
}
MessageContent7 = {
  instanceID: "MessageContent",
  title: "Students and faculty members of IEDC VJCET are participating  in IEDC summit-2019, workshops organised by ICT academy on behalf of Kerala start-up mission,  the event Huddle 2019   and other programmes organised by Kerala start-up mission at various places. "
}
MessageContent8 = {
  instanceID: "MessageContent",
  title: "In addition   IEDC, VJCET  is conducting  work  shops, skill development programmes, technical talks and Industry Interaction programmes   regularly."
}

  render() {
    return (
      <div className="Program" id="program">
         <HeadingOne data={this.MousHeading} />
         <ul>
                        
                        <li>
                            <p>
                                <BodyOneJustified data={this.MessageContent1} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.MessageContent2} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.MessageContent3} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.MessageContent4} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.MessageContent5} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.MessageContent6} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.MessageContent7} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.MessageContent8} />
                            </p>
                        </li>
                        
                    </ul>
       
      </div>
    );
  }
}

export default Mous;
