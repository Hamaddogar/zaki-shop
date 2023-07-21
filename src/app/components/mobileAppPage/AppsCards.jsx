'use client'
import React from 'react'
import mobileapp from '@/app/styles/mobileapp.module.css'
import { Box, Grid, Typography } from '@mui/material'
import { fasrEasyIcon, quickConnectionIcon, seamlessAppIcon } from '../reuse/icons'

const data = [
  { title: "Fast & Easy Development", msg: "Many advantages to suit  your business", icon: fasrEasyIcon },
  { title: "Quick connection with website", msg: "Many advantages to suit  your business", icon: quickConnectionIcon },
  { title: "Seamless app  management", msg: "Many advantages to suit  your business", icon: seamlessAppIcon },
]

const AppsCards = () => {

  return (
    <Box className={mobileapp.cardsMain}>
      <Box mb={{ xs: '43px', md: '29px', lg: '72px' }}>
        <Typography
          color='primary'
          fontWeight={{ xs: 800 }}
          fontSize={{ xs: '23px', md: '30px', lg: '40px' }}
          lineHeight={{ xs: '31px', md: '39px', lg: '45px' }}
          maxWidth={{ xs: '300px', md: '600px', lg: '800px' }}
          margin='auto'
          textAlign='center'
        >
          Unlock your business’s potential
          with powerful mobile app’s.
        </Typography>
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
    </Box>
  )
}

export default AppsCards
