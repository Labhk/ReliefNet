import React,{useEffect, useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import Navbar from '../Home/Navbar';

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
            <hr/>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
      
            <h1>Email Verification</h1>
            <h3>Verification Code has been send to Your email</h3>
            {message}
            <input type='text' name="inotp" onChange={handleChange} placeholder="Enter your Code"/>
            <button onClick={handleSubmit}>Confirm</button>
            <Link to="/login"><button>try another email</button></Link>
        </>
    )
}

export default Verify