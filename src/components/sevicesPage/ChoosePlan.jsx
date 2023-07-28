import React from 'react'
import common from '@/styles/Common.module.css'
import services from '@/styles/Services.module.css'
import { Box, Button, ButtonBase, Grid, Stack, Typography } from '@mui/material'
import { listArrowIcon, planBtn, planBtnActive, planSeemoreActiveIcon, planSeemoreIcon, proPlanIcon, vipPlanIcon } from '../reuse/icons'
import Picture from '../reuse/Picture'
import SliderComponent from './Slider'

const ChoosePlan = ({ content, BTNS }) => {

  return (
    <div className={services.planMain}>
      <Box sx={{ maxWidth: '1720px', margin: 'auto' }} >
        <Grid container alignItems={'center'} rowGap={10} justifyContent={'center'} spacing={{ xs: '0px', sm: '30px' }}>
          <Grid item xs={12} >
            <Box sx={{ textAlign: 'center' }}>
              <Typography color='primary' className={services.subtitle} mb={3}> {content.title}  </Typography>
              <Typography className={services.normal} mb={5}> {content.subtitle} </Typography>
              <Box id='switch'>
                <span>{content.time_options[0]}</span>
                <label for="toggle">
                  <input class="input" type="checkbox" id="toggle" />
                  <div class="toggle-wrapper"><span class="selector"></span></div>
                </label>
                <span>{content.time_options[1]}</span>
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
                    <Box textAlign='left' >
                      <Typography color='primary' className={services.planCardTitle}>{content.ProPlan.title}</Typography>
                      <Typography color='primary' className={services.planCardSubtitle}>{content.ProPlan.subtitle}</Typography>
                      <Typography disabled className={services.planCardDel}> <del>{content.ProPlan.subtitle2}</del> </Typography>
                    </Box>
                    <Box className={services.planCardIcon} >{proPlanIcon}</Box>
                  </Stack>

                  <Box my={{ xs: 5 }} textAlign='center'>
                    <Button color='secondary' fullWidth className={services.planBtn} endIcon={planBtn} >
                      {BTNS.start}
                    </Button>
                  </Box>

                  {content.ProPlan.options.map((item, indx) => <Stack mt={.5} key={indx} textAlign='left' direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
                    <span>{listArrowIcon}</span>
                    <Typography className={services.planListText}>{item}</Typography>
                  </Stack>)}

                  <Box textAlign='left'>
                    <ButtonBase disableRipple className={services.planSeeMore}> {planSeemoreIcon}  <span style={{ fontSize: '14px' }}>{BTNS.more} </span> </ButtonBase>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} md={6} lg={4}>
                <Box className={services.planCardActive} >
                  <Stack mb={'63px'} direction='row' alignItems='center' justifyContent={'space-between'}>
                    <Box textAlign='left' >
                      <Typography color='primary' className={services.planCardTitle}>{content.AdvencedPlan.title}</Typography>
                      <Typography color='primary' className={services.planCardSubtitle}>{content.AdvencedPlan.subtitle}</Typography>
                      <Typography disabled className={services.planCardDelActive}> <del>{content.AdvencedPlan.subtitle2}</del> </Typography>
                    </Box>
                    <Box> <Picture src={'/diamond.svg'} width={107} height={113} alt='pro' /></Box>
                  </Stack>


                  <Box my={{ xs: 5 }} textAlign='center'>
                    <Button color='primary' variant='contained' fullWidth className={services.planBtnActive} endIcon={planBtnActive} >
                      {BTNS.start}
                    </Button>
                  </Box>

                  {content.AdvencedPlan.options.map((item, indx) => <Stack mt={.5} key={indx} textAlign='left' direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
                    <span>{listArrowIcon}</span>
                    <Typography className={services.planListText}>{item}</Typography>
                  </Stack>)}
                  <Box textAlign='left'>
                    <ButtonBase disableRipple className={services.planSeeMore}> {planSeemoreActiveIcon}  <span style={{ fontSize: '14px' }}>{BTNS.more} </span> </ButtonBase>
                  </Box>

                </Box>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Box className={services.planCard} >
                  <Stack mb={'80px'} direction='row' alignItems='center' justifyContent={'space-between'}>
                    <Box textAlign='left' >
                      <Typography color='primary' className={services.planCardTitle}>{content.PremiumPlan.title}</Typography>
                      <Typography color='primary' className={services.planCardSubtitle}>{content.PremiumPlan.subtitle}</Typography>
                      <Typography disabled className={services.planCardDel}> <del>{content.PremiumPlan.subtitle2}</del> </Typography>
                    </Box>
                    <Box className={services.planCardIcon} >{vipPlanIcon}</Box>
                  </Stack>

                  <Box my={{ xs: 5 }} textAlign='center'>
                    <Button color='secondary' fullWidth className={services.planBtn} endIcon={planBtn} >
                      {BTNS.start}
                    </Button>
                  </Box>

                  {content.PremiumPlan.options.map((item, indx) => <Stack mt={.5} key={indx} textAlign='left' direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
                    <span>{listArrowIcon}</span>
                    <Typography className={services.planListText}>{item}</Typography>
                  </Stack>)}
                  <Box textAlign='left'>
                    <ButtonBase disableRipple className={services.planSeeMore}> {planSeemoreIcon}  <span style={{ fontSize: '14px' }}>{BTNS.more} </span> </ButtonBase>
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
                    <Box textAlign='left' >
                      <Typography color='primary' className={services.planCardTitle}>{content.ProPlan.title}</Typography>
                      <Typography color='primary' className={services.planCardSubtitle}>{content.ProPlan.subtitle}</Typography>
                      <Typography disabled className={services.planCardDel}> <del>{content.ProPlan.subtitle2}</del> </Typography>
                    </Box>
                    <Box className={services.planCardIcon} >{proPlanIcon}</Box>
                  </Stack>

                  <Box mb={{ xs: 2, sm: 4 }} textAlign='center'>
                    <Button color='secondary' fullWidth className={services.planBtn} endIcon={planBtn} >
                      Start Now
                    </Button>
                  </Box>

                  {content.ProPlan.options.map((item, indx) => <Stack mt={.5} key={indx} textAlign='left' direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
                    <span>{listArrowIcon}</span>
                    <Typography className={services.planListText}>{item}</Typography>
                  </Stack>)}

                  <Box textAlign='left'>
                    <ButtonBase disableRipple className={services.planSeeMore}> {planSeemoreIcon}  <span style={{ fontSize: '14px' }}>{BTNS.more} </span> </ButtonBase>
                  </Box>

                </Box>

                <Box className={services.planCardActive} >
                  <Stack minHeight={'130px'} direction='row' alignItems='center' justifyContent={'space-between'}>
                    <Box textAlign='left' >
                      <Typography color='primary' className={services.planCardTitle}>{content.AdvencedPlan.title}</Typography>
                      <Typography color='primary' className={services.planCardSubtitle}>{content.AdvencedPlan.subtitle}</Typography>
                      <Typography disabled className={services.planCardDelActive}> <del>{content.AdvencedPlan.subtitle2}</del> </Typography>
                    </Box>
                    <Box> <Picture className={services.planCardPic} src={'/diamond.svg'} width={107} height={113} alt='pro' /></Box>
                  </Stack>


                  <Box mb={{ xs: 2, sm: 4 }} textAlign='center'>
                    <Button color='primary' variant='contained' fullWidth className={services.planBtnActive} endIcon={planBtnActive} >
                      {BTNS.start}
                    </Button>
                  </Box>

                  {content.AdvencedPlan.options.map((item, indx) => <Stack mt={.5} key={indx} textAlign='left' direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
                    <span>{listArrowIcon}</span>
                    <Typography className={services.planListText}>{item}</Typography>
                  </Stack>)}
                  <Box textAlign='left'>
                    <ButtonBase disableRipple className={services.planSeeMore}> {planSeemoreActiveIcon}  <span style={{ fontSize: '14px' }}>{BTNS.more} </span> </ButtonBase>
                  </Box>


                </Box>

                <Box className={services.planCard} >
                  <Stack minHeight={'130px'} direction='row' alignItems='center' justifyContent={'space-between'}>
                    <Box textAlign='left' >
                      <Typography color='primary' className={services.planCardTitle}>{content.PremiumPlan.title}</Typography>
                      <Typography color='primary' className={services.planCardSubtitle}>{content.PremiumPlan.subtitle}</Typography>
                      <Typography disabled className={services.planCardDel}> <del>{content.PremiumPlan.subtitle2}</del> </Typography>
                    </Box>
                    <Box className={services.planCardIcon} >{vipPlanIcon}</Box>
                  </Stack>

                  <Box mb={{ xs: 2, sm: 4 }} textAlign='center'>
                    <Button color='secondary' fullWidth className={services.planBtn} endIcon={planBtn} >
                      {BTNS.start}
                    </Button>
                  </Box>
                  {content.PremiumPlan.options.map((item, indx) => <Stack mt={.5} key={indx} textAlign='left' direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
                    <span>{listArrowIcon}</span>
                    <Typography className={services.planListText}>{item}</Typography>
                  </Stack>)}
                  <Box textAlign='left'>
                    <ButtonBase disableRipple className={services.planSeeMore}> {planSeemoreIcon}  <span style={{ fontSize: '14px' }}>{BTNS.more} </span> </ButtonBase>
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
