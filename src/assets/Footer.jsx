import React from 'react'
import twitter from './images/Twitter-icon.svg'
import facebook from './images/facebook-icon.svg'
import instagram from './images/instagram-icon.svg'
import github from './images/github-icon.svg'

export default function Footer(){
    return (
        <div className='footer--container'>
            <img src={twitter} className='icon twitter-icon'/>
            <img src={facebook} className='icon twitter-icon'/>
            <img src={instagram} className='icon twitter-icon'/>
            <img src={github} className='icon twitter-icon'/>
        </div>
    )
}