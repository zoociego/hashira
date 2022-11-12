import React from 'react'
import './Footer.css'
import Utils from '../../utils/Utils.jsx'

const Footer = () => {
  return (
        <div className='Footer-Container'>
            <div>
                <img src={Utils.logo}
                        alt="logo"
                        className='Footer-Logo'
                />
            </div>
            <div className='Information-Buttons'>
                <a className='Information-Buttons-text'
                    href=""
                >Privacy Policy</a>
                <a className='Information-Buttons-text'
                    href=""
                >About us</a>
                <a className='Information-Buttons-text'
                    href=""
                >Contact us</a>
            </div>
            <div className='Game-Information-Text'>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ipsa non tempora soluta, modi enim reiciendis blanditiis quod voluptatem nihil quibusdam vero minus perspiciatis iste laboriosam aperiam! Ducimus, ex dolor perspiciatis qui assumenda dicta officiis recusandae sit? Autem quo accusamus delectus fugit quisquam, vero corrupti aspernatur eos at harum voluptates.
                </p>
                <br />
                <p>Copyright © HASHIRA-RO. All Rights Reserved.</p>
            </div>
        </div>
  )
}

export default Footer
