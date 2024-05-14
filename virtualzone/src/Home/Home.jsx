import React from 'react'
import './Home.css'
import Blogs from '../Blogs/Blogs';
import Vat from '../image/vat.svg';
import man from '../image/man.jpg';
import man2 from '../image/man2.png';
import doc from '../image/doc.jpeg';

import Footer from '../Footer/Footer';
import FAQ    from './FAQ/FAQ';
function Home() {
  return (
    <div>
        <div className='background'>
          <h1 className="heading">HOW MUCH DOES BUSINESS <br /> SETUP IN DUBAI COST?</h1>
          <p>That depends. What is your business activity? Free zone or <br />mainland? How many visas or shareholders? From our <br />experience with business setup in Dubai for over 70,000 <br /> entrepreneurs, we have created the Business Setup Cost <br />Calculator to give you the answer.</p>
          <button className='btn'>Calculate Now</button>
          <div  className="main">
          </div>
        </div>
        <div className='main'>
           <h1>Already Own a buisness?</h1>
           <p>Simplify your operations with our end-to-end suite of corporate services</p>
           </div>
    <div className='card-content'>
        <div className='card'>
            <div>
                <img src={Vat} alt="vat"/>
                <h3>Corporate Tax & Vat</h3>
                <p>Expert advice ensures compliance <br /> with Corporate Tax and VAT <br /> obligations with the Federal Tax Authority (FTA).</p>
                <p>Read more</p>
            </div>
        </div>

        <div className='card'>
            <div>
                <img src={Vat} alt="vat"/>
                <h3>Corporate Tax & Vat</h3>
                <p>Expert advice ensures compliance <br /> with Corporate Tax and VAT <br /> obligations with the Federal Tax Authority (FTA).</p>
                <p>Read more</p>
            </div>
        </div>

        <div className='card'>
            <div>
                <img src={Vat} alt="vat"/>
                <h3>Corporate Tax & Vat</h3>
                <p>Expert advice ensures compliance <br /> with Corporate Tax and VAT <br /> obligations with the Federal Tax Authority (FTA).</p>
                <p>Read more</p>
            </div>
        </div>


        <div className='card'>
            <div>
                <img src={Vat} alt="vat"/>
                <h3>Corporate Tax & Vat</h3>
                <p>Expert advice ensures compliance <br /> with Corporate Tax and VAT <br /> obligations with the Federal Tax Authority (FTA).</p>
                <p>Read more</p>
            </div>
        </div>
        </div>

        <div className='wonder'>
            <h1>Should you undertake business setup in Dubai <br /> yourself?</h1>
            <p>Wondering if you can start a Dubai company yourself? You can. But there are some things <br /> you need to know.</p>
        </div>

    <div className='option'>
        <div>
            <h1>1. There is a multitude of options.</h1>
            <p>With over 60 jurisdictions, how do you know which is the right one for <br /> your Dubai company? How do you make sure you’re choosing the right <br /> licence and business activity? Don’t let your business setup in Dubai be a<br/> trial-and-error process.</p>

            <h1>2.You might save money – but at what cost?. </h1>
            <p>With over 60 jurisdictions, how do you know which is the right one for <br /> your Dubai company? How do you make sure you’re choosing the right <br /> licence and business activity? Don’t let your business setup in Dubai be a<br/> trial-and-error process.</p>

            <h1>3. There is a mountain of paperwork.</h1>
            <p>With over 60 jurisdictions, how do you know which is the right one for <br /> your Dubai company? How do you make sure you’re choosing the right <br /> licence and business activity? Don’t let your business setup in Dubai be a<br/> trial-and-error process.</p>
        </div>
        <div>
            <img src={man} alt="man" />
        </div>
    </div>

    <div className='main1'>
        <h1>But it doesn’t have to be this way.</h1>
        <p>Before you do anything, talk to one of our experts at company formation in Dubai. We’ll show you how easy the Virtuzone process is and why we’re the <br />partner of choice for more entrepreneurs choosing to start a Dubai company.</p>
        <button className='btn'>Speak to an expert</button>
    </div>

    <div className='main2'>
        <h1>Buisness Setup in dubai– the Virtuzone way.</h1>
        <p>Our time-tested process saves you time and money, while removing the headaches of <br /> beginning your journey.  We know the game.  We have the networks.  We are the leaders <br /> in this space.</p><br />
        <p>Since 2009, our company formation experts have helped more than 70,000 business owners and founders with business setup in Dubai.  We’ve done the<br /> heavy lifting and helped them navigate a myriad of options, while they focus on their exciting new Dubai company. Our process saves you time and money,<br /> while removing the headaches of beginning your journey.   Make sure you get set up the right way! </p><br />
        <h1>Find out why over 70,000 entrepreneurs have entrusted their business with us.</h1> <br />
        <button>Pricing</button>
    </div>

    <div className='main3'>
        <img src={man2} alt="man2"></img>
    </div>
    
    <div className='main4'>
        <h1>What setup option is best for your business?</h1>
        <p>Business setup in Dubai (or anywhere in the UAE) can be complicated.<br/>
Decisions need to be made which can affect your journey and shape your success.<br/>
Jurisdiction? Free zone or mainland?</p>
    </div>

   <div className="main5">
    <div className='main51'>
        <h1>Free Zones</h1>
        <ul>
            <li>Retain 100% ownership of your Dubai company</li>
            <li>0% corporate and income tax rate</li>
            <li>No custom duties</li>
            <li>Option to repatriate 100% of your capital and profits</li>
            <button>Find your free zone</button>
        </ul>
    </div>

    <div className='main52'>
        <h1>Free Zones</h1>
        <ul>
            <li>Retain 100% ownership of your Dubai company</li>
            <li>0% corporate and income tax rate</li>
            <li>No custom duties</li>
            <li>Option to repatriate 100% of your capital and profits</li>
        </ul>
    </div>
   </div>

   <div className='main6'>
    <h1>The process of business setup in Dubai</h1>
    <p>With Virtuzone as your company formation partner, registering a company in the UAE is<br/> not only easy, but it’s the most cost-effective 
    way to do it! In fact, the entire process can <br /> take as little as 24 hours! That’s right! Al
    l you have to do is supply us with the relevant <br /> information about your company and we do the rest.  
    Here’s our time-tested process:</p>
   </div>

      <div className='main71'>
        <img src={doc} alt="man" />
        <div>
        <h1>1. Prepare Documentation</h1>
        <p>If you’re an overseas entrepreneur starting up in a new country for the <br />
        first time, the documentation process can be daunting. We help you to make the <br />
        right decisions for your Dubai company and handle all of the complex paperwork.</p>
        </div>
      </div>

      <div className='main71'>
        <img src={doc} alt="man" />
        <div>
        <h1>2. Business Licence</h1>
        <p>If you’re an overseas entrepreneur starting up in a new country for the <br />
        first time, the documentation process can be daunting. We help you to make the <br />
        right decisions for your Dubai company and handle all of the complex paperwork.</p>
        </div>
      </div>

      <div className='main71'>
        <img src={doc} alt="man" />
        <div>
        <h1>3. Visa Process</h1>
        <p>If you’re an overseas entrepreneur starting up in a new country for the <br />
        first time, the documentation process can be daunting. We help you to make the <br />
        right decisions for your Dubai company and handle all of the complex paperwork.</p>
        </div>
      </div>

      <div className='main71'>
        <img src={doc} alt="man" />
        <div>
        <h1>4. Bank Account</h1>
        <p>If you’re an overseas entrepreneur starting up in a new country for the <br />
        first time, the documentation process can be daunting. We help you to make the <br />
        right decisions for your Dubai company and handle all of the complex paperwork.</p>
        </div>
      </div>

      <div className='main8'>
        <button>About Us</button><br/>
        <a href="#">Calculate your business setup cost</a>
      </div>

      <div className='main9'>
        <h1>Business Setup in Dubai Insights</h1>
        <p>Keep up with the latest UAE company formation insights with articles from our team
        <br /> of experts.</p>
      </div>
     

     <div>
        <h1>Join 70,000 happy customers</h1>
        <p>Make sure you hire the best in the business for your business setup in Dubai.<br />
         With Virtuzone, you will fast-track your path to business success.</p>
     </div>
     
       <Blogs />
       <FAQ />
      
      <div className="touch">
        <h1>That is why we’re here.</h1>
        <p>We make it simpler and easier for you. Before you do anything, talk to one of our <br /> Company Formation Specialists.</p>
        <button>Get in Touch</button>
      </div>

      <Footer />
    </div>
  )
}

export default Home