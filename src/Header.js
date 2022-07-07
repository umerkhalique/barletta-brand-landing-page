import React from 'react';
import ReactDOM from 'react-dom';
import './Header.css';
import './Content.css';
import companyLogo from './footer_logo.png';

function Header() {
    return (
<div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid amz">
    <div className="collapse navbar-collapse" id="navbarNav" style={{backgroundColor: 'white'}}>
      <ul className="navbar-nav navv">
        <li className="nav-item nav-item-class">
          <a className="nav-link active font-display" aria-current="page" href="#">sales</a>
        </li>
        <li className="nav-item nav-item-class">
          <a className="nav-link active font-display" href="#">rentals</a>
        </li>
        <li className="nav-item nav-item-class">
          <a className="nav-link active font-display" href="#">service</a>
        </li>
        <li className="nav-item nav-item-class">
          <a className="nav-link active font-display" href="#">About us</a>
        </li>
        <li className="nav-item nav-item-class">
          <a className="nav-link active font-display" href="#">Contact</a>
        </li>
        <li className="nav-item nav-item-class">
        
        </li>
      </ul>
      
      <div className="imgg">
      <a href="/"><img src={companyLogo} /></a>
      </div>
      <ul className="navbar-nav navv">
        
        <li className="nav-item nav-item-class">
          <a className="nav-link active font-display" href="#">call</a>
        </li>
        <li className="nav-item nav-item-class">
          <a className="nav-link active font-display" href="#">pay my bill</a>
        </li>
        <li className="nav-item nav-item-class">
          <a className="nav-link active font-display" href="#">seasonal recreation</a>
        </li>
        <li className="nav-item nav-item-class">
        
        </li>
      </ul>
    </div>
  </div>
 </nav>

</div>

    )
  }
  
  export default Header;