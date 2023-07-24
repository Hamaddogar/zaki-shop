import React from 'react'
import services from '@/app/styles/services.module.css'
import Picture from '../reuse/Picture'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import { arrowForward, listArrowIcon, } from '../reuse/icons'
import { PrimaryBtn } from '../reuse/Buttons'

const BrandIntegration = () => {

  return (
    <div className={services.brandMain}>
      <Grid container alignItems={'center'} justifyContent={'center'} px={{ xs: 0, md: 6 }} rowGap={'40px'} spacing={'3px'}>
        <Grid item xs={12} md={5}>
          <Box>
            <Typography className={services.titleIntegration} color="secondary" > Integration with all  Shippment Brand</Typography>
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

            <Box>
            <PrimaryBtn />
            </Box>
          </Box>

        </Grid>
        <Grid item xs={12} md={7}>
          <Picture src={'/integrationB.svg'} width={857} height={551} alt='' />
        </Grid>
      </Grid>
    </div>
  )
}

export default BrandIntegration
