import './Share.css'
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';

const Share = () => {
    return(
        <div className='Home-Share-Container'>
            <p>Share <BsTwitter /> <BsFacebook /></p>
        </div>
    )
}

export default Share;