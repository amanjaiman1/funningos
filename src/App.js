import './App.css';
import Footer from './components/Footer';

// import { BrowserRouter, Switch, Routes, Route} from 'react-router-dom'; // note the addition of `Routes`
import Navbar from './components/Navbar';
import Activity from './components/Pages/Activity';

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Activity />
        <Footer />
    </div>
    </>
  );
}

export default App;
