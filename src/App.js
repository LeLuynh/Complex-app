import './main.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeGuest from './components/HomeGuest';
import About from './components/About';
import Term from './components/Term';

function App() {
  return (
    <Router>
      <div className='main'>
        <Header />
        <Routes>
          <Route exact path='/' element={< HomeGuest />}></Route>
          <Route exact path='/about-us' element={< About />}></Route>
          <Route exact path='/terms' element={< Term />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
