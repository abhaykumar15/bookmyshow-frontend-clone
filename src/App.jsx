import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Landing from "./pages/Landing"
import Login from "./pages/Login"
import Movies from "./pages/Movies"
import Booking from "./pages/Booking"
import Payment from "./pages/Payment"
import Account from "./pages/Account"

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
  )
}

export default App
