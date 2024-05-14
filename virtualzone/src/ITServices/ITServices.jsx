import React from 'react'
import './ITServices.css'
function ITServices() {
  return (
    <div>
       <div className='it-services'>
       <div style={{display:"inline-block", textAlign:"left"}}>
      <h2 style={{fontSize:"20px",color:"white"}}>IT SERVICES</h2>
      <h1 style={{width:"15em",marginTop:"-10px",fontSize:"40px"}}>TAKE YOUR BUSINESS ONLINE AND ENJOY 24/7 TECH SUPPORT</h1>
      <p style={{width:"25em",fontWeight:"400",fontSize:"18px"}}>Our team will set up your web hosting, business email and domain name, and will provide you with 24/7 tech support.</p>
      <button sytle={{justifyItems: "left", textAlign:"left"}}>Get Started Today</button>
    </div>
    <div>
      <img src={`https://cdn-dhfkh.nitrocdn.com/thFNVEIVwFotvcnmaRVLYEpWIcytEzuw/assets/images/optimized/rev-b1ea362/virtuzone.com/wp-content/uploads/2022/02/IT-Service.png`} alt="man" />
    </div>
  </div>

  <div className='it-service'>
   <div className='it-service-inside'>
    <p><a href="/">Home > </a><a href="/">Corporate Services > </a>Accounting Service</p>
    <p>Our IT services are designed to get you online fast. From helping you choose and register a domain name, to setting up your web hosting and business email, our dedicated in-house IT team will take care of your core IT requirements, so you can focus on running your business.</p>
  </div>
  </div>

  <h1 style={{marginTop:"5em",marginBottom:"3em"}}>OUR IT SERVICES</h1>
   <div className="it-services-consultancy">
    <div className="it-services-consultancy-options">
       <h1>Domain name and DNS management</h1>
       <p>Our IT experts will help you secure a domain name, handle your Domain Name System (DNS) and integrate an SSL certificate into your website.</p>

       <h1>Web hosting</h1>
       <p>Ensure your website runs optimally with a Linux-based platform, 3GB web storage space with 4GB bandwidth per month, and a UAE-based data centre for faster content delivery.</p>

    </div>

    <div className="it-services-consultancy-options">
    <h1>Office 365 subscription</h1>
       <p>Stay up-to-date with the latest version of Microsoft Office at no additional cost, while ensuring your team’s efficiency and productivity.</p>

       <h1>24/7 tech support</h1>
       <p>Make sure your business is never offline with our 24/7 tech support.</p>
    </div>

    <div className="it-services-consultancy-options">
    <h1>Hosted exchange mailbox</h1>
       <p>We’ll set up your business mail, complete with 50GB capacity and unlimited distribution/alias email addresses.</p>
       <p>Our mailbox service uses Activ Sync technology to ensure your emails are synced across different devices, and is equipped with anti-spam and anti-virus filters to safeguard you from online threats.</p>
    </div>
    </div>
    

  {/* <div className=></div> */}


    </div>
  )
}

export default ITServices