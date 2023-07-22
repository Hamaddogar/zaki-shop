import React from 'react'
import services from '@/app/styles/services.module.css'
import Picture from '../reuse/Picture'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import { arrowForward, listArrowIcon, } from '../reuse/icons'

const PaymentIntegration = () => {

  return (
    <div className={services.paymentMain}>
      <Grid container direction={{ xs: 'column-reverse', md: 'row' }} alignItems={'center'} justifyContent={'center'} rowGap={'40px'} spacing={'3px'}>
        <Grid item xs={12} md={7} pr={{ xs: 0, md: 5 }}>
          <Picture src={'/integrationP.svg'} width={888} height={692} alt='' />
        </Grid>

        <Grid item xs={12} md={5}>
          <Box>
            <Typography className={services.titleIntegration} color="primary" > Integration with all payments getway </Typography>
            <Typography className={services.normal} color="primary" mt={2}> Many advantages to suit your business </Typography>
            <Box mt={"50px"} mb={'19px'} display={{ xs: 'inline-block', md: 'block' }} >

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
            <br />
            <Box>
              <Button color='primary' className={services.primaryBtn} endIcon={arrowForward} >
                Start Now
              </Button>
            </Box>
          </Box>

        </Grid>

      </Grid>
    </div>
  )
}

export default PaymentIntegration
