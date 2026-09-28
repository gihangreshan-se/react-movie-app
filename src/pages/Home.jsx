import MovieCard from "../components/MovieCard";
import { useState, useEffect } from 'react';
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css"
function Home() {
    const [searchQuery, setsearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error,setError] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
    const loadPopularMovies = async () => {
         try {
            const popularMovies = await getPopularMovies()
            setMovies(popularMovies)
        } catch (err) {
            console.log(err)
            setError("Failed to load Movies...")
         }
        finally {
                setLoading(false)
             }

        }
        loadPopularMovies()

    }, [])

    const handleSearch = async (e) => {
        e.preventDefault() // prevent refresh page
        if (!searchQuery.trim()) return
        if (loading) return
        

        setLoading(true)
        try{
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults);
            setError(null);

        }catch(err){
            console.log(err);
            setError("Failed to search movies..")


        }finally{
            setLoading(false)
        }
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text"
                    name=""
                    id=""
                    className="search-input"
                    placeholder="Search for movies"
                    value={searchQuery}
                    onChange={(e) => setsearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>

            </form>
            <div className="movies-grid">
                {movies.map((movie =>
                    <MovieCard movie={movie} key={(movie.id)} />
                ))}
            </div>
        </div>
    );
}

export default Home