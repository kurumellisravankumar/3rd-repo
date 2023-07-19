import React from 'react'
import { useState } from 'react'
import hi from '../assets/CA-card.png'


const Faqs6_10 = () => {
    const [selected, setSelected] = useState(null)
    const toggle2 = (i1) => {
        // return i
        if (selected === i1) {
            return setSelected(null)

        }
        setSelected(i1)
    }
    return (
        <div>
            <div className="wrapper-3">
            

                <div className="accordion2">
                    {sixtoten.map((item, i2) => (
                        <div className="item2">
                            <div className="title" onClick={() => toggle2(i2)}>
                                <h2>{item.Qustion}</h2>
                                <span>{selected === i2 ? '-' : '+'}</span>
                            </div>
                            <div className={selected === i2 ? 'content-show2' : 'content2'}>{item.answer}</div>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default Faqs6_10
const sixtoten = [
    {
        Qustion: "What information do we need for registration?",
        answer: "Name, contact number, email id, password, country, city."
    },

    {
        Qustion: "Will the money be refunded?",
        answer: "No refund will be given if a student wishes to opt out during the period of subscription. We will try to resolve any technical issues in the payment within 48 hours of credit to our account."
    },
    {
        Qustion: "Do we provide any demo tests?",
        answer: "Yes, we provide the demo test for those who get registered."
    },

    {
        Qustion: "Are there any discount/coupons available for OTS?",
        answer: "Yes, if you are referred by any of our faculty. You can use the same while making the payment."
    },

    {
        Qustion: " I did not get my answer from the above FAQs, whom should I contact?",
        answer: "In case you didn’t get the information, you are looking for, you can contact the eGRADTutor Helpdesk number: +91-7993270532, Email: Info@egradtutor.in."
    }

    
]