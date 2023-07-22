import React from 'react'
import common from '@/app/styles/common.module.css'
import invoices from '@/app/styles/invoices.module.css'
import Picture from '../reuse/Picture'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import { arrowForward, listArrowIcon, } from '../reuse/icons'

const PaymentIntegration = () => {

  return (
    // <div className={invoices.paymentMain}>
    //   <Grid container direction={{ xs: 'column-reverse', md: 'row' }} alignItems={'center'} justifyContent={'space-between'} rowGap={'40px'} spacing={'3px'}>
    //     <Grid item xs={12} md={7}>
    //       <Picture src={'/piinvoice.png'} width={1843} height={1757} alt='' />
    //     </Grid>

    //     <Grid item xs={12} md={5}>
    //       <Box pr={2} pl={2}>
    //         <Typography className={invoices.titleIntegration} color="primary" > Integration with all payments getway </Typography>
    //         <Typography className={invoices.normal} color="primary" mt={2}> Many advantages to suit your business </Typography>
    //         <Box mt={"50px"} mb={'19px'}>

    //           <Stack direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
    //             <span>{listArrowIcon}</span>
    //             <Typography className={invoices.normal2}>Many advantages to suit your business</Typography>
    //           </Stack>

    //           <Stack direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
    //             <span>{listArrowIcon}</span>
    //             <Typography className={invoices.normal2}>Many advantages to suit your business</Typography>
    //           </Stack>

    //           <Stack direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
    //             <span>{listArrowIcon}</span>
    //             <Typography className={invoices.normal2}>Many advantages to suit your business</Typography>
    //           </Stack>

    //           <Stack direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
    //             <span>{listArrowIcon}</span>
    //             <Typography className={invoices.normal2}>Many advantages to suit your business</Typography>
    //           </Stack>
    //         </Box>

    //         <Button color='primary' className={invoices.primaryBtn} endIcon={arrowForward} >
    //           Start Now
    //         </Button>
    //       </Box>

    //     </Grid>

    //   </Grid>
    // </div>
    <div className={invoices.paymentMain}>
      <Box className={common.background} sx={{ backgroundPosition: { xs: 'bottom center', md: '20% center' } }} >
        <Grid container direction={{ xs: 'column-reverse', md: 'row' }} alignItems={'center'} justifyContent={'center'} rowGap={'40px'} spacing={'3px'}>
          <Grid item xs={12} md={6} pr={{ xs: 0, md: 5 }}>
            <Picture src={'/integrationP.svg'} width={888} height={692} alt='' />
          </Grid>

          <Grid item xs={12} md={5} lg={4} >
            <Box textAlign={{ xs: 'center', md: 'left' }}>
              <Typography className={invoices.titleIntegration} color="primary" maxWidth={{ xs: '600px' }} > Integration with all payments getway </Typography>
              <Typography className={invoices.normal} color="primary" mt={2}> Many advantages to suit your business </Typography>
              <Box mt={"50px"} mb={'19px'} display={{ xs: 'inline-block', md: 'block' }} >

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
              <br />
              <Box>
                <Button color='primary' className={invoices.primaryBtn} endIcon={arrowForward} >
                  Start Now
                </Button>
              </Box>
            </Box>

          </Grid>

        </Grid>
      </Box>
    </div>
  )
}

export default PaymentIntegration
