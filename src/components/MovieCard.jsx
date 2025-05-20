import "../css/Moviecard.css"
import { useMovieContext } from "../contexts/MovieContent"
function MovieCard({movie}){
    const {addtoFavourites,removeFavourites,isfavourite} = useMovieContext()
    const favourite=isfavourite(movie.id)
    function onFclick(e){
        e.preventDefault()
        if(favourite) removeFavourites(movie.id)
            else addtoFavourites(movie)
        
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <div className="movie-overlay">
                <button classname={`fav-btn ${favourite?"active":""}`} onClick={onFclick}>❤️</button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split("-")[0]}</p>
        </div>
    </div>
}
export default MovieCard