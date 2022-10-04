import NavBar from '../Nav/navBar.jsx';
import Layout from '../Layout/Layout.jsx'
import './News.css';

const News = () => {
    return(
        <>
        <Layout />
        <div className='ContenedorPrincipal'>
            <ul className='ContenedorSecunario'>
                <li className='Containers'>
                    <div className='ContainerImage'><img alt='a' className='Noticebg' src="https://wallpapercrafter.com/th800/132959-Hytale-RPG-video-games-video-game-art.jpg"/></div>
                    <a className='title'>
                        <h3>Hashira Ro Patch 1.54</h3>
                        <p className='body'>Al entrar a este mundo NPC ubicado en prontera mano izquierda como se muestra en este prohibirá el uso de equipos quest , vips , entre otras variables. para solo dar paso al uso de equipo de armeria en el cual se podrá comprar dentro del mismo mapa ( se parece a patricio estrella )</p>
                    </a>
                    <br />
                    <div className='Foot'>
                        <span className='date'>29/09/2022</span>
                        <span className='Notice'>Noticias</span>
                    </div>
                </li>

                <li className='Containers'>
                    <div className='ContainerImag-e'><img alt='a' className='Noticebg' src="https://wallpaperaccess.com/full/636544.jpg"/></div>
                    <a className='title'>
                        <h3>Hashira Ro Patch 1.54</h3>
                        <p className='body'>Al entrar a este mundo NPC ubicado en prontera mano izquierda como se muestra en imagen, este prohibirá el uso de equipos quest , vips , entre otras variables. para solo dar paso al uso de equipo de armeria en el cual se podrá comprar dentro del mismo mapa ( se parece a patricio estrella )</p>
                    </a>
                    <br />
                    <div className='Foot'>
                        <span className='date'>29/09/2022</span>
                        <span className='Notice'>Noticias</span>
                    </div>
                </li>
                
                <li className='Containers'>
                    <div className='ContainerImage'><img alt='a' className='Noticebg' src="https://wallpapercrafter.com/th800/132962-Hytale-RPG-video-games-video-game-art.jpg"/></div>
                    <a className='title'>
                        <h3>Hashira Ro Patch 1.54</h3>
                        <p className='body'>Al entrar a este mundo NPC ubicado en prontera mano izquierda como se muestra en imagen, este prohibirá el uso de equipos quest , vips , entre otras variables. para solo dar paso al uso de equipo de armeria en el cual se podrá comprar dentro del mismo mapa ( se parece a patricio estrella )</p>
                    </a>
                    <br />
                    <div className='Foot'>
                        <span className='date'>29/09/2022</span>
                        <span className='Notice'>Noticias</span>
                    </div>
                </li>
            </ul>
            <br />
            <br />
            <div className='categoryBox'>
                <li className='Category'>Mas Recientes</li>
                <li className='Category'>Noticias</li>
                <li className='Category'>Eventos</li>
            </div>
            <br />
            <br />
            
        </div>
        <div className='news'>
            </div>
        
        <NavBar />
        </>
        
    )
}

export default News;
        
 

