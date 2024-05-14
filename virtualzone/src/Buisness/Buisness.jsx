import React from 'react'
import './Business.css'
import Footer from '../Footer/Footer'
import Form from '../Form/Form'

function Buisness() {
  return (
    <div>
        <div className='buisness'>
        <div style={{ marginTop: "3em" ,marginBottom:"5em"}}>
          <h2>FREE ZONE BUSINESS ACTIVITIES</h2>
          <h1>CHOOSING A UAE<br /> BUSINESS ACTIVITY</h1>
          <p>Our Company Formation Specialists will guide you into<br/> selecting the most suitable business activity for your UAE<br/> free zone company.</p>
          <button sytle={{justifyItems: "left", textAlign:"left"}}>Get Started Today</button>
          <br /> <br />
          <a href="">Get Started Today</a>
        </div>
        <div>
          <img src={`https://cdn-dhfkh.nitrocdn.com/thFNVEIVwFotvcnmaRVLYEpWIcytEzuw/assets/images/optimized/rev-870749a/virtuzone.com/wp-content/uploads/2021/10/1.-Business-Activities-1.png`} alt="man" />
        </div>
      </div>

      <div style={{ marginTop: "3em" }}>
        <h1>Choose a Business Activity</h1>
        <p style={{fontSize:"20px"}}><a style={{textDecoration:"none", color:"red"}}href="/"> Home > </a>Business Activities in a UAE Free Zone</p>
      </div>
    
      <div className='buisness-main'>
        <div>
            <img src={`https://cdn-dhfkh.nitrocdn.com/thFNVEIVwFotvcnmaRVLYEpWIcytEzuw/assets/images/optimized/rev-870749a/virtuzone.com/wp-content/uploads/2021/10/Secondry.png`} alt="man" />
        </div>

        <div>
          <p>Virtuzone assists with company incorporation across more than 50 UAE <br /> free zones. There’s no doubt a lot of information to review and much to<br /> consider when making the decision on which free zone is best suited to<br /> your specific business requirements, including location, price, business<br />
           type, flexi-desk or office space options, auditing and bookkeeping and<br /> share capital requirements, and much more.<br />

That’s where the Virtuzone team comes in, walking you through it step-<br /> by-step, steering you in the right direction, saving you money,<br /> and ultimately making the entire experience a stress-free one.</p>
        </div>
      </div>

      <div className='buisness-services'>
         <div className='buisness-card-services'>
          <img src={`https://cdn-dhfkh.nitrocdn.com/thFNVEIVwFotvcnmaRVLYEpWIcytEzuw/assets/images/optimized/rev-870749a/virtuzone.com/wp-content/uploads/2019/06/Broadcast-Management_fz_activiti.png`} alt='mic'/>
          <h1>Broadcast Management</h1>   
          <p>Activities supported include radio broadcasting, TV<br /> broadcasting, and web streaming. Authority<br /> approval is required and only certain packages<br /> support this activity.</p>      
         </div>

         <div className='buisness-card-services'>
          <img src={`https://cdn-dhfkh.nitrocdn.com/thFNVEIVwFotvcnmaRVLYEpWIcytEzuw/assets/images/optimized/rev-870749a/virtuzone.com/wp-content/uploads/2019/06/Broadcast-Management_fz_activiti.png`} alt='mic'/>
          <h1>Broadcast Management</h1>   
          <p>Activities supported include radio broadcasting, TV<br /> broadcasting, and web streaming. Authority<br /> approval is required and only certain packages<br /> support this activity.</p>      
         </div>

      </div>

      <div className='buisness-services'>
         <div className='buisness-card-services'>
          <img src={`https://cdn-dhfkh.nitrocdn.com/thFNVEIVwFotvcnmaRVLYEpWIcytEzuw/assets/images/optimized/rev-870749a/virtuzone.com/wp-content/uploads/2019/06/Broadcast-Management_fz_activiti.png`} alt='mic'/>
          <h1>Broadcast Management</h1>   
          <p>Activities supported include radio broadcasting, TV<br /> broadcasting, and web streaming. Authority<br /> approval is required and only certain packages<br /> support this activity.</p>      
         </div>

         <div className='buisness-card-services'>
          <img src={`https://cdn-dhfkh.nitrocdn.com/thFNVEIVwFotvcnmaRVLYEpWIcytEzuw/assets/images/optimized/rev-870749a/virtuzone.com/wp-content/uploads/2019/06/Broadcast-Management_fz_activiti.png`} alt='mic'/>
          <h1>Broadcast Management</h1>   
          <p>Activities supported include radio broadcasting, TV<br /> broadcasting, and web streaming. Authority<br /> approval is required and only certain packages<br /> support this activity.</p>      
         </div>

      </div>


      <div className='buisness-services'>
         <div className='buisness-card-services'>
          <img src={`https://cdn-dhfkh.nitrocdn.com/thFNVEIVwFotvcnmaRVLYEpWIcytEzuw/assets/images/optimized/rev-870749a/virtuzone.com/wp-content/uploads/2019/06/Broadcast-Management_fz_activiti.png`} alt='mic'/>
          <h1>Broadcast Management</h1>   
          <p>Activities supported include radio broadcasting, TV<br /> broadcasting, and web streaming. Authority<br /> approval is required and only certain packages<br /> support this activity.</p>      
         </div>

         <div className='buisness-card-services'>
          <img src={`https://cdn-dhfkh.nitrocdn.com/thFNVEIVwFotvcnmaRVLYEpWIcytEzuw/assets/images/optimized/rev-870749a/virtuzone.com/wp-content/uploads/2019/06/Broadcast-Management_fz_activiti.png`} alt='mic'/>
          <h1>Broadcast Management</h1>   
          <p>Activities supported include radio broadcasting, TV<br /> broadcasting, and web streaming. Authority<br /> approval is required and only certain packages<br /> support this activity.</p>      
         </div>

      </div>

       <Form />
       <Footer />

    </div>
  )
}

export default Buisness