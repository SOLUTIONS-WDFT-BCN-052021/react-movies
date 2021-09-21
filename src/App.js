import React, { useState } from 'react';
import { FilmListing } from './components/FilmListing';
import { FilmDetail } from './components/FilmDetail';
import TMDB from './API/TMDB';
import axios from 'axios'

function App() {
	const [films, setFilms] = useState(TMDB.films);
	const [faves, setFaves] = useState([]);
	const [current, setCurrent] = useState({});

	const handleFaveToggle = (film) => {
		let newFaves = faves.slice();
		const filmIndex = newFaves.indexOf(film);

		if (filmIndex === -1) {
			console.log(`Adding ${film.title} to faves...`);
			newFaves.push(film);
		} else {
			console.log(`Removing ${film.title} from faves...`);
			newFaves.splice(filmIndex, 1);
		}
		setFaves(newFaves);
	};

	const handleDetailsClick = (film) => {
		console.log('Fetching details for ' + film);
		const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`
		axios.get(url).then(response => {
			console.log(response)
			setCurrent(response.data);
		})
	};

	return (
		<div className='film-library'>
			<FilmListing
				films={films}
				faves={faves}
				onFaveToggle={handleFaveToggle}
				onDetailsClick={handleDetailsClick}
			/>
			<FilmDetail film={current} />
		</div>
	);
}

export default App;
