import { useParams, useNavigate } from "react-router-dom"

const events = [
  { id: 1, title: "Arijit Singh Live", price: 1500 },
  { id: 2, title: "Stand-Up Night with Zakir Khan", price: 800 }
]

const EventBooking = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const event = events.find(e => e.id === parseInt(id))

  if (!event)
    return <div className="p-8 text-center text-xl text-gray-600">Event not found</div>

  const handleBooking = () => {
    const booking = {
      movie: event.title,
      seats: ["General Admission"],
      total: event.price
    }
    localStorage.setItem("booking", JSON.stringify(booking))
    navigate("/payment")
  }

  return (
    <div className="p-8 flex justify-center">
      <div className="bg-white shadow-xl p-6 rounded-3xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-indigo-600">{event.title}</h2>
        <p className="mb-4 font-medium text-gray-700">Ticket Price: ₹{event.price}</p>
        <button
          onClick={handleBooking}
          className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white py-2 rounded-2xl font-semibold transition"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  )
}

export default EventBooking
