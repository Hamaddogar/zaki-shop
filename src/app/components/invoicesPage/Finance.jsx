import React from 'react'
import invoices from '@/app/styles/invoices.module.css'
import Picture from '../reuse/Picture'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { listArrowIcon, } from '../reuse/icons'

const Finance = () => {

  return (
    <div className={invoices.financeMain}>
      <Box className={invoices.titleContainer}>
        <Typography color='primary' className={invoices.subtitlemain}>
          One App For <br />
          Every Platform 😍.
        </Typography>
        <Typography mt={3} color='primary' textAlign='center' className={invoices.normal}>
          Many advantages to suit your business
        </Typography>
      </Box>

      <Grid container direction={{ xs: 'column-reverse', md: 'row' }} alignItems={'center'} justifyContent={'center'} rowGap={'40px'} spacing={'3px'}>
        <Grid item xs={12} md={6} lg={5}>
          <Box pr={1} pl={2} >
            <Typography className={invoices.titleIntegration} color="primary" >
              It’s time to take one place <br />
              for manage all your finance plan
            </Typography>
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
          </Box>
        </Grid>

        <Grid item xs={12} md={6} lg={7}>
          <Picture src={'/finance.png'} width={1955} height={1620} alt='' />
        </Grid>
      </Grid>
    </div>
  )
}

export default Finance