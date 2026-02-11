const Pay = ({ booking, onConfirm }) => {
  return (
    <div className="bg-white shadow-xl p-6 rounded-3xl w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Payment Summary
      </h2>

      <p className="mb-2"><strong>Movie:</strong> {booking.movie}</p>
      <p className="mb-2"><strong>Seats:</strong> {booking.seats.join(", ")}</p>
      <p className="mb-4 text-lg font-semibold">Total: ₹{booking.total}</p>

      <button
        onClick={onConfirm}
        className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white py-2 rounded-2xl font-semibold transition"
      >
        Confirm Payment
      </button>
    </div>
  )
}

export default Pay
