import React from 'react'
import marketing from '@/styles/Marketing.module.css'
import common from '@/styles/Common.module.css'
import Picture from '../reuse/Picture'
import { Box, Grid, Typography } from '@mui/material'
import { SecondaryBtn } from '../reuse/Buttons'
import leads from '@/components/images/leads.svg'

const GrnerateLeads = ({ content, BTNS }) => {

  return (
    <div className={marketing.grnerateLeadsMain}>
      <Grid container alignItems='center' justifyContent='center' rowGap={5} position='relative'
        sx={{ backgroundPosition: { xs: 'bottom center', md: '80% center' } }}
        className={common.background}
      >
        <Grid item xs={12} md={5} lg={4}>
          <Box
            position={{ xs: 'relative', md: 'absolute' }}
            top={{ xs: '0px', md: '30%', lg: '40%' }}
            left={{ xs: '0px', md: '0%', lg: '12%' }}
          >
            <Box pt={{ xs: 0, lg: '70px' }} >
              <Typography
                sx={{ color: '#FFFFFF', textAlign: { xs: 'center', md: 'left !important' }, }}
                className={marketing.subtitlemain}
              >
                {content.title[0]} <br /> {content.title[1]} <br /> {content.title[2]}
              </Typography>
              <Typography sx={{ color: '#FFFFFF', textAlign: { xs: 'center', md: 'left !important' }, }} mt={3} className={marketing.normal}>
                {content.subtitle[0]} <br /> {content.subtitle[1]} <br /> {content.subtitle[2]}
              </Typography>
            </Box>
            <Box mt={5} textAlign={{ xs: 'center', md: 'left' }}>
              <SecondaryBtn text={BTNS.start} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <Picture src={leads} width={833} height={921} alt='' />
        </Grid>
      </Grid>
      <Box>
      </Box>
    </div>
  )
}

export default GrnerateLeads
