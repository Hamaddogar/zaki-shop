import React from 'react'
import invoices from '@/app/styles/invoices.module.css'
import Picture from '../reuse/Picture'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import { arrowForward, listArrowIcon, } from '../reuse/icons'

const PaymentIntegration = () => {

  return (
    <div className={invoices.paymentMain}>
      <Grid container direction={{ xs: 'column-reverse', md: 'row' }} alignItems={'center'} justifyContent={'space-between'} rowGap={'40px'} spacing={'3px'}>
        <Grid item xs={12} md={7}>
          <Picture src={'/piinvoice.png'} width={1843} height={1757} alt='' />
        </Grid>

        <Grid item xs={12} md={5}>
          <Box pr={2} pl={2}>
            <Typography className={invoices.titleIntegration} color="primary" > Integration with all payments getway </Typography>
            <Typography className={invoices.normal} color="primary" mt={2}> Many advantages to suit your business </Typography>
            <Box mt={"70px"} mb={'19px'}>

              <Stack direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
                <span>{listArrowIcon}</span>
                <Typography className={invoices.normal2}>Many advantages to suit your business</Typography>
              </Stack>

              <Stack direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
                <span>{listArrowIcon}</span>
                <Typography className={invoices.normal2}>Many advantages to suit your business</Typography>
              </Stack>

              <Stack direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
                <span>{listArrowIcon}</span>
                <Typography className={invoices.normal2}>Many advantages to suit your business</Typography>
              </Stack>

              <Stack direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
                <span>{listArrowIcon}</span>
                <Typography className={invoices.normal2}>Many advantages to suit your business</Typography>
              </Stack>
            </Box>

            <Button color='primary' className={invoices.primaryBtn} endIcon={arrowForward} >
              Start Now
            </Button>
          </Box>

        </Grid>

      </Grid>
    </div>
  )
}

export default PaymentIntegration
