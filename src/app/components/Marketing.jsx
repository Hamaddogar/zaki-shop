'use client'
import React from 'react'
import home from '@/app/styles/home.module.css'
import Picture from './reuse/Picture'
import { Box, Button, Grid, Typography } from '@mui/material'
import { arrowForwardSecond } from './reuse/icons'

const Marketing = () => {

  return (
    <div className={home.marketing}>
      <Grid container alignItems={'center'} rowGap={-6} justifyContent={'space-between'} py={{ xs: '110px', lg: '0px' }}>
        <Grid item xs={12} lg={6}>
          <Box p={4}>
            <Picture src={'/marketing.png'} width={487} height={487} alt='marketing' />
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box textAlign={{ xs: 'center', lg: 'left' }} width={'80%'} margin='auto'>
            <Typography className={home['title-moon']} mb={4}>Marketing</Typography>
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
