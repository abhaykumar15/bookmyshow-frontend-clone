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
    <div className="flex justify-center items-center min-h-[80vh] bg-gray-100">
      <div className="bg-white shadow-lg p-8 rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Sign In
        </h2>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border p-2 mb-4 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default Login
