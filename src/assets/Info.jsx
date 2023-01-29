import React from 'react'
import portrait from './profile-card.svg'
import email from './email.png'
import linkedin from './linkedin.png'
export default function Info() {
    return (
        <div className='info-container'>
            <img src={portrait} className='info--portrait' />
            <h2 className='info--name'>Laura Smith</h2>
            <h5 className='info--occupation'>Frontend Developer</h5>
            <p className='info--website'>laurasmith.website</p>
            <div className='buttons-container'>
                <img src={email} className='buttons'/>
                <img src={linkedin} className='buttons'/>
            </div>
        </div>
    )
}