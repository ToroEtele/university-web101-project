import React from 'react'
import { useState } from 'react';

import './Account.scss'

import {Link } from 'react-router-dom';
import {AppWrap} from '../wrapper';

const Account = () => {
  const [lastDate,setLastDate] = useState(new Date(2022, 3, 27))
  const [today,setToday] = useState(new Date())

  const handleLoginSubmit = () => {
    let email = document.forms["login"]["email"].value;
    let passwd = document.forms["login"]["passwd"].value;
    if(email == "" || passwd == "") {
      alert("Mindkét mező kötelező!");
    } else {
      alert("Üdvözöllek " + email);
    }
  }

  const handleRegisterSubmit = () => {
    let pass = document.forms["register"]["passwd"].value;
    let pass1 = document.forms["register"]["passwd1"].value;
    let email = document.forms["register"]["email"].value;

    let mailFormat = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/

    if(pass != pass1){
      alert("A két jelszó nem eggyezik!");
      return;
    }

    if(! mailFormat.test(email)){
      alert("Hibás email cím!");
      return;
    }

    if(! /^[1-9]+$/.test(document.forms["register"]["nr"])){
      alert("Hibás iránzítószám!");
      return;
    }

    var Class = document.forms["register"]["class"].value;
    if(Class == "12"){
      alert("Jövőre várunk a FSEGAN!")
    }
    else {
      alert("Sok sikert " + document.forms["register"]["name"].value + "!")
    }
  }

  return (
    <div className='app__account'>
      <Link to="/#Kezdőlap" className="link" >
        <button className='app__account-back'>
        Vissza
        </button> 
      </Link>

      <h1 style={{color:"white", alignSelf:"center"}}>{(lastDate >= today ? "Még tudsz jelentkezni!" : 
      "Sajnos a jelentkezési idő lejárt " + ((lastDate.getTime() - today.getTime()) / (1000 * 3600 * 24) * (-1)).toFixed(0) + " napja."  )}</h1>
      
      <div className='app__account-forms-container'>

        <div className='app__account-login'>
          <h2 style={{color:"white",marginTop:"5%"}}>Bejelentkezés</h2>

          <form name="login" onSubmit={handleLoginSubmit}>
            <input className="p-text" type="text" placeholder="E-mail cím" name="email"/>
            <input className="p-text" type="password" placeholder="Jelszó" name="passwd"/>
            <input  className="submit-button" type="submit" value="Bejelentkezés"  style={{marginTop:"8%"}}/>
          </form>
        </div>

        <div className='app__account-register'>
        <form name="register" onSubmit={handleRegisterSubmit}>
          <h2 style={{color:"white"}}>Regisztráció</h2>
            <div style={{display:"flex", width:"100%"}} className='hor-text'>
              <input className="p-text" type="text" placeholder="Teljes Név" name="name" required/>
              <input className="p-text" type="text" placeholder="E-mail cím" name="email" required/>
            </div>
            
            <div style={{display:"flex", width:"100%"}} className='hor-text'>
              <input className="p-text" type="password" placeholder="Jelszó" name="passwd" required/>
              <input className="p-text" type="password" placeholder="Jelszó megerősítése" name="passwd1" required/>
            </div>

            <div style={{display:"flex", width:"100%"}} className='hor-text'>
              <input className="p-text" type="text" placeholder="Megye Település Utca Házszám" name="address" id="address" required/>
              <input className="p-text" type="text" placeholder="Irányítószám" name="nr" required/>
            </div>

            <div className='horizontal-container'>
              <label for="school">Iskola:</label>
              <select name="schools" id="schools" required>
                <option value="SzekelyMiko">Székely Mikó Kollégium</option>
                <option Value="MikesKelemen">Mikes Kelemen Liceum</option>
                <option Value="BerdeAron">Berde Áron</option>
                <option value="MihaiViteazu">Mihai Viteazul</option>
              </select>
            </div>

            <div className='horizontal-container' style={{marginTop:"4%"}}>
              <label for="class" style={{marginRight:"8%"}}>Osztály:</label>
              <label for="9">X</label>
              <input type="radio" id="9" name="class" value="10" style={{marginRight:"15%"}} required/>
              <label for="10">XI</label>
              <input type="radio" id="10" name="class" value="11" style={{marginRight:"15%"}} required/>
              <label for="11">XII</label>
              <input type="radio" id="11" name="class" value="12" style={{marginRight:"15%"}} required/>
            </div>

            <div className='horizontal-container' style={{marginTop:"4%"}}>
              <label for="team">Csapat:</label>
              <select name="team" id="team" required>
                <option value="grp1">PI</option>
                <option Value="grp2">Egy Csapat</option>
                <option Value="grp3">Winners</option>
                <option value="grp4">No. 1</option>
              </select>
            </div>

            <div className='horizontal-container' style={{marginTop:"4%"}}>
              <input type="checkbox" id="rules" name="rules" value="true" style={{marginRight:"1%"}} required/>
              <label for="team" id="feltetel">Elfogadom a felhasználói feltételeket, és tudomásul vettem a verseny szabályzatát.</label>
            </div>

            <input  className="submit-button" type="submit" value="Submit"  style={{marginTop:"2%"}}/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Account;
