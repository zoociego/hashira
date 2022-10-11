import Share from './Share/Share.jsx';
import Layout from './Layout/Layout.jsx';
import NavBar from './Nav/navBar.jsx';
import Ranking from './Ranking/Ranking.jsx'
import Footer from './Footer/Footer.jsx'

const Home = () => {
    return(
        <>
            <Layout />
            <Ranking />
            <Footer />
            <Share />
            <NavBar />
        </>
    )
}

export default Home;