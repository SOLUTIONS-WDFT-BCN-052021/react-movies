import React, { useState } from 'react'
import { FilmRow } from './FilmRow'

export const FilmListing = (props) => {

    const [filter, setFilter] = useState('all')

    const allFilms = props.films.map(film => {

        return <FilmRow film={film}
      key={film.id} onFaveToggle={() => props.onFaveToggle(film)} isFave={props.faves.includes(film)} onDetailsClick ={() => props.onDetailsClick(film)}/>
    })

    const faveFilms = props.faves.map(film => {

        return <FilmRow film={film}
      key={film.id} onFaveToggle={() => props.onFaveToggle(film)} isFave={props.faves.includes(film)} onDetailsClick ={() => props.onDetailsClick(film)}/>
    })

    const handleFilterClick = (filter) => {
        setFilter(filter)
    }

    return (
        <>
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                <div className="film-list-filters">
                    <div onClick={()=>handleFilterClick('all')} className={`film-list-filter ${filter === 'all' ? 'is-active' : ''}`}>
                        ALL
            <span className="section-count">{props.films.length}</span>
                    </div>
                    <div onClick={()=>handleFilterClick('faves')} className={`film-list-filter ${filter === 'faves' ? 'is-active' : ''}`}>
                        FAVES
    <span className="section-count">{props.faves.length}</span>
                    </div>
                </div>

                { filter === "faves" ?  faveFilms : allFilms }
            </div>
        </>
    )
}
