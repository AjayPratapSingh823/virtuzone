import React from 'react'
import './Compliance.css'

function ComplianceService() {
  return (
    <div>
      <div className='compliances-service'>
       <div style={{display:"inline-block", textAlign:"left",marginTop:"2em"}}>
      <h2 style={{fontSize:"20px",color:"white"}}>MANDATORY COMPLIANCE SERVICES</h2>
      <h1 style={{width:"15em",marginTop:"-10px",fontSize:"40px"}}>LET US GUIDE YOU THROUGH COMPLEX BUSINESS REGULATIONS</h1>
      <p style={{width:"25em",fontWeight:"400",fontSize:"18px"}}>Our experts will help you understand and comply with various regulatory requirements for businesses.</p>
      <button sytle={{justifyItems: "left", textAlign:"left",marginTop:""}}>Get Started Today</button>
    </div>
    <div>
      <img src={`https://cdn-dhfkh.nitrocdn.com/thFNVEIVwFotvcnmaRVLYEpWIcytEzuw/assets/images/optimized/rev-b1ea362/virtuzone.com/wp-content/uploads/2022/02/Compliance-Services.png`} alt="man" />
    </div>
  </div>

  <div className='compliances-service-about'>
   <div className='compliances-service-about-inside'>
    <p><a href="/">Home > </a><a href="/">Corporate Services > </a>Accounting Service</p>
    <p>We have a dedicated team of experts who will guide you through the UAE’s regulatory requirements for businesses, including Economic Substance Regulations (ESR) and Ultimate Beneficial Owner (UBO).</p>
  </div>
  </div>

  <h1 style={{marginTop:"5em"}}>Our mandatory compliances services</h1>
  
   <div style={{marginTop:"5em"}}>
    <div className='mandatory-compliances-services-inside'>
      <img src={`https://cdn-dhfkh.nitrocdn.com/thFNVEIVwFotvcnmaRVLYEpWIcytEzuw/assets/images/optimized/rev-b1ea362/virtuzone.com/wp-content/uploads/2022/02/ESR.svg`} alt="folder" />
      <div className='mandatory-compliances-services-content'>
        <h1>ESR</h1>
        <p>The Economic Substance Regulations require that all UAE onshore and free zone companies and other UAE businesses must maintain an adequate economic presence in the UAE relative to the activities they undertake.</p>
        <p>Our team will review your activities and nature of business to assess if you meet the Economic Substance Test.</p>
        <p>If you do, then we will proceed with filing the ES Notification and ES Report on your behalf.</p>
      </div>
    </div>

    <div className='mandatory-compliances-services-inside'>
      <img src={`https://cdn-dhfkh.nitrocdn.com/thFNVEIVwFotvcnmaRVLYEpWIcytEzuw/assets/images/optimized/rev-b1ea362/virtuzone.com/wp-content/uploads/2022/02/ESR.svg`} alt="folder" />
      <div className='mandatory-compliances-services-content'>
        <h1>UBO</h1>
        <p>The UAE requires the registration of Ultimate Beneficial Owners to ensure transparency across all mainland and free zone companies operating in the country. The exceptions to this rule are businesses licenced in certain jurisdictions and entities directly or indirectly owned by the Government.</p>
        <p>Our team will assist you in completing your UBO declaration to ensure you are fully compliant with the UAE’s laws.</p>
      </div>
  </div>
  </div>

    </div>
  )
}

export default ComplianceService