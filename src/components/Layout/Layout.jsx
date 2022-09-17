import './Layout.css'
import video from '../../assets/example2.mp4'

const Layout = () => {
    return(
        <div>
            <video loop autoPlay muted className='video'>
                <source 
                    src={video}/>
            </video>
        </div>
    )
}

export default Layout
