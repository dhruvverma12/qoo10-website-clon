import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar'
import '../styles/Header.css'

const Header = () => {
  return (
    <>
        <div className='top-head'>
          <Link to="/login">Sign in / Register</Link>
        </div>
        <Navbar/>
        <div className='child-div-container'>
            <div className="child-div">Q-launge</div>
            <div className="child-div">Time Sale</div>
            <div className="child-div">Daily Deal</div>
            <div className="child-div">Global Group Buy</div>
            <div className="child-div">Wholesale Market</div>
            <div className="child-div">Gift Shop</div>
            <div className="child-div">Roulette Chance</div>
            <div className="child-div">Qprime Shop</div>
            <div className="child-div">Qdelivery</div>
            <div className="child-div">Camping Mall</div>
            <div className="child-div">Qcafe</div>
            <div className="child-div">Wintermall</div>
        </div>
    </>
  )
}

export default Header