import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {

  const handleLogout = () => {
    sessionStorage.removeItem('email')
  }

  const loginStatus = () => {
    if(sessionStorage.getItem('email') !== null){
      return(
        <Link to="/">
            <button className="login" onClick={handleLogout}>
                Logout
            </button>
        </Link>
      )
    }else{
      return(
        <Link to="/login">
            <button className="login">
                Login
            </button>
        </Link>
      )
    }

  }

  return (
    <div class ="nav">
        <img class="logo" src="images\icon-removebg.png" alt="icon-removebg" border="0"/>
        <Link to="/"><span  class = "comNam">ReliefNet</span></Link>

        {/* <div class="search-box">
          <form action="">
            <input type="text" name="search" id="srch" placeholder = "Search"/>
            <button type="submit"><i class="fa fa-search"></i></button>

          </form>
        </div> */}
        {loginStatus()}
         <Link to="/add">   
            <button className="register">
                Be a Suppliers
            </button>
            </Link>
    </div>
  )
}

export default Navbar
