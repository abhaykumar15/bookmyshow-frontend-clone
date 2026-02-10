import { useNavigate } from "react-router-dom"

const Payment = () => {
  const navigate = useNavigate()
  const booking = JSON.parse(localStorage.getItem("booking"))

  if (!booking || !booking.seats) {
    return (
      <div className="p-8">
        <h2 className="text-2xl font-bold">
          No booking found. Please select seats first.
        </h2>
      </div>
    )
  }

  const confirm = () => {
    const existingBookings =
      JSON.parse(localStorage.getItem("history")) || []

    const updatedBookings = [
      ...existingBookings,
      {
        ...booking,
        date: new Date().toLocaleString()
      }
    ]

    localStorage.setItem("history", JSON.stringify(updatedBookings))

    // Clear current booking
    localStorage.removeItem("booking")

    navigate("/account")
  }

  return (
    <div className="p-8 flex justify-center">
      <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Payment Summary
        </h2>

        <p className="mb-2"><strong>Movie:</strong> {booking.movie}</p>
        <p className="mb-2">
          <strong>Seats:</strong> {booking.seats.join(", ")}
        </p>
        <p className="mb-4 text-lg font-semibold">
          Total: ₹{booking.total}
        </p>

        <button
          onClick={confirm}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded"
        >
          Confirm Payment
        </button>
      </div>
    </div>
  )
}

export default Payment
