import './App.css';
import Home from './Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FreeZone from './FreeZone/FreeZone';
import Navbar from './Navbar/Navbar';
import Buisness from './Buisness/Buisness';
import FreeZonesPricing from './FreeZonesAndPricing/FreeZonesPricing';
import UAEVisa from './UAEResidenceVisa/UAEVisa';
import FreeZoneRegister from './FreeZoneRegistration/FreeZoneRegister';
import OurSolution from './OurSolution/OurSolution';
import Sponsorship from './Mainland/Sponsorship/Sponsorship';
import DubaiMainlandLicense from './Mainland/Sponsorship/DubaiMainland/DubaiMainlandLicense';
import MainlandBuisness from './Mainland/Sponsorship/BuisnessActivites/MainlandBuisness';
import MainlandVisa from './Mainland/Sponsorship/MainlandVisa/MainlandVisa';
import AccountingandTax from './Accounting/AccountingandTax';
import VatandTax from './VatandTax/VatandTax';
import CorporateTax from './CorporateTax/CorporateTax';
import BankAccountOpening from './BankAccountOpening/BankAccountOpening';
import ComplianceService from './Compliance-service/ComplianceService';
import HealthInsurance from './HealthInsurance/HealthInsurance';
import ITServices from './ITServices/ITServices';
import LegalService from './LegalService/LegalService';
import CostCalculator from './CostCalculator/CostCalculator';
import CostCal1 from './CostCalculator/CostCal1';
import CostCal2 from './CostCalculator/CostCal2';
import About from './About/About';
import GetaTradeLicense from './GetaTradeLicense/GetaTradeLicense';
import Login from './Login/Login';
import AdminHome from './AdminHome/AdminHome';
import CreateBlog from './CreateaBlog/CreateaBlog';
import AdminBlogs from './AdminBlogs/AdminBlogs';
import AdminBlogsPage from './AdminBlogsPage/AdminBlogsPage';
import BlogCategory from './BlogCategory/BlogCategory';
import SignUp from './SignUp/SignUp';
function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/free-zone" element={<FreeZone />} />
            <Route path="/free-zone-buisness" element={<Buisness />} />
            <Route path="/free-zone-pricing" element={<FreeZonesPricing />} />
            <Route path="/uae-residence-visa" element={<UAEVisa />} />
            <Route path="/free-zone-registration" element={<FreeZoneRegister />} />
            <Route path="/our-solution" element={<OurSolution />} /> 
            <Route path="/sponsorhip" element={<Sponsorship />} />
            <Route path="/dubai-mainland" element={<DubaiMainlandLicense />} />
            <Route path="/mainland-buisness" element={<MainlandBuisness />} />
            <Route path="/mainland-visa" element={<MainlandVisa />} />
            <Route path="/accounting-and-tax" element={<AccountingandTax />} />
            <Route path="/vat-and-tax" element={<VatandTax />} />
            <Route path="/corporate-tax" element={<CorporateTax />} />
            <Route path="/bank-account-opening" element={<BankAccountOpening />} />
            <Route path='/compliances-services' element={<ComplianceService />} />
            <Route path='/health-insurance' element={<HealthInsurance />} />
            <Route path='/it-services' element={<ITServices />} />
            <Route path='/legal-services' element={<LegalService />} />
            <Route path='/about-us' element={<About />} />
            <Route path='/get-a-trade-license' element={<GetaTradeLicense />} />
            <Route path="/admin-login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/admin-home" element={<AdminHome />} />
            <Route path="/create-a-blog" element={<CreateBlog />} />
            <Route path="/blogs" element={<AdminBlogs />} />
            <Route path="/blog/:id" element={<AdminBlogsPage />} />
            <Route path="/blog/category/:category" element={<BlogCategory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
