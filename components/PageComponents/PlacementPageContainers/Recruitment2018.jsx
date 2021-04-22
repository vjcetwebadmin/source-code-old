import React, { Component } from 'react'
import { MDBDataTable } from 'mdbreact';

    const Recruitment2018 = () => {
        const data2 = {
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
                  slno: '42',
                  company: 'TATA ELXS',
                  year: '2018',
                  branch: 'ME',
                  no_of_students: '01'
                },
                {
                  slno: '41',
                  company: 'TATA ELXS',
                  year: '2018',
                  branch: 'IT',
                  no_of_students: '01'
                },
                {
                  slno: '40',
                  company: 'UST',
                  year: '2018',
                  branch: 'ECE',
                  no_of_students: '02'
                },
                {
                  slno: '39',
                  company: 'Grapes Innovative Solutions',
                  year: '2018',
                  branch: 'CSE',
                  no_of_students: '03'
                },
                {
                  slno: '38',
                  company: 'Tayana Software',
                  year: '2018',
                  branch: 'CSE',
                  no_of_students: '01'
                },
                {
                  slno: '37',
                  company: 'Tayana Software',
                  year: '2018',
                  branch: 'EEE',
                  no_of_students: '01'
                },
                {
                  slno: '36',
                  company: 'Sutherland Global',
                  year: '2018',
                  branch: 'IT',
                  no_of_students: '07'
                }, 
                {
                  slno: '35',
                  company: 'Sutherland Global',
                  year: '2018',
                  branch: 'CSE',
                  no_of_students: '10'
                },
                {
                  slno: '34',
                  company: 'Sutherland Global',
                  year: '2018',
                  branch: 'ECE',
                  no_of_students: '20'
                },
                {
                  slno: '33',
                  company: 'Sutherland Global',
                  year: '2018',
                  branch: 'MECH',
                  no_of_students: '10'
                },
                {
                  slno: '32',
                  company: 'Sutherland Global',
                  year: '2018',
                  branch: 'EEE',
                  no_of_students: '06'
                },
                {
                  slno: '31',
                  company: 'Sutherland Global',
                  year: '2018',
                  branch: 'Civil',
                  no_of_students: '08'
                },
                {
                  slno: '30',
                  company: 'Vyshnavi Information Technologies (India) Pvt.',
                  year: '2018',
                  branch: 'CSE',
                  no_of_students: '03'
                },
                {
                  slno: '29',
                  company: 'Dexlock',
                  year: '2018',
                  branch: 'CSE',
                  no_of_students: '01'
                },
                {
                  slno: '28',
                  company: 'TechNeurons Consulting Solutions Pvt. Ltd',
                  year: '2018',
                  branch: 'ECE',
                  no_of_students: '03'
                },
                {
                  slno: '27',
                  company: 'TechNeurons Consulting Solutions Pvt. Ltd',
                  year: '2018',
                  branch: 'CSE',
                  no_of_students: '03'
                },
                  {
                    slno: '26',
                    company: 'Bell Technolabs',
                    year: '2018',
                    branch: 'CSE',
                    no_of_students: '02'
                  },
                  {
                    slno: '25',
                    company: 'Armia Systems Pvt. Ltd',
                    year: '2018',
                    branch: 'ECE',
                    no_of_students: '01'
                  },
                  {
                    slno: '24',
                    company: 'IVTL Infoview',
                    year: '2018',
                    branch: 'CSE',
                    no_of_students: '01'
                  },
                  {
                    slno: '23',
                    company: 'UST',
                    year: '2018',
                    branch: 'CSE',
                    no_of_students: '01'
                  }, 
                  {
                    slno: '22',
                    company: 'Image Infosystems',
                    year: '2018',
                    branch: 'IT',
                    no_of_students: '07'
                  },
                  {
                    slno: '21',
                    company: 'Image Infosystems',
                    year: '2018',
                    branch: 'CSE',
                    no_of_students: '02'
                  }, 
                {
                  slno: '20',
                  company: 'Coral Business Solutions',
                  year: '2018',
                  branch: 'IT',
                  no_of_students: '03'
                },
                {
                  slno: '19',
                  company: 'Coral Business Solutions',
                  year: '2018',
                  branch: 'CSE',
                  no_of_students: '04'
                },
                {
                  slno: '18',
                  company: 'epic Research',
                  year: '2018',
                  branch: 'ECE',
                  no_of_students: '05'
                },
                {
                  slno: '17',
                  company: 'epic Research',
                  year: '2018',
                  branch: 'EEE',
                  no_of_students: '03'
                },
                {
                  slno: '16',
                  company: 'epic Research',
                  year: '2018',
                  branch: 'MECH',
                  no_of_students: '04'
                },
                {
                  slno: '15',
                  company: 'epic Research',
                  year: '2018',
                  branch: 'Civil',
                  no_of_students: '01'
                },
                {
                  slno: '14',
                  company: 'epic Research',
                  year: '2018',
                  branch: 'CSE',
                  no_of_students: '04'
                },
                {
                  slno: '13',
                  company: 'EVOBI Automation',
                  year: '2018',
                  branch: 'ECE',
                  no_of_students: '04'
                },
                {
                  slno: '12',
                  company: 'VEDA IIT',
                  year: '2018',
                  branch: 'ECE',
                  no_of_students: '02'
                },
                {
                  slno: '11',
                  company: 'Indo Shell Mould Limited',
                  year: '2018',
                  branch: 'CIVIL',
                  no_of_students: '01'
                },
                {
                  slno: '10',
                  company: 'Experion Technologies',
                  year: '2018',
                  branch: 'CSE',
                  no_of_students: '02'
                },
                {
                  slno: '09',
                  company: 'ibs',
                  year: '2018',
                  branch: 'ECE',
                  no_of_students: '01'
                },
                {
                  slno: '08',
                  company: 'ibs',
                  year: '2018',
                  branch: 'MECH',
                  no_of_students: '01'
                },
                {
                  slno: '07',
                  company: 'ibs',
                  year: '2018',
                  branch: 'CSE',
                  no_of_students: '01'
                },
                {
                  slno: '06',
                  company: 'VVDN Technologies',
                  year: '2018',
                  branch: 'ECE',
                  no_of_students: '03'
                },
                {
                  slno: '05',
                  company: 'INFOSYS',
                  year: '2018',
                  branch: 'MECH',
                  no_of_students: '03'
                },
                {
                  slno: '04',
                  company: 'INFOSYS',
                  year: '2018',
                  branch: 'IT',
                  no_of_students: '03'
                },
                {
                  slno: '03',
                  company: 'INFOSYS',
                  year: '2018',
                  branch: 'Civil',
                  no_of_students: '05'
                },
                {
                    slno: '02',
                    company: 'INFOSYS',
                    year: '2018',
                    branch: 'ECE',
                    no_of_students: '06'
                  },
                {
                  slno: '01',
                  company: 'INFOSYS',
                  year: '2018',
                  branch: 'CSE',
                  no_of_students: '20'
                },
                  
                  
                  
                  
                  
          ]
        };
   
  
    return (
        <MDBDataTable
          striped
          bordered
          small
          data={data2}
        />
      );
    }

export default Recruitment2018;