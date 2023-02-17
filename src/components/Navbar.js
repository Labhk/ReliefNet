import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav class ="nav">
        <img class="logo" src="images\icon-removebg.png" alt="icon-removebg" border="0"/>
        <span  class = "comNam">ReliefNet</span>

        <div class="search-box">
          <form action="">
            <input type="text" name="search" id="srch" placeholder = "Search"/>
            <button type="submit"><i class="fa fa-search"></i></button>

          </form>
        </div>
        <div className="log_reg">
            <button className="login">
                Log In
            </button>
            <button className="register">
                Register
            </button>
        </div>
    </nav>
  )
}

export default Navbar
