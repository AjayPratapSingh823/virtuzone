import React from 'react'
import './Dropdown.css'

function Dropdown() {
  return (
    <div className='drop-down'>
    <div>
        <ul>
            <li><a href="/accounting-and-tax">Accounting Services</a></li>
            <li><a href="/vat-and-tax">VAT & TAX Consultancy</a></li>
            <li><a href="/corporate-tax">Corporate Tax</a></li>
        </ul>
    </div>
    </div>
  )
}

export default Dropdown