import React, { Component } from 'react'
import { MDBDataTable } from 'mdbreact';

    const Recruitment2020 = () => {
        const data = {
          columns: [
            {
                label: 'SL. NO',
                field: 'slno',
                sort: 'asc',
                width: 100
              },
            {
              label: 'COMPANY',
              field: 'company',
              sort: 'asc',
              width: 270
            },
            {
              label: 'YEAR',
              field: 'year',
              sort: 'asc',
              width: 270
            },
            {
              label: 'BRANCH',
              field: 'branch',
              sort: 'asc',
              width: 150
            },
            {
              label: 'NO OF STUDENTS',
              field: 'no_of_students',
              sort: 'asc',
              width: 270
            }
          ],
          rows: [
            {
                "slno": "65",
                "company": "Daivik Technologies",
                "year": "2020",
                "branch": "CS",
                "no_of_students": "2"
            },
            {
                "slno": "64",
                "company": "Daivik Technologies",
                "year": "2020",
                "branch": "IT",
                "no_of_students": "2"
            },
            {
                "slno": "63",
                "company": "Zerone Consulting Pvt. Ltd.",
                "year": "2020",
                "branch": "IT",
                "no_of_students": "4"
            },
            {
                "slno": "62",
                "company": "Image Infosystems",
                "year": "2020",
                "branch": "CS",
                "no_of_students": "1"
            },
            {
                "slno": "61",
                "company": "Image Infosystems",
                "year": "2020",
                "branch": "IT",
                "no_of_students": "1"
            },
            {
                "slno": "60",
                "company": "Mistral Solutions",
                "year": "2020",
                "branch": "CS",
                "no_of_students": "1"
            },
            {
                "slno": "59",
                "company": "Innovature Labs",
                "year": "2020",
                "branch": "CS",
                "no_of_students": "1"
            },
            {
                "slno": "58",
                "company": "G10X",
                "year": "2020",
                "branch": "CS",
                "no_of_students": "1"
            },
            {
                "slno": "57",
                "company": "G10X",
                "year": "2020",
                "branch": "EC",
                "no_of_students": "1"
            },
            {
                "slno": "56",
                "company": "G10X",
                "year": "2020",
                "branch": "EEE",
                "no_of_students": "1"
            },
            {
                "slno": "55",
                "company": "Quest",
                "year": "2020",
                "branch": "CS",
                "no_of_students": "2"
            },
            {
                "slno": "54",
                "company": "Quest",
                "year": "2020",
                "branch": "EC",
                "no_of_students": "3"
            },
            {
                "slno": "53",
                "company": "Quest",
                "year": "2020",
                "branch": "IT",
                "no_of_students": "1"
            },
            {
                "slno": "52",
                "company": "NMS Works",
                "year": "2020",
                "branch": "CS",
                "no_of_students": "9"
            },
            {
                "slno": "51",
                "company": "6d Technologies",
                "year": "2020",
                "branch": "CS",
                "no_of_students": "3"
            },
            {
                "slno": "50",
                "company": "6d Technologies",
                "year": "2020",
                "branch": "EC",
                "no_of_students": "2"
            },
            {
                "slno": "49",
                "company": "6d Technologies",
                "year": "2020",
                "branch": "IT",
                "no_of_students": "1"
            },
            {
                "slno": "48",
                "company": "Silver Peak Global",
                "year": "2020",
                "branch": "EC",
                "no_of_students": "4"
            },
            {
                "slno": "47",
                "company": "Silver Peak Global",
                "year": "2020",
                "branch": "ME",
                "no_of_students": "8"
            },
            {
                "slno": "46",
                "company": "Silver Peak Global",
                "year": "2020",
                "branch": "IT",
                "no_of_students": "1"
            },
            {
                "slno": "45",
                "company": "Indoshell Mould Limited",
                "year": "2020",
                "branch": "ME",
                "no_of_students": "12"
            },
            {
                "slno": "44",
                "company": "Indoshell Mould Limited",
                "year": "2020",
                "branch": "EEE",
                "no_of_students": "5"
            },
            {
                "slno": "43",
                "company": "Pratian Technologies",
                "year": "2020",
                "branch": "CS",
                "no_of_students": "21"
            },
            {
                "slno": "42",
                "company": "Pratian Technologies",
                "year": "2020",
                "branch": "EC",
                "no_of_students": "10"
            },
            {
                "slno": "41",
                "company": "Pratian Technologies",
                "year": "2020",
                "branch": "EEE",
                "no_of_students": "1"
            },
            {
                "slno": "40",
                "company": "Pratian Technologies",
                "year": "2020",
                "branch": "IT",
                "no_of_students": "10"
            },
            {
                "slno": "39",
                "company": "Verse Innovations",
                "year": "2020",
                "branch": "CS",
                "no_of_students": "1"
            },
            {
                "slno": "38",
                "company": "Mindcurv Technology Solutions",
                "year": "2020",
                "branch": "IT",
                "no_of_students": "1"
            },
            {
                "slno": "37",
                "company": "Sutherland Global",
                "year": "2020",
                "branch": "CS",
                "no_of_students": "9"
            },
            {
                "slno": "36",
                "company": "Sutherland Global",
                "year": "2020",
                "branch": "EC",
                "no_of_students": "22"
            },
            {
                "slno": "35",
                "company": "Sutherland Global",
                "year": "2020",
                "branch": "ME",
                "no_of_students": "9"
            },
            {
                "slno": "34",
                "company": "Sutherland Global",
                "year": "2020",
                "branch": "CE",
                "no_of_students": "4"
            },
            {
                "slno": "33",
                "company": "Sutherland Global",
                "year": "2020",
                "branch": "EEE",
                "no_of_students": "7"
            },
            {
                "slno": "32",
                "company": "Experion",
                "year": "2020",
                "branch": "CS",
                "no_of_students": "1"
            },
            {
                "slno": "31",
                "company": "Experion",
                "year": "2020",
                "branch": "EC",
                "no_of_students": "2"
            },
            {
                "slno": "30",
                "company": "Hexaware",
                "year": "2020",
                "branch": "CS",
                "no_of_students": "6"
            },
            {
                "slno": "29",
                "company": "Hexaware",
                "year": "2020",
                "branch": "EC",
                "no_of_students": "11"
            },
            {
                "slno": "28",
                "company": "Hexaware",
                "year": "2020",
                "branch": "EEE",
                "no_of_students": "2"
            },
            {
                "slno": "27",
                "company": "E & Y",
                "year": "2020",
                "branch": "CS",
                "no_of_students": "2"
            },
            {
                "slno": "26",
                "company": "IBM",
                "year": "2020",
                "branch": "CS",
                "no_of_students": "1"
            },
            {
                "slno": "25",
                "company": "Wipro",
                "year": "2020",
                "branch": "CS",
                "no_of_students": "5"
            },
            {
                "slno": "24",
                "company": "Wipro",
                "year": "2020",
                "branch": "EC",
                "no_of_students": "3"
            },
            {
                "slno": "23",
                "company": "Cognizat",
                "year": "2020",
                "branch": "CS",
                "no_of_students": "1"
            },
            {
                "slno": "22",
                "company": "Cognizat",
                "year": "2020",
                "branch": "ME",
                "no_of_students": "5"
            },
            {
                "slno": "21",
                "company": "UST",
                "year": "2020",
                "branch": "CS",
                "no_of_students": "2"
            },
            {
                "slno": "20",
                "company": "UST",
                "year": "2020",
                "branch": "EC",
                "no_of_students": "5"
            },
            {
                "slno": "19",
                "company": "UST",
                "year": "2020",
                "branch": "IT",
                "no_of_students": "2"
            },
            {
                "slno": "18",
                "company": "Amazon",
                "year": "2020",
                "branch": "CS",
                "no_of_students": "1"
            },
            {
                "slno": "17",
                "company": "Amazon",
                "year": "2020",
                "branch": "EC",
                "no_of_students": "2"
            },
            {
                "slno": "16",
                "company": "Amazon",
                "year": "2020",
                "branch": "CE",
                "no_of_students": "1"
            },
            {
                "slno": "15",
                "company": "IBS",
                "year": "2020",
                "branch": "CS",
                "no_of_students": "11"
            },
            {
                "slno": "14",
                "company": "IBS",
                "year": "2020",
                "branch": "ME",
                "no_of_students": "1"
            },
            {
                "slno": "13",
                "company": "IBS",
                "year": "2020",
                "branch": "IT",
                "no_of_students": "1"
            },
            {
                "slno": "12",
                "company": "TCS",
                "year": "2020",
                "branch": "CS",
                "no_of_students": "28"
            },
            {
                "slno": "11",
                "company": "TCS",
                "year": "2020",
                "branch": "EC",
                "no_of_students": "6"
            },
            {
                "slno": "10",
                "company": "TCS",
                "year": "2020",
                "branch": "ME",
                "no_of_students": "6"
            },
            {
                "slno": "9",
                "company": "TCS",
                "year": "2020",
                "branch": "CE",
                "no_of_students": "6"
            },
            {
                "slno": "8",
                "company": "TCS",
                "year": "2020",
                "branch": "EEE",
                "no_of_students": "2"
            },
            {
                "slno": "7",
                "company": "TCS",
                "year": "2020",
                "branch": "IT",
                "no_of_students": "2"
            },
            {
                "slno": "6",
                "company": "Infosys ",
                "year": "2020",
                "branch": "CS",
                "no_of_students": "31"
            },
            {
                "slno": "5",
                "company": "Infosys ",
                "year": "2020",
                "branch": "EC",
                "no_of_students": "4"
            },
            {
                "slno": "4",
                "company": "Infosys ",
                "year": "2020",
                "branch": "ME",
                "no_of_students": "4"
            },
            {
                "slno": "3",
                "company": "Infosys ",
                "year": "2020",
                "branch": "CE",
                "no_of_students": "3"
            },
            {
                "slno": "2",
                "company": "Infosys ",
                "year": "2020",
                "branch": "EEE",
                "no_of_students": "3"
            },
            {
                "slno": "1",
                "company": "Infosys ",
                "year": "2020",
                "branch": "IT",
                "no_of_students": "5"
            }
          ]
        };
   
  
    return (
      <div>

      
      <MDBDataTable
      striped
      bordered
      small
      data={data}
      />
      </div>
      );
    }

export default Recruitment2020;