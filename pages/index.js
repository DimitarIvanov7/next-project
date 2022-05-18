import { getFeaturedEvents } from "../dummy-data"
import EventList from "../components/events/event-list"

export default function Home() {
  const featuredData = getFeaturedEvents()

  return (
    <div>
      <h1>Events</h1>
      <EventList items={featuredData}/>


    </div>
  )
}
