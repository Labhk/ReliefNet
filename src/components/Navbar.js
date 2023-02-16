import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav class ="nav">
        <img class="logo" src="images\icon-removebg.png" alt="icon-removebg" border="0"/>
        <span  class = "comNam">ReliefNet</span>
        <div className="log_reg">
            <button className="login">
                Log In
            </button>
            <button className="login">
                Register
            </button>
        </div>
    </nav>
  )
}

export default Navbar
