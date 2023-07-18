import React from 'react'
import marketing from '@/app/styles/marketing.module.css'
import Picture from '../reuse/Picture'
import { Box, Button, Grid, Typography } from '@mui/material'
import { arrowForwardSecond } from '../reuse/icons'

const OneApp = () => {

  return (
    <div className={marketing.oneAppMain}>
      <Box className={marketing.titleContainer} textAlign={'center'} pt={{ xs: 0, lg: '70px' }}>
        <Typography color='primary' className={marketing.subtitlemain}>
          One App For <br />
          Every Platform 😍.
        </Typography>
        <Typography color='primary' mt={3} className={marketing.normal}>
          Many advantages to suit your business
        </Typography>
      </Box>
      <Grid container alignItems={'center'} justifyContent={'space-between'} rowGap={'40px'} spacing={'10px'} className={marketing.background}>
        <Grid item xs={12} md={7}>
          <Box>
            <Picture src={'/oneapp1.png'} width={857} height={640} alt='' />
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Picture src={'/oneapp2.png'} width={574} height={660} alt='' />
        </Grid>
      </Grid>
    </div>
  )
}

export default OneApp
