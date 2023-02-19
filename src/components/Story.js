import React from 'react'
import "./Story.css"

import { Link } from 'react-router-dom'

function Story() {
    return (
      <>
        
        <div class = "Story"> 
          <h1 class = "Story_head">OUR STORY</h1>
          <img class = "Story_img" src="https://i.ibb.co/LzmLFyZ/Storyboard-amico.png" alt="Storyboard-amico" border="0"/>
          <p class="Story_content">Our inspiration for creating this webpage comes from the people of Turkey who have demonstrated the power of community and solidarity during times of crisis. In the face of natural disaster, the people of Turkey have come together to help those in need. However, relief efforts are often hindered by an unequal distribution of aid. That's why We created this webpage to connect relief camps and share resources in a more efficient and equitable way. By coming together and supporting each other, we can make a meaningful difference in the lives of those affected by crisis.</p>
        </div>
      </>
    )
  }
  
  export default Story;
