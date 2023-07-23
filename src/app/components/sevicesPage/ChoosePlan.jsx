import React from 'react'
import common from '@/app/styles/common.module.css'
import services from '@/app/styles/services.module.css'
import { Box, Button, ButtonBase, Grid, Stack, Typography } from '@mui/material'
import { listArrowIcon, planBtn, planBtnActive, planSeemoreActiveIcon, planSeemoreIcon, proPlanIcon, vipPlanIcon } from '../reuse/icons'
import Picture from '../reuse/Picture'
import SliderComponent from './Slider'

const ChoosePlan = () => {

  return (
    <div className={services.planMain}>
      <Box sx={{ maxWidth: '1720px', margin: 'auto' }} >
        <Grid container alignItems={'center'} rowGap={10} justifyContent={'center'} spacing={{ xs: '0px', sm: '30px' }}>
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
        </Grid>
        <Box mt={5} textAlign='center'>
          <Box sx={{ display: { xs: 'none', md: 'block' } }} className={common.background} backgroundPosition='center center' >
            <Grid container alignItems={'center'} rowGap={10} justifyContent={'center'} spacing={{ xs: '0px', sm: '30px' }}>
              <Grid item xs={12} md={6} lg={4}>
                <Box className={services.planCard} >
                  <Stack direction='row' alignItems='center' justifyContent={'space-between'}>
                    <Box>
                      <Typography color='primary' className={services.planCardTitle}>Pro Plan</Typography>
                      <Typography color='primary' className={services.planCardSubtitle}>100 KWD/Year</Typography>
                      <Typography disabled className={services.planCardDel}> <del>170 KWD Year</del> </Typography>
                    </Box>
                    <Box className={services.planCardIcon} >{proPlanIcon}</Box>
                  </Stack>

                  <Box my={{ xs: 5 }} textAlign='center'>
                    <Button color='secondary' fullWidth className={services.planBtn} endIcon={planBtn} >
                      Start Now
                    </Button>
                  </Box>

                  {[1, 1, 1, 1, 1, 1, 1, 1].map((item, indx) => <Stack mt={.5} key={indx} textAlign='left' direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
                    <span>{listArrowIcon}</span>
                    <Typography className={services.planListText}>Many advantages to suit your business</Typography>
                  </Stack>)}

                  <Box textAlign='left'>
                    <ButtonBase disableRipple className={services.planSeeMore}> {planSeemoreIcon}  <span>See More</span> </ButtonBase>
                  </Box>

                </Box>
              </Grid>


              <Grid item xs={12} md={6} lg={4}>
                <Box className={services.planCardActive} >
                  <Stack mb={'63px'} direction='row' alignItems='center' justifyContent={'space-between'}>
                    <Box>
                      <Typography color='primary' className={services.planCardTitle}>Advenced Plan</Typography>
                      <Typography color='primary' className={services.planCardSubtitle}>100 KWD/Year</Typography>
                      <Typography disabled className={services.planCardDelActive}> <del>170 KWD Year</del> </Typography>
                    </Box>
                    <Box> <Picture src={'/diamond.svg'} width={107} height={113} alt='pro' /></Box>
                  </Stack>


                  <Box my={{ xs: 5 }} textAlign='center'>
                    <Button color='primary' variant='contained' fullWidth className={services.planBtnActive} endIcon={planBtnActive} >
                      Start Now
                    </Button>
                  </Box>

                  {[1, 1, 1, 1, 1, 1, 1, 1].map((item, indx) => <Stack mt={.5} key={indx} textAlign='left' direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
                    <span>{listArrowIcon}</span>
                    <Typography className={services.planListText}>Many advantages to suit your business</Typography>
                  </Stack>)}

                  <Box textAlign='left'>
                    <ButtonBase disableRipple className={services.planSeeMore}> {planSeemoreActiveIcon}  <span>See More</span> </ButtonBase>
                  </Box>

                </Box>
              </Grid>


              <Grid item xs={12} md={6} lg={4}>
                <Box className={services.planCard} >
                  <Stack mb={'80px'} direction='row' alignItems='center' justifyContent={'space-between'}>
                    <Box>
                      <Typography color='primary' className={services.planCardTitle}>Premium Plan</Typography>
                      <Typography color='primary' className={services.planCardSubtitle}>100 KWD/Year</Typography>
                      <Typography disabled className={services.planCardDel}> <del>170 KWD Year</del> </Typography>
                    </Box>
                    <Box className={services.planCardIcon} >{vipPlanIcon}</Box>
                  </Stack>

                  <Box my={{ xs: 5 }} textAlign='center'>
                    <Button color='secondary' fullWidth className={services.planBtn} endIcon={planBtn} >
                      Start Now
                    </Button>
                  </Box>

                  {[1, 1, 1, 1, 1, 1, 1, 1].map((item, indx) => <Stack mt={.5} key={indx} textAlign='left' direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
                    <span>{listArrowIcon}</span>
                    <Typography className={services.planListText}>Many advantages to suit your business</Typography>
                  </Stack>)}

                  <Box textAlign='left'>
                    <ButtonBase disableRipple className={services.planSeeMore}> {planSeemoreIcon}  <span>See More</span> </ButtonBase>
                  </Box>

                </Box>
              </Grid>

            </Grid>
          </Box>


          <Box sx={{ display: { xs: 'block', md: 'none' } }}>

            <SliderComponent>
              <Box className={common.sliderPlan}>
                <Box className={services.planCard}>

                  <Stack direction='row' alignItems='center' justifyContent={'space-between'}>
                    <Box textAlign='left'>
                      <Typography color='primary' className={services.planCardTitle}>Pro Plan</Typography>
                      <Typography color='primary' className={services.planCardSubtitle}>100 KWD/Year</Typography>
                      <Typography disabled className={services.planCardDel}> <del>170 KWD Year</del> </Typography>
                    </Box>
                    <Box className={services.planCardIcon} >{proPlanIcon}</Box>
                  </Stack>

                  <Box mb={{ xs: 2, sm: 4 }} textAlign='center'>
                    <Button color='secondary' fullWidth className={services.planBtn} endIcon={planBtn} >
                      Start Now
                    </Button>
                  </Box>

                  {[1, 1, 1, 1, 1, 1, 1, 1].map((item, indx) => <Stack mt={.5} key={indx} textAlign='left' direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
                    <span>{listArrowIcon}</span>
                    <Typography className={services.planListText}>Many advantages to suit your business</Typography>
                  </Stack>)}

                  <Box textAlign='left'>
                    <ButtonBase disableRipple className={services.planSeeMore}> {planSeemoreIcon}  <span>See More</span> </ButtonBase>
                  </Box>

                </Box>

                <Box className={services.planCardActive} >
                  <Stack minHeight={'130px'} direction='row' alignItems='center' justifyContent={'space-between'}>
                    <Box textAlign='left'>
                      <Typography color='primary' className={services.planCardTitle}>Advenced Plan</Typography>
                      <Typography color='primary' className={services.planCardSubtitle}>100 KWD/Year</Typography>
                      <Typography disabled className={services.planCardDelActive}> <del>170 KWD Year</del> </Typography>
                    </Box>
                    <Box> <Picture className={services.planCardPic} src={'/diamond.svg'} width={107} height={113} alt='pro' /></Box>
                  </Stack>


                  <Box mb={{ xs: 2, sm: 4 }} textAlign='center'>
                    <Button color='primary' variant='contained' fullWidth className={services.planBtnActive} endIcon={planBtnActive} >
                      Start Now
                    </Button>
                  </Box>

                  {[1, 1, 1, 1, 1, 1, 1, 1].map((item, indx) => <Stack mt={.5} key={indx} textAlign='left' direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
                    <span>{listArrowIcon}</span>
                    <Typography className={services.planListText}>Many advantages to suit your business</Typography>
                  </Stack>)}

                  <Box textAlign='left'>
                    <ButtonBase disableRipple className={services.planSeeMore}> {planSeemoreActiveIcon}  <span>See More</span> </ButtonBase>
                  </Box>

                </Box>

                <Box className={services.planCard} >
                  <Stack minHeight={'130px'} direction='row' alignItems='center' justifyContent={'space-between'}>
                    <Box>
                      <Typography color='primary' className={services.planCardTitle}>Premium Plan</Typography>
                      <Typography color='primary' className={services.planCardSubtitle}>100 KWD/Year</Typography>
                      <Typography disabled className={services.planCardDel}> <del>170 KWD Year</del> </Typography>
                    </Box>
                    <Box className={services.planCardIcon} >{vipPlanIcon}</Box>
                  </Stack>

                  <Box mb={{ xs: 2, sm: 4 }} textAlign='center'>
                    <Button color='secondary' fullWidth className={services.planBtn} endIcon={planBtn} >
                      Start Now
                    </Button>
                  </Box>

                  {[1, 1, 1, 1, 1, 1, 1, 1].map((item, indx) => <Stack mt={.5} key={indx} textAlign='left' direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
                    <span>{listArrowIcon}</span>
                    <Typography className={services.planListText}>Many advantages to suit your business</Typography>
                  </Stack>)}

                  <Box textAlign='left'>
                    <ButtonBase disableRipple className={services.planSeeMore}> {planSeemoreIcon}  <span>See More</span> </ButtonBase>
                  </Box>

                </Box>
              </Box>
            </SliderComponent>
          </Box>
        </Box>

      </Box>
    </div >
  )
}

export default ChoosePlan
