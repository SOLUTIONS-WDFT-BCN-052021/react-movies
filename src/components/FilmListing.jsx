import React, { useState } from 'react'
import { FilmRow } from './FilmRow'

export const FilmListing = (props) => {

    const [filter, setFilter] = useState('all')

    const allFilms = props.films.map(film => {

        return <FilmRow title={film.title} year={film.release_date} poster={film.poster_path} />
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
            <span className="section-count">0</span>
                    </div>
                </div>

                {allFilms}
            </div>
        </>
    )
}
