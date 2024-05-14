import React,{useState,useEffect} from 'react'
import './AccountingandTax.css'
import Form from '../Form2/Form2'
import Footer from '../Footer/Footer'
function AccountingandTax() {
  return (
    <div>
        <div className='accounting-and-tax'>
       <div style={{display:"inline-block", textAlign:"left",marginTop:"2em"}}>
      <h2 style={{fontSize:"20px",color:"white"}}>ACCOUNTING SERVICES & PAYROLL</h2>
      <h1 style={{width:"15em",marginTop:"-10px",fontSize:"40px"}}>MANAGE YOUR ACCOUNTING, PAYROLL AND FINANCIAL REPORTS EFFICIENTLY</h1>
      <p style={{width:"25em",fontWeight:"400",fontSize:"18px"}}>Our highly qualified accountants will help you efficiently manage your finances. We provide bookkeeping, reconciliation, financial reporting, payroll, VAT reports and audit support.</p>
      <button sytle={{justifyItems: "left", textAlign:"left",marginTop:""}}>Get Started Today</button>
    </div>
    <div>
      <img src={`https://cdn-dhfkh.nitrocdn.com/thFNVEIVwFotvcnmaRVLYEpWIcytEzuw/assets/images/optimized/rev-b1ea362/virtuzone.com/wp-content/uploads/2022/01/CS_header_Image.png`} alt="man" />
    </div>
  </div>

  <div className='account-service'>
   <div className='account-service-inside'>
    <p><a href="/">Home > </a><a href="/">Corporate Services > </a>Accounting Service</p>
    <p>Our accounting services will help you keep accurate and updated records of your corporate financial transactions. Regardless of the size of your business, accounting is necessary to help you with decision making, cost planning, and measurement of your economic performance. Our accounting services follow the standards indicated in the International Financial Reporting Standards (IFRS) and are managed by a team of highly qualified certified accountants.</p>
  </div>
  </div>
   
  <h1 style={{fontSize:"3em"}}>Our Accounting Service</h1>
  <div className='accounting-services' style={{marginTop: "8em"}}>
   
    <div className='accounting-services-points'>
        <h1>Bookkeeping</h1>
        <p>Our accountants will take away the burden of recording and updating all your daily financial transactions and performing bank reconciliations.</p>
    </div>

    <div  className='accounting-services-points'>
        <h1>Account Reconciliation</h1>
        <p>We will help you ensure the figures in your general ledger are correct and up-to-date and that the balances match.</p>
    </div>

    <div  className='accounting-services-points'>
        <h1>Financial Reporting</h1>
        <p>We generate financial reports to help you determine how your business is performing. These include the following:</p>
        <ul>
            <li>Trial balance</li>
            <li>Profit and loss statement</li>
            <li>Balance sheet</li>
            <li>Cash flow statement</li>
            <li>General ledgers</li>
        </ul>
    </div>
  </div>

<div className='accounting-services'>
<div className='accounting-services-points'>
        <h1 style={{marginLeft:"-6em",marginTop:"-4em",width:"15em"}}>Payroll Management</h1>
        <p style={{marginLeft:"-9em",width:"15em"}}>We will manage your company’s monthly payroll, including generating reports, gratuity calculations and pay slips.</p>
    </div>

    <div  className='accounting-services-points'>
        <h1 style={{marginLeft:"-6em",marginTop:"-4em",width:"15em"}}>Audit Support</h1>
        <p style={{marginLeft:"-9em",width:"15em"}}>We will assist you in completing the auditing process for your financial year and ensure your records are maintained per International Financial Reporting Standards (IFRS).</p>
    </div>
</div>
  
  <div className='accounting-service-guide'>
    <div className="accounting-service-guide-process"> 
        <h1>The Ultimate Guide to Business Accounting Services in Dubai</h1>
        <p>How accurate are your business financial records and statements? Are your accounting practices compliant with UAE accounting standards? Do you file your VAT and other taxes correctly?</p>
        <p>Many companies in Dubai struggle with accounting and bookkeeping. Poor accounting and bookkeeping practices are a financial and legal liability. It could cost you hefty penalties or even lead to the suspension of your business license.</p>
        <p>How do you avoid that?</p>
        <p>Outsourcing accounting and bookkeeping services has become an ultimate solution for many. It involves hiring a party/accounting firm outside the company to perform accounting and bookkeeping services for your business. Keep reading to learn more about outsourced business accounting services in Dubai.</p>
        <h1>Accounting and Bookkeeping Policies in Dubai</h1>
        <p>The UAE has its own set of GAAP accounting principles. The International Federation of Accountants (IFAC) is in charge of maintaining these standards. The GAAP principles apply to all the UAE government entities and state-owned companies.</p>
        <p>The accounting standards of the UAE are based on the following principles:</p>
        <p>Income is recognised when it is realised or realisable. Expenses are recognised when they are incurred. Revenue is recognised when it is earned.</p>
        <p>You should measure assets and liabilities at fair value, except for financial instruments and leases. These are measured at amortised cost using the effective interest rates.</p>
        <p>Running your own business in Dubai is a fun challenge. However, it can also be a struggle when it comes to accounting and bookkeeping. Here are five policies you need to follow:</p>
        <h2>Record Keeping Policy</h2>
        <p>Under the UAE Federal Law, you should keep your financial records and statements. You must ensure those records are intact for at least five years. The Ministry of Finance recommends keeping records for ten years to prove tax compliance.</p>
        <h2>Cash Receipts</h2>
        <p>Transactions of up to AED 1,000 need evidence supported by a receipt. Receipts must be in the name of the business. They must include the date of issue, signature of the person issuing the receipt, and recipient.</p>
        <p>You must also indicate the amount and nature of the transaction. The details are essential for proof of transactions. They also improve accounting accuracy.</p>
        <h2>Bank Transactions</h2>
        <p>All bank transactions need the support of a bank statement. The statement must include the date of the transaction and the name and address of the business receiving the funds. You also need to include the amount and nature of the transaction.</p>
        <p>Companies can keep an electronic record of the statements. Keeping these records helps in accurately preparing an annual budget and profit and loss accounts.</p>
        <h2>VAT Returns</h2>
        <p>Businesses operating in UAE must comply with Value Added Tax (VAT) regime, effected on January 1st 2018. The new tax applies to all companies in UAE, whether your services are local or outside UAE.</p>
        <p>Businesses are required to register for VAT if they meet the eligibility criteria. Taxes in Dubai can be a complex matter. As such, your business should adopt a VAT Return Policy that makes sense. It should be in line with industry best practices.</p>
        <h2>Other Supporting Documents</h2>
        <p>Other supporting documents include invoices, credit notes and contracts. Also, include bank statements for businesses that are not registered for VAT.</p>
        <p>The above documents should be in their original form. Copies of the documents are not acceptable.</p>
        <h1>How to Keep Your Business Accounting Records in Order in Dubai</h1>
        <p>Many small businesses attempt to do their books. This is common when a firm doesn’t want to spend money on accounting firms. Business owners also think they can keep things more “in-house.”</p>
        <p>However, this often leads to a lot of stress and time wasted. Accounting is complex and a full-time job in itself. If you are running a business, you likely already have enough on your plate.</p>
        <p>Instead of doing everything by yourself, consider the following options:</p>
        <h2>Hiring Accounting Staff</h2>
        <p>This involves getting an in-house permanent accounting employee. Depending on your company’s size, you can hire one or a team of accountants. The hiring process involves posting the job offer on your website or job websites.</p>
        <p>You interview several candidates until you find the perfect fit. Some of the qualifications you should look for include experience in reconciliation, monitoring/recording accounts payables and accounts receivables transactions, basic bookkeeping and financial reporting. If you are lucky to find a reliable accounting staff member, they can handle all accounting operations. Alternatively, you can use outsourced accounting services in the UAE.</p>
        <h1>Outsourcing Accounting Services</h1>
        <p>Accounting outsourcing is the transfer of accounting functions to third party accounting firms. This includes services like bookkeeping, tax preparation and financial statement preparation. You can outsource these services to an independent professional firm that specialises in that particular industry.</p>
        <p>Outsourced accounting services take over the day-to-day tasks of your accounting department. You can choose to outsource all accounting operations or some hectic ones. Here are some of the most popular outsourced accounting services:</p>
        <h2>Payroll</h2>
        <p>Payroll is one of the top reasons why companies outsource their accounting. Payroll is complex and requires specialised knowledge and expertise.</p>
        <h2>Accounts Payable</h2>
        <p>This is the department that pays your bills. The person who handles accounts payable must be very detail-oriented and knowledgeable about tax laws.</p>
        <h2>Accounts Receivable</h2>
        <p>This department is responsible for collecting money from your customers. If your business offers its services and products on credit, you need agile management of these records. Poor management of accounts receivable can run your business into bankruptcy.</p>
    </div>

    <div>
        <Form />
    </div>
  </div>

   <Footer />
  </div>
  )
}

export default AccountingandTax