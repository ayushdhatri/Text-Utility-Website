import React, { useState } from "react";
import PropTypes from 'prop-types';



export default function Navbar(props)
{
   const[mystyle, setMyStyle]=useState({
      
      backgroundColor:'lightcyan'
   })
   const[text, setText]=useState('Enable Dark Mode');
   const[mystyle2, setMyStyle2]=useState({
     color:'black'})
   const changemode=()=>{
    if(props.Mode=='light')
    {
        setText('Enable Light Mode');

        setMyStyle({
            backgroundColor:'black'

        })
        setMyStyle2({
            color:'white'
        })
    }
    else
    {
        setText('Enable Dark Mode');
        setMyStyle({
            backgroundColor:'lightcyan'
        })
        setMyStyle2({
            color:'black'
        })

    }
    {props.ToogleMode()};

   }
   
    return (
        <div className="navbar_cont" style={mystyle}>
        <ul className="nav nav-pills" style={mystyle}>
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">TEXT UTIL</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">About Us</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Options</a>
            </li>
            
        </ul>
        <div className="form-check form-switch my-2">
            <input className="form-check-input" type="checkbox" role="switch" onClick={changemode} id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={mystyle2}>{text}</label>
        </div>


        </div>
    )
}