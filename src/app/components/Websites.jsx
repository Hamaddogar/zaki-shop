'use client'
import React from 'react'
import home from '@/app/styles/home.module.css'
import Picture from './reuse/Picture'
import { Box, Button, Grid, Typography } from '@mui/material'
import { arrowForwardSecond } from './reuse/icons'
import { Slide } from 'react-awesome-reveal'
import { WritingAnimation } from './reuse/Animation'

const Websites = () => {

  return (
    <div className={home.websites}>
      <Grid container direction={{ xs: 'column-reverse', lg: 'row' }} alignItems={'center'} justifyContent={'space-between'} pt={{ xs: '50px', lg: '0px' }}>
        <Grid item xs={12} lg={6}>
          <Box p={4}>
          <Slide triggerOnce direction='left'>
            <Picture src={'/websites.png'} width={1000} height={1000} alt='websites' />
            </Slide>
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box textAlign={{ xs: 'center', lg: 'left' }} width={'80%'} margin='auto'>
            <Typography color='info' className={home['title-moon']} mb={4}><WritingAnimation text='Websites' /></Typography>
            <Typography mb={{ xs: 5 }} color='info' className={home['text-moon']}>Our IA can generate and create a beautiful website whatever your field of activity </Typography>
            <Button color='secondary' className={home.secondaryBtn} endIcon={arrowForwardSecond} >
              Start Now
            </Button>
          </Box>

        </Grid>
      </Grid>
    </div>
  )
}

export default Websites
