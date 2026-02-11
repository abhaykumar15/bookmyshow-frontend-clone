import { Link } from "react-router-dom"

const MovieCard = ({ movie }) => {
  return (
    <div className="group bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition duration-300">
      <div className="relative overflow-hidden">
        <img
          src={movie.image}
          alt={movie.title}
          className="h-72 w-full object-cover group-hover:scale-110 transition duration-500"
        />
        <div className="absolute top-3 left-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-xs px-3 py-1 rounded-full">
          ⭐ {movie.rating}/10
        </div>
      </div>

      <div className="p-5 space-y-2">
        <h3 className="font-bold text-lg text-gray-800 group-hover:text-indigo-600 transition">
          {movie.title}
        </h3>

        <p className="text-gray-500 text-sm">
          Starting from <span className="font-semibold text-gray-700">₹{movie.price}</span>
        </p>

        <Link
          to={`/booking/${movie.id}`}
          className="mt-3 block text-center bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white py-2.5 rounded-2xl font-semibold transition"
        >
          Book Tickets
        </Link>
      </div>
    </div>
  )
}

export default MovieCard
