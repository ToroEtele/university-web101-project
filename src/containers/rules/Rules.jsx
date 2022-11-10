import React, { useEffect, useState } from 'react';
import './Rules.scss';

import {AppWrap, MotionWrap} from '../wrapper';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { Link } from 'react-router-dom';


function Rules() {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 650)

    const updateMedia = () => {
        setIsDesktop(window.innerWidth > 650)
    }

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    })

  return (
    <motion.div class="app__rules">
        {isDesktop ? (
            <div  className='app__rules-d-container'>
               <div className='app__rules-table'>
                    <h2 className='app__table-title'>A verseny ütemezése</h2>
                    <p className='app__table-subtitle'>I. forduló - piackutatás: Adatgyűjtés</p>
                    <table>
                        <tr>
                            <td>2022.02.09. - 22:00</td>
                            <td>Regisztrációs űrlap kitöltési határideje</td>
                        </tr>
                        <tr>
                            <td>2022.02.10.</td>
                            <td>Az I. forduló feladatának kiküldése</td>
                        </tr>
                        <tr>
                            <td>2022.02.23. 22:00</td>
                            <td>Az I. forduló megoldásainak beküldése</td>
                        </tr>
                        <tr>
                            <td>2022.02.26.</td>
                            <td>Az I. forduló eredményeinek közlése</td>
                        </tr>
                    </table>
                    <p className='app__table-subtitle'>II. forduló - piackutatás: Adatfeldolgozás</p>
                    <table>
                        <tr>
                            <td>2022.02.26.</td>
                            <td>A II. forduló feladatának kiküldése</td>
                        </tr>
                        <tr>
                            <td>2022.03.17. 22:00</td>
                            <td>2022.03.29. </td>
                        </tr>
                        <tr>
                            <td>2022.03.29. </td>
                            <td>A II. forduló eredményeinek közlése</td>
                        </tr>
                    </table>
                    <p className='app__table-subtitle'>Döntő - Középiskolások Üzleti Tanácsadó Versenye – Esettanulmány megoldás - Kolozsvár</p>
                    <table>
                        <tr>
                            <td>2022.02.26.</td>
                            <td>A II. forduló feladatának kiküldése</td>
                        </tr>
                        <tr>
                            <td>2022.03.17. 22:00</td>
                            <td>2022.03.29. </td>
                        </tr>
                        <tr>
                            <td>2022.03.29. </td>
                            <td>A II. forduló eredményeinek közlése</td>
                        </tr>
                    </table>
               </div>
               <img src={images.picture1} className='app__rules-image' alt='img'/>
               <div className='app__rules-bar'>

                    <Link to='/morerules' style={{marginBottom:"6%"}} className="app__rules-button">
                        <motion.button
                            whileHover={{
                            scale: 1.1,
                            }} 
                            style={{width:250, height:50}}
                            className="app__rules-button"
                        >
                            Tudj meg többet!
                        </motion.button>
                    </Link>
                    <h1 style={{marginTop:"1%", marginLeft:"25%"}}>Általános versenyszabályzat</h1>
               </div>
            </div>
        ) : (
            <div className='app__rules-d-container'>
                <div className='app__rules-table'>
                    <p className='app__table-subtitle'>I. forduló - piackutatás: Adatgyűjtés</p>
                    <table>
                        <tr>
                            <td>2022.02.09. - 22:00</td>
                            <td>Regisztrációs űrlap kitöltési határideje</td>
                        </tr>
                        <tr>
                            <td>2022.02.10.</td>
                            <td>Az I. forduló feladatának kiküldése</td>
                        </tr>
                        <tr>
                            <td>2022.02.23. 22:00</td>
                            <td>Az I. forduló megoldásainak beküldése</td>
                        </tr>
                        <tr>
                            <td>2022.02.26.</td>
                            <td>Az I. forduló eredményeinek közlése</td>
                        </tr>
                    </table>
                    <p className='app__table-subtitle'>II. forduló - piackutatás: Adatfeldolgozás</p>
                    <table>
                        <tr>
                            <td>2022.02.26.</td>
                            <td>A II. forduló feladatának kiküldése</td>
                        </tr>
                        <tr>
                            <td>2022.03.17. 22:00</td>
                            <td>2022.03.29. </td>
                        </tr>
                        <tr>
                            <td>2022.03.29. </td>
                            <td>A II. forduló eredményeinek közlése</td>
                        </tr>
                    </table>
                    <p className='app__table-subtitle'>Döntő - Középiskolások Üzleti Tanácsadó Versenye – Esettanulmány megoldás - Kolozsvár</p>
                    <table>
                        <tr>
                            <td>2022.02.26.</td>
                            <td>A II. forduló feladatának kiküldése</td>
                        </tr>
                        <tr>
                            <td>2022.03.17. 22:00</td>
                            <td>2022.03.29. </td>
                        </tr>
                        <tr>
                            <td>2022.03.29. </td>
                            <td>A II. forduló eredményeinek közlése</td>
                        </tr>
                    </table>
               </div>
            
                <Link to='/morerules' className='phone-button'>
                    <button 
                        style={{width:280, height:50, cursor:"pointer"}}
                        >
                        Ismerd meg a szabályzatot!
                    </button>
                </Link>
                
            </div>
        )}


    </motion.div>
  )
}

export default MotionWrap(
    AppWrap(Rules, 'Szabályzat'),
    'Szabályzat',
    'app__whitebg'
  );
  