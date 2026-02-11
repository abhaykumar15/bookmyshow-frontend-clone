import LandingHero from "../components/LandingHero"
import EventsSection from "../components/EventsSection"

const Landing = () => {
  return (
    <>
      <LandingHero />
      <div className="p-6 md:p-12">
        <EventsSection />
      </div>
    </>
  )
}

export default Landing
