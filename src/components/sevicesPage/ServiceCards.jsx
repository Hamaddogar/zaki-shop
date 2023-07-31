'use client'
import React from 'react';
import common from '@/styles/Common.module.css'
import services from '@/styles/Services.module.css'
import { Box, Grid, Typography } from '@mui/material'
const ServiceCards = ({ content }) => {

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
          {content.title}.
        </Typography>
        {/*  */}
      </Box>
      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        <Grid container alignItems={'center'} justifyContent={'space-between'} spacing={'30px'}>
          {[...content.data, ...content.data2].map((item, indx) => (<Grid item xs={6} md={4} key={indx} >
            <Box className={services.card} sx={{ minHeight: '50px' }}>
              <Box className={services.cardIcon}>{item.icon}</Box>
              <Typography color='primary' className={services.cardTitle}>{item.title}</Typography>
              <Typography color='primary' className={services.cardMsg}>{item.msg} </Typography>
            </Box>
          </Grid>)
          )}
        </Grid>
      </Box>

      <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
        <Box className={common.slider}>
          {content.data.map((item, indx) => (
            <Box className={services.card} key={indx} >
              <Box className={services.cardIcon}>{item.icon}</Box>
              <Typography color='primary' className={services.cardTitle}>{item.title}</Typography>
              <Typography color='primary' className={services.cardMsg}>{item.msg} </Typography>
            </Box>
          ))}
        </Box>
        <Box mt='30px'></Box>
        <Box className={common.slider}  >
          {content.data2.map((item, indx) => (
            <Box className={services.card} key={indx} >
              <Box className={services.cardIcon}>{item.icon}</Box>
              <Typography color='primary' className={services.cardTitle}>{item.title}</Typography>
              <Typography color='primary' className={services.cardMsg}>{item.msg} </Typography>
            </Box>
          ))}
        </Box>
      </Box>





    </div>
  )
}

export default ServiceCards
