import React from 'react'
import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';


const Filtered = (props) => {
    const router = useRouter()
    const slug = router.query.slug

    if (!slug) {
        return <p className='center'>Loading...</p>;
      }

    const year = slug[0]
    const month = slug[1]

    const numYear = +year
    const numMonth = +month

    if(isNaN(numMonth) || isNaN(numYear) || numMonth > 12 || numMonth < 0) {
        return <p className='center'>Invalid filter, please adjust</p>;
    }


    const data = getFilteredEvents({
        year:numYear,
        month:numMonth
    })

    console.log(data);

    if(!data || data.length === 0) {
        return <div>
            <h2>Filtered</h2>
            <div>
                <p>No Results</p>
            </div>
        </div>
    }


  return (
    <div>
        <h2>Filtered</h2>
        <div>
        <EventList items={data}/>
        </div>
    </div>
  )
}

export default Filtered