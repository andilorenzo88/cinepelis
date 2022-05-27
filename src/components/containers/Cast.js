import React from 'react'

const Cast = ({elenco}) => {
    return (
        <div style={{width:'10rem'}}> 
            <img src={`https://image.tmdb.org/t/p/w500/${elenco.profile_path}`} className='w-100'/>
            <p className='text-white mt-1b bg-dark'>{elenco.original_name} <span className='text-danger fw-bold bg-dark'>interpreta </span> {elenco.character}</p>
        </div>
    )
}

export default Cast
