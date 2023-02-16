import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav class ="nav">
         <a href="https://ibb.co/0skZ9jg"><img class="logo" src="https://i.ibb.co/3RwWFyD/icon-removebg.png" alt="icon-removebg" border="0"/></a>
        <h1 class = "comNam">ReliefNet</h1>
        <div className="log_reg">
            <div className="login">
                Log In
            </div>
            <div className="login">
                Register
            </div>
        </div>
    </nav>
  )
}

export default Navbar
