import React from 'react'
import './About.css'
import Footer from '../Footer/Footer'
function About() {
  return (
    <div>
     <div className='about-us'>
       <div style={{display:"inline-block", textAlign:"left",marginTop:"2em"}}>
      <h2 style={{fontSize:"20px",color:"white"}}>ABOUT US</h2>
      <h1 style={{width:"15em",marginTop:"-10px",fontSize:"40px"}}>THE VIRTUZONE STORY</h1>
      <p style={{width:"25em",fontWeight:"400",fontSize:"18px"}}>Founded in 2009, Virtuzone’s mission is to remove the complexities of company setup in Dubai so that our clients can focus 100% on running their businesses. </p>
      <button sytle={{justifyItems: "left", textAlign:"left"}}>Get Started Today</button>
    </div>
    <div>
      <img src={`https://cdn-dhfkh.nitrocdn.com/thFNVEIVwFotvcnmaRVLYEpWIcytEzuw/assets/images/optimized/rev-b1ea362/virtuzone.com/wp-content/uploads/2021/09/About-Us.png`} alt="man" />
    </div>
  </div>

  <div>
    <h1>The VirtualZone Story</h1>
  </div>

  <div className='about-us-video'>
    <div className='about-us-video-para'>
       <p>Whether you are a startup, a small business, or an individual simply requiring your own trade licence, with Virtuzone you won’t have to lose even a night’s sleep worrying about the red tape involved with the UAE free zone and mainland company setup process.</p>
       <p>That’s because we do all the heavy lifting for you. While the technical, administrative, and financial aspects of setting up a business in the UAE can seem challenging, with the right support the process is far more straightforward and affordable than you might think.</p>
       <p>Virtuzone provides just that type of support, and it’s what has led us to become the leading company setup specialists in Dubai and the UAE. More than 60,000 entrepreneurs have trusted us to set up their companies, and almost 90% of our clients renew their trade licence with us every year going forward.</p>
    </div>
    <div>
    <iframe
  src='https://www.youtube.com/embed/oFtaXx59l00?feature=oembed&autoplay=1'
  frameborder='0'
  style={{borderRadius:"10px",marginTop:"2em",fontSize:"large"}}
  width="600em"
  height="300em"
  allowfullscreen
  title='video'
/>
    </div>
  </div>


  <div style={{ marginTop: "6em" }}>
        <h1>Setting Up a Company With No Regrets</h1>

        <div className='about-us-point'>
            <div className='about-us-benefit'>
                <h1>1.A higher level of service without the higher costs</h1>
                <p>Virtuzone is known in the market to provide a higher standard of company setup guidance – without higher costs.</p>

                <h1>2.A one-stop-shop service</h1>
                <p>We offer a concierge service with dedicated account managers. They are available to answer all of your questions and provide full transparency while liaising with UAE government authorities on your behalf.</p>
            </div>

            <div className='about-us-benefit'>
                <h1>3. Better time and cost management</h1>
                <p>Your time-investment throughout the setup process? As little as just a few hours. For those looking to check off all the legal boxes of corporate ownership in the UAE while maintaining a great deal of flexibility when it comes to managing costs, Virtuzone is your partner.</p>

                <h1>4. Contact us for hassle-free company setup</h1>
                <p>We provide a free consultation that will help answer every question you may have about setting up a company in the UAE.</p>
            </div>
        </div>
        <img style={{marginTop: "3em"}} src={`https://cdn-dhfkh.nitrocdn.com/thFNVEIVwFotvcnmaRVLYEpWIcytEzuw/assets/images/optimized/rev-870749a/virtuzone.com/wp-content/uploads/2021/10/c2.png`}  />
        <h1 style={{marginTop:"5em"}}>Meet the Team</h1>
      </div>
        
    <div className='about-team'>
     <div className='about-us-team'>
     <img src={`https://cdn-dhfkh.nitrocdn.com/thFNVEIVwFotvcnmaRVLYEpWIcytEzuw/assets/images/optimized/rev-b1ea362/virtuzone.com/wp-content/uploads/2021/10/Group-2team_.png`} alt='man' />
     <h1>NEIL PETCH</h1>
     <p>Chairman and Co-founder</p>
     </div>

     <div className='about-us-team'>
     <img src={`https://cdn-dhfkh.nitrocdn.com/thFNVEIVwFotvcnmaRVLYEpWIcytEzuw/assets/images/optimized/rev-b1ea362/virtuzone.com/wp-content/uploads/2021/10/Group-3team_.png`} alt='man' />
     <h1>GEORGE HOJEIGE</h1>
     <p>Chairman and Co-founder</p>
     </div>

     <div className='about-us-team'>
     <img src={`https://cdn-dhfkh.nitrocdn.com/thFNVEIVwFotvcnmaRVLYEpWIcytEzuw/assets/images/optimized/rev-b1ea362/virtuzone.com/wp-content/uploads/2021/10/Group-1team_.png`} alt='man' />
     <h1>GEOFF RAPP</h1>
     <p>Group Chief Executive Officer</p>
     </div>
    </div>

    <div className='about-team' style={{marginTop:"3em"}}>
     <div className='about-us-team'>
     <a href="https://www.linkedin.com/in/sagar06/"> <img src={`https://cdn-dhfkh.nitrocdn.com/thFNVEIVwFotvcnmaRVLYEpWIcytEzuw/assets/images/optimized/rev-b1ea362/virtuzone.com/wp-content/uploads/2021/10/Group-9team_.png`} alt='man' /></a> 
     <h1>SAGAR CHANDIRAMANI</h1>
     <p>Chairman and Co-founder</p>
     </div>

     <div className='about-us-team' >
     <img src={`https://cdn-dhfkh.nitrocdn.com/thFNVEIVwFotvcnmaRVLYEpWIcytEzuw/assets/images/optimized/rev-b1ea362/virtuzone.com/wp-content/uploads/2021/10/Group-3team_.png`} alt='man' />
     <h1>GEORGE HOJEIGE</h1>
     <p>Chairman and Co-founder</p>
     </div>

     <div className='about-us-team'>
     <img src={`https://cdn-dhfkh.nitrocdn.com/thFNVEIVwFotvcnmaRVLYEpWIcytEzuw/assets/images/optimized/rev-b1ea362/virtuzone.com/wp-content/uploads/2021/10/Group-1team_.png`} alt='man' />
     <h1>GEOFF RAPP</h1>
     <p>Group Chief Executive Officer</p>
     </div>
    </div>

     <Footer />
    </div>
  )
}

export default About