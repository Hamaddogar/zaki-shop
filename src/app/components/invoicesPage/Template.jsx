import React from 'react'
import invoices from '@/app/styles/invoices.module.css'
import Picture from '../reuse/Picture'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import { arrowForward, listArrowIcon, } from '../reuse/icons'

const Template = () => {

  return (
    <div className={invoices.templateMain}>
      <Grid container alignItems={'center'} justifyContent={'space-between'} rowGap={'40px'} spacing={'3px'}>
        <Grid item xs={12} md={6} lg={5}>
          <Box pr={1} pl={1}>
            <Typography className={invoices.titleIntegration} color="primary" >
              +100 invoices template <br />
              with your brand name 🤜🤛
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

            <Button color='primary' className={invoices.primaryBtn} endIcon={arrowForward} >
              Start Now
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={7}>
          <Picture src={'/templates.png'} width={2109} height={1760} alt='' />
        </Grid>
      </Grid>
    </div>
  )
}

export default Template
