import React from 'react'
import mobileapp from '@/app/styles/mobileapp.module.css'
import Picture from '../reuse/Picture'
import { Box, Grid, Typography } from '@mui/material'

const NoDeveloper2 = () => {

  return (
    <div className={mobileapp.noDeveloper2Main}>
      <Box className={mobileapp.titleContainer}>
        <Typography color='secondary' className={mobileapp.subtitlemain}>Build your app, <br /> without a developer 😉</Typography>
      </Box>
      <Grid container alignItems={'center'} justifyContent={'space-between'} rowGap={'40px'} spacing={'10px'} className={mobileapp.background}>
        <Grid item xs={12} md={6}>
          <Picture src={'/nodev21.png'} width={876} height={567} alt='' />
        </Grid>
        <Grid item xs={12} md={6}>
          <Picture src={'/nodev22.png'} width={420} height={567} alt='' />
        </Grid>
      </Grid>
    </div>
  )
}

export default NoDeveloper2
