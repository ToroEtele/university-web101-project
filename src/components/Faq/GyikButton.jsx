import React from 'react'

import {FcFaq} from 'react-icons/fc'
import { Link } from 'react-router-dom'

const gyik = () => {
  return (
    <div className='app__gyik'>
      <Link to='/gyik' className='app__gyik-link'>
        <FcFaq/>
      </Link>
    </div>
  )
}

export default gyik