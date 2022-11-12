import React from 'react'
import './Layout.css'
import video from '../../../assets/example.webm'

const Layout = () => {
  return (
       <div className='Layout-Container'>
            <video loop autoPlay muted className='video-Layout'>
                <source src={video}/>
            </video>
        </div>
  )
}

export default Layout
