import React from 'react'
import services from '@/styles/Services.module.css'
import Picture from '../reuse/Picture'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { listArrowIcon, } from '../reuse/icons'
import { PrimaryBtn } from '../reuse/Buttons'
import integrationP from '@/components/images/integrationP.svg'

const PaymentIntegration = ({ content, BTNS }) => {

  return (
    <div className={services.paymentMain}>
      <Grid container direction={{ xs: 'column-reverse', md: 'row' }} alignItems={'center'} justifyContent={'center'} rowGap={'40px'} spacing={'3px'}>
        <Grid item xs={12} md={7} pr={{ xs: 0, md: 5 }}>
          <Picture src={integrationP} width={888} height={692} alt='' />
        </Grid>

        <Grid item xs={12} md={5}>
          <Box>
            <Typography className={services.titleIntegration} color="primary" > {content.title} </Typography>
            <Typography className={services.normal} color="primary" mt={2}> {content.subtitle} </Typography>
            <Box mt={"50px"} mb={'19px'} display={{ xs: 'inline-block', md: 'block' }} >
              {content.points.map((item, indx) => <Stack key={indx} direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
                <span>{listArrowIcon}</span>
                <Typography className={services.normal2}>{item}</Typography>
              </Stack>)}
            </Box>
            <br />
            <Box>
              <PrimaryBtn text={BTNS.start} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default PaymentIntegration
