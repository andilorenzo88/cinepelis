import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import FavoriteContext from '../context/FavoritesContext'

const Header = () => {

  const {favoriteLength} = useContext(FavoriteContext)

  

  return (
      <div className=''   >
          <div className='header text-white border-bottom mt-2 bg-black ' style={{height:'6rem', width:'100vw'}}>
            <NavLink to='/' className='text-decoration-none text-white'><h1 className='fw-bolder'>CinéPelis</h1></NavLink>
          </div>
          <div className="navbar border-bottom d-flex " style={{height:''}}>
            <NavLink to='/favorites' className='text-decoration-none'><p  className='text-warning text-center m-auto fw-bold'style={{width:'100vw'}}>Favoritas <span className='bg-warning position-absolute fw-bold text-black' style={{borderRadius:'50%', width:'25px', marginLeft:'3px'}}> {favoriteLength>0&&favoriteLength} </span> </p></NavLink>
          </div>
    </div>

  )
}

export default Header
