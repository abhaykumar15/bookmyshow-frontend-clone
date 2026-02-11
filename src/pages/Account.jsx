const Account = () => {
  const user = localStorage.getItem("user")
  const bookings = JSON.parse(localStorage.getItem("history")) || []

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-indigo-600">My Account</h2>

      <div className="bg-white shadow-xl p-6 rounded-3xl mb-8">
        <p><strong>Email:</strong> {user || "Not logged in"}</p>
      </div>

      <h3 className="text-xl font-bold mb-4">Booking History</h3>

      {bookings.length === 0 ? (
        <p className="text-gray-500">No booking history found.</p>
      ) : (
        <div className="space-y-6">
          {bookings.map((booking, index) => (
            <div
              key={index}
              className="bg-white shadow-xl p-4 rounded-3xl hover:shadow-2xl transition"
            >
              <p><strong>Movie:</strong> {booking.movie}</p>
              <p><strong>Seats:</strong> {booking.seats.join(", ")}</p>
              <p><strong>Total:</strong> ₹{booking.total}</p>
              <p><strong>Date:</strong> {booking.date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Account
