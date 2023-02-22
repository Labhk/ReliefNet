import React, { useState } from 'react'
import Navbar from '../Home/Navbar';
import { useNavigate } from 'react-router-dom';

const url = "http://localhost:5000/api/auth/sendreq";

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
                <hr/>
                <hr/>
                <hr/>
                <hr/>
                <hr/>
                <hr/>
                <h1>Request for Supplies</h1>
                <h3>Send Supplier a Message </h3>
                <input type="text" placeholder='Type Here' name='content' onChange={handleChange}/>
                <button onClick={handleSend}>Send</button>
            </>
    )
}

export default SendRequest