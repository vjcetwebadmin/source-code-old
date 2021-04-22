import React from "react";
import HeadingTwo from "../../Components/Texts/HeadingTwo";
import HeadingOne from "../../Components/Texts/HeadingOne";
import ImageOne from "../../Components/Images/ImageOne";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import "../styles.css"
import "../../Components/Tables/tableformat.css";
import Header from "../../Components/Header&Footer/Header";
import Footer from "../../Components/Header&Footer/Footer";
import MenuOverlay from "../../Components/MenuOverlay/MenuOverlay";

class Library extends React.Component {
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

    LibraryTitle = {
        instanceID: "LibraryTitle",
        title: "The Central Library"
    };
    LibraryCentralTitle = {
        instanceID: "LibraryCentralTitle",
        title: "The Central Library"
    };
    LibraryDigitalTitle = {
        instanceID: "LibraryDigitalTitle",
        title: "DIGITAL LIBRARY"
    };
     LibraryDigitalResorceTitle = {
        instanceID: "LibraryDigitalResourceTitle",
        title: "E- RESOURCES"
    };
    LibraryContent1 = {
        instanceID: "LibraryContent1",
        title: "Synonymous with abode of knowledge the central library of the college is stocked with a rich collection of Books, National and International journals, Technical and other Magazines, CD ROMs on Engineering, other widely appreciated editions on diverse subjects like Literature, Management, Religion, Competitive exams etc. It is housed in an area of 16400 Sq.ft. spread over two floors. This library follows an open access system, Barcode based circulation process and OPAC Literature search and Web based Online Public Access Catalogue (WEB OPAC- IP Based Access) system is also incorporated.. Surveillance cameras help to regulate the movement of the users in the library."
    }
    LibraryContent2 = {
        instanceID: "LibraryContent2",
        title: "We arrange access to the world of information whether online, multimedia or in print. In order to effectively capitalize on the opportunities provided by radical changes to technology, pedagogy and research practice, the libraries operate in a number of profound ways and work in partnership with faculty members to enhance students' research skill development, encompassing both information literacy and learning skills."
    }
    LibraryContent3 = {
        instanceID: "LibraryContent3",
        title: "The collection comprises 43774 printed documents such as books, project reports, Mini project reports, Seminar reports and back volumes of journals and the non-book materials like CD ROMs. Membership of the library is open to Students, Teachers and Non Teaching Staff of this college. Library membership is free to all faculty, staff and students.The library also subscribes 88 printed journals, 31 general magazines and library subscribed full text online database like IEEE(ASPP), Science Direct, EBSCO and E - resources through DELNET and National digital library. NPTEL facility to access video lectures are also available."
    }
    DigitalLibraryContent = {
        instanceID: "DigitalLibraryContent",
        title: "A well- arranged Digital Library with 60 Computers and 25 headphones help the users to view e-facilities and use Audio/video facilities also. Digital Library can also be accessed anywhere on the campus. This library provides uncompromising information and intellectual requirements for its students and faculty with user friendly approach. It offers a fully integrated and dynamic environment for conducting academic study. Multiple copies ensure that resources are easily available in the reference section and stock section as well."
    }
    LibraryServiceTitle = {
        instanceID: "LibraryServiceTitle",
        title: "Library Facilities & Services"
    };
    LibraryReferanceTitle = {
        instanceID: "LibraryServiceTitle",
        title: "Referance Services"
    };
    LibraryReferanceContent = {
        instanceID: "LibraryReferanceContent",
        title: "The Library maintains a separate reference collection consisting of encyclopedias, dictionaries, directories, handbooks, technical data,  atlases, CD -ROMs. Project Reports and seminar Reports. The question papers of the examinations conducted by the university in previous years and syllabi of courses conducted by this college are also made available in this section."
    }
    LibraryReprographyTitle = {
        instanceID: "LibraryReprographyTitle",
        title: "Reprography Services"
    };
    
    
    LibraryReprographyContent = {
        instanceID: "LibraryReprographyContent",
        title: "The Library provides photocopying facilities allowed within the copyright rules. Question papers of previous year university examinations, articles of journals can also be photocopied."
    }
    LibraryResourceTitle = {
        instanceID: "LibraryResourceTitle",
        title: "Library Resources"
    };
    LibraryJournalTitle = {
        instanceID: "LibraryResourceTitle",
        title: "Transaction-Journal-Magazine Subscriptions"
    };
    LibraryJournalContent = {
        instanceID: "LibraryJournalContent",
        title: "The Library receives 129 printed journals, technical and newspapers. The library provides IP enabled access to a large number of full text online journal databases from the various publishers."
    }
    
