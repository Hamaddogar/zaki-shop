'use client'
import React from 'react'
import home from '@/app/styles/home.module.css'
import Picture from './reuse/Picture'
import { Box, Button, Grid, Typography } from '@mui/material'
import { arrowForwardSecond } from './reuse/icons'
import { Slide } from 'react-awesome-reveal'
import { WritingAnimation } from './reuse/Animation'

const Marketing = () => {

  return (
    <div className={home.marketing}>
      <Grid direction={{ xs: 'column-reverse', lg: 'row' }} container alignItems={'center'} justifyContent={'space-between'} p={{ xs: '50px 0px 0px 0px', lg: '110px 0px 110px 0px' }}>
        <Grid item xs={12} lg={6}>
          <Box p={4}>
          <Slide triggerOnce direction='left'>
            <Picture src={'/marketing.png'} width={487} height={487} alt='marketing' />
            </Slide>
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box textAlign={{ xs: 'center', lg: 'left' }} width={'80%'} margin='auto'>
            <Typography className={home['title-moon']} mb={4}><WritingAnimation text='Marketing' /> </Typography>
            <Typography mb={{ xs: 5 }} className={home['text-moon']}>
              Our IA can generate and create a beautiful website whatever your field of activity
            </Typography>
            <Button color='secondary' className={home.secondaryBtn} endIcon={arrowForwardSecond} >
              Start Now
            </Button>
          </Box>

        </Grid>
      </Grid>
    </div>
  )
}

export default Marketing
