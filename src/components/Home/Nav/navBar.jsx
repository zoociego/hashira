import './navBar.css'
import Utils from '../../../utils/Utils.jsx'
import { React, useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { BsDownload } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Login from '../Login/Login.jsx'
import Register from '../Register/Register'

const NavBar = () => {
  const [handleLogin, setHandleLogin] = useState(false)

  const handleClickLogin = () => {
    setHandleLogin(current => !current)
  }

  const [handleRegister, setHandleRegister] = useState(false)

  const handleClickRegister = (event) => {
    setHandleRegister(current => !current)
    handleClickLogin()
  }

  return (
        <>
        <nav className='Navbar-Container'>
            <ul className='ul-navBar'>
                <li className='li-navBar'>
                    <audio id="theme">
                        <source src={Utils.theme} type="audio/mp3"/>
                        Your browser does not support the audio element.
                    </audio>
                    <img
                        src={Utils.mute}
                        id='volume'
                        name='volume'
                        alt='volume img'
                        onClick={Utils.volumeChanger}
                        />
                </li>
                <li className='li-navBar'>
                    <Link to="/">
                            <img
                                id='img'
                                name='img'
                                src={Utils.logo}
                                alt="Hashira Logo"
                                className='Navbar-Logo'
                                onMouseOver={Utils.logoHover}
                                onMouseOut={Utils.normalLogo}
                            />
                    </Link>
                </li>
                <li className='li-navBar'>
                    <Link
                        to='/Rankeds'
                        className='hover-underline-animation-Navbar'
                        >Rankeds
                    </Link>
                </li>
                <li className='li-navBar'>
                    <Link
                        to='/Playguide'
                        className='hover-underline-animation-Navbar'
                        >Playguide
                    </Link>
                </li>
                <li className='li-navBar'>
                    <Link
                        to='/Game'
                        className='hover-underline-animation-Navbar'
                        >Game
                    </Link>
                </li>
                <li className='li-navBar'>
                    <Link
                        to='/Donation'
                        className='hover-underline-animation-Navbar'
                        >Donation
                    </Link>
                </li>
                <li className='li-navBar'>
                    <Link
                        to='/Support'
                        className='hover-underline-animation-Navbar'
                        >Support
                    </Link>
                </li>
            </ul>
            <ul className='ul-navBar-buttons'>
                <li className='li-navBar-button '>
                    <button className='Navbar-Button Navbar-Box-Effect'
                            onClick={handleClickLogin}
                            >Login <AiOutlineUser />
                    </button>
                </li>
                <li className='li-navBar-button'>
                    <a className='Navbar-Button Navbar-Download Navbar-Box-Effect Button'
                        href="https://drive.google.com/u/0/uc?id=1x3W6W9N0MD19-rNzbCCmFVj3j5X3vSKY&export=download&confirm=t&uuid=05abb873-5ef0-41fa-b496-b158cc0a9"
                        >Download <BsDownload className='Navbar-BsDownload'/>
                    </a>
                </li>
            </ul>
    </nav>
    {handleLogin && <Login
                        handleClickLogin={handleClickLogin}
                        handleClickRegister={handleClickRegister}
    />}
    {handleRegister && <Register handleClickRegister={handleClickRegister} />}
    </>
  )
}

export default NavBar
