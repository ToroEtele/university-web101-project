import React, { useEffect } from 'react'
import './ANew.scss'

import { useParams, Link } from 'react-router-dom'
import { text } from '../../constants'
import {SocialMedia} from '../../components';
import { images } from '../../constants';
import { motion } from 'framer-motion';

const ANew = () => {
  const { id } = useParams();

  useEffect(() => {
    console.log(text.news[id].html);
    document.getElementById("html").innerHTML = text.news[id].html;
  })
  
    return (
    <div className='app__anew'>
      <Link to="/#Kezdőlap" className='app__anew-back' style={{margin:"3% 0 0 3%"}}>
        <motion.button
        whileHover={{
          scale: 1.1,
        }}
        >
          Vissza
        </motion.button>
      </Link>

      <div className='app__anew-card'>
        <h1 className='app__anew-title' style={{marginBottom:"5%"}}>{text.news[id].title}</h1>
        <div id="html" className='app__anew-html-content'></div>
      </div>

    </div>
  )
}

export default ANew