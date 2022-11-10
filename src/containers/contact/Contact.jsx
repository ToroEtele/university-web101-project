import React, { useEffect, useState } from 'react';

import './Contact.scss'
import {images} from '../../constants';

import {AppWrap, MotionWrap} from '../wrapper';
import { GyikButton } from '../../components';
import { motion } from 'framer-motion';

const Contact = () => {

  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 650)

  const updateMedia = () => {
      setIsDesktop(window.innerWidth > 650)
  }

  useEffect(() => {
      window.addEventListener("resize", updateMedia);
      return () => window.removeEventListener("resize", updateMedia);
  })

  return (
    <div className='app__contact'>
      {isDesktop ? (
      <>
        <div className='app__contact-info'>
          <h1 style={{alignSelf:"center", marginBottom:"10%"}}>Kapcsolat</h1>
          <h3 style={{marginBottom:"2%"}}>UBBFsega:</h3>
          <p className='parag'>Str. Teodor Mihali, Nr. 58-60 400591,<br/>
            Cluj Napoca, Romania</p>
          <p className='parag'>Tel: +40 264-41.86.55</p>
          <p style={{marginBottom:"4%"}} className='parag'>Fax: +40 264-41.25.70</p>
          <h3 style={{marginBottom:"2%"}}>Universitatea Babes Bolyai:</h3>
          <p className='parag'>Str. Mihail Kogălniceanu, nr. 1
          <br/>400084, Cluj-Napoca, România</p>
          <p className='parag'>Tel: +40 264 405 300</p>
          <p className='parag'>Fax: +40 264 591 906</p>
          <p className='parag'>Email: contact@ubbcluj.ro</p>
        </div>

        <div className='right'>
          <div className='app__contact-email'>
            <h1 className='app__contact-title2'>Vedd fel a kapcsolatot most!</h1>        
            <div className="app__contact-input">
              <input className="p-text" type="text" placeholder="Teljes név" name="name"/>
            </div>
            <div className="app__contact-input">
              <input className="p-text" type="email" placeholder="Email-cím" name="email" />
            </div>
            <div>
              <textarea
                className="p-text"
                placeholder = "Üzenj valamit"
                name = "message"
              />
            </div>
            <motion.button
              whileHover={{
              scale: 1.1,
              }}
              type="button" 
              className='app__contact-button' 
            >
              Üzenet küldése
            </motion.button>
          </div>
          <div className='app__contact-organisers'>
            <img src={images.kutv} alt="logo" className='app__navbar-kutv'/>
            <img src={images.ubb_logo} alt="logo" className='app__navbar-ubb'/>
            <img src={images.logoNavbar} alt="logo" className='app__navbar-logo'/>

          </div>
        </div>
      </>
      ) : (
        <div className='app__contact-phone'>
          <div className='app__contact-email'>
            <h1 className='app__contact-title2'>Vedd fel a kapcsolatot most!</h1>        
            <div className="app__contact-input">
              <input className="p-text" type="text" placeholder="Teljes név" name="name"/>
            </div>
            <div className="app__contact-input">
              <input className="p-text" type="email" placeholder="Email-cím" name="email" />
            </div>
            <div>
              <textarea
                className="p-text"
                placeholder = "Üzenj valamit"
                name = "message"
              />
            </div>
            <motion.button
              whileHover={{
              scale: 1.1,
              }}
              type="button" 
              className='app__contact-button' 
            >
              Üzenet küldése
            </motion.button>
          </div>

          <div className='app__contact-info'>
          <h1 style={{alignSelf:"center", marginBottom:"10%"}}>Kapcsolat</h1>
          <h3 style={{marginBottom:"2%"}}>UBBFsega:</h3>
          <p className='parag'>Str. Teodor Mihali, Nr. 58-60 400591,<br/>
            Cluj Napoca, Romania</p>
          <p className='parag'>Tel: +40 264-41.86.55</p>
          <p style={{marginBottom:"4%"}} className='parag'>Fax: +40 264-41.25.70</p>
          <h3 style={{marginBottom:"2%"}}>Universitatea Babes Bolyai:</h3>
          <p className='parag'>Str. Mihail Kogălniceanu, nr. 1
          <br/>400084, Cluj-Napoca, România</p>
          <p className='parag'>Tel: +40 264 405 300</p>
          <p className='parag'>Fax: +40 264 591 906</p>
          <p className='parag'>Email: contact@ubbcluj.ro</p>
        </div>

          <div className='app__contact-organisers'>
            <img src={images.kutv} alt="logo" className='app__navbar-kutv'/>
            <img src={images.ubb_logo} alt="logo" className='app__navbar-ubb'/>
            <img src={images.logoNavbar} alt="logo" className='app__navbar-logo'/>

          </div>
        </div>
      )}
    </div>
  )
}

export default MotionWrap(
    AppWrap(Contact, 'Kapcsolat'),
    'kapcsolat',
    'app__whitebg'
    );