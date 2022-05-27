import React, { useEffect, useState} from 'react';
import Filters from './Filters';
import MovieCard from './MovieCard'
import Pagination from './Pagination';

const MoviesContainer = () => {

    
    const [movies, setMovies ] = useState([]);
    const [cloneMovies, setCloneMovies] = useState([])
    const [busqueda, setBusqueda] = useState('') // Valor input search

    const [page, setPage] = useState(1);

    useEffect(() => {
        getMovies();
    }, [page])

    function getMovies() {

        const requestApi = fetch(`https://api.themoviedb.org/3/movie/popular?api_key=6078c7eba978e8493393b380f5492868&language=es-ES&page=${page}`)
        
        requestApi.then( res => res.json())
        .then((data) => {
            setMovies(data.results)
            setCloneMovies(data.results)
        })
    }

    const searchHandler = (e) =>{

        setBusqueda(e.target.value)
        filter(e.target.value)

    } 

    console.log('clone movies',cloneMovies)

    function filter (value){

        let search = cloneMovies.filter(movie => {

            if (movie.title.toString().toLowerCase().includes(value.toLowerCase())) {

                return movie
            }
        });
        console.log('BUSQUEDA', search);
        setMovies(search)
        
    }


    return ( 
        <div className='mt-3'>

            <input type="search" 
            className='w-50 rounded bg-white' 
            placeholder='Busca tu película y prepara los pochoclos...' 
            style={{textAlign:'center'}}
            value={busqueda} 
            onChange={searchHandler}/>

            <div className='container-fluid d-flex flex-wrap justify-content-center mt-3' style={{background:'black'}}>
                {movies.length === 0?<p className='text-white fw-bold'>Lo sentimos no hemos encontrado la pelicula buscada</p>: movies.map(film => <MovieCard key={film.id} film={film}/>)}
            </div>
            {movies.length >= 20&&<Pagination page={page} setPage={setPage}/>}
        </div>
    )
}

export default MoviesContainer
