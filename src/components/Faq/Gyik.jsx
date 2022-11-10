import React from 'react'

import "./Gyik.scss"

import { Link } from 'react-router-dom'
import { FaQuestion} from 'react-icons/fa'

const gyik = () => {
  return (
    <div className='app__gyik-site'>
      <Link to="/#Kezdőlap" className='app__gyik-back'>
        <button>Vissza</button>
      </Link>
      <h1 className='app__gyik-title'>Gyakran ismételt kérdések</h1>

      <div className='app__gyik-container'>
        <div className='app__gyik-card'>
          <FaQuestion/>
          <div className='app__gyik-text'>
            <h3>Mi a verseny fődíja?</h3>
            <p>A verseny fődíja a versenyzők elismerése, és az elismerő diploma mellett, egy tanulmányi út a csapattagok számára, melynek részleteit később közöljük.</p>
          </div>
        </div>
      </div>

      <div className='app__gyik-container'>
        <div className='app__gyik-card'>
          <FaQuestion/>
          <div className='app__gyik-text'>
            <h3>Jöhet több csapat egy iskolából?</h3>
            <p>Igen. Az egy iskolából érkező csapatok száma akár három is lehet. Amennyiben egy iskolából több csapat szeretne jönni mint három, javasoljuk egy iskolai forduló megrendezését a tanárok által.</p>
          </div>
        </div>
      </div>

      <div className='app__gyik-container'>
        <div className='app__gyik-card'>
          <FaQuestion/>
          <div className='app__gyik-text'>
            <h3>Hány emberből kell álljon egy csapat?</h3>
            <p>A versenyre 3 fős középiskolás diákokból álló csapatok jelentkezhetnek az oldalon elérhető regisztrációs űrlap kitöltésével.</p>
          </div>
        </div>
      </div>

      <div className='app__gyik-container'>
        <div className='app__gyik-card'>
          <FaQuestion/>
          <div className='app__gyik-text'>
            <h3>Nevezhetnek a versenyre külföldi csapatok?</h3>
            <p>A Kütv szervezői lehetővé teszik minden magyar anyanyelvű diák számára a részvételt. A messziről érkezőknek a szervezők mindenben segítenek, illetve szállást is biztosítanak az egyetem bentlakásában.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default gyik