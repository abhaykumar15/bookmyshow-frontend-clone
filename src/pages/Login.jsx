import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("")
  const navigate = useNavigate()

  const handleLogin = () => {
    if (!email) {
      alert("Please enter email")
      return
    }

    localStorage.setItem("user", email)
    navigate("/")
  }

  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-gradient-to-r from-purple-50 to-indigo-50">
      <div className="bg-white shadow-xl p-8 rounded-3xl w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">
          Sign In
        </h2>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border border-gray-300 p-3 mb-4 rounded-2xl focus:ring-2 focus:ring-purple-400 outline-none transition"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white py-2 rounded-2xl font-semibold transition"
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default Login
