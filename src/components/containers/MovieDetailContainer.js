import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import MovieDetail from './MovieDetail'

const MovieDetailContainer = () => {

    const {id} = useParams()
    const [detailMovie, setDetailMovie] = useState([]);
    const [cast, setCast] = useState([]);
    const [genre, setGenre] = useState([])

    function getDetailMovie() {

        const apiDetailMovie = fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=6078c7eba978e8493393b380f5492868&language=es-ES`)
        const apiDetailCast = fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=6078c7eba978e8493393b380f5492868&language=es-ES`)

        apiDetailMovie.then(res => res.json())
        .then((data) => {
            setDetailMovie(data)
            setGenre(data.genres)
        })

        apiDetailCast.then(res => res.json())
        .then((data) => {
            setCast(data.cast)
        })   

    }

    useEffect(() => {

        getDetailMovie()

    }, [])
    
    return (
        <>
            <MovieDetail detail={detailMovie} cast={cast} genre={genre}/>
        </>
    )
}

export default MovieDetailContainer
