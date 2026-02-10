import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Landing from "./pages/Landing"
import Login from "./pages/Login"
import Movies from "./pages/Movies"
import Booking from "./pages/Booking"
import Payment from "./pages/Payment"
import Account from "./pages/Account"
import ProtectedRoute from "./components/ProtectedRoute"


function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/booking/:id" element={<ProtectedRoute>
      <Booking />
    </ProtectedRoute>} />
        <Route path="/payment" element={ <ProtectedRoute>
      <Payment />
    </ProtectedRoute>} />
        <Route path="/account" element={ <ProtectedRoute>
      <Account />
    </ProtectedRoute>} />
      </Routes>
    </div>
  )
}

export default App
