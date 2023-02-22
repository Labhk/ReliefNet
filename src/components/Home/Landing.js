import React from 'react'
import "./Landing.css"

import { Link } from 'react-router-dom';

const url = "http://localhost:5000/api/auth/join";

const Landing = () => {

  const handleJoin = () => {
    if (sessionStorage.getItem('email') === null){
      alert('First Login to Join our Community')
    }else{
      let email = sessionStorage.getItem('email')
      fetch(url,{
        method: 'POST',
        headers:{
            'accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({"email":email})
      })
    }
    
  
  }
  return (
    <>
    <div class="LandingPage" align="center">
            <div className='Heading'><h class="content_Landing_h">Connecting Relief Camps <br/>in Crisis</h></div>
            <p class ="content">ReliefNet connects relief camps during times of crisis, making sure the most afftected people receive help when they need it the most.
            </p>
            <Link to="/suppliers" ><button className='sup'>Suppliers</button></Link>
        {/* <img class="Landing_img" src="https://i.ibb.co/zngdCTK/Landingpage-donation.png" alt="My-project" border="0"/> */}

    </div>
    <div class = "Story"> 
    <div className='Story_text'><h1 class = "Story_head">OUR STORY</h1>
          
          <p class="Story_content">Our inspiration for creating this webpage comes from the people of Turkey who have demonstrated the power of community and solidarity during times of crisis. In the face of natural disaster, the people of Turkey have come together to help those in need. However, relief efforts are often hindered by an unequal distribution of aid. That's why We created this webpage to connect relief camps and share resources in a more efficient and equitable way. </p>
          </div>
          <img class = "Story_img" src="https://i.ibb.co/LzmLFyZ/Storyboard-amico.png" alt="Storyboard-amico" border="0"/>
    </div>
    <div class = "Mission"> 
    <img src="https://i.ibb.co/2nD40Wy/na-feb-25-prev-ui.png" alt="na-feb-25-prev-ui" border="0"/>
    <div className='Mission_text'>
      <h1 class="head">Join Our Community</h1>
      <p class="content2" >Our Community Goal is to provide relief <br/>to as many as people possible</p>
      <button onClick={handleJoin} align="center">Join us</button>
    </div>
      
    </div>
    </>
  )
}

export default Landing
