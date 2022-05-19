import SearchEvents from "../../components/events/search-event";
import React from 'react'
import { useRouter } from 'next/router';
import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";


const Events = () => {

    const router = useRouter()

    const findEventsHandler = (year, month) => {
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    }

    const events = getAllEvents()

  return (
    <div>
     <SearchEvents onSearch={findEventsHandler} />
     <div>
      <EventList items={events}/>
     </div>

    </div>
  )
}

export default Events