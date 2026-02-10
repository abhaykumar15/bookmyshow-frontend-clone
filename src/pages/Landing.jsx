import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { movies } from "../data/movies"

const Landing = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % movies.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrent((current + 1) % movies.length)
  }

  const prevSlide = () => {
    setCurrent((current - 1 + movies.length) % movies.length)
  }

  const activeMovie = movies[current]

  return (
    <div className="relative h-[85vh] w-full overflow-hidden">

      {/* Background Image */}
      <img
        src={activeMovie.image}
        alt={activeMovie.title}
        className="absolute w-full h-full object-cover transition-all duration-700 scale-105"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-16 text-white max-w-3xl">
        <h1 className="text-5xl font-bold mb-4">
          {activeMovie.title}
        </h1>

        <p className="mb-2 text-lg">
          ⭐ {activeMovie.rating}/10
        </p>

        <p className="mb-6 text-gray-300">
          {activeMovie.overview || "An amazing cinematic experience."}
        </p>

        <div className="flex gap-4">
          <Link
            to={`/booking/${activeMovie.id}`}
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-lg transition"
          >
            Book Tickets
          </Link>

          <Link
            to="/movies"
            className="bg-gray-700 hover:bg-gray-800 px-6 py-3 rounded-lg text-lg transition"
          >
            Browse Movies
          </Link>
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black text-white p-3 rounded-full"
      >
        ❮
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black text-white p-3 rounded-full"
      >
        ❯
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 w-full flex justify-center gap-3 z-20">
        {movies.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full cursor-pointer transition ${
              current === index ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => setCurrent(index)}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default Landing
