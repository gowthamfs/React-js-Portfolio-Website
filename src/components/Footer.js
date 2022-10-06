import "./FooterStyles.css";

import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
            <div className="left">
            <div className="location">
                <FaHome  size={20} style={{color:'#fff'}} />
                 <h3>Chennai</h3>
                </div>
                <div className="phone">
                <FaPhone size={20} style={{color:"#fff"}} />
                <h3>8056119397</h3>
                </div>
                <div className="email">
                <FaMailBulk size={20} style={{color:"#fff"}} />
                <h3>gowthamfs7@gmail.com</h3>
                </div>
            </div>
            <div className="right">
                <h4>About the company</h4>
                <p>This is me Gowtham, A React developer is responsible for the design and implementation of user interfaces and UI components using React, a front-end JavaScript library.</p>
                <div className="social">
                <FaFacebook size={30} style={{color:"#fff", marginRight:'2rem'}} />
                <FaInstagram size={30} style={{color:"#fff", marginRight:'2rem'}} />
                <FaLinkedinIn size={30} style={{color:"#fff", marginRight:'2rem'}} />


                </div>
            </div>
            </div>
        </div>
    )
}

export default footer
