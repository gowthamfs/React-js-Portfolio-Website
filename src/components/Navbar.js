import "./NavbarStyles.css";
import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";




const Navbar = () => { 

    const [click, setClick] = useState(false); 
    const clickFun = () => setClick(!click); 

    const [color, setColor] = useState(false)
    const changeColor = () =>{
        if(window.scrollY >= 100){
            setColor(true)
        }else{
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)

    return (
        <div className= {color ? "header header-bg" : "header" } >
            <Link to="/">
                <h1>Portfolio.</h1>
            </Link> 
           <ul className = {click ? "nav-menu active" : "nav-menu"}> 
            <Link to="/">
                <li>Home</li>
            </Link>
            <Link to="/Project">
                <li>Project</li>
            </Link>
            <Link to="/About">
                <li>About</li>
            </Link>
            <Link to="/Contact">
                <li>Contact</li>
            </Link>
           </ul>

           <div className="humburger" onClick={clickFun}> 
           {click ? (<FaTimes size={25} style={{color:"#fff"}} />) : (<FaBars size={25} style={{color:"#fff"}} />)}
           </div>

        </div>

    );
};

export default Navbar;

