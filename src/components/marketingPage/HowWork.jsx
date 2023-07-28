import React from 'react'
import marketing from '@/styles/Marketing.module.css'
import Picture from '../reuse/Picture'
import { Box, Hidden, Typography } from '@mui/material'

const HowWork = ({ content }) => {

  return (
    <div className={marketing.howWorkMain}>
      <Box className={marketing.titleContainer} textAlign={'center'} pt={{ xs: 0, lg: '70px' }}>
        <Typography color='primary' className={marketing.subtitlemain}>
          {content.title[0]} <br /> {content.title[1]}
        </Typography>
        <Typography color='primary' mt={3} className={marketing.normal}>
          {content.subtitle}
        </Typography>
      </Box>
      <Box px={{ xs: 3, md: 6 }} >
        <Hidden mdDown>
          <Picture src={'/graphlg.svg'} width={1472} height={254} alt='' />
        </Hidden>
        <Hidden mdUp>
          <Picture src={'/graphmd.svg'} width={320} height={486} alt='' />
        </Hidden>
      </Box>
    </div>
  )
}

export default HowWork
