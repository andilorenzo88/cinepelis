import { createContext, useState, useEffect } from "react"

const FavoriteContext = createContext()

export function FavoriteContextProvider ({children}){


    let myMovieInit = JSON.parse(localStorage.getItem('Favorites')) || []; 
    const [favoriteMovie, setFavoriteMovie] = useState(myMovieInit) // Estado inicial lo busca desde el local Storage, en el caso este vacio lo transforma en un Array vacio

    useEffect(() => {
        //se crea efecto para montar y actualizar favoritos
        localStorage.setItem('Favorites', JSON.stringify(favoriteMovie))    
    }, [favoriteMovie])
    

    function addMovieInFav(film){

        let isInFav = favoriteMovie.some((mid) => mid.id === film.id) // Busco si la pelicula ya existe entre los favoritos, obteniendo una respuesta booleana.

        if (isInFav) {
            //En el caso exista, clono la lista de favoritos
            let cloneFav = [...favoriteMovie]
            setFavoriteMovie(cloneFav)
        }else{
            //En el caso NO exista clono la lista de favoritos y agrego la pelicula seleccionada
            const newMovie = {...film}
            setFavoriteMovie([...favoriteMovie, newMovie]) 
            }
    }


    let favoriteLength = favoriteMovie.length // 

    function clearFav (){
        setFavoriteMovie([])
    }
    // VALUE DEL CONTEXTO 

    const context = {
        addMovieInFav: addMovieInFav,
        favoriteLength: favoriteLength,
        favoriteMovie: favoriteMovie,
        clearFav: clearFav,
    }

    return (
        <div>
            <FavoriteContext.Provider value={context}>
                {children}
            </FavoriteContext.Provider>
        </div>
    )

}

export default FavoriteContext

