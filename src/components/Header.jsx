import React from 'react'
import { Link } from 'react-router-dom'
// import { HashLink } from "react-router-hash-link"







// ------------------- logo -----------------------
import logo from "../assets/logo.png"
import Landingpage from './Landingpage';
const Header = () => {

    return (

        <header>



            <div className='logo'>
                <Link to={"/"} element={<Landingpage />}><img src={logo} alt="" /></Link>


            </div>

            <nav className='navbar'>
                <ul>

                    {/* < HashLink to={"/#home"} >Home</ HashLink >
                    <HashLink to={"/#about"}>About</HashLink>
                    <HashLink to={"/#exam"}>Exams</HashLink>
                    <HashLink to={"/#courses"}>Courses</HashLink>
                    <HashLink to={"/#contact"}>Contact</HashLink>
                    <HashLink to={"/#fAQ,s"}>FAQ,s</HashLink> */}

                    < a href="#home" >Home</ a >
                    <a href="#about">About</a>
                    <a href="#exam">Exams</a>
                    <a href="#courses">Courses</a>
                    <a href="#contact">Contact</a>
                    <a href="#fAQ,s">FAQ,s</a>


                </ul>
            </nav>
            <div className='login-btn'>
                <button><Link to={"/"}>Login/Registration</Link></button>
            </div>
            {/* 
            <header >
                <div className="navbar">
                <div className="logo">
                    < HashLink to={"/#home"} > <img src={logo} alt="" /></ HashLink >
                </div>

                <ul className="links">

                        < HashLink to={"/#home"} >Home</ HashLink >
                        <HashLink to={"/#about"}>About</HashLink>
                        <Link to={"/Exam"}>Exams</Link>
                        <HashLink to={"/#courses"}>Courses</HashLink>
                        <Link to={"/Contact"}>Contact</Link>
                
                </ul>
                <button className='login-btn'><Link to={"/"}>Login/Registration</Link></button>


                <div className="toogle-btn">
                    <i><AiOutlineMenu /></i>
                </div>
                </div>
                <div className="dropdown-">
                    < HashLink to={"/#home"} >Home</ HashLink >
                    <HashLink to={"/#about"}>About</HashLink>
                    <Link to={"/Exam"}>Exams</Link>
                    <HashLink to={"/#courses"}>Courses</HashLink>
                    <Link to={"/Contact"}>Contact</Link>
                    <Link to={"/"}>Login/Registration</Link>
                </div>

            </header>

 */}



        </header>

    )
}

export default Header

