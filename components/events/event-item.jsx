import React from 'react'
import Link from 'next/link'
import classes from "./event-item.module.css"
import Button from '../ui/button'

const EventItem = (props) => {

    const {title, image, date, place, link} = props

    const humanDate = new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric"
    })

    const formattedAddress = place.replace(", ", "\n")

    const exploreLink = `/events/${link}`

  return (
    <div className={classes.item}>
        <div className={classes.content}>
            <h2>{title}</h2>
            <div>
                <time>{humanDate}</time>
                <address>{formattedAddress}</address>
            </div>
            
        </div>

        <div className={classes.actions}>


        <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
            </span>
          </Button>

        </div>
    </div>
  )
}

export default EventItem