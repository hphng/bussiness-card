import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const InfoButton = () => {
  return (
    <div className='button-container'>
    <a href="https://www.google.com/">
        <button className='email-button'>
            <FontAwesomeIcon className="icon" icon={faEnvelope} />
            Email
        </button>
    </a>
    <a href="https://www.google.com/">
        <button className='linkedIn-button'>
            <FontAwesomeIcon className='icon' icon={faLinkedin} />
            LinkedIn
        </button>
    </a>
    </div>
  )
}

export default InfoButton
