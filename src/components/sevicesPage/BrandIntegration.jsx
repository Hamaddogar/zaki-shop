import React from 'react'
import services from '@/styles/Services.module.css'
import Picture from '../reuse/Picture'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { listArrowIcon, } from '../reuse/icons'
import { PrimaryBtn } from '../reuse/Buttons'
import integrationB from '@/components/images/integrationB.svg'

const BrandIntegration = ({ content, BTNS }) => {

  return (
    <div className={services.brandMain}>
      <Grid container alignItems={'center'} justifyContent={'center'} px={{ xs: 0, md: 6 }} rowGap={'40px'} spacing={'3px'}>
        <Grid item xs={12} md={5}>
          <Box>
            <Typography className={services.titleIntegration} color="secondary" > {content.title}</Typography>
            <Typography className={services.normal} color="primary" mt={2}> {content.subtitle} </Typography>
            <Box mt={"50px"} mb={'19px'} display={{ xs: 'inline-block', md: 'block' }} >

              {content.points.map((item, indx) => <Stack key={indx} direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
                <span>{listArrowIcon}</span>
                <Typography className={services.normal2}>{item}</Typography>
              </Stack>)}
            </Box>

            <Box>
              <PrimaryBtn text={BTNS.start} />
            </Box>
          </Box>

        </Grid>
        <Grid item xs={12} md={7}>
          <Picture src={integrationB} width={857} height={551} alt='' />
        </Grid>
      </Grid>
    </div>
  )
}

export default BrandIntegration
