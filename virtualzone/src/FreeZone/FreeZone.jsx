import React from 'react';
import './FreeZone.css';
// import Form from '../Form/Form';
import Footer from '../Footer/Footer';
import Form from '../Form/Form';
function FreeZone() {
  return (
    <div>
      <div className='get-started'>
        <div style={{display:"inline-block", textAlign:"left",marginTop:"2em"}}>
          <h2 style={{fontSize:"20px",color:"white"}}>FREE ZONE COMPANY SETUP</h2>
          <h1 style={{width:"15em",marginTop:"-10px",fontSize:"40px"}}>Get YOUR FREE ZONE COMPANY RIGHT</h1>
          <p style={{width:"25em",fontWeight:"400",fontSize:"18px"}}>With over 50 free zones in the UAE, how do you know <br /> which one is best for you? Setting up in the right free zone <br /> will position your business for success.</p>
          <button sytle={{justifyItems: "left", textAlign:"left"}}>Get Started Today</button>
          <br /> <br />
          <a href="">Calculate Your Setup Cost</a>
        </div>
        <div>
          <img src={`https://cdn-dhfkh.nitrocdn.com/thFNVEIVwFotvcnmaRVLYEpWIcytEzuw/assets/images/optimized/rev-870749a/virtuzone.com/wp-content/uploads/2021/09/Free-Zone-Company-Setup-Overview.png`} alt="man" />
        </div>
      </div>

      <div style={{ marginTop: "3em" }}>
        <h1>Your UAE Free Zone Company Starts here</h1>
        <p style={{fontSize:"20px"}}><a style={{textDecoration:"none", color:"red"}}href="/"> Home > </a>Free Zone Compnay Setup</p>
      </div>

      <div className='free-main'>
        <div>
            <img src={`https://cdn-dhfkh.nitrocdn.com/thFNVEIVwFotvcnmaRVLYEpWIcytEzuw/assets/images/optimized/rev-870749a/virtuzone.com/wp-content/uploads/2021/09/freezone_overview.png`} alt="man" />
        </div>

        <div>
          <p>Virtuzone assists with company incorporation across more than 50 UAE <br /> free zones. There’s no doubt a lot of information to review and much to<br /> consider when making the decision on which free zone is best suited to<br /> your specific business requirements, including location, price, business<br />
           type, flexi-desk or office space options, auditing and bookkeeping and<br /> share capital requirements, and much more.<br />

That’s where the Virtuzone team comes in, walking you through it step-<br /> by-step, steering you in the right direction, saving you money,<br /> and ultimately making the entire experience a stress-free one.</p>
        </div>
      </div>

      <div className='main2'>
      <button>Get started Today</button><br />
      <a href="">Calcualte your cost</a>
      </div>

      <div style={{ marginTop: "6em" }}>
        <h1>Advantage of Setting up in a Free Zone</h1>
        <p>What are the main benefits to starting your company in a free zone and how do<br /> they each operate?</p>

        <div className='ownership'>
            <div className='ownership-benefit'>
                <h1>1.Retain Ownership</h1>
                <p>The main advantage offered by the UAE free zones is that foreign investors can retain 100% ownership of their businesses without the need for a local partner.</p>

                <h1>2. Business License</h1>
                <p>Some business categories require prior approvals from certain authorities. Contact us today for a free consultation. One of our experts will guide you through the necessary requirements to start your business.</p>
            </div>

            <div className='ownership-benefit'>
                <h1>3. Financial Incentives</h1>
                <p>Other financial incentives of free zones includes a 0% income tax rate, no customs duties levied on imports and exports, and the option to repatriate 100% of the profits from the business.</p>

                <h1>4. Sector-Specific</h1>
                <p>Another factor that can present fantastic opportunities to free zone companies is that many of the UAE free zones are sector specific. This gives its entrepreneurs ready access to a hub of knowledge and expertise from others within their field.</p>
            </div>
        </div>
        <img style={{marginTop: "3em"}} src={`https://cdn-dhfkh.nitrocdn.com/thFNVEIVwFotvcnmaRVLYEpWIcytEzuw/assets/images/optimized/rev-870749a/virtuzone.com/wp-content/uploads/2021/10/c2.png`}  />
        <h1 style={{marginTop:"5em"}}>Steps to Set Up a Company in a UAE Free Zone</h1>
        <p style={{}}>Starting a business in Dubai is simple with Virtuzone. We can help you set up in a free<br /> zone, on mainland or offshore.</p>
      </div>
      

      <div className='setup-step'>
        <div className='setup-step-points'>
          <p><b>You will be guided</b> through the process step-by-step in a very transparent manner that gives you a full overview of exactly where you are at any given time of the setup journey.</p>
        </div>

        <div className='setup-step-points'>
          <p><b>We do all the heavy lifting</b> for you so that you don’t have to give anything a second thought, but we make sure you are well-informed along the way.</p>
        </div>

        <div className='setup-step-points'>
          <p><b>While the entire process can take as little as seven working days,</b> Virtuzone is doing a lot behind the scenes to ensure your UAE free zone company setup is a complete success.</p>
        </div>


      </div>
      <Form />
       <Footer />
    </div>
  )
}

export default FreeZone;
