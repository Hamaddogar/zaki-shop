'use client'
import React from 'react'
import services from '@/app/styles/services.module.css'
import Picture from '../reuse/Picture'
import { Box, Button, ButtonBase, Grid, Stack, Typography } from '@mui/material'
import { arrowForward, charitiesIcon, contentIcon, digitalIcon, listArrowIcon, miniFace, provisionIcon, realStoryIcon, restaturantIcon } from '../reuse/icons'
// import { Zoom, Fade, Rotate, Slide } from 'react-awesome-reveal'
// import { WritingAnimation } from '../reuse/Animation'

const PaymentIntegration = () => {

  return (
    <div className={services.paymentMain}>
      <Grid container direction={{ xs: 'column-reverse', md: 'row' }}  alignItems={'center'} justifyContent={'space-between'} rowGap={'40px'} spacing={'3px'}>
        <Grid item xs={12} md={7}>
          <Picture src={'/integrationP.png'} width={888} height={692} alt='' />
        </Grid>

        <Grid item xs={12} md={5}>
          <Box pr={{ xs: 0, lg: 8 }} pl={{ xs: 4, lg: 8 }}>
            <Typography className={services.titleIntegration} color="primary" > Integration with all payments getway </Typography>
            <Typography className={services.normal} color="primary" mt={2}> Many advantages to suit your business </Typography>
            <Box mt={"70px"} mb={'19px'}>

              <Stack direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
                <span>{listArrowIcon}</span>
                <Typography className={services.normal2}>Many advantages to suit your business</Typography>
              </Stack>

              <Stack direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
                <span>{listArrowIcon}</span>
                <Typography className={services.normal2}>Many advantages to suit your business</Typography>
              </Stack>

              <Stack direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
                <span>{listArrowIcon}</span>
                <Typography className={services.normal2}>Many advantages to suit your business</Typography>
              </Stack>

              <Stack direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
                <span>{listArrowIcon}</span>
                <Typography className={services.normal2}>Many advantages to suit your business</Typography>
              </Stack>
            </Box>

            <Button color='primary' className={services.primaryBtn} endIcon={arrowForward} >
              Start Now
            </Button>
          </Box>

        </Grid>

      </Grid>
    </div>
  )
}

export default PaymentIntegration
