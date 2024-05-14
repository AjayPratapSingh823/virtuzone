import React,{useState,useEffect} from 'react'
import './Navbar.css'
import logoSvg from '../image/logo.svg'
import Dropdown from './Dropdown/Dropdown';
import './Dropdown/Dropdown.css'
import DropdownAccount from './Dropdown/DropdownAccount';
import DropdownServices from './Dropdown/DropdownServices';
import DropdownResources from './Dropdown/DropdownResources';
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
   
  return (
    <div>
      <nav  className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <img src={logoSvg} alt="Logo" />
      <ul className="navbar-nav">
        <li><a href="#">Buisness Setup</a>
        <Dropdown />
        </li>
        <li><a href="#">Accounting & Tax</a>
        <DropdownAccount />
        </li>
        <li><a href="#">Services</a>
        <DropdownServices />
        </li>
        <li><a href="#">Resources</a>
        <DropdownResources />
        </li>
        <li><a href="#">Contact Us</a></li>
       </ul>
       <button className="cost-calculator-btn">Cost Calculator</button>
      </nav>
    </div>
  )
}

export default Navbar