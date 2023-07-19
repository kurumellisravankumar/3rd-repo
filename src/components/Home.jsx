import React from 'react';
// --------------------------  Header  import ---------------------------

// ------------------------------- components --------------------------------------

import Header from "./Header";
import Contact from "./Contact ";
import Exam from "./Exam";
import Footer from "./Footer";
import Faqs from './Faqs1_5 ';
import Faqs6_10 from './Faqs6_10';





// ------------------------------- stylesheets --------------------------------------

import "../styles/App.scss"
import "../styles/colors.scss";
import "../styles/header.scss";
import "../styles/home.scss";
import "../styles/footer.scss";
import "../styles/Contact.scss";
import "../styles/Exams.scss";







// --------------------------  slider  import ---------------------------
import { Carousel } from "react-responsive-carousel"

// --------------------------  sliders  link ---------------------------
import "react-responsive-carousel/lib/styles/carousel.min.css"

// --------------------------  LInk import ---------------------------
import { Link } from 'react-router-dom';


// --------------------------  react -icons ---------------------------
import { AiFillCaretRight, AiOutlineArrowDown } from "react-icons/ai"


const Home = () => {
  return (




    < >


      <Header />
      {/*  -------------------------  Home --------------------------- */}
      <div id='home'>
        <Carousel className='banner'
          autoPlay infiniteLoop interval={3000} >
          <div className='banner1'>
            <div className='banner1-info'>
              <div className='banner1-info-heading'>
                <h1>welcome eGRADTutor</h1>
                <p>eGRADTutor is an Edtech firm started with a vision to blend the boundaries in education and take best-in-class courses and teachers virtually to every corner of the country. Our courses are developed by the alumni of IITs/IISc with an intent to enhance the student's abilities to face some of the toughest exams of the country. Our offerings not just provide a deeper understanding of the subjects to the students, but they also make them exam ready. </p>
              </div>
              <div className='online-btn'>
                <button>
                  <Link to={"/"}>online Live classes</Link> </button>

                <button>
                  <Link to={"/"}>online Live video classes</Link> </button>
              </div>

            </div>

          </div>


          <div className='banner2'></div>
          <div className='banner3'></div>
          <div className='banner4'></div>
          <div className='banner5'></div>
          <div className='banner6'></div>
          <div className='banner7'></div>

        </Carousel >

        {/*  ------------------------- about --------------------------- */}
        {/* <a href="#exam">hello</a> */}


        <div className="about" id='about'>
          <h5>About us</h5>

          <div className='about-info'>
            <p>eGRADTutor is an Edtech firm started with a vision to blend the boundaries in education and take  best-in-class courses and teachers virtually to every corner of the country. Our courses are developed by the alumni of IITs/IISc with an intent to enhance the student's abilities to face some of the toughest exams of the country. Our offerings not just provide a deeper understanding of the subjects to the students, but they also make them exam ready. </p>
          </div>


          <div className='mission-vision'>
            <div className='mission'>
              <div className="mission-info"><h5>OUR VISION</h5>
                <p>Our vision is to blend the boundaries in education and take best-in-class courses and teachers virtually to every corner of the country.</p>
                <h6>Values:</h6>
                <p> <AiFillCaretRight />We believe in constant innovation and development.</p>
                <p><AiFillCaretRight />We act with integrity and humility.</p>
                <p><AiFillCaretRight />We work with energy and curiosity</p>
                <p> <AiFillCaretRight />We seek growth and equal opportunity. </p>
              </div>
            </div>

            <div className='vision'>

              <div className="vision-info">
                <h5>OUR MISSION</h5>
                <p>Our mission is to be the most accessible and affordable online education provider in the country. </p>
                <p>We intend to build a virtual knowledge pool that strengthens the students and thereby strengthens the country in the journey towards growth and innovation. </p>
              </div>
            </div>
          </div>



        </div>

        {/*  -------------------------  courses --------------------------- */}

        <div className="courses" id='courses'>
          <h2>courses</h2>
          <div className="courses-container">



            <div className="course1">
              <h5>ONLINE TEST SERIES</h5>
              <h6>Features</h6>
              <p><AiFillCaretRight />Interface similar to that of the competitive exams</p>
              <p><AiFillCaretRight />Combination of subject/topic wise and full syllabus.</p>
              <p><AiFillCaretRight />Detailed solutions with explanation</p>
              <p><AiFillCaretRight />Performance analysis reports</p>

              <div className="b-t-n-s">
                <button><Link>IITJEE(MAINS & ADVANCED)</Link></button>
                <button><Link>NEET</Link></button>
                <button><Link>BITSAT</Link></button>
                <button><Link>VITEEE</Link></button>
                <button><Link>AP-EAPCET</Link></button>
                <button><Link>TS-EAMCET</Link></button>
                <button><Link>MHCET</Link></button>
                <button><Link>KCET</Link></button>
                <button><Link>WBJEE</Link></button>
                <button><Link>KERALA CEE</Link></button>
                <button><Link>SRM JEE</Link></button>
              </div>

            </div>

            <div className="course2">
              <h5>ONLINE VIDEO LECTURES</h5>
              <h6>Features</h6>
              <p><AiFillCaretRight />Content curated by industry experts</p>

              <p><AiFillCaretRight />Best-in-class user interface</p>
              <p><AiFillCaretRight />Frequent doubt clearing sessions</p>
              <p><AiFillCaretRight />Accessible from anywhere and anytime </p>

              <div className="b-t-n-s">
                <button><Link>IITJEE(MAINS & ADVANCED)</Link></button>
                <button><Link>NEET</Link></button>
              </div>

            </div>


            <div className="course3">

              <h5>ONLINE QUESTION BANK</h5>
              <h6>Features</h6>
              <p><AiFillCaretRight />Practice questions in the examination interface</p>

              <p><AiFillCaretRight />Volume of questions available across topics</p>
              <p><AiFillCaretRight />Detailed analysis and explanations to the solutions</p>
              <p><AiFillCaretRight />Practice any number of time </p>

              <div className="b-t-n-s">
                <button><Link>IITJEE(MAINS & ADVANCED)</Link></button>
                <button><Link>NEET</Link></button>
              </div>
            </div>


          </div>


        </div>

        <Exam id="exam" />
        < Contact />


        <div className="FAqs" id='fAQ,s'>


          <section class="faqs">
            <h2>Frequently Asked Questions </h2>
            <div class="main container">
              <div class="faq-content">
                <div class="wrapper">
                  <button class="toggle">
                    <i class="uil uil-plus icon"></i>What is the mode of registration?</button>
                  <div class="contentfaq">
                    <p>Registration mode will be online.</p>
                  </div>
                </div>


                <div class="wrapper">
                  <button class="toggle">
                    <i class="uil uil-plus icon"></i>What is the mode of payment?</button>
                  <div class="contentfaq">
                    <p>Payment can be done through debit card, credit card, UPI, Net banking.</p>
                  </div>
                </div>


                <div class="wrapper">
                  <button class="toggle">
                    <i class="uil uil-plus icon"></i>What if the money debited and the test is not accessible?</button>
                  <div class="contentfaq">
                    <p>Please contact our web team -info@egradtutor.in they will try to resolve it in 24 hours.</p>
                  </div>
                </div>


                <div class="wrapper">
                  <button class="toggle">
                    <i class="uil uil-plus icon"></i>
                    Do we need to make a payment to get registered?</button>
                  <div class="contentfaq">
                    <p>No. Registration is free of cost, and you need to make payment only when you subscribe to any of our products.</p>
                  </div>


                </div>

                <div class="wrapper">
                  <button class="toggle">
                    <i class="uil uil-plus icon"></i>

                    Who created the test series?</button>
                  <div class="contentfaq">
                    <p>These tests are created by top faculty across India who have 10+Years of experience and by the graduates from IIT/ IISC, IISER.

                    </p>
                  </div>


                </div>
              </div>



              <div class="faq-content">
                <div class="wrapper">
                  <button class="toggle">
                    <i class="uil uil-plus icon"></i>What information do we need for registration?</button>
                  <div class="contentfaq">
                    <p>Name, contact number, email id, password, country, city. </p>
                  </div>
                </div>


                <div class="wrapper">
                  <button class="toggle">
                    <i class="uil uil-plus icon"></i>Will the money be refunded?</button>
                  <div class="contentfaq">
                    <p>No refund will be given if a student wishes to opt out during the period of subscription. We will try to resolve any technical issues in the payment within 48 hours of credit to our account.</p>
                  </div>
                </div>


                <div class="wrapper">
                  <button class="toggle">
                    <i class="uil uil-plus icon"></i>
                    Do we provide any demo tests?</button>
                  <div class="contentfaq">
                    <p> Yes, we provide the demo test for those who get registered.</p>
                  </div>
                </div>


                <div class="wrapper">
                  <button class="toggle">
                    <i class="uil uil-plus icon"></i>Are there any discount/coupons available for OTS?</button>
                  <div class="contentfaq">
                    <p>Yes, if you are referred by any of our faculty. You can use the same while making the payment.</p>
                  </div>
                </div>


                <div class="wrapper">
                  <button class="toggle">
                    <i class="uil uil-plus icon"></i>
                    I did not get my answer from the above FAQs, whom should I contact?</button>
                  <div class="contentfaq">
                    <p>In case you didn’t get the information, you are looking for, you can contact the eGRADTutor Helpdesk number: +91-7993270532, Email: Info@egradtutor.in.</p>
                  </div>
                </div>




              </div>
            </div>
          </section>

        </div>

        <section className="faqs-container">
          <h3>Frequently Asked Questions </h3>
          <div className="faqs_">

        <Faqs />
        < Faqs6_10/>

          </div>
        </section>










        <Footer />
      </div>
    </>



  )
}

export default Home

// let toggles = document.getElementsByClassName("toggle");
// let contentDiv = document.getElementsByClassName("contentfaq");
// let icons = document.getElementsByClassName("icon")
// // console.log(toggles, contentDiv, icons);


// for (let i = 0; i < toggles.length; i++) {
//   toggles[i].addEventListener("click", () => {
//     // console.log(contentDiv[i].style.height,contentDiv[i].scrollHeight + "px");
//     if (parseInt(contentDiv[i].style.height) !== contentDiv[i].scrollHeight) {
//       contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
//       toggles[i].style.color = "white";
//       // icons[i].classList.remove("uil-plus");
//       // icons[i].classList.add("uil-minus")

//     }
//     else {
//       contentDiv[i].style.height = "0px";
//       toggles[i].style.color = "white";
//       icons[i].classList.remove("uil-minus");
//       // icons[i].classList.add("uil-plus");
//     }
//     for (let j = 0; j < contentDiv.length; j++) {
//       if (j != i) {
//         contentDiv[j].style.height = "0px";
//         toggles[j].style.color = "white";
//         icons[j].classList.remove("uil-minus");
//         // icons[j].classList.add("uil-plus");
//       }
//     }
//   });
// }


