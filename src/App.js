import Home from './components/Home/Home.jsx'
import News from './components/News/News.jsx'
import {
  Routes,
  Route
} from "react-router-dom";

function App() {
    return (
      <>
        <Routes>
          <Route 
            path='/' 
            element={<Home />}>
          </Route>
          <Route 
            path='/News' 
            element={<News/>}>
          </Route>
        </Routes> 
      </>
  );
}

export default App;