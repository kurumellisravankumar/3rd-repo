import React from 'react';
import { Link } from 'react-router-dom';
// --------------------------  react -icons ---------------------------

import { AiFillFacebook, AiFillInstagram, AiFillYoutube, AiFillLinkedin } from "react-icons/ai"


const Contact = () => {
    return (
        <div className="contanct-lg" id="contact">

        
        
        <div className='contanct-container' >

            <h1>Contact us</h1>
          
            <div>
                <label> First name:</label>
                <input type="text" placeholder='fristname' />
            </div>
            <div>
                <label> Last name:</label>
                <input type="text" placeholder='Lastname' />
            </div>

            <div>
                <label> Description:</label>
                <div>
                    <textarea name="" id="" cols="30" rows="10" placeholder='send your feed back'></textarea>
                </div>
            </div>

            <button><Link to="/" >submit</Link></button>
            <div className=' contact-icons'>
                <i><AiFillFacebook /></i>
                <i><AiFillInstagram /></i>
                <i><AiFillYoutube /></i>
                <i><AiFillLinkedin /></i></div>
            </div>
        </div>
    )
}

export default Contact 
