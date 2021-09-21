import React, { useState } from 'react';
import { FilmListing } from './components/FilmListing';
import { FilmDetail } from './components/FilmDetail';
import TMDB from './API/TMDB';

function App() {
	const [films, setFilms] = useState(TMDB.films);
	const [faves, setFaves] = useState([]);
	const [current, setCurrent] = useState({});

	const handleFaveToggle = (film) => {
		// film is a film object from the films array, passed when add/remove film icon is clicked
		let newFaves = faves.slice(); // copy the state into a new variable
		const filmIndex = newFaves.indexOf(film);
		// when indexOf returns -1 that means the element does not exist in the array
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
		setCurrent(film);
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
