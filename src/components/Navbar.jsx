import { Link , NavLink } from "react-router-dom";
import { links } from "../data";
import Logo from"../images/logo.png";
import {HiBars3CenterLeft} from "react-icons/hi2"
import {IoClose} from "react-icons/io5"
import { useState } from "react";


const Navbar = () => {
    const [isNavShowing,setIsNavShowing]=useState(false)
    //function show ul and hide
    function showOrHide (){
        setIsNavShowing(prev => !prev)
    }
  return (
    <nav className="fixed-top">
        <div className="container nav__container">
            <Link to='/'className="logo" onClick={()=>setIsNavShowing(false)}> <img src={Logo} alt="Nav Logo" /></Link>
            <ul className={`nav__links ${isNavShowing ? 'show_nav' : 'hide_nav'} `}>
                {links.map(({name,path},index)=>(
                    <li key={index}>
                        <NavLink to={path} className={({isActive})=>isActive  ? 'active-nav' : ''} onClick={()=>showOrHide()}>{name}</NavLink>
                    </li>
                ))}
            </ul>
            <button className="nav__toggle-btn" onClick={()=>showOrHide()} >
                {isNavShowing ? <IoClose/> :<HiBars3CenterLeft/>}
            </button>
        </div>
    </nav>
  )
}

export default Navbar