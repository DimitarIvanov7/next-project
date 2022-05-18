import React from 'react'
import { useRouter } from 'next/router'
import { getEventById } from '../../dummy-data'

const Event = () => {

    const router = useRouter()

    const data = router.query.id

    console.log(data);

    const event = getEventById(data)


    if(!event) return <p>No data found!</p>
  return (
    <div>Event</div>
  )
}

export default Event