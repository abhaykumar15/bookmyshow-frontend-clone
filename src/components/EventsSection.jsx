import { Link } from "react-router-dom"

const events = [
    {
        id: 1,
        title: "Arijit Singh Live",
        type: "Concert",
        price: 1500,
        image: "https://media.assettype.com/outlookindia/2025-01-22/0najl2rh/4.png?w=596&auto=format%2Ccompress&fit=max&format=webp&dpr=1.0"
    },
    {
        id: 2,
        title: "Stand-Up Night with Zakir Khan",
        type: "Comedy",
        price: 800,
        image: "https://sosimg.sgp1.cdn.digitaloceanspaces.com/artist-gallery/346912_1701946261.webp"
    }
]

const EventsSection = () => {
    return (
        <div className="p-12 bg-gray-100">
            <h2 className="text-3xl font-bold mb-8">
                Live Events
            </h2>

            <div className="grid grid-cols-2 gap-6">
                {events.map(event => (
                    <div key={event.id} className="bg-white rounded shadow overflow-hidden">
                        <img
                            src={event.image}
                            alt={event.title}
                            className="h-48 w-full object-cover"
                        />
                        <div className="p-4">
                            <h3 className="font-semibold text-lg">
                                {event.title}
                            </h3>
                            <p className="text-sm text-gray-500">
                                {event.type}
                            </p>

                            <Link
                                to={`/event/${event.id}`}
                                className="mt-3 inline-block bg-red-600 text-white px-4 py-2 rounded"
                            >
                                Book Now
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EventsSection
