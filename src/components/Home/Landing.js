import React from 'react'
import "./Landing.css"

import { Link } from 'react-router-dom';

const url = "https://loginapi-production.up.railway.app/api/auth/join";

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
    <div  className="LandingPage" align="center">
            <div className='Heading'><h1  className="content_Landing_h">Bringing Relief Where  <br/>It's Needed</h1></div>
            <p  className ="content">ReliefNet provides a platform for users in need of relief supplies and those willing to support their community by providing aid. 
            </p>
            <Link to="/suppliers" ><button className='sup'>Suppliers</button></Link>
        {/* <img  className="Landing_img" src="https://i.ibb.co/zngdCTK/Landingpage-donation.png" alt="My-project" border="0"/> */}

    </div>
    <div  className = "Story"> 
    <div className='Story_text'><h1  className = "Story_head">OUR STORY</h1>
          
          <p  className="Story_content">Our inspiration for creating this website comes from the people of the world, who have demonstrated the power of community and solidarity during times of crisis. In the face of natural disasters, pandemics, and other challenges, people have come together to help those who are in need.<br/> However, relief efforts are often hindered by a lack of knowledge and networks. That's why we created this webpage: to connect people in need with those who want to help, creating a network of support and compassion. By bringing together those who need help and those who want to give it, we hope to make a meaningful difference in people's lives. </p>
          </div>
          <img  className= "Story_img" src="https://i.ibb.co/LzmLFyZ/Storyboard-amico.png" alt="Storyboard-amico" border="0"/>
    </div>
    <div  className= "Mission"> 
    <img src="https://i.ibb.co/2nD40Wy/na-feb-25-prev-ui.png" alt="na-feb-25-prev-ui" border="0"/>
    <div className='Mission_text'>
      <h1  className="head">Join Our Community</h1>

      <div  className="content2" >Our community goal is to provide relief to as many people as possible, and we welcome any help to achieve this objective. If you share our commitment to helping others and making a positive impact, we invite you to join us.</div>
      <div className='joinButton'>
      <button onClick={handleJoin} align="center">Join us</button>
      </div>
    </div>
      
    </div>
    </>
  )
}

export default Landing;
