import React, { useEffect, useState } from 'react';

import './Informations.scss';
import {AppWrap, MotionWrap} from '../wrapper';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GyikButton } from '../../components';

import {AiFillBank } from 'react-icons/ai'
import {ImBook } from 'react-icons/im'
import {RiNumber1 } from 'react-icons/ri'
import {GiBrain } from 'react-icons/gi'

import { images } from '../../constants';

const Informations = () => {

  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 650)

  const updateMedia = () => {
      setIsDesktop(window.innerWidth > 650)
  }

  useEffect(() => {
      window.addEventListener("resize", updateMedia);
      return () => window.removeEventListener("resize", updateMedia);
  })

  return (
    <div className='app__info'>
      { isDesktop ? (
      <>
      <motion.div 
        whileInView={{opacity: 1 }}
        className='app__info-infocard'
      >
        <h2>Általános Információk:</h2>
        <p>
        A Babeş-Bolyai Tudományegyetem Közgazdaság- és Gazdálkodástudományi Magyar Intézetének szervezésében, 2022. április 8-9. között, tizennegyedik alkalommal kerül megrendezésre a Kolozsvári Esettanulmány Napok rendezvénysorozat. Az Esettanulmány Napok keretén belül kiemelt helyet kap a már komoly hagyományokkal rendelkező Középiskolások Üzleti Tanácsadó Versenyének döntő fordulója.
        </p>
        <Link to="/info" className='app__info-button'>
         <motion.button
        whileHover={{
          scale: 1.1,
        }}
        >
          Tudj meg többet!
        </motion.button>
        </Link>

      </motion.div>

      <h2 className='app__info-title'>A Kütv célja:</h2>

      <div className='app__info-card-container'>
        <div className='card'>
          <AiFillBank />
          <p>
          A Középiskolások üzleti Tanácsadó Versenye magyar anyanyelvű középiskolás diákoknak szervezett gazdasági verseny.
          </p>
        </div>
        <div className='card'>
          <ImBook />
          <p>
          Célunk a közgazdász szakma rejtélyeibe betekintést nyújtani a pályaválasztás előtt álló fiatalok számára.
          </p>
        </div>
        <div className='card'>
          <RiNumber1 />
          <p>
          Ennek megfelelőn, egyszerű, gyakorlatias és szórakoztató tanulási módszerek segítségével építettük fel a Középiskolások üzleti Tanácsadó Versenyét. 
          </p>
        </div>
        <div className='card'>
          <GiBrain />
          <p>
          A verseny alatt a diákok megismerkedhetnek a piackutatás területével és egy esettanulmány megoldásának kihívásaival.
          </p>
        </div>
      </div>
      </>
      ) : 
      ( 
        <>
          <h2 className='app__info-title'>A Kütv célja:</h2>

          <div className='app__info-card-container'>
            <div className='card'>
              <AiFillBank />
              <p>
              A Középiskolások üzleti Tanácsadó Versenye magyar anyanyelvű középiskolás diákoknak szervezett gazdasági verseny.
              </p>
            </div>
            <div className='card'>
              <ImBook />
              <p>
              Célunk a közgazdász szakma rejtélyeibe betekintést nyújtani a pályaválasztás előtt álló fiatalok számára.
              </p>
            </div>
            <div className='card'>
              <RiNumber1 />
              <p>
              Ennek megfelelőn, egyszerű, gyakorlatias és szórakoztató tanulási módszerek segítségével építettük fel a Középiskolások üzleti Tanácsadó Versenyét. 
              </p>
            </div>
            <div className='card'>
              <GiBrain />
              <p>
              A verseny alatt a diákok megismerkedhetnek a piackutatás területével és egy esettanulmány megoldásának kihívásaival.
              </p>
            </div>
          </div>

          <Link to="/info" className='info-phone-button'>
          <button className='info-phone-button'>Általános Informatiók</button>
          </Link>
        </>
      )}
    </div>
  )
}

export default MotionWrap(
  AppWrap(Informations, 'Információk'),
  'Információk',
  'app__whitebg'
);