import React from 'react'
import './FreeZoneRegister.css'
import Footer from '../Footer/Footer'
import Form from '../Form/Form'

function FreeZoneRegister() {
  return (
    <div>
         <div className='free-zone-registeration'>
        <div style={{ marginTop: "3em" ,marginBottom:"5em"}}>
          <h2>HOW TO REGISTER YOUR COMPANY</h2>
          <h1>COMPANY REGISTRATION<br />IN DUBAI</h1>
          <p>Although Company Registration in the UAE can differ depending on<br/> each jurisdiction, this step-by-step guide shows you the key steps<br/> involved.</p>
          <button sytle={{justifyItems: "left", textAlign:"left"}}>Get Started Today</button>
          <br /> <br />
          <a href="">Calcualte your setup costs</a>
        </div>
        <div>
          <img src={`https://cdn-dhfkh.nitrocdn.com/thFNVEIVwFotvcnmaRVLYEpWIcytEzuw/assets/images/optimized/rev-870749a/virtuzone.com/wp-content/uploads/2021/09/3.-Registration-Process.png`} alt="man" />
        </div>
      </div>


      <div style={{ marginTop: "3em" }}>
        <h1>Your business venture starts with company<br />registration in Dubai</h1>
        <p style={{fontSize:"20px"}}><a style={{textDecoration:"none", color:"red"}}href="/"> Home > </a>Company Registration in Dubai & UAE</p>
      </div>
      

      <div className='free-zone-registration-main' style={{marginTop:"8em"}}>
        <div>
            <img src={`https://cdn-dhfkh.nitrocdn.com/thFNVEIVwFotvcnmaRVLYEpWIcytEzuw/assets/images/optimized/rev-870749a/virtuzone.com/wp-content/uploads/2021/09/Key_Steps_Desktop.svg`} alt="man" />
        </div>

        <div style={{textAlign:"left", fontSize:"large"}}>
          <p>At Virtuzone, we understand that launching a new business can be<br />challenging—particularly if you’re an overseas entrepreneur starting up in<br />a new country for the first time.</p>
          <p>That’s why we’re on hand to make registering your company in the UAE as<br />easy as possible. We’ll do all the heavy lifting for you, liaising with the<br />relevant government authorities and departments.</p>
          <p>Virtuzone covers all of the technical and administrative aspects of business<br />setup in Dubai—we’ll work with you to determine the most suitable trade
          <br />licence based on the business activities and services you wish to provide.<br />Finally, we’ll prepare all the relevant legal documents, assist with the visa
          <br />application process and provide corporate bank account opening<br />
          introductions.<br /></p>
           
        <p style={{fontStyle:"italic",backgroundColor:"aliceblue"}}>It is this multi-layered service that has made Virtuzone one of the leading
        <br />company formation specialists in the region and is the reason why
        <br />thousands of entrepreneurs have turned to us for support and guidance
        <br />with company formation in Dubai and the UAE.</p>
        </div>
      </div>

      <div className='free-zone-registration-get-started' style={{marginTop:"3em"}}>
      <button>Get started Today</button><br />
      <a href="">Calcualte your cost</a>
      </div>

      <div style={{marginTop:"3em"}}>
        <h1>Your Step-by-step Guide to Registering a Company in<br />Dubai and the UAE</h1>
      </div>

      <div className="free-zone-registration-process">
         <div className='free-zone-registration-process-points'>
            <p>The exact procedure for setting up a new business in the middle east
can seem complex, but by following a simple step-by-step process
with the right support, it is more straightforward than you might think.
            </p>

            <h1>Free Zone Vs. Mainland company
setup in Dubai</h1>
            <p>When setting up a company in Dubai you may choose between a free
zone company or a mainland company. Dubai has many free zones that
offer tax benefits to entrepreneurs and business owners and are
monitored by independent free zone authorities or entities. The Dubai
mainland is an economic zone monitored by the Department of
Economic Development. Free zones in Dubai offer 100% foreign
ownership, whilst mainland companies must have a local sponsor.</p>

            <p>There are many pros and cons to consider when choosing where to set
up your company in Dubai. Our expert team at Virtuzone will guide you</p>
<h1>The company registration process</h1>
<p>Here is a breif outline of company registration in Dubai</p>
<ol>
  <li>Determine the business activity of your company</li>
  <li>Work out if you need a local sponsor or not. (You will not need a local sponsor in free zones, but you will in mainland Dubai)</li>
  <li>Decide on a company structure for your new business</li>
  <li>Determine the trade name of your new business</li>
  <li>Gain initial approvals and external permits</li>
  <li>Decide on an office space to run your business from</li>
  <li>Finalise all fees associated with company registration</li>
  <li>Receive your trade licence</li>
</ol>
<p>These tasks may sound like hard work—and indeed it can be—but for us, not for you. Virtuzone’s comprehensive services mean you don’t have to give a second thought to the mechanics of the business setup process. Once it is underway, simply supply us with the relevant information about your company and we’ll do the rest.</p>
<p>With Virtuzone as your company setup partner, the company registration process in UAE is easy. The entire process can take as little as seven working days.</p>
         </div>
         <div>
            <img src={`https://cdn-dhfkh.nitrocdn.com/thFNVEIVwFotvcnmaRVLYEpWIcytEzuw/assets/images/optimized/rev-b1ea362/virtuzone.com/wp-content/uploads/2021/10/secondry-1.png`} alt="man"/>
         </div>
      </div>


      <Form />
      <Footer />

    </div>
  )
}

export default FreeZoneRegister