import './WorkProjectsStyles.css'

import React from 'react'
import WorkProjects from "./WorkProjects.js"
import WorkProjectsData from "./WorkProjectsData.js"



const Work = () => {
    return (
        <div className='container'>
            <h1 className='pro-title'>Projects</h1>
            <div className='project-container'>
         {WorkProjectsData.map((value, index)=>{
            return(
                <WorkProjects
                key={index}
                imgsrc={value.imgsrc}
                title={value.title}
                text={value.text}
                 />
                
            )
         })}
            </div>
        </div>
    )
}


export default Work