import React, { useContext } from 'react';
import FavoriteContext from '../context/FavoritesContext';

const Footer = () => {

    const {favoriteMovie} = useContext(FavoriteContext)

    console.log('cantidad', favoriteMovie.length)


    return(
        <>
        {/* <div className=' d-flex bottom-0 positiona-absolute container-fluid' style={{marginTop:'100px'}} >  
            <div className='row'>
                <div className=' col text-white fw-bold fs-1 bg-dark mt-5  bg-danger ' style={{height:'100px'}}> Footer</div>
            </div>
        </div>  */}
        </>
    )
}

export default Footer