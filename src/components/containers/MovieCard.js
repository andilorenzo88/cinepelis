import React, { useContext, useState} from 'react'
import { NavLink } from 'react-router-dom'
import FavoriteContext from '../context/FavoritesContext'
import { FaHeart } from 'react-icons/fa'

const MovieCard = ({film}) => {

    const {addMovieInFav} = useContext(FavoriteContext)
    

    return (
        <>
            <div className=" m-3 p-2 border bg-dark  d-flex flex-column justify-content-between " style={{width:'16rem', alignItems:'center'}}>
                <div className='rounded mb-2'>
                    {/* <h5 className="card-title text-white  p-1  w-100 rounded" style={{background:'#2980B9'}}>{film.title}</h5> */}
                    <NavLink to={`/movie/${film.id}`}>
                        <img className='w-100 rounded' src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}/>
                    </NavLink>
                    <p className='text-white m-1 text-start pt-1 text-center fw-bold'> Valoración:  
                        <span className='text-warning fw-bold m-1'>
                            {film.vote_average}
                        </span>
                    </p>
                </div>
                <div className='bg-dark'>
                    <button 
                    className="btn btn-warning text-dark fst-italic fw-bold " 
                    style={{padding:'5px', height:'1.7rem', lineHeight:'50%'}} 
                    onClick={()=>{addMovieInFav(film)}}>Añadir a favoritas</button>
                </div>
            </div>
        </>
    )
}

export default MovieCard
