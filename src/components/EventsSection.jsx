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
    <section className="px-6 md:px-12 py-14 bg-gradient-to-b from-purple-50 to-indigo-50">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
          🎟️ Live Events
        </h2>
        <Link to="/events" className="text-indigo-600 font-semibold hover:underline">
          View All
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map(event => (
          <div
            key={event.id}
            className="group bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition duration-300"
          >
            <div className="relative overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="h-52 w-full object-cover group-hover:scale-110 transition duration-500"
              />
              <span className="absolute top-3 left-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-xs px-3 py-1 rounded-full">
                {event.type}
              </span>
            </div>

            <div className="p-5 space-y-2">
              <h3 className="font-bold text-lg text-gray-800 group-hover:text-indigo-600 transition">
                {event.title}
              </h3>

              <p className="text-gray-500 text-sm">
                Starting from <span className="font-semibold text-gray-700">₹{event.price}</span>
              </p>

              <Link
                to={`/event/${event.id}`}
                className="mt-3 inline-block bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white px-5 py-2 rounded-2xl font-semibold transition"
              >
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default EventsSection
