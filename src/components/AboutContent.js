import './AboutContentStyles.css'

import React from 'react'
import React1 from '../assests/reactjs1.jpg'
import React2 from '../assests/reactjs2.jpeg'
import {Link} from 'react-router-dom'


const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who Am I?</h1>
            <p>Im a react font-end developer. I create responsive secure websites for my clients.</p>
            <Link to="/Contact" className='btn'>Contact</Link>
        </div>
        <div className='right'>
            <div className='img-container'>
            <div className='img-stuck top'>
                <img src={React1} className='img' alt='React-js'/>
            </div>
            <div className='img-stuck bottom'>
                <img src={React2} className='img' alt='React-dev'/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent