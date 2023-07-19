import React from 'react'
import { Link } from 'react-router-dom'



//  -------------------------------------------- 
// landing css------------------

import "../styles/landing-page.scss";
import logo from "../assets/logo.png"



const Landingpage = () => {
    return (
        <>

            <div className="landing-container-lg">
                <h1>welcome to <span>eGRADTutor</span> </h1>

                <div className="landing-container-sm">

                    <div className="landing-left">
                        <div className="landing-logo">
                            <img src={logo} alt="" />
                        </div>
                        <p>eGRADTutor is an Edtech firm started with a vision to blend the boundaries in education and take best-in-class courses and teachers virtually to every corner of the country. Our courses are developed by the alumni of IITs/IISc with an intent to enhance the student's abilities to face some of the toughest exams of the country. Our offerings not just provide a deeper understanding of the subjects to the students, but they also make them exam ready. </p>

                    </div>

                    <div className="landing-right">
                        <Link to={"/home"}>
                            <div className="box-1 box-container">
                                <h4>UG COURSES</h4>
                                <div className="hover-content">

                                    <a href="/#">IIT-JEE(MAIN&ADVANCED)</a>
                                    <a href="/#">NEET</a>
                                    <a href="/#">BITSAT</a>
                                    <a href="/#">VITEEE</a>
                                    <a href="/#">&OTHER ENTRANCE EXAMS</a>

                                </div>

                            </div>
                        </Link>



                        <div className="box-2 box-container">
                            <h4>PG COURSES</h4>
                            <div className="hover-content">
                                <a href="/">GATE</a>
                                <a href="/">ESE</a>
                                <a href="/">IIT-JAM</a>
                                <a href="/">&OTHER ENTRANCE EXAMS</a>

                            </div>

                        </div>

                        <div className="box-3 box-container">
                            <h4>MBA</h4>
                            <div className="hover-content">

                                <a href="/">GRE</a>
                                <a href="/">GMAT</a>
                                <a href="/">CAT</a>
                                <a href="/">&OTHER ENTRANCE EXAMS</a>

                            </div>

                        </div>

                        <div className="box-4 box-container">
                            <h4>CA FOUNDATION</h4>
                            <div className="hover-content">

                                <a href="/">COMING SOON</a>


                            </div>
                        </div>

                    </div>





                </div>
            </div>











        </>
    )
}

export default Landingpage
