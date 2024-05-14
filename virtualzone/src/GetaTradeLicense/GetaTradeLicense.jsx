import React,{useRef} from 'react'
import './GetaTradeLicense.css'
function GetaTradeLicense() {
    const whatIsDubaiLicenseRef=useRef(null);
    const scrollwhatIsDubaiLicense=()=>{
        whatIsDubaiLicenseRef.current.scrollIntoView({behavior:'smooth'});
    };
  return (
    <div>
     <div className='get-a-trade-license'>
       <div style={{display:"inline-block", textAlign:"left",marginTop:"2em"}}>
      <h2 style={{fontSize:"20px",color:"white"}}>START TRADING IN DUBAI TODAY</h2>
      <h1 style={{width:"15em",marginTop:"-10px",fontSize:"40px"}}>TRADE LICENSE DUBAI: A COMPLETE GUIDE</h1>
      <p style={{width:"25em",fontWeight:"400",fontSize:"18px"}}>Anyone thinking of opening a business in Dubai will need to get a Dubai trade license. This is one of the most important steps new businesses take when starting a company in the area. </p>
      <button sytle={{justifyItems: "left", textAlign:"left"}}>Get Started Today</button>
    </div>
    <div>
      <img src={`https://cdn-dhfkh.nitrocdn.com/thFNVEIVwFotvcnmaRVLYEpWIcytEzuw/assets/images/optimized/rev-b1ea362/virtuzone.com/wp-content/uploads/2021/09/Mainland-Company-Setup-Overview.png`} alt="man" />
    </div>
  </div>

  <div className="get-a-license">
  <div className="get-a-license-para">
     <h1>Your Business Journey Starts With a Trade License</h1>
     <p><a href="/" style={{textDecoration:"none",color:"red",fontSize:"large"}}>Home  ></a> Trade License Dubai: A Complete Guide</p>
  </div>
  </div>

  <div className='get-a-trade-license-steps'>
    <div  className='get-a-trade-license-content'>  
      <ul>
        <p>Table of Content</p>
        <li>Introduction</li>
        <li onClick={scrollwhatIsDubaiLicense}>What is a Dubai Trade License?</li>
        <li>Different types of Trade License</li>
        <li>Free Zone, Mainland or Offshore</li>
        <li>License</li>
        <li>Trade License Benefits</li>
        <li>What documents do you need?</li>
        <li>How do I get a trade license?</li>
        <li>How much does it cost?</li>
        <li>How long will the process take?</li>
        <li>Trade license renewal</li>
      </ul>
    </div>

    <div className='get-a-trade-license-process'>
        <p>Dubai is a city that is famous for its sparkling oceans and glittering nightlife. However, it’s also a city that’s famous for its booming business and incredible trading opportunities.</p>
        <p>Perhaps that’s why so many business owners interested in starting a business in the UAE are choosing Dubai as their home base. In fact, in the first quarter of 2023, Dubai’s IFZA reported a 177% increase in the registration of new licenses compared to the same period in 2022.</p>
        <p>If you’re interested in joining this rising trend and getting a trade license in Dubai, keep reading. This guide walks you through the process of getting a Dubai business license.</p>
        <img src={`https://cdn-dhfkh.nitrocdn.com/thFNVEIVwFotvcnmaRVLYEpWIcytEzuw/assets/images/optimized/rev-b1ea362/virtuzone.com/wp-content/uploads/2021/09/expo2020-dubai-banner.jpeg`} alt='man' />
        <div ref={whatIsDubaiLicenseRef}>
        <h1 >What Is a Dubai Trade License?</h1>
        </div>
        <p>The business license is a document that designates what activities a company can carry out in the UAE. Each trade license is issued by the Department of Economic Development. </p>
        <p>General trading licenses are valid for several activities in Dubai. These activities include importing and exporting goods as well as carrying out commercial activities. </p>
        <p>Companies in Dubai Free Zones are eligible for a Dubai trade license. Professionals who offer industry-specific services are also able to apply for a Dubai trade license. </p> 
        <h1>What Are the Types of Trade Licenses in Dubai?</h1>
        <p>Not all Dubai trade licenses are created equal. You can choose from four main classes of licenses:</p>
        <ul>
            <li><b>Professional License:</b> licenses for professionals rendering specific services</li>
            <li><b>Commercial or Trade License:</b> licenses for anyone participating in trade</li>
            <li><b>Industrial License:</b> licenses for businesses running industrial and manufacturing operations</li>
            <li><b>General Trade License:</b> licenses operating general trades, exports, and imports</li>
        </ul>
    </div>
  </div>



    </div>
  )
}

export default GetaTradeLicense