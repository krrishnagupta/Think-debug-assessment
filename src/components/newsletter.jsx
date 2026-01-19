import React from 'react'
import './footer.css'

const Newletter = () => {
  return (
    <div>
      <section class="newsletter">
        <div class="newsletter over">
          <h3>Join Our Newsletter</h3>
          <div class="Newsletter-form">
            <input type="email" placeholder="Enter Your Email" />
              <button>Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Newletter
