import React from 'react'
import './navbar.css' 

const Navbar = () => {
  return (
    <div>
      <header className="header">
        <img src="../src/assets/Image/logo.png" alt="logo" className='logo' style={{width: '100px'}} />
        <input type="text" className="search" placeholder="Search for Products, Brands and More" />
          <div className="header-icons">
            <span>Tim ▼</span>
            <span>Wishlist</span>
            <span>Cart</span>
          </div>
      </header>
    </div>
  )
}

export default Navbar
