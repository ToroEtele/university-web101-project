import React, { useEffect, useState } from 'react';

import {AppWrap, MotionWrap} from '../wrapper';
import { motion } from 'framer-motion';
import {IoMdArrowDropright} from 'react-icons/io'

import Card from './Card/Card.jsx';
import './News.scss';
import { text } from '../../constants';

function News() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 650)
  const [index, setIndex] = useState(0);

  const updateMedia = () => {
      setIsDesktop(window.innerWidth > 650)
  }

  useEffect(() => {
      window.addEventListener("resize", updateMedia);
      return () => window.removeEventListener("resize", updateMedia);
  })

  var showedNews
  (isDesktop) ?  (
    showedNews = text.news.slice(index, index + 3)
  ) : (
    showedNews = text.news.slice(index, index + 1)
  )
    
  function handleClick(lr){
    console.log(index + " " + text.news.length)
    if(lr == 1) {
      if(isDesktop) {
        if(index + 3 < text.news.length){
          setIndex(index + 1);
        } 
      } else {
        if(index + 1 < text.news.length) {
          setIndex(index + 1);
        }
      }
    } else {
      if(index - 1 > -1) {
        setIndex(index - 1);
      }
    }
  }

  return (
    <motion.div 
    className='app__news'
    >   
        <h1>A versennyel kapcsolatos hírek</h1>

        <div className='app__news-container'>
          <motion.div className='app__news-container-arrow' onClick={() => handleClick(0)}> <IoMdArrowDropright style={{transform: "rotateY(180deg)"}}/> </motion.div>
          <div className='app__news-container-cards'>
            {
            showedNews.map((obj) => (
              <Card obj={obj} key={`link-${obj.id}`}/>
            ))
            }
          </div>
          <div className='app__news-container-arrow' style={{transform: "rotateY(180deg)"}} onClick={() =>handleClick(1)}> <IoMdArrowDropright style={{transform: "rotateY(180deg)"}}/></div>
        </div>
    </motion.div>
  )
}

export default MotionWrap(
  AppWrap(News, 'Hírek'),
  'Hírek',
  'app__whitebg'
);
