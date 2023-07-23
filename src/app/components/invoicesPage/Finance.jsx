import React from 'react'
import invoices from '@/app/styles/invoices.module.css'
import common from '@/app/styles/common.module.css'
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

      <Box className={common.background} sx={{ backgroundPosition: { xs: 'bottom center', md: '80% center' } }} >
        <Grid container alignItems={'center'} justifyContent={'center'} rowGap={'40px'}>
          <Grid item xs={12} md={6} lg={5}>
            <Box textAlign={{ xs: 'center', md: 'left' }} >
              <Typography className={invoices.titleIntegration} color="primary" >
                It’s time to take one place <br />
                for manage all your finance plan
              </Typography>
              <Typography className={invoices.normal} color="primary" mt={2}> Many advantages to suit your business </Typography>
              <Box mt={"40px"} mb={'19px'} display={{ xs: 'inline-block', md: 'block' }} >

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

          <Grid item xs={12} md={6} lg={6}>
            <Box sx={{ position: 'relative', left: { xs: '0px', md: '-50px' } }} >
              <Picture src={'/finance.svg'} width={872} height={653} alt='' />
            </Box>
          </Grid>
        </Grid>
      </Box>

    </div>
  )
}

export default Finance
