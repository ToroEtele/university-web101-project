import './Navbar.scss'
import React, {useState} from 'react'

import { HiMenuAlt4, HiX} from 'react-icons/hi'
import {images} from '../../constants';
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';

export default function () {
  const [toggle, setToggle] = useState(false)

  return (
  <nav className="app__navbar">
    <img src={images.logoNavbar} alt="logo" className='app__navbar-logo'/>

    <ul className="app__navbar-links">
      {['Kezdőlap', 'Információk', 'Hírek', 'Szabályzat', 'Kapcsolat'].map((item) => (
        <li className="app__flex p-text" key={`link-${item}`}>
          <a href={`#${item}`}>
              {item}
          </a>
        </li>
      ))}
    </ul>

    <Link to="/account" className="button-link">
      <motion.button
        whileHover={{
          scale: 1.1,
        }}
        className='normal-button'
      > 
        Bejelentekzés
      </motion.button>
    </Link>
      
    <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)}/>

        {toggle && (
          <motion.div
            whileInView={{x: [300, 0]}}
            transition={{duration: 0.85, ease: 'easeOut'}}
          >
            <HiX  onClick={() => setToggle(false)}/>
            <ul>
              {['Kezdőlap', 'Információk', 'Hírek', 'Szabályzat', 'Kapcsolat'].map((item) => (
                <li key={item}>
                  <a onClick={() => setToggle(false)} href={`#${item}`}>
                    {item}
                  </a>
                </li>
              ))}
            <Link to="/account" className="button-link">
              <motion.button
                whileHover={{
                  scale: 1.1,
                }}
                className="sidebar-button"
              >
                Bejelentekzés
              </motion.button>
            </Link>

            </ul>
            
            <img src={images.logoNavbar} alt="logo" className='app__navbar-logo'/>
          </motion.div>   
        )}
    </div>
  </nav>
  )
}
