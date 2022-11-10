import React from 'react'

import { BsTwitter, BsLinkedin, BsFacebook} from 'react-icons/bs'

import { GyikButton } from '../components'

import {FcFaq} from 'react-icons/fc'
import { Link } from 'react-router-dom'

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div >
        <a href="https://www.facebook.com/FSEGA/">
          <BsFacebook />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/company/ubb-fsega/">
          <BsLinkedin/>
        </a>
      </div>
      <div>
        <a href='https://twitter.com/ubbfsega'>
          <BsTwitter/>
        </a>
      </div>
      <div>
      <Link to='/gyik' className='app__gyik-link'>
        <FcFaq style={{width:"100%"}}/>
      </Link>
      </div>
    </div>
  )
}

export default SocialMedia