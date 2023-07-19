import React from 'react'

import "../styles/faqs.scss";

import { useState } from 'react'
const Faqs1_5 = () => {
    const[selected,setSelected]= useState(null)
    const toggle1 = (i1) => {
        // return i
        if (selected === i1) {
            return setSelected(null)

        }
        setSelected(i1)
    }
  
    return (
        <>
        <div className="wrapper-2">

            <div className="accordion1">
                    {onetofive.map((item1, i1) => (
                <div className="item1">
                    <div className="title" onClick={() => toggle1(i1)}>
                            <h2>{item1.Qustion}</h2>
                            <span>{ selected === i1 ? '-' :'+'}</span>
                    </div>
                        <div className={selected === i1 ? 'content-show' : 'content'}>{item1.answer}</div>
                </div>
                ))}

            </div>

        </div>

       
        </>
    )
}

export default Faqs1_5 
 
const onetofive = [
    {
        Qustion: "What is the mode of registration?",
        answer:"Registration mode will be online."
    },
      {
          Qustion: "What is the mode of payment?",
          answer: "Payment can be done through debit card, credit card, UPI, Net banking."
    },
    {
        Qustion: "What if the money debited and the test is not accessible?",
        answer: "Please contact our web team -info@egradtutor.in they will try to resolve it in 24 hours."
    },
    {
        Qustion: " Do we need to make a payment to get registered?",
        answer: "No. Registration is free of cost, and you need to make payment only when you subscribe to any of our products."
    },
    {
        Qustion: "Who created the test series?",
        answer: "These tests are created by top faculty across India who have 10+Years of experience and by the graduates from IIT/ IISC, IISER."
    },
   




]

