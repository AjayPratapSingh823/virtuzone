import React from 'react'
import './LegalService.css'

function LegalService() {
  return (
    <div>
       <div className='legal-services'>
       <div style={{display:"inline-block", textAlign:"left"}}>
      <h2 style={{fontSize:"20px",color:"white"}}>IT SERVICES</h2>
      <h1 style={{width:"15em",marginTop:"-10px",fontSize:"40px"}}>TAKE YOUR BUSINESS ONLINE AND ENJOY 24/7 TECH SUPPORT</h1>
      <p style={{width:"25em",fontWeight:"400",fontSize:"18px"}}>Our team will set up your web hosting, business email and domain name, and will provide you with 24/7 tech support.</p>
      <button sytle={{justifyItems: "left", textAlign:"left"}}>Get Started Today</button>
    </div>
    <div>
      <img src={`https://cdn-dhfkh.nitrocdn.com/thFNVEIVwFotvcnmaRVLYEpWIcytEzuw/assets/images/optimized/rev-b1ea362/virtuzone.com/wp-content/uploads/2022/02/Legal-Services-1.png`} alt="man" />
    </div>
       </div>
    </div>
  )
}

export default LegalService