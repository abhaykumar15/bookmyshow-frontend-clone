import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const API_KEY = "622c3950b109c5eecf8909ce300890d5"

const LandingHero = () => {
    const [movies, setMovies] = useState([])
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(data => setMovies(data.results.slice(0, 5)))
    }, [])

    useEffect(() => {
        if (movies.length === 0) return

        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % movies.length)
        }, 4000)

        return () => clearInterval(interval)
    }, [movies])

    if (!movies.length) return <div>Loading...</div>

    const activeMovie = movies[current]

    return (
        <div className="relative h-[80vh] w-full overflow-hidden">
            <img
                src={`https://image.tmdb.org/t/p/w500${activeMovie.backdrop_path}`}
                alt={activeMovie.title}
                className="absolute w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 text-white p-16">
                <h1 className="text-5xl font-bold">
                    {activeMovie.title}
                </h1>

                <p>⭐ {activeMovie.vote_average}/10</p>
            </div>
        </div>
    )
}

export default LandingHero
