import React from 'react'
import marketing from '@/app/styles/marketing.module.css'
import Picture from '../reuse/Picture'
import { Box, Button, Grid, Typography } from '@mui/material'
import { arrowForwardSecond } from '../reuse/icons'
// import { Zoom, Fade, Rotate, Slide } from 'react-awesome-reveal'
// import { WritingAnimation } from '../reuse/Animation'

const HowWork = () => {

  return (
    <div className={marketing.howWorkMain}>
      <Box className={marketing.titleContainer} textAlign={'center'} pt={{ xs: 0, lg: '70px' }}>
        <Typography color='primary' className={marketing.subtitlemain}>
          How it work <br />
          and lunch your ads 🧐
        </Typography>
        <Typography color='primary' mt={3} className={marketing.normal}>
          Many advantages to suit your business
        </Typography>
      </Box>

      <Box>
        <Picture src={'/graph.png'} width={1472} height={254} alt='' />
      </Box>

    </div>
  )
}

export default HowWork
