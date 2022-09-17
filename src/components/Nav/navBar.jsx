import './navBar.css';
import logo from '../../assets/probando.png'
import logo2 from '../../assets/probando2.png'
import { TbUserCircle } from 'react-icons/tb'
import { BsDownload } from 'react-icons/bs'

const Home = () => {

    const imgHover = () => {
        let img = document.getElementById('img')
            img.setAttribute('src', logo2)
    }
    const normalImg = () => {
        let img = document.querySelector('#img')
        img.setAttribute('src', logo) 
    }

    return(
        <header className='container'>
            <nav >
                <ul>
                    <li > <a  href="">
                                <img
                                    id='img'
                                    name='img'
                                    src={logo} 
                                    alt="Hashira Logo"  
                                    className='logo'
                                    onMouseOver={imgHover} 
                                    onMouseOut={normalImg}/>
                        </a> 
                    </li>
                    <li> <a className='hover-underline-animation' href="">News</a> </li>
                    <li> <a className='hover-underline-animation' href="">Playguide</a> </li>
                    <li> <a className='hover-underline-animation' href="">Game</a> </li>
                    <li> <a className='hover-underline-animation' href="">Library</a> </li>
                    <li> <a className='hover-underline-animation' href="">Support</a> </li>
                </ul>
            </nav>
            <div className='grid-container '>

                <a className='grid-item login'  href="">
                    Login <TbUserCircle />
                </a>

                <a  className='grid-item btn' 
                   href="https://drive.google.com/u/0/uc?id=1x3W6W9N0MD19-rNzbCCmFVj3j5X3vSKY&export=download&confirm=t&uuid=05abb873-5ef0-41fa-b496-b158cc0a9"
                >Download <BsDownload /></a>
            
            </div>
        </header>
    )
}
export default Home