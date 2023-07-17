'use client'
import React from 'react'
import mobileapp from '@/app/styles/mobileapp.module.css'
import { Box, Button, ButtonBase, Grid, Stack, Typography } from '@mui/material'
import { advPlanIcon, listArrowIcon, planBtn, planBtnActive, planSeemoreActiveIcon, planSeemoreIcon, proPlanIcon, provisionIcon, realStoryIcon, restaturantIcon, vipPlanIcon } from '../reuse/icons'
// import { Zoom, Fade, Rotate, Slide } from 'react-awesome-reveal'

const ChoosePlan = () => {

  return (
    <div className={mobileapp.planMain}>
      <Box sx={{ maxWidth: '1720px', margin: 'auto' }}>
        <Grid container alignItems={'center'} rowGap={10} justifyContent={'center'} spacing={{ xs: '0px', sm: '30px' }} className={mobileapp.background2}>
          <Grid item xs={12} >
            <Box sx={{ textAlign: 'center' }}>
              <Typography color='primary' className={mobileapp.subtitle} mb={3}> Choose your plan  </Typography>
              <Typography className={mobileapp.normal} mb={5}> Many advantages to suit your business </Typography>
              <Box id='switch'>
                <span>Monthly</span>
                <label for="toggle">
                  <input class="input" type="checkbox" id="toggle" />
                  <div class="toggle-wrapper"><span class="selector"></span></div>
                </label>
                <span>Yearly</span>
              </Box>
            </Box>
          </Grid>


          <Grid item xs={12} md={6} lg={4}>
            <Box className={mobileapp.planCard} >
              <Stack direction='row' alignItems='center' justifyContent={'space-between'}>
                <Box>
                  <Typography color='primary' className={mobileapp.planCardTitle}>Pro Plan</Typography>
                  <Typography color='primary' className={mobileapp.planCardSubtitle}>100 KWD/Year</Typography>
                  <Typography disabled className={mobileapp.planCardDel}> <del>170 KWD Year</del> </Typography>
                </Box>
                <Box>{proPlanIcon}</Box>
              </Stack>

              <Box my={{ xs: 5 }} textAlign='center'>
                <Button color='secondary' fullWidth className={mobileapp.planBtn} endIcon={planBtn} >
                  Start Now
                </Button>
              </Box>

              {[1, 1, 1, 1, 1, 1, 1, 1].map((item, indx) => <Stack mt={.5} key={indx} direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
                <span>{listArrowIcon}</span>
                <Typography className={mobileapp.planListText}>Many advantages to suit your business</Typography>
              </Stack>)}

              <ButtonBase disableRipple className={mobileapp.planSeeMore}> {planSeemoreIcon}  <span>See More</span> </ButtonBase>

            </Box>
          </Grid>



          <Grid item xs={12} md={6} lg={4}>
            <Box className={mobileapp.planCardActive} >
              <Stack mb={'63px'} direction='row' alignItems='center' justifyContent={'space-between'}>
                <Box>
                  <Typography color='primary' className={mobileapp.planCardTitle}>Advenced Plan</Typography>
                  <Typography color='primary' className={mobileapp.planCardSubtitle}>100 KWD/Year</Typography>
                  <Typography disabled className={mobileapp.planCardDelActive}> <del>170 KWD Year</del> </Typography>
                </Box>
                <Box>{advPlanIcon}</Box>
              </Stack>


              <Box my={{ xs: 5 }} textAlign='center'>
                <Button color='primary' variant='contained' fullWidth className={mobileapp.planBtnActive} endIcon={planBtnActive} >
                  Start Now
                </Button>
              </Box>

              {[1, 1, 1, 1, 1, 1, 1, 1].map((item, indx) => <Stack mt={.5} key={indx} direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
                <span>{listArrowIcon}</span>
                <Typography className={mobileapp.planListText}>Many advantages to suit your business</Typography>
              </Stack>)}

              <ButtonBase disableRipple className={mobileapp.planSeeMore}> {planSeemoreActiveIcon}  <span>See More</span> </ButtonBase>

            </Box>
          </Grid>





          <Grid item xs={12} md={6} lg={4}>
            <Box className={mobileapp.planCard} >
              <Stack mb={'80px'} direction='row' alignItems='center' justifyContent={'space-between'}>
                <Box>
                  <Typography color='primary' className={mobileapp.planCardTitle}>Premium Plan</Typography>
                  <Typography color='primary' className={mobileapp.planCardSubtitle}>100 KWD/Year</Typography>
                  <Typography disabled className={mobileapp.planCardDel}> <del>170 KWD Year</del> </Typography>
                </Box>
                <Box>{vipPlanIcon}</Box>
              </Stack>

              <Box my={{ xs: 5 }} textAlign='center'>
                <Button color='secondary' fullWidth className={mobileapp.planBtn} endIcon={planBtn} >
                  Start Now
                </Button>
              </Box>

              {[1, 1, 1, 1, 1, 1, 1, 1].map((item, indx) => <Stack mt={.5} key={indx} direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
                <span>{listArrowIcon}</span>
                <Typography className={mobileapp.planListText}>Many advantages to suit your business</Typography>
              </Stack>)}

              <ButtonBase disableRipple className={mobileapp.planSeeMore}> {planSeemoreIcon}  <span>See More</span> </ButtonBase>

            </Box>
          </Grid>

        </Grid>
      </Box>
    </div>
  )
}

export default ChoosePlan
