const Account = () => {
  const user = localStorage.getItem("user")
  const bookings = JSON.parse(localStorage.getItem("history")) || []

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">My Account</h2>

      <div className="bg-white shadow-md p-6 rounded-lg mb-6">
        <p><strong>Email:</strong> {user || "Not logged in"}</p>
      </div>

      <h3 className="text-xl font-bold mb-4">Booking History</h3>

      {bookings.length === 0 ? (
        <p>No booking history found.</p>
      ) : (
        <div className="space-y-4">
          {bookings.map((booking, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-4 rounded-lg"
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
