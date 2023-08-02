import React from 'react'
import wrapclasses from './Wrapper.module.css'

const Wrapper = (props) => {
    return (
        <aside className={wrapclasses.wrapper}>{props.children}</aside>
    )
}

export default Wrapper