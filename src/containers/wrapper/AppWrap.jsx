import React from 'react'
import { Link } from 'react-router-dom';
import {NavigationDots, SocialMedia, GyikButton} from '../../components';

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <div className="app__wrapper app__flex">
        <Component />
      </div>
      <NavigationDots active={idName}/>
      {(idName !== 'Kezdőlap') ?
      <>
      <SocialMedia />
      </>
      :
      <></>
      }
    </div>
  )
}

export default AppWrap;
