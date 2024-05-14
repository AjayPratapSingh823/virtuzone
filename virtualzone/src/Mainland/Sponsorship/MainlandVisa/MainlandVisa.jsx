import React from 'react';
import './MainlandVisa.css';
import Form from '../../../Form2/Form2';
function MainlandVisa() {
  return (
    <div>
       <div className='mainland-visa'>
       <div style={{display:"inline-block", textAlign:"left",marginTop:"5em"}}>
      <h2 style={{fontSize:"20px",color:"red"}}>UAE MAINLAND VISAS</h2>
      <h1 style={{width:"15em",marginTop:"-10px",fontSize:"40px"}}>UAE VISA REQUIREMENTS</h1>
      <p style={{width:"25em",fontWeight:"300",fontSize:"18px"}}>Whether you need employment visas for your team or residence visas for your family members, we will ensure all your UAE visa requirements are met – expediently.</p>
      <button sytle={{justifyItems: "left", textAlign:"left",marginTop:""}}>Get Started Today</button>
    </div>
    <div>
      <img src={`https://cdn-dhfkh.nitrocdn.com/thFNVEIVwFotvcnmaRVLYEpWIcytEzuw/assets/images/optimized/rev-b1ea362/virtuzone.com/wp-content/uploads/2021/10/Mainland-Visa-min.png`} alt="man" />
    </div>
  </div>

  <div>
    <h1>Mainland Visas</h1>
    <p><a href="/">Home > </a>Mainland Visas</p>
  </div>
  
  <div className="mainland-visa-main">
     <div>
        <img src={`https://cdn-dhfkh.nitrocdn.com/thFNVEIVwFotvcnmaRVLYEpWIcytEzuw/assets/images/optimized/rev-b1ea362/virtuzone.com/wp-content/uploads/2021/10/mainland_visa_secondry-min.png`} alt='man' />
     </div>

      <div className='mainland-visa-main-para'>
          <h1>Private Companies</h1>
          <ul>
            <li>Private companies can obtain new employment entry permits for their employees provided they apply for residence visa status within 30 days of the employee’s entry into the UAE.</li>
            <li>If your company is registered in a free zone, the employment visa will be valid for three years.</li>
            <li>If you are an onshore registered company the visa will be valid for two years.</li>
            <li>It is also the responsibility of the employer to ensure all travel arrangements are made for the new employee, including the ‘okay to board’ that may be required by some airlines.</li>
          </ul>
      </div>
      </div>
    <h1>Family Residence Visa</h1>
    <p>(Please note that the information below only applies to residents of the UAE).</p>
    
    <div className='family-residence'>
        <div className='family-residence-points'>
             <p>If your family members are outside the UAE, you must first apply for an entry residence visa. After they arrive you then have up to 30 days to apply for the residence stamp.
Your monthly salary should not be less than AED 4,000 (or AED 3,000 plus accommodation). If you wish to sponsor a residence visa for your parents, your minimum monthly salary should be AED 20,000 (or AED 19,000 plus a two-bedroom accommodation).</p>
           <h2>Required documentation includes:</h2>
           <ul>
            <li>Typed application form.</li>
            <li>Salary certificate (for government employees) or attested work contract (other employees).</li>
            <li>Three months of most recent bank statement for long-time residents. New residents may submit the most recent month but must have a bank letter confirming salary transfer.</li>
            <li>Attested tenancy contract, Emirates ID card, and labour card.</li>
            <li>Marriage certificate that has been attested by UAE authorities (for UAE marriages) or in your home country for spouse sponsorship.</li>
            <li>Passports (original) and copies of both sponsor and family member(s).</li>
            <li>Medical check-up report of spouse or children over 15-years of age from an authorised hospital or clinic.</li>
            <li>Three passport photos per family member.</li>
            <li>Please note that for your family member’s residence visa to remain valid he or she must not be out of the UAE for more than six months. In the case where a Muslim expatriate has married more than one wife, he can only obtain one residence visa.</li>

           </ul>
         </div>

        <div>
            <img src={`https://cdn-dhfkh.nitrocdn.com/thFNVEIVwFotvcnmaRVLYEpWIcytEzuw/assets/images/optimized/rev-b1ea362/virtuzone.com/wp-content/uploads/2021/10/Mainland-Visa2-min.png`} alt="man" />
        </div>
    </div>

    <Form />
    </div>
  )
}

export default MainlandVisa