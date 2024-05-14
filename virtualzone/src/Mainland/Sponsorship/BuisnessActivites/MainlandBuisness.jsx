import React from 'react'
import './MainlandBuisness.css'
import Form from '../../../Form2/Form2'
function MainlandBuisness() {
  return (
    <div>
    <div className='mainland-buisness'>
    <div style={{display:"inline-block", textAlign:"left",}}>
      <h2 style={{fontSize:"20px",color:"red"}}>MAINLAND ACTIVITIES</h2>
      <h1 style={{width:"15em",marginTop:"-10px",fontSize:"40px"}}>CHOOSING MAINLAND BUSINESS ACTIVITIES</h1>
      <p style={{width:"25em",fontWeight:"300"}}>Setting up a mainland company gives you the benefit of choosing from over 3,000 business activities. Let us guide you through your mainland business setup.</p>
      <button sytle={{justifyItems: "left", textAlign:"left"}}>Get Started Today</button>
      <br /> <br />
    </div>
    <div>
      <img src={`https://cdn-dhfkh.nitrocdn.com/thFNVEIVwFotvcnmaRVLYEpWIcytEzuw/assets/images/optimized/rev-b1ea362/virtuzone.com/wp-content/uploads/2021/10/Mainland-Activities-2-min-1.png`} alt="man" />
    </div>
  </div>
  
  <div style={{justifyContent:"center",textAlign:"center",marginTop:"6em"}}>
      <div style={{display:"inline-block"}}>
        <h1>Mainland Business Activities</h1>
        <p><a href="/">Home > </a>Mainland Activities</p>
       </div>
   </div>
   
   <div className="mainland-buisness-main">
        <div>
           <img src={`https://cdn-dhfkh.nitrocdn.com/thFNVEIVwFotvcnmaRVLYEpWIcytEzuw/assets/images/optimized/rev-b1ea362/virtuzone.com/wp-content/uploads/2021/09/freezone_overview.png`} alt='man' />
        </div>

        <div className='mainland-buisness-main-para'>
            <p>A mainland company licence gives you access to thousands of business activities. Activities can at times even be bundled if your business idea crosses into two defined licences. With certain activities, special approval is required from the relevant government department and Virtuzone will guide you here from commencement to completion.</p>
        </div>
      </div>
    
      <h1>Popular Mainland Activities</h1>
    <div className="mainland-buisness-activities"> 
        <div>
           <h2>Activity</h2>
           <ul>
            <li>Gym</li>
            <li>Hospitality</li>
            <li>Import-Export</li>
            <li>Retail</li>
            <li>Event and Entertainment</li>
            <li>Manufacturing</li>
            <li>Healthcare</li>
           </ul>
        </div>

        <div>
            <h2>Description</h2>
            <ul>
            <li>Gyms or gymnasiums and health clubs can be formed as either professional licences or LLCs.</li>
            <li>Hospitality licences cover food and beverage activities such as cafes, bars and restaurants.</li>
            <li>These licences enable you to trade freely with mainland clients without having to use distributors.</li>
            <li>Retail licences cover shops in malls and other outlets and include everything from clothing to books stores.</li>
            <li>Licences include event management and event planning for private and public events.</li>
            <li>Manufacturing licences cover the manufacture of goods in the UAE for distribution locally and globally</li>
            <li>Healthcare licences require special approval from the Dubai Heath Authority.</li>
            </ul>
        </div>
    </div>
    <Form />
  </div>
  )
}

export default MainlandBuisness