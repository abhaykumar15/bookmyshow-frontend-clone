import { useNavigate } from "react-router-dom"
import Pay from "../components/Pay"

const Payment = () => {
  const navigate = useNavigate()
  const booking = JSON.parse(localStorage.getItem("booking"))

  if (!booking || !booking.seats) {
    return (
      <div className="p-8 text-center text-gray-600 text-xl">
        No booking found.
      </div>
    )
  }

  const confirm = () => {
    const existingBookings = JSON.parse(localStorage.getItem("history")) || []
    const updatedBookings = [
      ...existingBookings,
      { ...booking, date: new Date().toLocaleString() }
    ]
    localStorage.setItem("history", JSON.stringify(updatedBookings))
    localStorage.removeItem("booking")
    navigate("/account")
  }

  return (
    <div className="p-8 flex justify-center">
      <Pay booking={booking} onConfirm={confirm} />
    </div>
  )
}

export default Payment
