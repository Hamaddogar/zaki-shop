import React from 'react'
import services from '@/app/styles/services.module.css'
import Picture from '../reuse/Picture'
import { Box, Button, ButtonBase, Grid, Stack, Typography } from '@mui/material'
import { arrowForward, charitiesIcon, contentIcon, digitalIcon, listArrowIcon, miniFace, provisionIcon, realStoryIcon, restaturantIcon } from '../reuse/icons'
// import { Zoom, Fade, Rotate, Slide } from 'react-awesome-reveal'
// import { WritingAnimation } from '../reuse/Animation'

const BrandIntegration = () => {

  return (
    <div className={services.brandMain}>
      <Grid container alignItems={'center'} justifyContent={'space-between'} rowGap={'40px'} spacing={'3px'}>
        <Grid item xs={12} md={6}>
          <Box pr={{ xs: 0, lg: 8 }} pl={{ xs: 4, lg: 8 }} >
            <Typography className={services.titleIntegration} color="secondary" > Integration with all  Shippment Brand</Typography>
            <Typography className={services.normal} color="primary" mt={2}> Many advantages to suit your business </Typography>
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
        <Grid item xs={12} md={6}>
          <Picture src={'/integrationB.png'} width={857} height={551} alt='' />
        </Grid>
      </Grid>
    </div>
  )
}

export default BrandIntegration
