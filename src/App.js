import { FilmListing } from './components/FilmListing';
import { FilmDetail } from './components/FilmDetail';
import TMDB from './API/TMDB'

function App() {
  return (
    <div className="film-library">
      <FilmListing films= {TMDB.films} />
      <FilmDetail films= {TMDB.films} />
  </div>
  );
}

export default App;
