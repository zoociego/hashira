import './Donation.css'
import React from 'react'

const Donation = () => {
  return (
        <>
        <div className="Donation-Container">
          <div className='Donation-content'>
            <a href target='_blank' className='Banner-container'>
              <img src="https://upload-static.hoyoverse.com/payment-center/2020/08/07/0ff079b16fe6f9dfbf4eeb6e88a760b6_3134491283013841501.png"
                   alt="Banner"
                   className='Donation-Banner'
                   draggable='false'
              />
            </a>
            <div className="Payment-container">
              <div>
                <div className="Donation-user">
                  <h3 className="title-donation-user">
                    Donation
                  </h3>
                  <div className="Donation-user-content">
                    <div className="Donation-user-info">
                      <p className='Donation-user-p'>
                        <span className='Donation-user-span'>Server:</span>
                        <span className='Donation-user-span'>America</span>
                      </p>
                      <p className='Donation-user-p'>
                        <span className='Donation-user-span'>UID:</span>
                        <span className='Donation-user-span'>00000000</span>
                      </p>
                      <p className='Donation-user-p'>
                        <span className='Donation-user-span'>User:</span>
                        <span title='Username' className='Donation-username'>zoociego</span>
                      </p>
                    </div>
                    <div className="Donation-user-passport">
                      <p className='Donation-user-passport-p'>
                        <span className='Donation-fix'>Hashira email: </span>
                        <span className='Donation-user-passport-span'>zoociego@gmail.com</span>
                      </p>
                      <button className='Donation-button'>
                        <span className='Donation-button-span'> Cambiar cuenta {'>'}</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="Donation-platform"></div>
                <div className="Donation-product"></div>
              </div>
            </div>
          </div>
        </div>
        </>
  )
}

export default Donation
