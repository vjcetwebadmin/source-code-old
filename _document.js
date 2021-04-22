import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Viswajyothi College of Engineering and Technology</title>
          <meta charset="utf-8" />
          <meta
            name="description"
            content="Viswajyothi College of Engineering and Technology Vazhakulam, A private self-financing technical institution affiliated to the APJ KTU and approved by the AICTE, New Delhi. A highly committed Management Team with competent and dedicated Faculty and staff makes this place an International Center of Excellence in Engineering Education."
          />
          <meta
            name="keywords"
            content="Viswajyothi College,VJCET,viswajyothicollege,Viswajyothicollege,viswajyothi college,vjcet,viswajyothy college,Viswajyothy College,Engineering and Technology,engineering and technology,B.Tech Admission,b.tech admission,Viswajyothi,viswajyothi,viswajyothy,Viswajyothy,Viswajyothi Engineering College,viswajyothi engineering college,viswajyothy engineering college,Viswajyothi official website,Viswajyothy official website,viswajyothi official website,engineering admission,NBA accredited college,nba accredited college,engineering placement,Engineering Colleges in Kerala,engineering colleges in kerala,engineering Admission,Vazhakulam Muvattupuzha,vjcet,viswajyothi,Engineering,Computer Science,vsms,computer science and engineering,electronics and communication engineering,electronics and communication engineering,IT,information technology,mechanical engineering,MBA,civil engineering,science and humanities,vjcet faculty,viswajyothi college of engineering & technology,vjcet staff,viswajyothi college of engineering & technology vazhakulam,viswajyothi college of engineering & technology vazhakulam muvattupuzha ernakulam,viswajyothi college of engineering and technology vazhakulam,viswajyothi college of engineering and technology muvattupuzha,vjcet vazhakulam,viswajyothi college of engineering and technology hostel,viswajyothi college of engineering and technology affiliations,viswajyothi college of engineering and technology mba,viswa jyothi,accredited engineering colleges in kerala,engineering colleges in muvattupuzha,muvattupuzha engineering college,vjcet.ac.in,vjcet.org,viswajyothi engg college,b tech colleges in ernakulam,muvattupuzha engineering college list,private engineering colleges in kerala,viswajyothi college courses,vjcet courses,nba accredited engineering colleges in kerala,vishwa jyothi engineering college,viswajyothi college of engineering and technology affiliations, viswajyothi engineering college"
          />
          <meta name="city" content="Muvattupuzha, Kochi, Kerala, India" />
          <meta name="state" content="India" />
          <meta name="robots" content="All" />
          <link rel="shortcut icon" href="./icon.ico" />
          <link
            href="https://fonts.googleapis.com/css?family=Heebo:400,500,800"
            rel="stylesheet"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="theme-color" content="#000000" />
          <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
