'use client'
import React from 'react'
import mobileapp from '@/app/styles/mobileapp.module.css'
import { Box, Grid, Typography } from '@mui/material'
import { digitalIcon, realStoryIcon, restaturantIcon } from '../reuse/icons'
// import { Zoom, Fade, Rotate, Slide } from 'react-awesome-reveal'
// import { WritingAnimation } from '../reuse/Animation'

const data = [
  { title: "Retail Stores", msg: "Many advantages to suit your business", icon: realStoryIcon },
  { title: "Restaurants and Cafes", msg: "Many advantages to suit your business", icon: restaturantIcon },
  { title: "Digital Products", msg: "Many advantages to suit your business", icon: digitalIcon },
]

const AppsCards = () => {

  return (
    <div className={mobileapp.cardsMain}>
      <Box className={mobileapp.titleContainer}>
        <Typography color='primary' className={mobileapp.subtitlemain}>Unlock your business’s potential <br />
          with powerful mobile app’s.</Typography>
      </Box>
      <Grid container alignItems={'center'} justifyContent={'space-between'} spacing={'30px'}>
        {data.map((item, indx) => (<Grid item xs={12} sm={6} md={4} key={indx} >
          <Box className={mobileapp.card}>
            <Box className={mobileapp.cardIcon}>{item.icon}</Box>
            <Typography color='primary' className={mobileapp.cardTitle}>{item.title}</Typography>
            <Typography color='primary' className={mobileapp.cardMsg}>{item.msg} </Typography>
          </Box>
        </Grid>)
        )}
      </Grid>
    </div>
  )
}

export default AppsCards
