import React from 'react'
import services from '@/styles/Services.module.css'
import common from '@/styles/Common.module.css'
import Picture from '../reuse/Picture'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { listArrowIcon, } from '../reuse/icons'
import { PrimaryBtn } from '../reuse/Buttons'
import booking from '@/components/images/booking.svg'

const BookingSession = ({ content, BTNS }) => {

  return (
    <Box className={`${services.bookingMain} ${common.background}`}
      sx={{ backgroundPosition: { xs: 'bottom center', md: 'right center', } }}
    >
      <Grid container alignItems={'center'} px={{ xs: 0, md: 8 }} justifyContent={'space-between'} rowGap={'40px'} spacing={'3px'}

      >
        <Grid item xs={12} md={5}>
          <Box>
            <Typography className={services.titleIntegration2} color="secondary" > {content.title} </Typography>
            <Box mt={"50px"} mb={'19px'} display={{ xs: 'inline-block', md: 'block' }}>
              {content.points.map((item, indx) => <Stack key={indx} direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
                <span>{listArrowIcon}</span>
                <Typography className={services.normal2}>{item}</Typography>
              </Stack>)}
            </Box>
            <Box>
              <PrimaryBtn text={BTNS.start} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <Box>
            <Picture src={booking} width={1090} height={1155} alt='' />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default BookingSession
