import React from 'react'

import {AppWrap, MotionWrap} from '../wrapper';
import './Home.scss';

const Home = () => {
  return (
    <>
        <div className='bg'>
        </div>
        <h1 className='app__home-title'>Középiskolások<br/> Üzleti<br/> Tanácsadó<br/> Versenye</h1>
    </>
  )
}

export default MotionWrap(
  AppWrap(Home, 'Kezdőlap'),
  'Kezdőlap',
  'app__whitebg'
  );