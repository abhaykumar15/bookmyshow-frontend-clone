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
    }, 5000)
    return () => clearInterval(interval)
  }, [movies])

  if (!movies.length)
    return (
      <div className="h-[80vh] flex items-center justify-center bg-gradient-to-r from-purple-700 to-indigo-600 text-white text-xl animate-pulse">
        Loading latest movies...
      </div>
    )

  const activeMovie = movies[current]

  return (
    <div className="relative h-[85vh] w-full overflow-hidden rounded-3xl">

      <img
        src={`https://image.tmdb.org/t/p/original${activeMovie.backdrop_path}`}
        alt={activeMovie.title}
        className="absolute w-full h-full object-cover scale-105 transition duration-700"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 via-indigo-900/50 to-purple-900/40 rounded-3xl"></div>

      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-16 max-w-3xl text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
          {activeMovie.title}
        </h1>

        <p className="text-yellow-400 font-semibold mb-2 text-lg">
          ⭐ {activeMovie.vote_average.toFixed(1)} / 10
        </p>

        <p className="text-gray-200 mb-6 line-clamp-3">
          {activeMovie.overview}
        </p>

        <div className="flex gap-4">
          <Link
            to={`/booking/${activeMovie.id}`}
            className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 px-6 py-3 rounded-2xl text-lg font-semibold transition"
          >
            Book Tickets
          </Link>

          <Link
            to="/movies"
            className="bg-white/20 hover:bg-white/30 backdrop-blur px-6 py-3 rounded-2xl text-lg transition"
          >
            Browse Movies
          </Link>
        </div>
      </div>

      <div className="absolute bottom-6 w-full flex justify-center gap-3 z-20">
        {movies.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full cursor-pointer transition ${
              current === index ? "bg-white scale-110" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default LandingHero
