
import React from 'react'
import { Fade } from 'react-awesome-reveal'

export const WritingAnimation = ({ text }) => {
    return (
        <Fade triggerOnce cascade damping={1e-1}>
            {text}
        </Fade>
    )
}
