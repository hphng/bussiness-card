import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='footer-container'>
        <a href="https://www.facebook.com/">
            <FontAwesomeIcon className="icon" icon={faSquareFacebook} />
        </a>
        <a href="https://www.instagram.com/">
            <FontAwesomeIcon className="icon" icon={faInstagram} />
        </a>
        <a href="https://www.twitter.com/">
            <FontAwesomeIcon className="icon" icon={faTwitter} />
        </a>
        <a href="https://www.youtube.com/">
            <FontAwesomeIcon className="icon" icon={faSquareGithub} />
        </a>
    </div>
  )
}

export default Footer
