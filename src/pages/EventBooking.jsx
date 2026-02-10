import { useParams, useNavigate } from "react-router-dom"

const events = [
    { id: 1, title: "Arijit Singh Live", price: 1500 },
    { id: 2, title: "Stand-Up Night with Zakir Khan", price: 800 }
]

const EventBooking = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const event = events.find(e => e.id === parseInt(id))

    if (!event) return <div className="p-8">Event not found</div>

    const handleBooking = () => {
        const booking = {
            movie: event.title,
            seats: ["General Admission"],
            total: event.price
        }

        localStorage.setItem("booking", JSON.stringify(booking))
        navigate("/payment")
    }

    return (
        <div className="p-8 flex justify-center">
            <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">
                    {event.title}
                </h2>

                <p className="mb-4">
                    Ticket Price: ₹{event.price}
                </p>

                <button
                    onClick={handleBooking}
                    className="w-full bg-red-600 text-white py-2 rounded"
                >
                    Proceed to Payment
                </button>
            </div>
        </div>
    )
}

export default EventBooking
