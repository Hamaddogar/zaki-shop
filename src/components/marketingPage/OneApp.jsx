import React from 'react'
import common from '@/styles/Common.module.css'
import marketing from '@/styles/Marketing.module.css'
import Picture from '../reuse/Picture'
import { Box, Grid, Typography } from '@mui/material'

const OneApp = ({ content }) => {

  return (
    <div className={marketing.oneAppMain}>
      <Box className={marketing.titleContainer} textAlign={'center'} pt={{ xs: 0, lg: '70px' }}>
        <Typography color='primary' className={marketing.subtitlemain}>
          {content.title}
        </Typography>
        <Typography color='primary' mt={3} className={marketing.normal}>
          {content.subtitle}
        </Typography>
      </Box>
      <Grid container alignItems={'center'} justifyContent={'space-between'} rowGap={'40px'} spacing={'10px'} className={common.background}>
        <Grid item xs={12} md={7}>
          <Box>
            <Picture src={'/oneapp1.svg'} width={857} height={640} alt='' />
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Picture src={'/oneapp2.svg'} width={574} height={660} alt='' />
        </Grid>
      </Grid>
    </div>
  )
}

export default OneApp
