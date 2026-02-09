const Account = () => {
  const user = localStorage.getItem("user")
  const history = JSON.parse(localStorage.getItem("history"))

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">My Account</h2>

      <div className="bg-white shadow-md p-6 rounded-lg mb-6">
        <p><strong>Email:</strong> {user || "Not logged in"}</p>
      </div>

      {history ? (
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h3 className="font-bold mb-2">Last Booking</h3>
          <p>Movie: {history.movie}</p>
          <p>Seats: {history.seats.join(", ")}</p>
          <p>Total: ₹{history.total}</p>
        </div>
      ) : (
        <p>No booking history found.</p>
      )}
    </div>
  )
}

export default Account
