import React from 'react'
import services from '@/app/styles/services.module.css'
import Picture from '../reuse/Picture'
import { Box, Button, ButtonBase, Grid, Stack, Typography } from '@mui/material'
import { arrowForward, charitiesIcon, contentIcon, digitalIcon, listArrowIcon, miniFace, provisionIcon, realStoryIcon, restaturantIcon } from '../reuse/icons'
// import { Zoom, Fade, Rotate, Slide } from 'react-awesome-reveal'
// import { WritingAnimation } from '../reuse/Animation'

const BookingSession = () => {

  return (
    <div className={services.bookingMain}>
      <Grid container alignItems={'center'} justifyContent={'space-between'} rowGap={'40px'} spacing={'3px'}>
        <Grid item xs={12} md={5}>
          <Box pr={{ xs: 0, lg: 8 }} pl={{ xs: 4, lg: 8 }} >
            <Typography className={services.titleIntegration} color="secondary" > Book your session for
              let our support help you </Typography>
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
        <Grid item xs={12} md={7}>
          <Box >
            <Picture src={'/booking.png'} width={1090} height={1155} alt='' />
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default BookingSession
