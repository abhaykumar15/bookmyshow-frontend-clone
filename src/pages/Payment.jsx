import { useNavigate } from "react-router-dom"

const Payment = () => {
  const navigate = useNavigate()
  const booking = JSON.parse(localStorage.getItem("booking"))

  const confirm = () => {
    localStorage.setItem("history", JSON.stringify(booking))
    navigate("/account")
  }

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Payment Summary</h2>
      <p>Movie: {booking.movie}</p>
      <p>Seats: {booking.seats.join(", ")}</p>
      <p>Total: ₹{booking.total}</p>

      <button
        onClick={confirm}
        className="mt-4 bg-green-600 text-white px-6 py-2 rounded"
      >
        Confirm Payment
      </button>
    </div>
  )
}

export default Payment
