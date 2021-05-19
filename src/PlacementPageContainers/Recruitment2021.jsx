import React, { Component } from 'react'
import { MDBDataTable } from 'mdbreact';

    const Recruitment2021 = () => {
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
                slno: '31',
                company: 'SUTHERLAND(NON-VOICE)',
                year: '2021',
                branch: 'EEE',
                no_of_students: '1'
            },
            {
                slno: '30',
                company: 'SUTHERLAND(NON-VOICE)',
                year: '2021',
                branch: 'ECE',
                no_of_students: '15'
            },
            {
                slno: '29',
                company: 'SUTHERLAND(NON-VOICE)',
                year: '2021',
                branch: 'CSE',
                no_of_students: '12'
            },
            {
                slno: '28',
                company: 'SUTHERLAND(NON-VOICE)',
                year: '2021',
                branch: 'CIVIL',
                no_of_students: '12'
            },
            
            {
                        slno: '27',
                        company: 'ELEATION',
                        year: '2021',
                        branch: 'CIVIL',
                        no_of_students: '02'
                    },
                    {
                        slno: '26',
                        company: 'ELEATION',
                        year: '2021',
                        branch: 'ME',
                        no_of_students: '03'
                    },
                    {
                        slno: '25',
                        company: 'EXPERION',
                        year: '2021',
                        branch: 'CSE',
                        no_of_students: '11'
                    },
                    {
                        slno: '24',
                        company: 'FACTWEAVERS',
                        year: '2021',
                        branch: 'CSE',
                        no_of_students: '02'
                    },
                    {
                        slno: '23',
                        company: 'GADGEON',
                        year: '2021',
                        branch: 'CSE',
                        no_of_students: '02'
                    },
                    {
                        slno: '22',
                        company: 'GUIDEHOUSE',
                        year: '2021',
                        branch: 'CSE',
                        no_of_students: '04'
                    },
                    {
                        slno: '21',
                        company: 'IMAGE INFO SYSTEM',
                        year: '2021',
                        branch: 'CSE',
                        no_of_students: '03'
                    },
                    {
                        slno: '20',
                        company: 'INFOSYS',
                        year: '2021',
                        branch: 'CIVIL',
                        no_of_students: '06'
                    },
                    {
                        slno: '19',
                        company: 'INFOSYS',
                        year: '2021',
                        branch: 'ECE',
                        no_of_students: '06'
                    },
                    {
                        slno: '18',
                        company: 'INFOSYS',
                        year: '2021',
                        branch: 'EEE',
                        no_of_students: '02'
                    },
                    {
                        slno: '17',
                        company: 'INFOSYS',
                        year: '2021',
                        branch: 'CSE',
                        no_of_students: '12'
                    }, 
                    {
                        slno: '16',
                        company: 'INFOSYS',
                        year: '2021',
                        branch: 'ME',
                        no_of_students: '02'
                    },
                    {
                        slno: '15',
                        company: 'INFOSYS',
                        year: '2021',
                        branch: 'IT',
                        no_of_students: '01'
                    },
                    {
                        slno: '14',
                        company: 'MITSOGO',
                        year: '2021',
                        branch: 'CSE',
                        no_of_students: '01'
                    },
                    {
                        slno: '13',
                        company: 'NMS WORKS',
                        year: '2021',
                        branch: 'CSE',
                        no_of_students: '05'
                    },
                    {
                        slno: '12',
                        company: 'SUTHERLAND GLOBAL - VOICE',
                        year: '2021',
                        branch: 'CIVIL',
                        no_of_students: '04'
                    },
                    {
                        slno: '11',
                        company: 'SUTHERLAND GLOBAL - VOICE',
                        year: '2021',
                        branch: 'ECE',
                        no_of_students: '04'
                    },
                    {
                        slno: '10',
                        company: 'SUTHERLAND GLOBAL - VOICE',
                        year: '2021',
                        branch: 'IT',
                        no_of_students: '04'
                    },
                    {
                        slno: '09',
                        company: 'TCS',
                        year: '2021',
                        branch: 'CIVIL',
                        no_of_students: '04'
                    },
                    {
                        slno: '08',
                        company: 'TCS',
                        year: '2021',
                        branch: 'ECE',
                        no_of_students: '11'
                    },
                    {
                        slno: '07',
                        company: 'TCS',
                        year: '2021',
                        branch: 'EEE',
                        no_of_students: '4'
                    },
                    {
                        slno: '06',
                        company: 'TCS',
                        year: '2021',
                        branch: 'CSE',
                        no_of_students: '34'
                    },
                    {
                        slno: '05',
                        company: 'TCS',
                        year: '2021',
                        branch: 'IT',
                        no_of_students: '02'
                    },
                    {
                        slno: '04',
                        company: 'TCS',
                        year: '2021',
                        branch: 'ME',
                        no_of_students: '02'
                    },
                    {
                        slno: '03',
                        company: 'VIT',
                        year: '2021',
                        branch: 'CSE',
                        no_of_students: '03'
                    },
                    {
                        slno: '02',
                        company: 'VVDN',
                        year: '2021',
                        branch: 'EEE',
                        no_of_students: '01'
                    },
                    {
                        slno: '01',
                        company: 'ZERONE',
                        year: '2021',
                        branch: 'CSE',
                        no_of_students: '03'
                    },
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

export default Recruitment2021;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    