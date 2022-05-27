import { NavLink } from "react-router-dom"

const FavoriteCard = ({fav}) => {


    return (
        <>
            <div className=" row text-white" style={{width:'15rem'}}>
                <div className="col">
                    <div className="card w-100 bg-black ">
                        <NavLink to={`/movie/${fav.id}`}><img src={`https://image.tmdb.org/t/p/w500/${fav.poster_path}`} className='w-100'/></NavLink>
                        {/* <div class="card-body bg-dark ">
                            <h5 class="card-title bg-dark">{fav.title}</h5>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}


export default FavoriteCard
