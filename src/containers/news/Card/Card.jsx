import React from 'react'

import { motion } from 'framer-motion';
import { images, text } from '../../../constants'
import './Card.scss';
import { Link } from 'react-router-dom';


function Card(props) {

  return (
    <div className='app__card'>
        <div className='app__card-image-container'>
            <img className='image' src={props.obj.imageName} />
        </div>

        <p className='app__card-title'>{text.news[props.obj.id].title}</p>

        <Link 
        to={{pathname: `/news/${props.obj.id}`}}
        style={{width:"80%", height:"12%", marginTop:"5%", zIndex:"10"}}
        >
          <motion.button 
            whileHover={{
              scale: 1.05,
            }}
            className='app__card-button'
            >
            Tudj meg többet
          </motion.button>
        </Link>

    </div>
  )
}

export default Card