import React from 'react'
import services from '@/app/styles/services.module.css'
import Picture from '../reuse/Picture'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import { arrowForward, listArrowIcon, } from '../reuse/icons'
import { PrimaryBtn } from '../reuse/Buttons'

const BookingSession = () => {

  return (
    <div className={services.bookingMain}>
      <Grid container alignItems={'center'} px={{ xs: 0, md: 8 }} justifyContent={'space-between'} rowGap={'40px'} spacing={'3px'}>
        <Grid item xs={12} md={5}>
          <Box>
            <Typography className={services.titleIntegration2} color="secondary" > Book your session for
              let our support help you </Typography>


            <Box mt={"50px"} mb={'19px'} display={{ xs: 'inline-block', md: 'block' }}>
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

            <Box>
            <PrimaryBtn />
            </Box>
          </Box>

        </Grid>
        <Grid item xs={12} md={7}>
          <Box>
            <Picture src={'/booking.svg'} width={1090} height={1155} alt='' />
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default BookingSession
