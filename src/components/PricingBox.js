import './PricingBoxStyles.css'

import React from 'react'
import {Link} from 'react-router-dom'

const PricingBox = () => {
    return (
        <div className='pricing'>
            <div className='card-container'>
                <div className='card'>
                <h3>- Basic -</h3>
                <span className='dash'></span>
                <h1>$100</h1>
                <p>- 3 Days -</p>
                <p>- 3 Pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/Contact" className="btn">PURCHASE NOW</Link>
                </div>

                <div className='card'>
                <h3>- Premium -</h3>
                <span className='dash'></span>
                <h1>$200</h1>
                <p>- 2 Days -</p>
                <p>- 5 Pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/Contact" className="btn">PURCHASE NOW</Link>
                </div>

                <div className='card'>
                <h3>- Bussiness -</h3>
                <span className='dash'></span>
                <h1>$300</h1>
                <p>- 5 Days -</p>
                <p>- 8 Pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/Contact" className="btn">PURCHASE NOW</Link>
                </div>
            </div>
        </div>
    )
}

export default PricingBox