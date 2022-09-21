import './App.css';
import Home from './components/Home/Home.jsx'
import Login from './components/Login/Login.jsx'
import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
      <div>
        <Routes>
          <Route path='/Login' element={<Login />}>
          </Route>
          <Route path='/' element={<Home />}>
          </Route>
        </Routes>
      </div>
  );
}

export default App;
