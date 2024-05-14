import React from 'react'
import './Dropdown.css';

function DropdownServices() {
  return (
    <div className='drop-down'>
    <div>
    <p>Essential Services</p>
        <ul>
            <li><a href="/bank-account-opening">Bank Account Opening in UAE</a></li>
            <li>Accounting Services</li>
            <li><a href="/compliances-services">Compliances Services</a></li>
            <li><a href="/health-insurance">Health Insurance</a></li>
        </ul>
    </div>
      
    <div>
        <p>OPERATIONAL SERVICE</p>
        <ul>
            <li><a href="it-services">IT Service</a></li>
            <li><a href="legal-services">Legal Service</a></li>
            <li>Mail Management</li>
            <li>Virtual Recetpionist</li>
        </ul>
        </div>

        <div>
        <p>SUPPORT SERVICE</p>
        <ul>
            <li>Tourist Visa</li>
            <li>Golden Visa UAE</li>
            <li>PRO Service</li>
            <li>Will Preparation Service</li>
        </ul>
        </div>
    </div>
  )
}

export default DropdownServices