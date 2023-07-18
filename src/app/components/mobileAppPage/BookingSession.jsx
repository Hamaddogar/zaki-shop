import React from 'react'
import mobileapp from '@/app/styles/mobileapp.module.css'
import Picture from '../reuse/Picture'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import { arrowForward, listArrowIcon } from '../reuse/icons'

const BookingSession = () => {

  return (
    <div className={mobileapp.bookingMain}>
      <Grid container alignItems={'center'} justifyContent={'space-between'} rowGap={'40px'} spacing={'3px'}>
        <Grid item xs={12} md={6}>
          <Box pr={{ xs: 0, lg: 8 }} pl={{ xs: 4, lg: 8 }} >
            <Typography className={mobileapp.titleIntegration} color="primary" > Book your session for
              let our support help you </Typography>
            <Box mt={"70px"} mb={'19px'}>

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

            <Button color='primary' className={mobileapp.primaryBtn} endIcon={arrowForward} >
              Start Now
            </Button>
          </Box>

        </Grid>
        <Grid item xs={12} md={6}>
          <Box  >
            <Picture src={'/booking.png'} width={1090} height={1155} alt='' />
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default BookingSession
