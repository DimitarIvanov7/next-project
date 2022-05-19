import React from 'react'
import { useRouter } from 'next/router'
import EventContent from '../../components/event-detail/event-content'
import { getEventById } from '../../dummy-data'

const Event = () => {

    const router = useRouter()
    const eventId = router.query.id

    if(!eventId) {
      return <p>Loading...</p>
    }

    const event = getEventById(eventId)


    if(!event) return <p>No data found!</p>


  return (
    <div>
      <h2>Event</h2>
      
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </div>
  )
}

export default Event