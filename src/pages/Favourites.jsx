import "../css/Favourites.css"
import { useMovieContext } from "../contexts/MovieContent"
import MovieCard from "../components/MovieCard"
function Favourites(){
    const {favourites}=useMovieContext();
    if(favourites) {
        return <div className="movies-grid">
            {favourites.map
                (movie =>
                    (
                     <MovieCard movie={movie} key={movie.id}/>
                       )
                    )
                
            }
        </div>

    }
    return <div className="favourites-empty">
        <h2>No Favourite Movies</h2>
        <p>Start adding movies to your favourites and they will appear here. ;p </p>
    </div>
}
export default Favourites