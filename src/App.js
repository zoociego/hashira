import Home from './components/Home/Home.jsx'
import News from './components/News/News.jsx'
import Information from './components/Information/Information.jsx'
import Donation from './components/Donation/Donation.jsx'
import NavBar from './components/Home/Nav/navBar.jsx'
import Footer from './components/Footer/Footer.jsx'
import {
  Routes,
  Route
} from "react-router-dom";

function App() {
    return (
      <>
        <Routes>
          <Route 
            path='/News' 
            element={<News />}>
          </Route>
          <Route 
            path='/Donation' 
            element={<Donation />}>
          </Route>
          <Route 
            path='/Information' 
            element={<Information/>}>
          </Route>
          <Route 
            path='/' 
            element={<Home />}>
          </Route>
        </Routes>
        <NavBar />
        <Footer /> 
      </>
  );
}

export default App;