import MovieCard from "../components/MovieCard"
import { useMovieContext } from "../contexts/MovieContext"
import "../css/Favorites.css"

function Favorites() {

    const { favorites } = useMovieContext()

    return (

        <div className="favorites">

            <h2>Your Favorites</h2>

            {favorites.length > 0 ? (

                <div className="movies-grid">

                    {favorites.map(movie => (

                        <MovieCard
                            movie={movie}
                            key={movie.id}
                        />

                    ))}

                </div>

            ) : (

                <p>No favorite movies yet.</p>

            )}

        </div>
    )
}

export default Favorites