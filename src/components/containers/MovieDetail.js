import React, {useState}from 'react'
import { FaHome } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import Cast from './Cast'


const MovieDetail = ({detail,cast,genre}) => {

    const [completeCast, setCompleteCast] = useState(false)

    function GetCast() {
        if (!completeCast) {
            setCompleteCast(true)            
        }else{
            setCompleteCast(false)
        }
    }

    
    return (
        <div className='container mt-5 '>
            <div className=" d-flex home">
                    <NavLink to='/' className='text-decoration-none'>
                        <p className='text-white fw-bold'> <FaHome style={{marginRight:'5px', marginBottom:'3px'}}/>
                            Home
                        </p>
                    </NavLink>
            </div>
            <div className="row " style={{width:'90%',margin:'auto'}}>
                <div className="col-sm-4 ">
                    <img className='w-100' src={`https://image.tmdb.org/t/p/w500/${detail.poster_path}`}/>
                </div>
                <div className="col-sm-8 text-white " >

                    <p className='bg-dark rounded fw-bold'style={{height:'50px', lineHeight:'50px', textTransform:'uppercase'}}>{detail.title}</p>
                    <p className='text-start fw-bold'>Genero: <span className='text-info'>{genre.map(g=> g.name).join(' / ')}</span>  </p>
                    <p className='text-black text-center fw-bold' style={{background:'orange', borderRadius:'50%', width:'25px', margin:'5px'}}>{detail.vote_average}</p>
                    <p className=' text-start mt-5 text-white fw-bold' style={{fontSize:'1rem'}}>{detail.overview}</p>

                </div>
            </div>
            <div className='row text-white fw-bold m-auto mt-5 rounded' style={{width:'85%'}}>
                <p className='m-auto p-1 rounded bg-dark' style={{background:'#34495E', boxShadow:'1px 1px 10px white'}}>
                    Elenco 
                </p>
                <div className='d-flex gap-3 flex-wrap mt-5 w-100 justify-content-center'>
                    {cast.slice(0,10).map( elenco => <Cast key={elenco.id} elenco={elenco}/>)} 
                </div>
                <p className='text-white fw-bold' onClick={GetCast}>Ver elenco completo</p>
                <div className='d-flex gap-3 flex-wrap mt-3 w-100 justify-content-center'>
                    {completeCast&&cast.slice(9, cast.lenght).map( elenco => <Cast key={elenco.id} elenco={elenco}/>)} 
                </div>

            </div>
        </div>
    )
}

export default MovieDetail
