import React from 'react'
import Home from './components/Home/Home.jsx'
import News from './components/News/News.jsx'
import Information from './components/Information/Information.jsx'
import Donation from './components/Donation/Donation.jsx'
import NavBar from './components/Home/Nav/navBar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Error404 from './components/Error404/Error404.jsx'
import {
  Routes,
  Route
} from 'react-router-dom'

function App () {
  return (
      <>
        <NavBar />
        <Routes>
          <Route
            path='/'
            element={<Home />}>
          </Route>
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
            element={<Information />}>
          </Route>
          <Route
            path='*'
            element={<Error404 />}>
          </Route>
        </Routes>
        <Footer />
      </>
  )
}

export default App
