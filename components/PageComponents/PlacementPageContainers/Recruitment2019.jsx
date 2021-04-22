import React, { Component } from 'react'
import { MDBDataTable } from 'mdbreact';

    const Recruitment2019 = () => {
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
              slno: '82',
              company: 'SEPTA CONSTRUCTION',
              year: '2019',
              branch: 'CIVIL',
              no_of_students: '04'
            },
            {
              slno: '81',
              company: 'AARBEE STRUCTURES PVT. LTD',
              year: '2019',
              branch: 'CIVIL',
              no_of_students: '01'
            },
                  {
                    slno: '80',
                    company: 'MARYMATHA',
                    year: '2019',
                    branch: 'CIVIL',
                    no_of_students: '06'
                  },
                  {
                    slno: '79',
                    company: 'SILPI ARCHITECTS',
                    year: '2019',
                    branch: 'CIVIL',
                    no_of_students: '04'
                  },
                  {
                    slno: '78',
                    company: 'POTTS DEVICES & SYSTEMS ',
                    year: '2019',
                    branch: 'ECE',
                    no_of_students: '04'
                  },
                  {
                    slno: '77',
                    company: 'TESSOLVE',
                    year: '2019',
                    branch: 'ECE',
                    no_of_students: '01'
                  },
                  {
                    slno: '76',
                    company: 'ZOHO CORPORATION',
                    year: '2019',
                    branch: 'CSE',
                    no_of_students: '01'
                  },
                  {
                    slno: '75',
                    company: 'VIRTUSA',
                    year: '2019',
                    branch: 'IT',
                    no_of_students: '01'
                  },
                  {
                    slno: '74',
                    company: 'VIRTUSA',
                    year: '2019',
                    branch: 'CSE',
                    no_of_students: '01'
                  },
                  {
                    slno: '73',
                    company: 'PKJ TECHNOLOGIES PVT LTD',
                    year: '2019',
                    branch: 'CSE',
                    no_of_students: '02'
                  },
                  {
                    slno: '72',
                    company: 'ATTINAD SOFTWARE',
                    year: '2019',
                    branch: 'CSE',
                    no_of_students: '03'
                  },
                  {
                    slno: '71',
                    company: 'TAP ENGINEERING',
                    year: '2019',
                    branch: 'ME',
                    no_of_students: '02'
                  },
                  {
                    slno: '70',
                    company: 'AKSHADA',
                    year: '2019',
                    branch: 'ME',
                    no_of_students: '02'
                  },
                  {
                    slno: '69',
                    company: 'PAVANI ENGINEERS',
                    year: '2019',
                    branch: 'ME',
                    no_of_students: '02'
                  },
                  {
                    slno: '68',
                    company: 'OZONE VAC',
                    year: '2019',
                    branch: 'ME',
                    no_of_students: '02'
                  },
                  {
                    slno: '67',
                    company: 'ALP AEROFLEX INDIA',
                    year: '2019',
                    branch: 'ME',
                    no_of_students: '02'
                  },
                    {
                      slno: '66',
                      company: 'JVS AIR SYSTEMS',
                      year: '2019',
                      branch: 'ME',
                      no_of_students: '06'
                    },
                    {
                      slno: '65',
                      company: 'KIRLOSKAR CHILLERS',
                      year: '2019',
                      branch: 'ME',
                      no_of_students: '02'
                    },
                    {
                      slno: '64',
                      company: 'TECHNEURONS',
                      year: '2019',
                      branch: 'CSE',
                      no_of_students: '07'
                    },
                    {
                      slno: '63',
                      company: 'MITSOGO TECHNOLOGIES',
                      year: '2019',
                      branch: 'CSE',
                      no_of_students: '01'
                    },
                    {
                      slno: '62',
                      company: 'DIGITAL CORE TECHNOLOGIES',
                      year: '2019',
                      branch: 'EEE',
                      no_of_students: '01'
                    },
                    {
                      slno: '61',
                      company: 'MPHASIS',
                      year: '2019',
                      branch: 'CSE',
                      no_of_students: '01'
                    },
                    {
                      slno: '60',
                      company: 'FEDERAL BANK',
                      year: '2019',
                      branch: 'ME',
                      no_of_students: '01'
                    },
                    {
                      slno: '59',
                      company: 'FEDERAL BANK',
                      year: '2019',
                      branch: 'CIVIL',
                      no_of_students: '01'
                    },
                    {
                      slno: '58',
                      company: 'BELL TECHNO LABS',
                      year: '2019',
                      branch: 'IT',
                      no_of_students: '01'
                    },
                    {
                      slno: '57',
                      company: 'BELL TECHNO LABS',
                      year: '2019',
                      branch: 'ECE',
                      no_of_students: '01'
                    },
                    {
                      slno: '56',
                      company: 'BELL TECHNO LABS',
                      year: '2019',
                      branch: 'CSE',
                      no_of_students: '07'
                    }, 
                  {
                    slno: '55',
                    company: '6D TECHNOLOGIES',
                    year: '2019',
                    branch: 'IT',
                    no_of_students: '01'
                  },
                  {
                    slno: '54',
                    company: '6D TECHNOLOGIES',
                    year: '2019',
                    branch: 'EEE',
                    no_of_students: '02'
                  },
                  {
                    slno: '53',
                    company: 'HEXAWARE',
                    year: '2019',
                    branch: 'ECE',
                    no_of_students: '01'
                  },
                  {
                    slno: '52',
                    company: 'HEXAWARE',
                    year: '2019',
                    branch: 'CSE',
                    no_of_students: '01'
                  },
                  {
                    slno: '51',
                    company: 'GSG',
                    year: '2019',
                    branch: 'ME',
                    no_of_students: '04'
                  },
                  {
                    slno: '50',
                    company: 'GSG',
                    year: '2019',
                    branch: 'EEE',
                    no_of_students: '02'
                  },
                  {
                    slno: '49',
                    company: 'GSG',
                    year: '2019',
                    branch: 'ECE',
                    no_of_students: '01'
                  },
                  {
                    slno: '48',
                    company: 'SILVER PEAK GLOBAL',
                    year: '2019',
                    branch: 'ME',
                    no_of_students: '20'
                  },
                  {
                    slno: '47',
                    company: 'SILVER PEAK GLOBAL',
                    year: '2019',
                    branch: 'IT',
                    no_of_students: '03'
                  },
                  {
                    slno: '46',
                    company: 'SILVER PEAK GLOBAL',
                    year: '2019',
                    branch: 'EEE',
                    no_of_students: '08'
                  },
                  {
                    slno: '45',
                    company: 'SILVER PEAK GLOBAL',
                    year: '2019',
                    branch: 'ECE',
                    no_of_students: '07'
                  },
                  {
                    slno: '44',
                    company: 'SILVER PEAK GLOBAL',
                    year: '2019',
                    branch: 'CSE',
                    no_of_students: '01'
                  },
                  {
                    slno: '43',
                    company: 'SUTHERLAND GLOBAL',
                    year: '2019',
                    branch: 'MBA',
                    no_of_students: '01'
                  },
                  {
                    slno: '42',
                    company: 'SUTHERLAND GLOBAL',
                    year: '2019',
                    branch: 'ME',
                    no_of_students: '02'
                  },
                  {
                    slno: '41',
                    company: 'SUTHERLAND GLOBAL',
                    year: '2019',
                    branch: 'IT',
                    no_of_students: '01'
                  },
                  {
                    slno: '40',
                    company: 'SUTHERLAND GLOBAL',
                    year: '2019',
                    branch: 'EEE',
                    no_of_students: '04'
                  },
                  {
                    slno: '39',
                    company: 'SUTHERLAND GLOBAL',
                    year: '2019',
                    branch: 'ECE',
                    no_of_students: '06'
                  },
                  {
                    slno: '38',
                    company: 'SUTHERLAND GLOBAL',
                    year: '2019',
                    branch: 'CSE',
                    no_of_students: '01'
                  },
                  {
                    slno: '37',
                    company: 'SUTHERLAND GLOBAL',
                    year: '2019',
                    branch: 'CIVIL',
                    no_of_students: '04'
                  },
                  {
                    slno: '36',
                    company: 'NANDEE NETWORKS',
                    year: '2019',
                    branch: 'ME',
                    no_of_students: '26'
                  },
                      {
                        slno: '35',
                        company: 'NANDEE NETWORKS',
                        year: '2019',
                        branch: 'EEE',
                        no_of_students: '25'
                      },
                  {
                    slno: '34',
                    company: 'NANDEE NETWORKS',
                    year: '2019',
                    branch: 'ECE',
                    no_of_students: '07'
                  },
                  {
                    slno: '33',
                    company: 'NANDEE NETWORKS',
                    year: '2019',
                    branch: 'CIVIL',
                    no_of_students: '07'
                  },
                  {
                    slno: '32',
                    company: 'E&Y',
                    year: '2019',
                    branch: 'CSE',
                    no_of_students: '01'
                  },
                  {
                    slno: '31',
                    company: 'SUTHERLAND GLOBAL(NON VOICE)',
                    year: '2019',
                    branch: 'MBA',
                    no_of_students: '01'
                  },
                  {
                    slno: '30',
                    company: 'SUTHERLAND GLOBAL(NON VOICE)',
                    year: '2019',
                    branch: 'ME',
                    no_of_students: '10'
                  },
                  {
                    slno: '29',
                    company: 'SUTHERLAND GLOBAL(NON VOICE)',
                    year: '2019',
                    branch: 'IT',
                    no_of_students: '02'
                  },

              {
                slno: '28',
                company: 'SUTHERLAND GLOBAL(NON VOICE)',
                year: '2019',
                branch: 'ECE',
                no_of_students: '03'
              },
                  {
                    slno: '27',
                    company: 'SUTHERLAND GLOBAL(NON VOICE)',
                    year: '2019',
                    branch: 'CSE',
                    no_of_students: '01'
                  },
                  {
                    slno: '26',
                    company: 'SUTHERLAND GLOBAL(NON VOICE)',
                    year: '2019',
                    branch: 'CIVIL',
                    no_of_students: '16'
                  },
                  {
                    slno: '25',
                    company: 'EXPERION',
                    year: '2019',
                    branch: 'IT',
                    no_of_students: '01'
                  },
                  {
                    slno: '24',
                    company: 'EXPERION',
                    year: '2019',
                    branch: 'EEE',
                    no_of_students: '01'
                  },
                  {
                    slno: '23',
                    company: 'EXPERION',
                    year: '2019',
                    branch: 'ECE',
                    no_of_students: '03'
                  },
                  {
                    slno: '22',
                    company: 'EXPERION',
                    year: '2019',
                    branch: 'CSE',
                    no_of_students: '04'
                  },
                  {
                    slno: '21',
                    company: 'AMAZON',
                    year: '2019',
                    branch: 'ME',
                    no_of_students: '02'
                  },
                  {
                    slno: '20',
                    company: 'CTS',
                    year: '2019',
                    branch: 'ME',
                    no_of_students: '02'
                  },
                  {
                    slno: '19',
                    company: 'CTS',
                    year: '2019',
                    branch: 'IT',
                    no_of_students: '01'
                  },
                  {
                    slno: '18',
                    company: 'CTS',
                    year: '2019',
                    branch: 'EEE',
                    no_of_students: '03'
                  },
                  {
                    slno: '17',
                    company: 'CTS',
                    year: '2019',
                    branch: 'ECE',
                    no_of_students: '02'
                  },
                  {
                    slno: '16',
                    company: 'CTS',
                    year: '2019',
                    branch: 'CSE',
                    no_of_students: '04'
                  },
                  {
                    slno: '15',
                    company: 'IBS',
                    year: '2019',
                    branch: 'ECE',
                    no_of_students: '01'
                  },
                  {
                    slno: '14',
                    company: 'IBS',
                    year: '2019',
                    branch: 'CSE',
                    no_of_students: '04'
                  },
                  {
                    slno: '13',
                    company: 'WIPRO',
                    year: '2019',
                    branch: 'ECE',
                    no_of_students: '03'
                  },
                  {
                    slno: '12',
                    company: 'WIPRO',
                    year: '2019',
                    branch: 'CSE',
                    no_of_students: '10'
                  },
                  {
                    slno: '11',
                    company: 'WIPRO',
                    year: '2019',
                    branch: 'CIVIL',
                    no_of_students: '01'
                  },
                  {
                    slno: '10',
                    company: 'TCS',
                    year: '2019',
                    branch: 'ME',
                    no_of_students: '02'
                  },
                  {
                    slno: '09',
                    company: 'TCS',
                    year: '2019',
                    branch: 'EEE',
                    no_of_students: '04'
                  },
                  {
                    slno: '08',
                    company: 'TCS',
                    year: '2019',
                    branch: 'ECE',
                    no_of_students: '02'
                  },
                  {
                    slno: '07',
                    company: 'TCS',
                    year: '2019',
                    branch: 'CSE',
                    no_of_students: '09'
                  },
                  {
                  slno: '06',
                  company: 'INFOSYS',
                  year: '2019',
                  branch: 'ME',
                  no_of_students: '15'
                },
                  {
                    slno: '05',
                    company: 'INFOSYS',
                    year: '2019',
                    branch: 'IT',
                    no_of_students: '05'
                  },
                  
                  {
                    slno: '04',
                    company: 'INFOSYS',
                      year: '2019',
                      branch: 'EEE',
                      no_of_students: '07'
                    },
                  {
                    slno: '03',
                    company: 'INFOSYS',
                    year: '2019',
                    branch: 'ECE',
                    no_of_students: '15'
                  },
                      {
                        slno: '02',
                        company: 'INFOSYS',
                        year: '2019',
                        branch: 'CSE',
                        no_of_students: '49'
                      },
                  {
                    slno: '01',
                    company: 'INFOSYS',
                    year: '2019',
                    branch: 'CIVIL',
                    no_of_students: '17'
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

export default Recruitment2019;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    