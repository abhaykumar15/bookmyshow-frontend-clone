import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate()
  const user = localStorage.getItem("user")

  const logout = () => {
    localStorage.removeItem("user")
    navigate("/")
  }

  return (
    <div className="backdrop-blur-md bg-white/30 sticky top-0 z-50 px-8 py-4 flex justify-between items-center shadow-md">
      <Link to="/" className="text-2xl font-extrabold text-purple-600">
        CineVibe
      </Link>

      <div className="space-x-6 flex items-center">
        <Link to="/" className="hover:text-purple-600 transition">Home</Link>
        <Link to="/movies" className="hover:text-purple-600 transition">Movies</Link>
        <Link to="/events" className="hover:text-purple-600 transition">Events</Link>

        {user ? (
          <>
            <Link to="/account" className="hover:text-purple-600 transition">Account</Link>
            <button
              onClick={logout}
              className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white px-4 py-1 rounded-2xl transition"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white px-4 py-1 rounded-2xl transition"
          >
            Sign In
          </Link>
        )}
      </div>
    </div>
  )
}

export default Navbar
