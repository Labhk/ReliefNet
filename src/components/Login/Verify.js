import React,{useEffect, useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import Navbar from '../Home/Navbar';
import './Login.css';

const otp = Math.floor(1000 + Math.random() * 9000)

function Verify() {
    const url = "http://localhost:5000/api/auth/otp";
    const [inotp, setInotp] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    let email = sessionStorage.getItem('email')
    let jsondata = {
        otp: otp,
        email: email

    }
    console.log(otp,inotp)


    useEffect(() => {
        fetch(url,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(jsondata)
        })

    })
    

    

    const handleChange = (e) => {
        
        setInotp(e.target.value);
    }

    const handleSubmit = () => {
        if(inotp == otp){
            navigate('/')
        }else{
            setMessage("Incorrect Code!!!")
            navigate('/verify')
        }
    }


    return (
        <>  
            <Navbar/>
            <div className='container' align="center">
                <header>Email Verification</header>
                <h3>~ Verification Code has been send to Your email ~</h3>
                {message}
                <div className='enterotp'>
                <input type='text' name="inotp" onChange={handleChange} placeholder="Enter your Code"/>
                </div>
                
                <button className="done" onClick={handleSubmit}>Confirm</button>
                <Link to="/login"><button className="done">Try another email</button></Link>
            </div>
            
        </>
    )
}

export default Verify