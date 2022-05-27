import React, { useContext } from "react"
import FavoriteContext from "../context/FavoritesContext"
import FavoriteCard from "./FavoriteCard"
import {FaHome} from 'react-icons/fa'
import { NavLink } from "react-router-dom"



const FavoritesContainer =()=>{
    
    const {favoriteMovie, clearFav} = useContext(FavoriteContext)

 
    return (
        <div  style={{height:'100vh'}}>
            <div className='fav-header d-flex justify-content-between m-5'>
                <div className="home">
                        <NavLink to='/' className='text-decoration-none '><p className='text-white fw-bold'> <FaHome style={{marginRight:'5px', marginBottom:'3px'}}/>Home</p></NavLink>
                </div>
                <div className="btn-clear">
                    <button type='button' className=' btn text-white border-none bg-danger fs-6' onClick={clearFav}>Vaciar lista</button>
                </div>
            </div>
            
            <div className=' container w-100 d-flex justify-content-start gap-5 flex-wrap ' style={{marginTop:'100px'}}>
                {favoriteMovie.length > 0 ? favoriteMovie.map(fav => <FavoriteCard key={fav.id} fav={fav}/>): <h3 className='text-white text-center w-100 mt-5 '>Eres un marciano.. no te gusta ninguna pelicula!</h3>  }
            </div>
        </div>
        
    )
}

export default FavoritesContainer