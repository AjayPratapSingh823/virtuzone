import React from 'react'
import './CostCal2.css'
function CostCal2() {
  return (
    <div className="buisness-activity">
       <div className='buisness-activity-inside'>
       <h1 >Choose your business activity.*</h1>
       <p>Choose the business activity that you would like to carry out in the UAE. Aside from helping you identify the location and licence that best suit your company, this will also help you get a better estimate of the cost of your company setup.</p>
       <select>
        <option value="" disabled selected hidden>Select an option</option>
        <option>Agriculture</option>
        <option>Marketing</option>
        <option>Apparel</option>
        <option>Banking</option>
        <option>Biotechnology</option>
        <option>Chemical</option>
        <option>Communication</option>
        <option>Consultancy</option>
        <option>Construction</option>
        <option>Education</option>
       </select>
       <button type='button'>OK</button>
       </div>
    </div>
  )
}

export default CostCal2