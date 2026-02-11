import { useParams, useNavigate } from "react-router-dom"
import { movies } from "../data/movies"
import SeatSelector from "../components/SeatSelector"

const Booking = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const movie = movies.find(m => m.id === parseInt(id))

  if (!movie) {
    return (
      <div className="p-8 text-center text-2xl font-semibold text-gray-600">
        Movie not found
      </div>
    )
  }

  const handleSeats = (seats) => {
    if (seats.length === 0) {
      alert("Please select at least one seat")
      return
    }

    const bookingData = {
      movie: movie.title,
      seats,
      total: seats.length * movie.price
    }

    localStorage.setItem("booking", JSON.stringify(bookingData))
    navigate("/payment")
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-indigo-600">{movie.title}</h2>
      <SeatSelector price={movie.price} onSelect={handleSeats} />
    </div>
  )
}

export default Booking
