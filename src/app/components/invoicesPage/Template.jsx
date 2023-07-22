import React from 'react'
import invoices from '@/app/styles/invoices.module.css'
import common from '@/app/styles/common.module.css'
import Picture from '../reuse/Picture'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import { arrowForward, listArrowIcon, } from '../reuse/icons'

const Template = () => {

  return (
    <div className={invoices.templateMain}>
      <Box className={common.background} sx={{ backgroundPosition: { xs: 'bottom center', md: '80% center' } }} >
        <Grid container alignItems={'center'} justifyContent={'center'} rowGap={'40px'}>
          <Grid item xs={12} md={5.2} >
            <Box textAlign={{ xs: 'center', md: 'left' }}>
              <Typography className={invoices.titleIntegration} color="primary" >
                +100 invoices template
                with your brand name 🤜🤛
              </Typography>
              <Typography className={invoices.normal} color="primary" mt={2}> Many advantages to suit your business </Typography>
              <Box mt={"50px"} mb={'19px'}>

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
          <Grid item xs={12} md={6}>
            <Picture src={'/templates.svg'} width={1016} height={667} alt='' />
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Template
