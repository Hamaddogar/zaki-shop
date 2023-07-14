'use client'
import React from 'react'
import home from '@/app/styles/home.module.css'
import Picture from './reuse/Picture'
import { Box, Button, Grid, Typography } from '@mui/material'
import { arrowForward, arrowForwardSecond } from './reuse/icons'

const MobileApp = () => {

  return (
    <div className={home.MobileApp}>
      <Grid direction={{ xs: 'column-reverse', lg: 'row' }} container alignItems={'center'} rowGap={-6} justifyContent={'space-between'} py={{ xs: '110px', lg: '0px' }}>
        <Grid item xs={12} lg={6}>
          <Box textAlign={{ xs: 'center', lg: 'left' }} width={'80%'} margin='auto'>
            <Typography className={home['title-primary']} mb={4}>Mobile Apps</Typography>
            <Typography mb={{ xs: 5 }} className={home['text-primary']}>
              Our IA can generate and create a beautiful website whatever your field of activity
            </Typography>
            <Button color='primary' className={home.primaryBtn} endIcon={arrowForward} >
              Start Now
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Box p={4}>
            <Picture src={'/mobileapp.png'} width={500} height={500} alt='MobileApp' />
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default MobileApp
