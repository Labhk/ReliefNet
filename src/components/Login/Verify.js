import React,{useEffect, useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import Navbar from '../Home/Navbar';
import './Login.css';

//const url = "http://localhost:5000/api/auth/otp";
const url = "https://loginapi-production.up.railway.app/api/auth/otp";

function Verify() {
    
    const [inotp, setInotp] = useState();
    const [otp, setOtp] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    let email = sessionStorage.getItem('email')



    useEffect(() => {
        fetch(url,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({"email":email})
            
        })
        .then((res) => res.json())
        .then((data) => setOtp(data.verify))
    })
    

    

    const handleChange = (e) => {
        
        setInotp(e.target.value);
    }

    const handleSubmit = () => {
        console.log(otp, inotp)
        if(inotp === String(otp)){
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