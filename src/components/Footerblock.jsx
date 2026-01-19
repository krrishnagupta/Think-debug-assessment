import React from 'react'
import './footer.css'


const Footerblock = () => {
  return (
    <div className="footer">

      <div>
        <img src="../src/assets/Image/logo.png" alt="logo" width="150px" />
      </div>
      <div className="footer-column">
        <h4>Help Center</h4>
        <ul>
          <li>FAQ</li>
          <li>About E-Commerce</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Quick Links</h4>
        <ul>
          <li>Track Order</li>
          <li>Services</li>
          <li>Help</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Buy on E-commerce</h4>
        <ul>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          
        </ul>
      </div>
      <div className="footer-column">
        <h4>Download App</h4>
        <img src="Googleplay.png" alt="Google Play" width="20" />
        <img src="appstore.png" alt="App Store" width="100" />
      </div>

    </div>
  )
}

export default Footerblock
