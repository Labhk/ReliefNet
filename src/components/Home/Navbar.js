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
            <button className="logout" onClick={handleLogout}>
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
      <>
        <div class ="nav">
        <Link to="/"><button  class = "title">ReliefNet</button></Link>
        <div className='right'>
        <Link to="/add">   
            <button className="register">
                Be a Supplier
            </button>
            </Link>
            {loginStatus()}
            

        </div>
        
        </div>
      
      </>
  )
}

export default Navbar
