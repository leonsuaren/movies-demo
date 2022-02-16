import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navbar } from '../src/components/navbar';
import { Home } from '../src/views/home';
import { Favorites } from '../src/views/favorites';
import { NowPlaying } from '../src/views/now-playing';
import { Footer } from '../src/components/footer';
import { NotFound } from '../src/views/not-found';

import { MoviesDataBasePovider } from './context';

function App() {
  return (
    <div>
      <MoviesDataBasePovider>
        <Router>
          <Navbar />
          <div className='container box'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='now-playing' element={<NowPlaying />} />
              <Route path='favorites' element={<Favorites />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </MoviesDataBasePovider>
    </div>
  );
}

export default App;
