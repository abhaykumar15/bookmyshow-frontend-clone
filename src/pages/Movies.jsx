import { useState } from "react"
import { movies } from "../data/movies"
import MovieCard from "../components/Moviecard"

const Movies = () => {
  const [search, setSearch] = useState("")

  const filtered = movies.filter(movie =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="p-8">
      <input
        type="text"
        placeholder="Search movies..."
        className="w-full border p-2 mb-6"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default Movies
