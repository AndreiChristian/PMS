import React from 'react'
import classes from './Footer.module.css'

const Footer = () => {
  return (
    <div className={classes.container}>
        <div className={classes.link} > ABOUT</div>
        <div className={classes.link} > CONTACT </div>
        <div  className={classes.link} > ELETRIC </div>
    </div>
  )
}

export default Footer