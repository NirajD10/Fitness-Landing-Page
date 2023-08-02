import React from 'react'
import servicescardclasses from './ServicesCard.module.css'

const ServicesCard = (props) => {
    return (
        <div style={{ backgroundColor: `${props.bgcolor}`, color: `${props.color}` }} className={servicescardclasses.scard}>{props.children}</div>
    )
}

export default ServicesCard