    LibraryImagedata = {
        instanceID: "LibraryVjcImage",
        image: "IMG_9928.jpg",
        width: "100%"
    }
    render() {
        return (
            <React.Fragment>
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />

                <div className="contain">
                    <HeadingOne data={this.LibraryTitle} className="Heading" />
                    <ImageOne data={this.LibraryImagedata} />
                    <br />
                    <div className="bodyContainer">
                        <HeadingOne data={this.LibraryCentralTitle} className="Heading" />
                        <BodyOneJustified data={this.LibraryContent1} />
                        <p>
                            <BodyOneJustified data={this.LibraryContent2} />
                        </p>
                        <p>
                            <BodyOneJustified data={this.LibraryContent3} />
                        </p>
                    </div>
                    <div>
                    <HeadingTwo data={this.LibraryResourceTitle} className="Heading" />
                    <table border="1"  id="tableformat">
                        <tr>
                            <th> Collection</th><th>Numbers</th>
                        </tr>
                        <tr>
                            <td>Titles</td><td>10396</td>
                        </tr>
                        <tr>
                            <td>Volume</td><td>38285</td>
                        </tr>
                        <tr>
                            <td>Journals(National & International)</td><td>88</td>
                        </tr>
                        <tr>
                            <td>E-Books</td><td>4725</td>
                        </tr>
                        <tr>
                            <td>Project Reports</td><td>1049</td>
                        </tr>
                        <tr>
                            <td>Mini Project Reports</td><td>386</td>
                        </tr>
                        <tr>
                            <td>Seminar Reports</td><td>2587</td>
                        </tr>
                        <tr>
                            <td>Bound Volume</td><td>528</td>
                        </tr>
                        <tr>
                            <td>CD-ROMs</td><td>1467</td>
                        </tr>
                        <tr>
                        <th colspan="5">DIGITAL LIBRARY</th>
                        </tr>
                        <tr>
                            <td>E-Journals</td><td>IEEE (ASPP), Science Direct, EBSCO (Management)</td>
                        </tr>
                        <tr>
                            <td>INSTITUTIONAL MEMBERSHIP</td><td>DELNET, NDL</td>
                        </tr>
                        <tr>
                            <td>IN HOUSE DATABASES</td><td><ol><li>INSTITUTIONAL REPOSITORY</li><li> AUDIO/VIDEO LIBRARY<ol>2.1. NPTEL</ol><ol>2.2. MEDIA REPOSITORY</ol></li></ol> </td>
                        </tr>
                        
                    </table>
                    </div>
                    
                    <div>
                    <p>
                    <HeadingTwo data={this.LibraryServiceTitle} className="Heading" />
                    </p>
                    <table border="1" id="tableformat">
                    <tr><th colspan="5" >LIBRARY WORKING HOURS & HOLIDAYS</th></tr>
                    
                        
                        <tr>
                            <td>Monday to Friday</td>
                            <td>8.30am to 8.00pm</td>
                        </tr>
                        <tr>
                            <td>Saturday</td>
                            <td>9.30am to 3.00pm</td>
                        </tr>
                    </table>
                    <table border="1" id="tableformat">
                    <tr><th colspan="5">OVER NIGHT LENDING</th></tr>
                    
                        
                        <tr>
                            <td>Monday to Friday</td>
                            <td>5.00pm</td>
                        </tr>
                        <tr>
                            <td>Saturday</td>
                            <td>3.00pm</td>
                        </tr>
                        
                    </table>
                    </div>
                    
                    
                    <tr><b>DETAILS OF LIBRARY CARDS & LOAN PERIOD</b></tr>
                    <div>
                    <table border="1" id="tableformat">
                    
                        
                        <tr>
                            <th>Category</th>
                            <th>Number of cards</th>
                            <th>Loan period</th>
                        </tr>
                        <tr>
                            <td>STUDENTS</td>
                            <td>FIRST, SECOND & THIRD YEARS- 4. FINAL YEARS-6</td>
                            <td>15 DAYS</td>
                        </tr>
                        <tr>
                            <td>FACULTY</td>
                            <td>8</td>
                            <td>6 MONTHS</td>
                        </tr>
                        <tr>
                            <td>STAFF</td>
                            <td>2</td>
                            <td>6 MONTHS</td>
                        </tr>
                    </table>
                    </div>
                    
                    <div>
                        <p>
                           <b>Other Services include</b> 
                        </p>
                       <ol>
                        <li>Reference  and Lending Services</li>
                        <li>E- Gate Register</li>
                        <li>OPAC</li>
                        <li>Web OPAC</li>
                        <li>Barcoded Books</li>
                        <li>Barcode Based Transaction</li>
                        <li>Dewey Decimal Classification (DDC) Scheme</li>
                        <li>IP Based Access of E-Journals, E- Books, web-OPAC and  Digital Library</li>
                        <li>Digital library facility with 60 computers and  25 Head phones</li>
                        <li>Multimedia Facility</li>
                        <li>E- Journals from IEEE (ASPP), Science Direct, EBSCO</li>
                        <li>Institutional Membership with  NDL and DELNET</li>
                        <li>Video/Audio Library </li>
                        <li>Multimedia search facility</li>
                        <li>NPTEL Facility</li>
                        <li>Institutional Repository</li>
                        <li>Reprographic  Facility</li>
                        <li>Document Scanning Facility</li>
                        <li>Document Printing Facility</li>
                        <li>Surveillance Camera</li>
                        <li>Signage Display</li>
                        <li>User Orientation</li>
                        <li>Display New Arrivals</li>
                        <li>Current Awareness Service</li>
                        <li>Bound Volumes of  periodicals</li>
                        <li>Previous Year University Question Papers access</li>
                       </ol>
                    </div>
                    <div>
                        
                    </div>
                    <div>
                      
                    <HeadingTwo data={this.LibraryReferanceTitle} className="Heading" />
                    <p>
                            <BodyOneJustified data={this.LibraryReferanceContent} />
                        </p>
                    </div>
                    <div>
                      
                    <HeadingTwo data={this.LibraryReprographyTitle} className="Heading" />
                    <p>
                            <BodyOneJustified data={this.LibraryReprographyContent} />
                        </p>
                    </div>
                    
                    <div >
                        <HeadingTwo data={this.LibraryDigitalTitle} className="Heading" />
                        <BodyOneJustified data={this.DigitalLibraryContent} />
                        <HeadingTwo data={this.LibraryDigitalResorceTitle} className="Heading" />
                        <p>
                        The library provides IP enabled access to a large number of full text on line journal databases from the various publishers.
                        </p>
                        <ol>
                            <li><a href="https://ieeexplore.ieee.org" target="_blank">IEEE(ASPP)</a></li>
                            <li>Science Direct</li>
                            <li><a href="http://search.ebscohost.com" target="_blank">EBSCO</a></li>
                            <li>DELNET</li>
                            <li>NDL</li>
                        </ol>
                    </div>
                    <div >
                        <HeadingTwo data={this.LibraryJournalTitle} className="Heading" />
                        <BodyOneJustified data={this.LibraryJournalContent} />
                        <ol>
                            <li>
                                <p><b>Civil Engineering</b></p>
                                <ol>
                                    <li>Water & Energy International</li>
                                    <li>International Journal of Civil Engineering</li>                                    
                                    <li>International journal of Geotechnics & Environment</li>
                                    <li>International Journal of Sustainable Civil Engineering</li>
                                    <li> Journal of Flood Engineering</li>
                                    <li>Indian Concrete Journal</li>
                                    <li>ICI Journal</li>
                                    <li>Journal of Structural Engineering</li>
                                    <li>Journal of Environmental Science Research International</li>
                                    <li>Indian Geotechnical Journal</li>
                                    <li>Journal of Institution of Engineers Series A</li>
                                    <li>Journal of Urban Planning & Development</li>
                                    
                                </ol>
                            </li>
                            <li>
                                <p><b>Computer Science & Engineering</b></p>
                                <ol>
                                <li>International Journal of Computer Engineering and Software Technology</li>
                                <li>International Journal of Network Security and Research</li>
                                <li>International Journal of Wireless Sensor Networks &amp; Applications</li>
                                <li>International Journal of Real-Time Systems</li>
                                <li>International Journal of Artificial Intelligence and Computational Research</li>
                                <li>International Journal of Bio informatics and Soft Computing</li>
                                <li>International Journal of Computational Intelligence Research &amp; Application</li>
                                <li>International Journal of Computer Science and Information Engineering</li>
                                <li>International Journal of Grid Computing and Multi Agent Systems</li>
                                <li>International Journal of Computer Science and Communication</li>
                                <li>International Journal of Computer, Mathematical Sciences and Applications</li>
                                <li>International Journal of Computing and Application </li>
                                <li>International Journal of Data Warehousing</li>
                                <li>International Journal of Multimedia, Computer Vision and Machine Learning</li>
                                <li>International Journal of Neural Networks and Applications</li>
                                <li>Journal of Advanced Research In Computer Engineering</li>
                                <li>Journal of Cybernetics and Systems</li>
                                <li>Journal of Digital Information Management</li>
                                <li>International Journal of Computer and Internet Security</li>
                                <li>Journal of Intellectual Property Rights</li>

                                </ol>
                            </li>
                            <li>
                                <p><b>Electronics & Communications Engineering</b></p>
                                <ol>
                                <li>International Journal of Wireless Networks and Communication </li>
                                <li>International Journal of Electronics and communication engineering</li>
                                <li>Journal of Microwaves, Science and Technology</li>
                                <li>International Journal of Mobile Communication and Networking</li>
                                <li>SADHANA: Academy Proceedings Engineering Science</li>
                                <li>Indian Journal of Electronics, Circuits and Systems</li>
                                <li>International Journal of Material Research, Electronics and Electrical Systems</li>
                                <li>International Journal of Power Engineering</li>
                                <li>International Journal of Analog circuits, VLSI and Bioelectronics</li>
                                <li>International Journal of Embedded Software and open Source Systems</li>
                                <li>International Journal of Electronics, Computing and Engineering Education</li>
                                <li>International Journal of Advances in VLSI Design</li>

                                </ol>
                            </li>
                            <li>
                                <p><b>Electrical & Electronics Engineering</b></p>
                                <ol>
                                <li>IEEMA JOURNAL</li>
                                <li>Indian Journal of Advances in Electrical Engineering</li>
                                <li>Indian Journal of Power and River Valley Development</li>
                                <li>Indian Journal of Systems Engineering and Electronics</li>
                                <li>Journal of the Institution of Engineers Series-B</li>
                                <li>The Journal of CPRI</li>
                                                                      
                                </ol>
                            </li>
                            <li>
                                <p><b>Information Technology</b></p>
                                <ol>
                                <li>International Journal of Image Processing andApplications</li>
                                <li>Journal of High Performance Communication Systems and Networking</li>
                                <li>International Journal of Computers, Information Technology and Engineering</li>
                                <li>International Journal of Computer Science and System Analysis</li>
                                <li>International Journal of System Simulation</li>
                                <li>International Journal of Advance in information Technology</li>
                                    
                                </ol>
                            </li>
                            <li>
                                <p><b>MechanicalEngineering</b></p>
                                <ol>
                                <li>International Journal of a Advances in Machining and Forming Operations</li>
                                <li>International Journal of Advanced Mechatronics and Robotics</li>
                                <li>International Journal of Manufacturing Technology and Industrial Engineering</li>
                                <li>International Journal of Advanced Manufacturing System</li>
                                <li>International Journal of Advances In Thermal Science and Engineering</li>
                                <li>International Journal of Fluid Mechanics</li>
                                <li>International Journal of Materials Science and Engineering</li>
                                <li>International Journal of Nanomaterial and Technology</li>
                                <li>International Journal of Production and Quality Engineering</li>
                                <li>Journal of the Institution of Engineers Series C</li>
                                <li>Indian Journal of Engineering and Materials Science</li>
                                <li>Journal of Scientific and Industrial Research</li>
                                </ol>
                            </li>
                            <li>
                                <p><b>Science</b></p>
                                <ol>
                                    <li>Current Science</li>
                                    <li>Pramana: Journal of Physics</li>
                                    <li>Resonance: Journal of Science Education</li>
                                    <li>Indian Journal of Pure & Applied Physics</li>
                                    <li>Indian Journal  of Chemistry Section A</li>
                                    <li>Indian Journal of section B</li>
                                    <li>University News</li>
                                    
                                </ol>
                            </li>
                            <li>
                                <p><b>MBA</b></p>
                                <ol>
                                <li>Harvard Business Review</li>
                                    <li>Asian Journal of Management cases</li>
                                    <li>IIM Kozhikode Society and Management Review</li>
                                    <li>Journal of Entrepreneurship</li>
                                    <li>South Asian Journal of Human Resources Management</li>
                                    <li>Vikalpa</li>
                                    <li>IIMB Management Review</li>
                                    <li>Applied Finance </li>
                                    <li>Bank Management</li>
                                    <li>Marketing Management </li>
                                    <li>Organizational Behavior</li>
                                    <li>Corporate Governance</li>
                                    <li>Case Folio</li>
                                </ol>
                            </li>
                            <li>
                                <p><b>Periodicals</b></p>
                                <ol>
                                <li>Competition Success Review</li>
                                    <li>General Knowledge Today</li>
                                    <li>India Today</li>
                                    <li>Outlook</li>
                                    <li>Readers Digest</li>
                                    <li>Sportstar</li>
                                    <li>Down to Earth</li>
                                    <li>Dhanam</li>
                                    <li>Thozhilvartha</li>
                                    <li>Thozhilveethi</li>
                                    <li>Electronics for You</li>
                                    <li>Digit</li>
                                    <li>Electrical India</li>
                                    <li>Industrial Automation + Industrial Electronics Direct</li>
                                    <li>CSI Communication</li>
                                    <li>Destination Kerala</li>
                                    <li>The Economist</li>
                                    <li>Economic and Political Weekly</li>
                                    <li>The Teenager today</li>
                                    <li>Frontline</li>
                                    <li>The week</li>
                                    <li>Capital Market</li>
                                    <li>Outlook Money</li>
                                    <li>Business Deepika</li>
                                    <li>Dalal Street</li>
                                    <li>Forbes India</li>
                                    <li>Femina</li>
                                    <li>Woman's Era</li>
                                    <li>Overdrive</li>
                                    <li>Images Retail</li>
                                    <li>Fastrack</li>
                                    <li>Destination Kerala</li>                                    
                                </ol>
                            </li>
                            <li>
                                <p><b>Dailies</b></p>
                                <ol>
                                   <li>The Hindu</li>
                                   <li>The New Indian Express</li>
                                   <li>The Hindu Business Line</li>
                                   <li>The Times of India</li>
                                   <li>The Economics Times</li>
                                   <li>Malayala Manorama</li>
                                   <li>Deepika </li>
                                       <li>Mathrubhumi</li>
                                   <li>Mangalam</li>
                                   <li>Financial Express</li>
                                   <li>Deccan Chronicle</li>
                                                                      
                                </ol>
                            </li>
                        </ol>
                    </div>
                </div>
                
                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (<MenuOverlay closeMenuFunction={this.closeMenu} />) : ("")}

            </React.Fragment>
        )
    }

}

export default Library;