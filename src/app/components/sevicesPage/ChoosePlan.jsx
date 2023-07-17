'use client'
import React from 'react'
import services from '@/app/styles/services.module.css'
import Picture from '../reuse/Picture'
import { Box, Button, ButtonBase, Grid, Stack, Typography } from '@mui/material'
import { advPlanIcon, arrowForwardSecond, charitiesIcon, contentIcon, digitalIcon, listArrowIcon, miniFace, planBtn, planBtnActive, planSeemoreActiveIcon, planSeemoreIcon, proPlanIcon, provisionIcon, realStoryIcon, restaturantIcon, vipPlanIcon } from '../reuse/icons'
// import { Zoom, Fade, Rotate, Slide } from 'react-awesome-reveal'
import { WritingAnimation } from '../reuse/Animation'
import Image from 'next/image'

const data = [
  { title: "Retail Stores", msg: "Many advantages to suit your business", icon: realStoryIcon },
  { title: "Restaurants and Cafes", msg: "Many advantages to suit your business", icon: restaturantIcon },
  { title: "Digital Products", msg: "Many advantages to suit your business", icon: digitalIcon },
  { title: "Provision of Services", msg: "Many advantages to suit your business", icon: provisionIcon },
  { title: "Content Creators", msg: "Many advantages to suit your business", icon: contentIcon },
  { title: "Charities", msg: "Many advantages to suit your business", icon: charitiesIcon },
]

const ChoosePlan = () => {

  return (
    <div className={services.planMain}>
      <Grid sx={{ maxWidth: '1720px', margin: 'auto' }} container alignItems={'center'} rowGap={10} justifyContent={'space-between'} spacing={'30px'}>
        <Grid item xs={12} >
          <Box sx={{ textAlign: 'center' }}>
            <Typography color='primary' className={services.subtitle} mb={3}> Choose your plan  </Typography>
            <Typography className={services.normal} mb={5}> Many advantages to suit your business </Typography>
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


        <Grid item xs={12} lg={4}>
          <Box className={services.planCard} >
            <Stack direction='row' alignItems='center' justifyContent={'space-between'}>
              <Box>
                <Typography color='primary' className={services.planCardTitle}>Pro Plan</Typography>
                <Typography color='primary' className={services.planCardSubtitle}>100 KWD/Year</Typography>
                <Typography disabled className={services.planCardDel}> <del>170 KWD Year</del> </Typography>
              </Box>
              <Box>{proPlanIcon}</Box>
            </Stack>

            <Box my={{ xs: 5 }} textAlign='center'>
              <Button color='secondary' fullWidth className={services.planBtn} endIcon={planBtn} >
                Start Now
              </Button>
            </Box>

            {[1, 1, 1, 1, 1, 1, 1, 1].map((item, indx) => <Stack mt={.5} key={indx} direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
              <span>{listArrowIcon}</span>
              <Typography className={services.planListText}>Many advantages to suit your business</Typography>
            </Stack>)}

            <ButtonBase disableRipple className={services.planSeeMore}> {planSeemoreIcon}  <span>See More</span> </ButtonBase>

          </Box>
        </Grid>



        <Grid item xs={12} lg={4}>
          <Box className={services.planCardActive} >
            <Stack mb={'63px'} direction='row' alignItems='center' justifyContent={'space-between'}>
              <Box>
                <Typography color='primary' className={services.planCardTitle}>Advenced Plan</Typography>
                <Typography color='primary' className={services.planCardSubtitle}>100 KWD/Year</Typography>
                <Typography disabled className={services.planCardDelActive}> <del>170 KWD Year</del> </Typography>
              </Box>
              <Box>{advPlanIcon}</Box>
            </Stack>


            <Box my={{ xs: 5 }} textAlign='center'>
              <Button color='primary' variant='contained' fullWidth className={services.planBtnActive} endIcon={planBtnActive} >
                Start Now
              </Button>
            </Box>

            {[1, 1, 1, 1, 1, 1, 1, 1].map((item, indx) => <Stack mt={.5} key={indx} direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
              <span>{listArrowIcon}</span>
              <Typography className={services.planListText}>Many advantages to suit your business</Typography>
            </Stack>)}

            <ButtonBase disableRipple className={services.planSeeMore}> {planSeemoreActiveIcon}  <span>See More</span> </ButtonBase>

          </Box>
        </Grid>





        <Grid item xs={12} lg={4}>
          <Box className={services.planCard} >
            <Stack mb={'80px'} direction='row' alignItems='center' justifyContent={'space-between'}>
              <Box>
                <Typography color='primary' className={services.planCardTitle}>Premium Plan</Typography>
                <Typography color='primary' className={services.planCardSubtitle}>100 KWD/Year</Typography>
                <Typography disabled className={services.planCardDel}> <del>170 KWD Year</del> </Typography>
              </Box>
              <Box>{vipPlanIcon}</Box>
            </Stack>

            <Box my={{ xs: 5 }} textAlign='center'>
              <Button color='secondary' fullWidth className={services.planBtn} endIcon={planBtn} >
                Start Now
              </Button>
            </Box>

            {[1, 1, 1, 1, 1, 1, 1, 1].map((item, indx) => <Stack mt={.5} key={indx} direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
              <span>{listArrowIcon}</span>
              <Typography className={services.planListText}>Many advantages to suit your business</Typography>
            </Stack>)}

            <ButtonBase disableRipple className={services.planSeeMore}> {planSeemoreIcon}  <span>See More</span> </ButtonBase>

          </Box>
        </Grid>

      </Grid>
    </div>
  )
}

export default ChoosePlan
