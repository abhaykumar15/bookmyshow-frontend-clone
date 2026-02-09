import { useParams, useNavigate } from "react-router-dom"
import { movies } from "../data/movies"
import SeatSelector from "../components/SeatSelector"

const Booking = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const movie = movies.find(m => m.id === parseInt(id))

  const handleSeats = (seats) => {
    localStorage.setItem("booking", JSON.stringify({
      movie: movie.title,
      seats,
      total: seats.length * movie.price
    }))
    navigate("/payment")
  }

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold">{movie.title}</h2>
      <SeatSelector price={movie.price} onSelect={handleSeats} />
    </div>
  )
}

export default Booking
