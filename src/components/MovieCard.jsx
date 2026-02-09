import { Link } from "react-router-dom"

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition">
      <img src={movie.image} alt={movie.title} className="h-64 w-full object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg">{movie.title}</h3>
        <p className="text-sm text-gray-500">⭐ {movie.rating}/10</p>
        <p className="mt-2 font-semibold">₹ {movie.price}</p>

        <Link
          to={`/booking/${movie.id}`}
          className="mt-3 block bg-red-600 text-white text-center py-2 rounded"
        >
          Book Tickets
        </Link>
      </div>
    </div>
  )
}

export default MovieCard
