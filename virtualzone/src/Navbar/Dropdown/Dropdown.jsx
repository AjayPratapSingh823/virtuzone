import React from 'react'
import './Dropdown.css'
function Dropdown() {
  return (
    <div className='drop-down'>
    <div>
    <p><a href="/free-zone">Free Zones</a></p>
        <ul>
            <li><a href="/free-zone">Overview</a></li>
            <li><a href="/free-zone-buisness">Buisness Activity</a></li>
            <li><a href="/free-zone-pricing">Free Zone Licence Locations and Pricing</a></li>
            <li><a href="/uae-residence-visa">UAE Residence Visa</a></li>
            <li><a href="/free-zone-registration">Registration Process</a></li>
            <li><a href="/our-solution">Our Solution</a></li>
        </ul>
    </div>
      
    <div>
        <p>MAINLAND</p>
        <ul>
            <li>Overview</li>
            <li><a href="/sponsorhip">Sponsorship</a></li>
            <li><a href="/dubai-mainland">Dubai Mainland Licence</a></li>
            <li><a href="/mainland-buisness">Buisness Activity</a></li>
            <li><a href="mainland-visa">Mainland Visa</a></li>
            <li>VirtuFit</li>
        </ul>
        </div>
    </div>
  )
}

export default Dropdown