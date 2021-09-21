import React from 'react'
import { Fave } from './Fave'


export const FilmRow = (props) => {
    const posterUrl = 'https://image.tmdb.org/t/p/w780/'
    const year = new Date(props.film.release_date)


    return (
        <div onClick={()=>props.onDetailsClick(props.film.title)} className="film-row">
            <img src={posterUrl + props.film.poster_path} alt="" />

            <div className="film-summary">
                <h1>{props.film.title}</h1>
                <p>{year.getFullYear()}</p>
            </div>

            <Fave onFaveToggle = {props.onFaveToggle} isFave={props.isFave}/>
        </div>
    )
}
