import React, { useState } from 'react'
import Navbar from '../Home/Navbar';
import { useNavigate } from 'react-router-dom';
import './supply.css'

const url = "https://loginapi-production.up.railway.app/api/auth/sendreq";

function SendRequest() {
    const navigate = new useNavigate()

    const [content, setContent] = useState('')
    let email = sessionStorage.getItem('supplerEmail');
    let useremail = sessionStorage.getItem('email');

    

    const handleChange = (e) => {
        setContent(e.target.value);
    }

    const handleSend = (e) => {
        let data = {
            content: content,
            email: email,
            useremail: useremail
        }
        fetch(url,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        
        .then(alert('Your Request has been Sent'))
        .then(navigate('/'))
    }


    return (
            <>
                <Navbar/>
                <div className='Req' align="center">
                    <h1>Request for Supplies</h1>
                    <h3>~ Send Supplier a Message ~</h3>
                    <input type="text"  name='content' onChange={handleChange}/>
                    <div className='send'><button onClick={handleSend}>Send</button></div>
                    
                </div>
                
            </>
    )
}

export default SendRequest