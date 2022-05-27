import React, { useEffect, useState } from 'react'

const Filters = ({filterGenre}) => {

    const [generos, setGeneros] = useState([])


    useEffect(() => {
        
        const requestApi = fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=6078c7eba978e8493393b380f5492868&language=es-ES')

        requestApi.then( res => res.json())
            .then( data => setGeneros(data.genres))

    }, [])


    return (
   
        <div>
                <form className="d-flex gap-3 justify-content-center">
                    <select className ="bg-dark  text-white rounded p-1 fw-bold border" name="genero"   id="genero" onChange={filterGenre}>
                        <option value="">Genero</option>
                        {generos.map(gen=> <option key={gen.id} value={gen.name}>{gen.name}</option>)}
                    </select>
                    <select className ="bg-dark  text-white rounded p-1 fw-bold border" name="puntaje" id="puntaje" >
                        <option value="">Puntaje</option>
                    
                    </select>

                </form>
        </div>
        
    )
}

export default Filters
