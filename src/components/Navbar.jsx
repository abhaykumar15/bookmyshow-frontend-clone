import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate()
  const user = localStorage.getItem("user")

  const logout = () => {
    localStorage.removeItem("user")
    navigate("/")
  }

  return (
    <div className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-red-600">
        BookMyShow
      </Link>

      <div className="space-x-6">
  <Link to="/" className="hover:text-red-600">
    Home
  </Link>

  <Link to="/movies" className="hover:text-red-600">
    Movies
  </Link>

  <Link to="/#events" className="hover:text-red-600">
    Events
  </Link>

  {user ? (
    <>
      <Link to="/account" className="hover:text-red-600">
        Account
      </Link>

      <button
        onClick={logout}
        className="bg-red-600 text-white px-4 py-1 rounded"
      >
        Logout
      </button>
    </>
  ) : (
    <Link
      to="/login"
      className="bg-red-600 text-white px-4 py-1 rounded"
    >
      Sign In
    </Link>
  )}
</div>


    </div>
  )
}

export default Navbar
