import React from 'react'
import { Fave } from './Fave'

export const FilmRow = (props) => {
    const posterUrl = 'https://image.tmdb.org/t/p/w780/'
    const year = new Date(props.year)

    const handleDetailsClick = (film) => {
        console.log('Fetching details for ' + film)
    }

    return (
        <div onClick={()=>handleDetailsClick(props.title)} className="film-row">
            <img src={posterUrl + props.poster} alt="" />

            <div className="film-summary">
                <h1>{props.title}</h1>
                <p>{year.getFullYear()}</p>
            </div>

            <Fave/>
        </div>
    )
}
