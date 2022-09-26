import './navBar.css';
import Utils from './navBarUtils.jsx';
import { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai'
import { BsDownload } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import Login from '../Login/Login.jsx';
import Register from '../Register/Register';

const NavBar = () => {

    const [handleLogin, setHandleLogin] = useState(false);

    const handleClickLogin = () => {
        setHandleLogin(current => !current);
    };

    const [handleRegister, setHandleRegister] = useState(false);

    const handleClickRegister = (event) => {
        setHandleRegister(current => !current);
        handleClickLogin()
    };

    return(
        <>
        <header className='container'>
                <nav >
                    <ul className='ul-navBar'>
                    <audio id="theme">
                        <source src={Utils.theme} type="audio/mp3"/>
                        Your browser does not support the audio element.
                    </audio>
                        <li className='li-navBar'>
                            <img
                                src={Utils.mute} 
                                id='volume'
                                name='volume'
                                alt='volume img'
                                onClick={Utils.volumeChanger}
                                />
                        </li>
                        <li className='li-navBar'> 
                            <Link  to="/">
                                    <img
                                        id='img'
                                        name='img'
                                        src={Utils.logo} 
                                        alt="Hashira Logo"  
                                        className='logo'
                                        onMouseOver={Utils.logoHover} 
                                        onMouseOut={Utils.normalLogo}
                                    />
                            </Link> 
                        </li>
                        <li className='li-navBar'> 
                            <Link 
                                to='/Rankeds' 
                                className='hover-underline-animation'
                                >Rankeds
                            </Link> 
                        </li>
                        <li className='li-navBar'> 
                            <Link 
                                to='/Playguide' 
                                className='hover-underline-animation'
                                >Playguide
                            </Link> 
                        </li>
                        <li className='li-navBar'> 
                            <Link 
                                to='/Game' 
                                className='hover-underline-animation'
                                >Game
                            </Link> 
                        </li>
                        <li className='li-navBar'> 
                            <Link 
                                to='/Donation' 
                                className='hover-underline-animation'
                                >Donation
                            </Link> 
                        </li>
                        <li className='li-navBar'> 
                            <Link 
                                to='/Support' 
                                className='hover-underline-animation'
                                >Support
                            </Link> 
                        </li>
                    </ul>
                </nav>
            <div className='grid-container '>
            
                <button 
                    className='grid-item box-effect loginButton' 
                    onClick={handleClickLogin}

                >
                    Login <AiOutlineUser />
                </button>

                <a  className='grid-item box-effect' 
                   href="https://drive.google.com/u/0/uc?id=1x3W6W9N0MD19-rNzbCCmFVj3j5X3vSKY&export=download&confirm=t&uuid=05abb873-5ef0-41fa-b496-b158cc0a9"
                >Download <BsDownload /></a>

            </div>
    </header>
    {handleLogin && <Login 
                        handleClickLogin={handleClickLogin} 
                        handleClickRegister={handleClickRegister}
    />}
    {handleRegister && <Register handleClickRegister={handleClickRegister} />}
    </>
)}

export default NavBar;