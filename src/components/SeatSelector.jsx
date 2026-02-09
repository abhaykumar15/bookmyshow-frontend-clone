import { useState } from "react"

const SeatSelector = ({ price, onSelect }) => {
  const [selectedSeats, setSelectedSeats] = useState([])

  const toggleSeat = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat))
    } else {
      setSelectedSeats([...selectedSeats, seat])
    }
  }

  const seats = Array.from({ length: 30 }, (_, i) => i + 1)

  return (
    <div>
      <div className="grid grid-cols-6 gap-3 mt-6">
        {seats.map(seat => (
          <button
            key={seat}
            onClick={() => toggleSeat(seat)}
            className={`p-2 border rounded ${
              selectedSeats.includes(seat)
                ? "bg-green-500 text-white"
                : "bg-gray-200"
            }`}
          >
            {seat}
          </button>
        ))}
      </div>

      <div className="mt-6">
        <p>Total: ₹ {selectedSeats.length * price}</p>
        <button
          onClick={() => onSelect(selectedSeats)}
          className="mt-2 bg-red-600 text-white px-4 py-2 rounded"
        >
          Continue
        </button>
      </div>
    </div>
  )
}

export default SeatSelector
