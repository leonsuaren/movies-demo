import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navbar } from '../src/components/navbar';
import { Home } from '../src/views/home';
import { Favorites } from '../src/views/favorites';
import { NowPlaying } from '../src/views/now-playing';
import { Footer } from '../src/components/footer';
import { NotFound } from '../src/views/not-found';
import { SingleMovie } from '../src/views/single-movie';
import { Actors } from '../src/views/actors';

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
              <Route path='now-playing/' element={<NowPlaying />}/>
                <Route path='now-playing/movies/:_id' element={<SingleMovie />} />
              <Route path='favorites' element={<Favorites />} />
              <Route path='actors' element={<Actors />} />
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
