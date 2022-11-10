import React from 'react'
import './MoreRules.scss'

import {Link } from 'react-router-dom';
import {AppWrap} from '../wrapper';
import { motion } from 'framer-motion';
import { text } from '../../constants';

import {MdDoubleArrow} from'react-icons/md'
import {SocialMedia} from '../../components';

const MoreRules = () => {
  return (
    <div className='app__moreRules'>
      
      <Link to="/#Szabályzat" className='app__moreRules-back'>
        <motion.button
        whileHover={{
          scale: 1.1,
        }}
        className='app__moreRules-back'
        >
          Vissza
        </motion.button>
      </Link>

      <h1 className='app__moreRules-title'>Általános versenyszabályzat</h1>

    {
      text.rules.map((item) => (
        <div className='app__moreRules-container'>
          <MdDoubleArrow style={{marginTop:"1%", color:"#f5c791", fontSize:"400%"}}/>
          <motion.div 
          className='app__moreRules-div'
          whileHover={{
            scale: 1.065,
          }}
        >
          <ul>
            <li>{item.one}</li>
            <li>{item.two}</li>
          </ul>
        </motion.div>

        <MdDoubleArrow style={{marginTop:"1%", color:"#f5c791",fontSize:"400%"}} className="svg-rotation"/>
      </div>
      ))
    }


      
    </div>
  )
}

export default MoreRules