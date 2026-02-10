const Tabs = ({ activeTab, setActiveTab }) => {
    return (
        <div className="flex justify-center gap-8 bg-gray-900 text-white py-3">
            <button
                onClick={() => setActiveTab("movies")}
                className={activeTab === "movies" ? "font-bold border-b-2 border-red-500" : ""}
            >
                Movies
            </button>

            <button
                onClick={() => setActiveTab("events")}
                className={activeTab === "events" ? "font-bold border-b-2 border-red-500" : ""}
            >
                Events
            </button>
        </div>
    )
}

export default Tabs
