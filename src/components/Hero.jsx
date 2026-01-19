import React from 'react'

const Hero = () => {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide mb-3" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="../src/assets/Image/banner-1.jpg" className="d-block w-100" alt="banner1" />
        </div>
        <div className="carousel-item">
          <img src="../src/assets/Image/banner-2.jpg" className="d-block w-100" alt="banner2" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Hero
