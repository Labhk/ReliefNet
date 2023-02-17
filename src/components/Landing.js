import React from 'react'
import "./Landing.css"

import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div class="LandingPage">
        <div class="content">
            <h1 class="content_Landing_h">Connecting <br/>Relief Camps <br/>in Crisis</h1>
            <p>ReliefNet connects relief camps during times of<br/> crisis, making sure the most afftected people receive<br/>help when they need it the most.</p>
        </div>
        <div>

        <img class="Landing_img" src="https://i.ibb.co/zngdCTK/Landingpage-donation.png" alt="My-project" border="0"/>
       
        </div>
       
    </div>
  )
}

export default Landing
