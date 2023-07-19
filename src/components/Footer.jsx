import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillFacebook, AiFillInstagram, AiFillYoutube, AiFillLinkedin } from "react-icons/ai"
import fot from "../assets/logo.png"
import { HashLink } from 'react-router-hash-link'
const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-container">
                    <div className="row1">
                        <div className='foot-logo'>
                            <img src={fot} alt="" />
                        </div>

                        <p>eGRADTutor (a brand of eGATETutor Academy) started with a team of graduates from IIT/IISc.We are experts in training students for UG, PG And MBA entrance examinations.</p>
                    </div>
                    <div className="row2">
                        <h6>Permalinks</h6>
                        <div className="footer-links">

                            < HashLink to={"/#home"} >Home</ HashLink >
                            <HashLink to={"/#about"}>About</HashLink>
                            <HashLink to={"/#exam"}>Exams</HashLink>
                            <HashLink to={"/#courses"}>Courses</HashLink>
                            <HashLink to={"/#contact"}>Contact</HashLink>
                           
                          </div>
                    </div>
                    <div className="row3">
                        <h6>Privacy</h6>

                        <div className="footer-links">
                            <Link to={"/"}>Privacy Policy</Link>
                            <Link to={"/"}>Terms and conditions</Link>
                            <Link to={"/"}>Refund Policy</Link>
                        </div>

                    </div>
                    <div className="row4">
                        <h6>Contact Us</h6>
                        <p>H.NO-2-2-1132/10/C,R.K Nivas,
                            2nd Floor,Opposite Bakers Q,
                            Shivam Road,New Nallakunta,
                            Hyderabad-44.</p>
                        <p>+91-7993270532</p>
                        <p>info@egradtutor.in</p>
                        <div className=' icons'><AiFillFacebook /><AiFillInstagram /><AiFillYoutube /><AiFillLinkedin /></div>
                    </div>

                </div>
                <div className="copy">
                    <p>Copyright © 2023 eGradTutor All rights reserved</p>
                </div>
            </footer>

        </>
    )
}

export default Footer
