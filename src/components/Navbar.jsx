import React from 'react'
import '../styles/Navbar.css'
import logo from '../assets/logo.jpg';
import { AiOutlineUser } from "react-icons/ai";
import { LuShoppingCart } from "react-icons/lu";
import { MdMailOutline } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { BsShare } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className='nav'>
        <div className="left-div"><img src={logo} alt="Logo" /></div>
        <div className="mid-div">
            <input type="text" placeholder='Enter Keyword' className='search-input' />
        </div>
        <div className="right-div">
            <div className="div"><AiOutlineUser /><p>My Qoo10</p></div>
            <div className="div"><LuShoppingCart /><p>Cart</p></div>
            <div className="div"><MdMailOutline /><p>Qpost</p></div>
            <div className="div"><IoIosHelpCircleOutline /><p>Help</p></div>
            <div className="div share" ><BsShare /><p>Share</p></div>
        </div>
    </div>
  )
}

export default Navbar