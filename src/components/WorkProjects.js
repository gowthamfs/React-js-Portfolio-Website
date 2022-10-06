import './WorkProjectsStyles.css'

import React from 'react'

const WorkProjects = (props) => {
    return (
                <div className='projects'>
                    <img src={props.imgsrc} alt='WallClock' />
                    <h2 className='project-title'>{props.title}</h2>
                    <p class='project-details'>{props.text}</p>
                    <div>
                        <a href='https://github.com/gowthamfs' target="_blank" className='btn-pro'>GitHub</a>
                    </div>
                </div>
    )
}


export default WorkProjects