import "./HeroImgStyles.css"

import React from 'react'
import IntroImg from '../assests/hero-bg.png'
import {Link} from 'react-router-dom'

const HeroImg = () => {
  return (

    <div className="hero">
        <div className="bg-img">
            <img className="intro-img" src ={IntroImg}  alt="intro-img" />
            </div>
            <div className="content">
                <p>Hi, I'm a Freelancer</p>
                <h1>React Developer.</h1>  
                <div>
                    <Link to="/Project" className="btn">Projects</Link>
                    <Link to="/Contact" className="btn btn-light">Contact</Link>
                </div>
            </div>
        </div>

        
  )
}

export default HeroImg