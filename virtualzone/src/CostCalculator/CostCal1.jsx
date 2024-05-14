import React from 'react'
import './CostCal1.css'
function CostCal1() {
  return (
    <div className='buisness-category'>
    <div className='buisness-category-inside'>
        <h1>Choose your business category*</h1>
        <p>Your business category will help determine which jurisdiction, trade licence and business activity will apply to your company.</p>
        <div className='buisness-category-option'>
            <p>Professional Service</p>
            <p>Trading</p>
            <p>Manufacturing</p>
        </div>
        <div className='button'>
        <button type='button'>OK</button>
        <button type='button'>Back</button>
        </div>
        
    </div>
    </div>
  )
}

export default CostCal1