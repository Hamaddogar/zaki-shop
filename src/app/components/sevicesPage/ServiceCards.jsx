'use client'
import React from 'react'
import services from '@/app/styles/services.module.css'
import Picture from '../reuse/Picture'
import { Box, Button, ButtonBase, Grid, Stack, Typography } from '@mui/material'
import { charitiesIcon, contentIcon, digitalIcon, miniFace, provisionIcon, realStoryIcon, restaturantIcon } from '../reuse/icons'
import { WritingAnimation } from '../reuse/Animation'

const data = [
  { title: "Retail Stores", msg: "Many advantages to suit your business", icon: realStoryIcon },
  { title: "Restaurants and Cafes", msg: "Many advantages to suit your business", icon: restaturantIcon },
  { title: "Digital Products", msg: "Many advantages to suit your business", icon: digitalIcon },
  { title: "Provision of Services", msg: "Many advantages to suit your business", icon: provisionIcon },
  { title: "Content Creators", msg: "Many advantages to suit your business", icon: contentIcon },
  { title: "Charities", msg: "Many advantages to suit your business", icon: charitiesIcon },
]

const ServiceCards = () => {

  return (
    <div className={services.cardsMain}>
      <Box mb={{ xs: '43px', md: '29px', lg: '72px' }}>
        <Typography
          color='primary'
          fontWeight={{ xs: 800 }}
          fontSize={{ xs: '23px', md: '30px', lg: '40px' }}
          lineHeight={{ xs: '31px', md: '39px', lg: '45px' }}
          maxWidth={{ xs: '300px', md: '800px', lg: '1040px' }}
          margin='auto'
          textAlign='center'
        >
          At Over Zaki, we understand the diverse needs  of businesses across different industries.
        </Typography>

      </Box>
      <Grid container alignItems={'center'} justifyContent={'space-between'} spacing={'30px'}>
        {data.map((item, indx) => (<Grid item xs={12} sm={6} md={4} key={indx} >
          <Box className={services.card}>
            <Box className={services.cardIcon}>{item.icon}</Box>
            <Typography color='primary' className={services.cardTitle}>{item.title}</Typography>
            <Typography color='primary' className={services.cardMsg}>{item.msg} </Typography>
          </Box>
        </Grid>)
        )}
      </Grid>
    </div>
  )
}

export default ServiceCards
