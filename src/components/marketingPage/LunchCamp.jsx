import React from 'react'
import marketing from '@/styles/Marketing.module.css'
import Picture from '../reuse/Picture'
import { Box, Grid, Stack, Typography } from '@mui/material'

const LunchCamp = ({ content }) => {
  return (
    <div className={marketing.lunchCampMain}>
      <Grid container alignItems={'center'} justifyContent={'center'} rowGap={'40px'} spacing={'3px'}>
        <Grid item xs={12} md={8}>
          <Box pr={{ xs: 0, lg: 2 }} pl={{ xs: 2, lg: 2 }} >
            <Typography className={marketing.titleIntegration} sx={{ color: '#FFFFFF' }} >
              {content.title[0]} <br />{content.title[1]}  </Typography>
            <Grid container alignItems={'center'} justifyContent={'center'} direction={{ xs: 'column-reverse', md: 'row' }} >
              <Grid item xs={12} md={4}>
                <Typography color='secondary' textAlign={{ xs: 'center', md: 'left' }} fontSize={{ xs: '19px', sm: '25px', md: '33px', lg: '46px' }}> {content.social[0]} </Typography>
                <Stack gap={{ xs: '10px', md: 0 }} alignItems={{ xs: 'center', md: 'flex-start' }} justifyContent={{ xs: 'space-between', md: 'flex-start' }} direction={{ xs: 'row', md: 'column' }}>
                  <Typography fontSize={{ xs: '19px', sm: '25px', md: '33px', lg: '46px' }} sx={{ color: '#FFFFFF', cursor: 'pointer', '&:hover': { color: '#1BFCB6', transition: '.5s ease-in-out' } }}>{content.social[1]} </Typography>
                  <Typography fontSize={{ xs: '19px', sm: '25px', md: '33px', lg: '46px' }} sx={{ color: '#484D72', cursor: 'pointer', '&:hover': { color: '#1BFCB6', transition: '.5s ease-in-out' } }}>{content.social[2]} </Typography>
                  <Typography fontSize={{ xs: '19px', sm: '25px', md: '33px', lg: '46px' }} sx={{ color: '#484D72', cursor: 'pointer', '&:hover': { color: '#1BFCB6', transition: '.5s ease-in-out' } }}>{content.social[3]} </Typography>
                  <Typography fontSize={{ xs: '19px', sm: '25px', md: '33px', lg: '46px' }} sx={{ color: '#484D72', cursor: 'pointer', '&:hover': { color: '#1BFCB6', transition: '.5s ease-in-out' } }}>{content.social[4]} </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} md={8}>
                <Picture src={'/lunchcam1.svg'} width={556} height={599} alt='' />
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Picture src={'/lunchcam2.svg'} width={463} height={803} alt='' />
        </Grid>
      </Grid>
    </div>
  )
}

export default LunchCamp
