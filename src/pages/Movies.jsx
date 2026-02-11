import { useState } from "react"
import { movies } from "../data/movies"
import MovieCard from "../components/MovieCard"

const Movies = () => {
  const [search, setSearch] = useState("")

  const filtered = movies.filter(movie =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <input
        type="text"
        placeholder="Search movies..."
        className="w-full border border-gray-300 p-3 mb-6 rounded-2xl focus:ring-2 focus:ring-purple-400 outline-none transition"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filtered.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default Movies
