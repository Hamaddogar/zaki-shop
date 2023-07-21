import React from 'react'
import common from '@/app/styles/common.module.css'
import mobileapp from '@/app/styles/mobileapp.module.css'
import Picture from '../reuse/Picture'
import { Box, Stack, Typography } from '@mui/material'

const NoDeveloper2 = () => {

  return (
    <div className={mobileapp.noDeveloper2Main}>
      <Box className={mobileapp.titleContainer}>
        <Typography color='secondary' className={mobileapp.subtitlemain}>Build your app, <br /> without a developer 😉</Typography>
      </Box>
      <Box className={common.background} sx={{ backgroundPosition: { xs: 'center center', md: 'center center' } }} >
        <Stack alignItems='center' px={{ xs: 0, lg: 12 }} justifyContent={'center'} direction={{ xs: 'column', lg: 'row' }} rowGap={'40px'} columnGap={{ xs: 0, lg: 10 }} >
          <Box maxWidth={{ xs: '589px', lg: '876px' }}>
            <Picture center={false} src={'/nodev21.svg'} width={876} height={567} alt='' />
          </Box>
          <Box>
            <Picture center={false} src={'/nodev22.svg'} width={589} height={567} alt='' />
          </Box>
        </Stack>
      </Box>
    </div>
  )
}

export default NoDeveloper2
