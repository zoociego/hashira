import NavBar from './Nav/navBar.jsx';
import Layout from './Layout/Layout.jsx';
import Ranking from './Ranking/Ranking.jsx'
import Footer from './Footer/Footer.jsx'

const Home = () => {
    return(
        <>
            <Layout />
            <NavBar />
            <Ranking />
            <Footer />
        </>
    )
}

export default Home;