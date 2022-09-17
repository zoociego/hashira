import './App.css';
import NavBar from './components/Nav/navBar.jsx';
import Layout from './components/Layout/Layout.jsx'
import music from './assets/theme.mp3'


function App() {
  return (
    <div>
      <audio src={music} autoPlay loop/>
      <Layout />
      <NavBar />
    </div>
  );
}

export default App;
