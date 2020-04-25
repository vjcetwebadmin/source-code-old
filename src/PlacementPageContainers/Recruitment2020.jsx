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
                slno: "42",
                company: "QUEST",
                year: "2020",
                branch: "IT",
                no_of_students: "01"
            },
            {
                slno: "41",
                company: "QUEST",
                year: "2020",
                branch: "EC",
                no_of_students: "03"
            },
            {
                slno: "40",
                company: "QUEST",
                year: "2020",
                branch: "CS",
                no_of_students: "02"
            },
            {
                slno: "39",
                company: "6D TECHNOLAGIES",
                year: "2020",
                branch: "IT",
                no_of_students: "01"
            },
            {
                slno: "38",
                company: "6D TECHNOLAGIES",
                year: "2020",
                branch: "EC",
                no_of_students: "02"
            },
            {
                slno: "37",
                company: "6D TECHNOLAGIES",
                year: "2020",
                branch: "CS",
                no_of_students: "03"
            },
            {
                slno: "36",
                company: "IMAGE INFOSYSTEMS",
                year: "2020",
                branch: "IT",
                no_of_students: "01"
            },
            {
                slno: "35",
                company: "IMAGE INFOSYSTEMS",
                year: "2020",
                branch: "CS",
                no_of_students: "01"
            },
            {
                slno: "34",
                company: "PARTIAN TECHNOLOGIES",
                year: "2020",
                branch: "IT",
                no_of_students: "10"
            },
            {
                slno: "33",
                company: "PARTIAN TECHNOLOGIES",
                year: "2020",
                branch: "EC",
                no_of_students: "10"
            },
            {
                slno: "32",
                company: "PARTIAN TECHNOLOGIES",
                year: "2020",
                branch: "CS",
                no_of_students: "21"
            },
            {
                slno: "31",
                company: "UST",
                year: "2020",
                branch: "IT",
                no_of_students: "02"
            },
            {
                slno: "30",
                company: "UST",
                year: "2020",
                branch: "EC",
                no_of_students: "06"
            },
            {
                slno: "29",
                company: "UST",
                year: "2020",
                branch: "CS",
                no_of_students: "02"
            },
            {
                slno: "28",
                company: "IBS",
                year: "2020",
                branch: "IT",
                no_of_students: "01"
            },
            {
                slno: "27",
                company: "IBS",
                year: "2020",
                branch: "ME",
                no_of_students: "01"
            },
            {
                slno: "26",
                company: "IBS",
                year: "2020",
                branch: "CS",
                no_of_students: "11"
            },
            {
                slno: "25",
                company: "ZERONE",
                year: "2020",
                branch: "IT",
                no_of_students: "04"
            },
            {
                slno: "24",
                company: "SUTHERLAND GLOBAL",
                year: "2020",
                branch: "EEE",
                no_of_students: "01"
            },
            {
                slno: "23",
                company: "SUTHERLAND GLOBAL",
                year: "2020",
                branch: "CE",
                no_of_students: "03"
            },
            {
                slno: "22",
                company: "SUTHERLAND GLOBAL",
                year: "2020",
                branch: "ME",
                no_of_students: "04"
            },
            {
                slno: "21",
                company: "SUTHERLAND GLOBAL",
                year: "2020",
                branch: "EC",
                no_of_students: "11"
            },
            {
                slno: "20",
                company: "SUTHERLAND GLOBAL",
                year: "2020",
                branch: "CS",
                no_of_students: "04"
            },
            {
                slno: "19",
                company: "NMS",
                year: "2020",
                branch: "CS",
                no_of_students: "09"
            },
            {
                slno: "18",
                company: "INDOSHELL",
                year: "2020",
                branch: "EEE",
                no_of_students: "05"
            },
            {
                slno: "17",
                company: "INDOSHELL",
                year: "2020",
                branch: "ME",
                no_of_students: "12"
            },
            {
                slno: "16",
                company: "EXPERION",
                year: "2020",
                branch: "EC",
                no_of_students: "02"
            },
            {
                slno: "15",
                company: "EXPERION",
                year: "2020",
                branch: "CS",
                no_of_students: "01"
            },
            {
                slno: "14",
                company: "COGNIZAT",
                year: "2020",
                branch: "ME",
                no_of_students: "05"
            },
            {
                slno: "13",
                company: "COGNIZAT",
                year: "2020",
                branch: "CS",
                no_of_students: "01"
            },
            {
                slno: "12",
                company: "TCS",
                year: "2020",
                branch: "IT",
                no_of_students: "02"
            },
            {
                slno: "11",
                company: "TCS",
                year: "2020",
                branch: "EEE",
                no_of_students: "02"
            },
            {
                slno: "10",
                company: "TCS",
                year: "2020",
                branch: "CE",
                no_of_students: "06"
            },
            {
                slno: "09",
                company: "TCS",
                year: "2020",
                branch: "ME",
                no_of_students: "06"
            },
            {
                slno: "08",
                company: "TCS",
                year: "2020",
                branch: "EC",
                no_of_students: "06"
            },
            {
                slno: "07",
                company: "TCS",
                year: "2020",
                branch: "CS",
                no_of_students: "28"
            },
            {
                slno: "06",
                company: "INFOSYS ",
                year: "2020",
                branch: "IT",
                no_of_students: "05"
            },
            {
                slno: "05",
                company: "INFOSYS ",
                year: "2020",
                branch: "EEE",
                no_of_students: "03"
            },
            {
                slno: "04",
                company: "INFOSYS ",
                year: "2020",
                branch: "CE",
                no_of_students: "03"
            },
            {
                slno: "03",
                company: "INFOSYS ",
                year: "2020",
                branch: "ME",
                no_of_students: "04"
            },
            {
                slno: "02",
                company: "INFOSYS ",
                year: "2020",
                branch: "EC",
                no_of_students: "04"
            },
            {
                slno: "01",
                company: "INFOSYS ",
                year: "2020",
                branch: "CS",
                no_of_students: "31"
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