import React from 'react'
import './MoreInformation.scss'

import {Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { text } from '../../constants';

import {HiArrowSmDown} from 'react-icons/hi'
import {RiComputerFill, RiVipCrownFill} from 'react-icons/ri'

const MoreInformation = () => {
  return (
    <div className='app__moreInformation'>
      <Link to="/#Kezdőlap" className='app__moreInformation-back'>
        <motion.button
        whileHover={{
          scale: 1.1,
        }}
        >
          Vissza
        </motion.button>
      </Link>

      <h1 className='app__moreInformation-title' style={{fontSize:"200%"}}>Általános Információk</h1>
      <h2 className='app__moreInformation-title'>XIV. Középiskolások Üzleti Tanácsadó Versenye</h2>

      <div className='app__moreInformation-container'>
        <div className='app__moreInformation-left'>
          <div className='app__moreInformation-left-card'>
            <h2 style={{marginBottom:"4%", display:"block"}}>Miért jelentkezz?</h2>
            <p>{text.miert1}</p>
            <p>{text.miert2}</p>
          </div>
          <div className='app__moreInformation-left-card'>
          <h2 style={{marginBottom:"4%", display:"block"}}>Hogyan épül fel a verseny?</h2>
            <p>{text.felepites1}</p>
            <p>{text.felepites2}</p>
          </div>
        </div>
        <div className='app__moreInformation-right'>

          <div className='app__moreInformation-right-card'>
            <div className='app__moreInfomration-helper-cont'>
              <RiComputerFill className='svg1' />
              <div className='app__moreInformation-text'>
                <h3 style={{marginBottom:"1%"}}>1. Piackutatás: adatgyűjtés – online – szelekció</h3>
                <p>{text.feladat1}</p>
              </div>
            </div>
            <HiArrowSmDown className='svg'/>
          </div>

          <div className='app__moreInformation-right-card'>
            <div className='app__moreInfomration-helper-cont'>
              <RiComputerFill className='svg1' />
              <div className='app__moreInformation-text'>
              <h3 style={{marginBottom:"1%"}}>1. Piackutatás: adatgyűjtés – online – szelekció</h3>
                <p>{text.feladat2}</p>
              </div>
            </div>
            <HiArrowSmDown className='svg'/>
          </div>

          <div className='app__moreInformation-right-card'>
            <div className='app__moreInfomration-helper-cont'>
              <RiVipCrownFill className='svg1' />
              <div className='app__moreInformation-text'>
              <h3 style={{marginBottom:"1%"}}>1. Piackutatás: adatgyűjtés – online – szelekció</h3>
                <p>{text.feladat1}</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>

    
  )
}

export default MoreInformation