import React from 'react'
import EventItem from './event-item'

const EventList = (props) => {
    const {items} = props
  return (
    <div>
        {items.map(item => <li>
            <EventItem title={item.title} image={item.image} date={item.date} place={item.location} link={item.id}/>

        </li>)}
    </div>
  )
}

export default EventList