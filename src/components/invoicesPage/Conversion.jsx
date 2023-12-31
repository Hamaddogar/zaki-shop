import React from 'react'
import mobileapp from '@/styles/Mobileapp.module.css'
import Picture from '../reuse/Picture'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { listArrowIcon,} from '../reuse/icons'
import conversion from '@/components/images/conversion.png'
import andStore from '@/components/images/andStore.png'
import playStore from '@/components/images/playStore.png'

const Conversion = () => {

  return (
    <div className={mobileapp.conversionMain}>
      <Grid container direction={{ xs: 'column-reverse', md: 'row' }} alignItems={'center'} justifyContent={'center'} rowGap={'40px'} spacing={'3px'}>
        <Grid item xs={12} md={5}>
          <Box pr={{ xs: 0, lg: 8 }} pl={{ xs: 4, lg: 8 }} >
            <Typography className={mobileapp.titleIntegration} color="primary" >Turn your website into your mobile app</Typography>
            <Typography className={mobileapp.normal} color="primary" mt={2}> Many advantages to suit your business </Typography>
            <Box mt={"50px"} mb={'19px'}>

              <Stack direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
                <span>{listArrowIcon}</span>
                <Typography className={mobileapp.normal2}>Many advantages to suit your business</Typography>
              </Stack>

              <Stack direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
                <span>{listArrowIcon}</span>
                <Typography className={mobileapp.normal2}>Many advantages to suit your business</Typography>
              </Stack>

              <Stack direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
                <span>{listArrowIcon}</span>
                <Typography className={mobileapp.normal2}>Many advantages to suit your business</Typography>
              </Stack>

              <Stack direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
                <span>{listArrowIcon}</span>
                <Typography className={mobileapp.normal2}>Many advantages to suit your business</Typography>
              </Stack>
            </Box>

            <Stack direction={'row'} alignItems='center' spacing={'20px'} mt='30px'>
              <Picture src={andStore} width={60} height={60} alt='' />
              <Picture src={playStore} width={50} height={50} alt='' />
            </Stack>
          </Box>

        </Grid>

        <Grid item xs={12} md={7}>
          <Picture src={conversion} width={884} height={710} alt='' />
        </Grid>
      </Grid>
    </div>
  )
}

export default Conversion
