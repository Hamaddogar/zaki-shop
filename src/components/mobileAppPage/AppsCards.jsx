'use client'
import React from 'react'
import common from '@/styles/Common.module.css'
import mobileapp from '@/styles/Mobileapp.module.css'
import { Box, Grid, Typography } from '@mui/material'
import SliderComponent from '../sevicesPage/Slider'
const AppsCards = ({ content }) => {

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
          {content.title}
        </Typography>
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <Grid container alignItems={'center'} justifyContent={'space-between'} spacing={'30px'}>
          {content.data.map((item, indx) => (<Grid item xs={12} sm={6} md={4} key={indx} >
            <Box className={mobileapp.card}>
              <Box className={mobileapp.cardIcon}>{item.icon}</Box>
              <Typography color='primary' className={mobileapp.cardTitle}>{item.title}</Typography>
              <Typography color='primary' className={mobileapp.cardMsg}>{item.msg} </Typography>
            </Box>
          </Grid>)
          )}
        </Grid>
      </Box>
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <SliderComponent>
          <Box className={common.slider}>
            {content.data.map((item, indx) => (
              <Box key={indx} className={mobileapp.card}>
                <Box className={mobileapp.cardIcon}>{item.icon}</Box>
                <Typography color='primary' className={mobileapp.cardTitle}>{item.title}</Typography>
                <Typography color='primary' className={mobileapp.cardMsg}>{item.msg} </Typography>
              </Box>
            ))}
          </Box>
        </SliderComponent>
      </Box>
    </Box>
  )
}

export default AppsCards
