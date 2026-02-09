import { Link } from "react-router-dom"

const Landing = () => {
  return (
    <div className="bg-gradient-to-r from-black to-gray-900 text-white min-h-[80vh] flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mb-6 text-red-600">
        BookMyShow
      </h1>
      <p className="text-lg mb-8 text-gray-300">
        Book tickets for your favorite movies instantly 🎬
      </p>

      <Link
        to="/movies"
        className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-lg"
      >
        Explore Movies
      </Link>
    </div>
  )
}

export default Landing
