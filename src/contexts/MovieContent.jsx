import { createContext,useState,useContext,useEffect } from "react";

const MovieContext= createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider =({children}) => {
    const [favourites,setFavourites] = useState([])

    useEffect(() => {
        const storedFavourites = localStorage.getItem('favourites')
        if (storedFavourites) {
            setFavourites(JSON.parse(storedFavourites))}
    },[])

    useEffect(()=> {
        localStorage.setItem('favourites',JSON.stringify(favourites))
    },[favourites])

    const addtoFavourites = (movie) => {
        setFavourites(prev => [...prev,movie])
    }

    const removeFavourites = (movieId) =>{
        setFavourites(prev => prev.filter(movie=> movie.id !== movieId))
    }

    const isfavourite = (movieId) => {
        return favourites.some(movie=>movie.id === movieId)
    }
   const value={favourites,addtoFavourites,removeFavourites,isfavourite}
    return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
}