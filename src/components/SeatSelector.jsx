import { useState } from "react"

const SeatSelector = ({ price, onSelect }) => {
  const rows = ["A", "B", "C", "D", "E"]
  const seatsPerRow = 8
  const [selectedSeats, setSelectedSeats] = useState([])

  const toggleSeat = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat))
    } else {
      setSelectedSeats([...selectedSeats, seat])
    }
  }

  return (
    <div className="mt-6">
      <div className="text-center mb-6">
        <div className="bg-gradient-to-r from-purple-400 to-indigo-400 h-2 w-1/2 mx-auto rounded-full"></div>
        <p className="text-sm text-gray-500 mt-2">SCREEN THIS SIDE</p>
      </div>

      <div className="space-y-3">
        {rows.map(row => (
          <div key={row} className="flex justify-center gap-3">
            {[...Array(seatsPerRow)].map((_, i) => {
              const seatNumber = `${row}${i + 1}`
              const isSelected = selectedSeats.includes(seatNumber)
              return (
                <button
                  key={seatNumber}
                  onClick={() => toggleSeat(seatNumber)}
                  className={`w-10 h-10 text-sm rounded-full border transition
                    ${isSelected 
                      ? "bg-cyan-500 text-white" 
                      : "bg-gray-200 hover:bg-gray-300"
                    }`}
                >
                  {seatNumber}
                </button>
              )
            })}
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="mb-2">
          Selected: {selectedSeats.join(", ") || "None"}
        </p>
        <p className="font-semibold">Total: ₹ {selectedSeats.length * price}</p>

        <button
          onClick={() => onSelect(selectedSeats)}
          className="mt-4 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white px-6 py-2 rounded-2xl font-semibold transition"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  )
}

export default SeatSelector
