import React from 'react'
import marketing from '@/app/styles/marketing.module.css'
import Picture from '../reuse/Picture'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { listArrowIcon, } from '../reuse/icons'

const LunchCamp = () => {
  return (
    <div className={marketing.lunchCampMain}>
      <Grid container  alignItems={'center'} justifyContent={'center'} rowGap={'40px'} spacing={'3px'}>
        <Grid item xs={12} md={8}>
          <Box pr={{ xs: 0, lg: 2 }} pl={{ xs: 2, lg: 2 }} >
            <Typography className={marketing.titleIntegration} sx={{color:'#FFFFFF'}} >Lunch your campaigns <br />
              and controle’s</Typography>
            <Grid container alignItems={'center'} justifyContent={'center'} >
              <Grid item xs={4}>
                <Typography color='secondary' fontSize={{ xs: '22px', sm: '27px', md: '33px', lg: '46px' }}> Turn in</Typography>
                <Typography fontSize={{ xs: '22px', sm: '27px', md: '33px', lg: '46px' }} sx={{ color: '#FFFFFF', cursor: 'pointer', '&:hover': { color: '#1BFCB6', transition: '.5s ease-in-out' } }}> Instagram </Typography>
                <Typography fontSize={{ xs: '22px', sm: '27px', md: '33px', lg: '46px' }} sx={{ color: '#484D72', cursor: 'pointer', '&:hover': { color: '#1BFCB6', transition: '.5s ease-in-out' } }}> Snapshat </Typography>
                <Typography fontSize={{ xs: '22px', sm: '27px', md: '33px', lg: '46px' }} sx={{ color: '#484D72', cursor: 'pointer', '&:hover': { color: '#1BFCB6', transition: '.5s ease-in-out' } }}> Tiktok </Typography>
                <Typography fontSize={{ xs: '22px', sm: '27px', md: '33px', lg: '46px' }} sx={{ color: '#484D72', cursor: 'pointer', '&:hover': { color: '#1BFCB6', transition: '.5s ease-in-out' } }}> Facebook </Typography>
              </Grid>
              <Grid item xs={8}>
                <Picture src={'/lunchcam1.png'} width={556} height={599} alt='' />
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Picture src={'/lunchcam2.png'} width={463} height={803} alt='' />
        </Grid>
      </Grid>
    </div>
  )
}

export default LunchCamp
