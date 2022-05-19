import React from 'react'
import MainHeader from './header'
import classes from './layout.module.css'

const Layout = (props) => {
  return (
    < >
        <MainHeader>
        <div className={classes.container}>
                <h2>NetworkingEvents</h2>
            </div>
        </MainHeader>

        <main>{props.children}</main>
    </>
  )
}

export default Layout