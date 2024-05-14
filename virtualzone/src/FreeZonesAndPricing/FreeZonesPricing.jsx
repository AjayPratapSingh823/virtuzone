import React from 'react'
import './FreeZonespricing.css'
import Footer from '../Footer/Footer'
import Form from '../Form/Form'

function FreeZonesPricing() {
  return (
    <div>
        <div className='free-zones-pricing'>
        <div style={{display:"inline-block", textAlign:"left",marginTop:"2em"}}>
          <h2 style={{fontSize:"20px",color:"red"}}>LOCATIONS AND PRICING</h2>
          <h1 style={{width:"15em",marginTop:"-10px",fontSize:"40px"}}>FREE ZONE LOCATIONS<br /> & COSTS</h1>
          <p style={{width:"25em",fontWeight:"400",fontSize:"18px"}}>Looking for information on the cost of free zone<br/>locations? We have listed down the top free zones in the<br/>UAE and their costs to give you an idea.</p>
          <button sytle={{justifyItems: "left", textAlign:"left"}}>Get Started Today</button>
          <br /> <br />
          <a href="">Calcualte your setup cost</a>
        </div>
        <div>
          <img src={`https://cdn-dhfkh.nitrocdn.com/thFNVEIVwFotvcnmaRVLYEpWIcytEzuw/assets/images/optimized/rev-870749a/virtuzone.com/wp-content/uploads/2021/09/Locations-Pricing.png`} alt="man" />
        </div>
      </div>
     
      <div style={{ marginTop: "3em" }}>
        <h1>Pricing</h1>
        <p style={{fontSize:"20px"}}><a style={{textDecoration:"none", color:"red"}}href="/"> Home > </a>Free Zone License Locations and Pricing</p>
      </div>

      <div className='free-zone-pricing-main'>
        <div>
            <img src={`https://cdn-dhfkh.nitrocdn.com/thFNVEIVwFotvcnmaRVLYEpWIcytEzuw/assets/images/optimized/rev-870749a/virtuzone.com/wp-content/uploads/2021/09/freezone_free-zones-and-pricing.png`} alt="man" />
        </div>

        <div>
          <p>Virtuzone assists with company incorporation across more than 50 UAE <br /> free zones. There’s no doubt a lot of information to review and much to<br /> consider when making the decision on which free zone is best suited to<br /> your specific business requirements, including location, price, business<br />
           type, flexi-desk or office space options, auditing and bookkeeping and<br /> share capital requirements, and much more.<br />

That’s where the Virtuzone team comes in, walking you through it step-<br /> by-step, steering you in the right direction, saving you money,<br /> and ultimately making the entire experience a stress-free one.</p>
        </div>
      </div>
     
      <div className='free-zone-pricing-cost'>
      <button>Get started Today</button><br /><br />
      <a href="">Calcualte your cost</a>
      </div>

      <Form />
      <Footer />
    </div>
  )
}

export default FreeZonesPricing