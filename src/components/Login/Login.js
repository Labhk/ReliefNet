import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Home/Navbar';

const url = "http://localhost:5000/api/auth/login";
const Login = () => {

  const navigate = useNavigate();



  const [details, setDetails] = useState({
      email:"",
      password:"",
  })
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    const {name, value} = e.target
    setDetails((prev) => {
      return {...prev, [name]: value}
    })
  }


  const handleSubmit = async (e) => {
    sessionStorage.setItem('email',details.email)
    e.preventDefault();
    fetch(url,{
      method: 'POST',
      headers:{
          'accept':'application/json',
          'Content-Type':'application/json'
      },
      body:JSON.stringify(details)
    })
    .then((res) => res.json())
    .then((data) => {
        if(data.auth === false){
            setMessage(data.token)
        }
        else{
            sessionStorage.setItem('ltk',data.token)
            navigate(`/${data.auth}`)
            
        }
    })
    
  }


  return (
    <>
      <Navbar/>
      <h1>{message}</h1>
      <div class="container" style={{fontSize:"30px"}} align="center">
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <header >Login</header>
      <form >
        <div class="field email-field">
          <div class="input-field" >
            <input style={{fontSize:"20px"}} 
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              class="email" />
          </div>
        </div>
        <div class="field create-password">
          <div class="input-field">
            <input style={{fontSize:"20px"}}
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={handleChange}
              class="password"
            />
          </div>
        </div>
        <div class="button" onClick={handleSubmit}>
          <input style={{fontSize:"20px"}} type="submit" value="Login" />
        </div>
      </form>
      </div>
    </>
  )
}

export default Login