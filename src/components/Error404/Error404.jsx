import React from 'react'
import wallpaper from '../../assets/wallpaper.png'
import { Link } from 'react-router-dom'
import './Error404.css'

const Error404 = () => {
  return (
        <>
        <div className='containerError'>
          <img src={wallpaper} className='wallpaper-error'/>
          <li className='error404'>
            <h1>404</h1>
          </li>
          <li className='not-found'>
            <h1>This page was not found in the alnair world.</h1>
          </li>
          <li className='wrong-star'>
            <h1>Maybe you have the wrong star.</h1>
          </li>
          <li className='error-button'>
            <Link
                to='/'
                className='hover-underline-animation-Navbar'
                >Back to home
            </Link>
          </li>
        </div>
        </>
  )
}

export default Error404
