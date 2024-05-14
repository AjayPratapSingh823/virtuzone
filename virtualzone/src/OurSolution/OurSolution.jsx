import React from 'react'
import './OurSolution.css'
import Footer from '../Footer/Footer'
import Form from '../Form/Form'

function OurSolution() {
  return (
    <div>
     
     <div className='our-solution'>
        <div style={{ marginTop: "3em" ,marginBottom:"",display:"inline-block",textAlign:"center"}}>
          <h2>THE VIRTUZONE SOLUTION</h2>
          <h1>BUSINESS SETUP<br /> CONSULTANTS IN<br />DUBAI</h1>
          <p>Our business setup consultants have enabled more<br/> 
          than 60,000 entrepreneurs from 180 countries to set
          <br />up their business.</p>
          <button sytle={{textAlign:"left"}}>Get Started Today</button>
          <br />
          <a href="">Calculate your setup costs</a>
        </div>
        <div>
          <img src={`https://cdn-dhfkh.nitrocdn.com/thFNVEIVwFotvcnmaRVLYEpWIcytEzuw/assets/images/optimized/rev-b1ea362/virtuzone.com/wp-content/uploads/2021/10/3.-Our-Solution-Business-Setup-Consultants.png`} alt="man" />
        </div>
      </div>

      <div style={{marginTop:"3em"}}>
            <h1>The Leading Business Setup Consultants in Dubai and<br/>UAE</h1>
            <p style={{fontSize:"20px"}}><a style={{textDecoration:"none", color:"red"}}href="/"> Home > </a>Business Activities in a UAE Free Zone</p>
      </div>

      <div style={{marginTop:"6em"}}>
        <p style={{fontSize:"20px",marginBottom:"4em"}}>Setting up a company anywhere in the world can be daunting. However, with the right business setup<br />
        consultants in Dubai at your side, it doesn’t have to be challenging. We have been operating as business<br />
        setup consultants for almost 15 years, having helped more than 70,000 entrepeneurs like yourself to get<br />
        off to the right start. Business setup in Dubai doesn’t have to be daunting with us by your side.<br /></p>

        <img src={`https://cdn-dhfkh.nitrocdn.com/thFNVEIVwFotvcnmaRVLYEpWIcytEzuw/assets/images/optimized/rev-b1ea362/virtuzone.com/wp-content/uploads/2021/09/freezone_business-setup-consultants.png`} />
      </div>

      <div style={{marginTop:"10em",backgroundColor:"aliceblue"}}>
        <h1>The Best Business Setup Consultants in Dubai</h1>
        <p>Our process is both straightforward and transparent. We’ll guide you through every step<br />of the way.</p>
      </div>
      
      <div className="our-solution-step" >
        <div style={{display:"inline-block", textAlign:"center"}}>
            <h1>1. Simple</h1>
            <p>Our simple process as business setup consultants includes helping you <br />
            decide whether to set up in the mainland or in a free zone, advising on<br />
            the right business activity and name for your company, and seeing you<br />
            through all the required paperwork to get your business licence with<br />
            DED and open your corporate bank account.</p>

            <h1>2. Business License</h1>
            <p>We’ll do all the heavy lifting—that’s what makes us the premier business<br />
            setup consultants in Dubai and the UAE. Virtuzone is a one-stop-shop for<br />
            company formation. We manage the process from start to finish,<br />
            meaning you don’t have to meet with countless government authorities<br />
            to get up and running with your business in Dubai.</p>

            <h1>3. Financial Incentives</h1>
            <p>It all starts with a free consultation with one of our friendly and <br />
            professional business setup consultants. The consultation is all about<br />
            you and your business—you’ll have the opportunity to ask any questions<br />
            you might have about company formation and we’ll make sure you’re<br />
            completely prepared before we formally start the process.</p>

            <p>By the end of your personal consultation, we’ll have a deep<br />understanding of your business and its requirements and you’ll know
            <br />the best path to take when setting up your business in the UAE.</p>
        </div>

        <div>
           <img src={`https://cdn-dhfkh.nitrocdn.com/thFNVEIVwFotvcnmaRVLYEpWIcytEzuw/assets/images/optimized/rev-b1ea362/virtuzone.com/wp-content/uploads/2021/09/Flat-Illustration.svg` } alt="m"/>
        </div>
      </div>
 
      <Form />
      <Footer />

    </div>
  )
}

export default OurSolution