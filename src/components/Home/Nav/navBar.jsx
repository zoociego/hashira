import './navBar.css';
import theme from '../../../assets/theme.mp3'
import logo from '../../../assets/probando.png'
import logo2 from '../../../assets/probando2.png'
import volume from '../../../assets/volume.png'
import mute from '../../../assets/mute.png'
import { AiOutlineUser } from 'react-icons/ai'
import { BsDownload } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import Login from '../../Login/Login.jsx';
import Register from '../../Login/Register';

const Home = () => {

    const logoHover = () => {
        let img = document.getElementById('img')
            img.setAttribute('src', logo2)
    }
    const normalLogo = () => {
        let img = document.getElementById('img')
        img.setAttribute('src', logo) 
    }

    const volumeChanger = () => {
        let audio = document.getElementById('theme')
        let volumeValue = document.getElementById('volume')
        let volumeSrc = volumeValue.getAttribute('src')
        if(volumeSrc === volume) {
            volumeValue.setAttribute('src', mute)
            audio.volume = 0;
        }else {
            volumeValue.setAttribute('src', volume)
            audio.play()
            audio.volume = 1;
            audio.setAttribute('loop', '')
        }
    }

    return(
        <>
        <header className='container'>
                <nav >
                    <ul>
                    <audio id="theme">
                        <source src={theme} type="audio/mp3"/>
                        Your browser does not support the audio element.
                    </audio>
                        <li ><img
                                src={mute} 
                                id='volume'
                                name='volume'
                                onClick={volumeChanger}
                                /></li>
                        <li > <Link  to="/">
                                    <img
                                        id='img'
                                        name='img'
                                        src={logo} 
                                        alt="Hashira Logo"  
                                        className='logo'
                                        onMouseOver={logoHover} 
                                        onMouseOut={normalLogo}
                            /></Link> 
                        </li>
                        <li> <Link to='/Rankeds' className='hover-underline-animation'>Rankeds</Link> </li>
                        <li> <Link to='/Playguide' className='hover-underline-animation'>Playguide</Link> </li>
                        <li> <Link to='/Game' className='hover-underline-animation'>Game</Link> </li>
                        <li> <Link to='/Donation' className='hover-underline-animation'>Donation</Link> </li>
                        <li> <Link to='/Support' className='hover-underline-animation'>Support</Link> </li>
                    </ul>
                </nav>
            <div className='grid-container '>
            
                <a to='' className='grid-item box-effect'>
                    Login <AiOutlineUser />
                </a>

                <a  className='grid-item box-effect' 
                   href="https://drive.google.com/u/0/uc?id=1x3W6W9N0MD19-rNzbCCmFVj3j5X3vSKY&export=download&confirm=t&uuid=05abb873-5ef0-41fa-b496-b158cc0a9"
                >Download <BsDownload /></a>

            </div>
    </header>
    <Login />
    <Register />
    </>
)}

export default Home