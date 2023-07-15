'use client'
import React from 'react'
import home from '@/app/styles/home.module.css'
import Picture from '../reuse/Picture'
import { Box, Button, Grid, Typography } from '@mui/material'
import { arrowForward } from '../reuse/icons'
// import { Slide } from 'react-awesome-reveal'
import { WritingAnimation } from '../reuse/Animation'

const MobileApp = () => {

  return (
    <div className={home.MobileApp}>
      <Grid className={home.ac} container alignItems={'center'} rowGap={-6} justifyContent={'space-between'} p={{ xs: '50px 0px 0px 0px', lg: '110px 0px 110px 0px' }}>
        <Grid item xs={12} lg={6} >
          <Box textAlign={{ xs: 'center', lg: 'left' }}>
            <Typography className={home['title-primary']} mb={4}><WritingAnimation text='Mobile Apps' /> </Typography>
            <Typography mb={{ xs: 5 }} className={home['text-primary']}>
              Our IA can generate and create a beautiful website whatever your field of activity
            </Typography>
            <Button color='primary' className={home.primaryBtn} endIcon={arrowForward} >
              Start Now
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} lg={6} >
          <Box >
            {/* <Slide triggerOnce cascade direction='right'> */}
              <Picture src={'/mobileapp.png'} width={500} height={500} alt='MobileApp' />
            {/* </Slide> */}
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default MobileApp
