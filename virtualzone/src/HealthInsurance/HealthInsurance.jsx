import React from 'react'
import './HealthInsurance.css'

function HealthInsurance() {
  return (
    <div>
     <div className='health-insurance'>
       <div style={{display:"inline-block", textAlign:"left",marginTop:"2em"}}>
      <h2 style={{fontSize:"20px",color:"white"}}>ACCOUNTING SERVICES & PAYROLL</h2>
      <h1 style={{width:"15em",marginTop:"-10px",fontSize:"40px"}}>MANAGE YOUR ACCOUNTING, PAYROLL AND FINANCIAL REPORTS EFFICIENTLY</h1>
      <p style={{width:"25em",fontWeight:"400",fontSize:"18px"}}>Our highly qualified accountants will help you efficiently manage your finances. We provide bookkeeping, reconciliation, financial reporting, payroll, VAT reports and audit support.</p>
      <button sytle={{justifyItems: "left", textAlign:"left",marginTop:""}}>Get Started Today</button>
    </div>
    <div>
      <img src={`https://virtuzone.com/wp-content/uploads/2022/02/Health-Insurance.png`} alt="man" />
    </div>
  </div>

  <div className='health-insurance-service'>
   <div className='health-insurance-service-inside'>
    <p><a href="/">Home > </a><a href="/">Corporate Services > </a>Accounting Service</p>
    <p>Get access to an extensive range of health insurance packages with the most affordable rates in the market. Whether you are looking for a basic health insurance for your visa application, or a comprehensive insurance package for your family or employees, we’ve got you covered.</p>
  </div>
  </div>

   <h1>Our health Insurance</h1>

   <div className='health-insurance-benefits'>
    <div className='health-insurance-benefits-inside'>
        <img src={`https://virtuzone.com/wp-content/uploads/2022/02/Comprehensive-coverage.svg`} alt="" />
        <h1>Comprehensive Coverage</h1>
        <p>Our health insurance packages offer you extensive in-patient and out-patient coverage, giving you peace of mind that your medical needs will be taken care of.</p>
    </div>

    <div className='health-insurance-benefits-inside'>
    <img src={`https://virtuzone.com/wp-content/uploads/2022/02/Excellent-healthcare-services.svg`} alt="" />
        <h1>Excellent healthcare services</h1>
        <p>Our network includes only the most reputable names in the healthcare industry, ensuring you get to enjoy the highest level of healthcare services, at all times.</p>
    </div>

    <div className='health-insurance-benefits-inside'>
    <img src={`https://virtuzone.com/wp-content/uploads/2022/02/Tailored-to-your-needs.svg`} alt="" />
        <h1>Tailored to your needs</h1>
        <p>Our team will help you find and choose a health insurance package that suits your unique needs, whether you are looking for insurance for your family or your team.</p>
    </div>

   </div>

    </div>
  )
}

export default HealthInsurance