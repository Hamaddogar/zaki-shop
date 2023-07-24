import React from 'react'
import marketing from '@/app/styles/marketing.module.css'
import common from '@/app/styles/common.module.css'
import Picture from '../reuse/Picture'
import { Box, Button, Grid, Typography } from '@mui/material'
import { arrowForwardSecond } from '../reuse/icons'
import { SecondaryBtn } from '../reuse/Buttons'

const GrnerateLeads = () => {

  return (
    <div className={marketing.grnerateLeadsMain}>
      <Grid container alignItems='center' justifyContent='center' rowGap={5} position='relative'
        sx={{ backgroundPosition: { xs: 'bottom center', md: '80% center' } }}
        className={common.background}
      >
        <Grid item xs={12} md={5} lg={4}>
          <Box
            position={{ xs: 'relative', md: 'absolute' }}
            top={{ xs: '0px', md:'30%', lg: '40%' }}
            left={{ xs: '0px', md:'0%', lg: '12%' }}
          >
            <Box pt={{ xs: 0, lg: '70px' }} >
              <Typography
                sx={{ color: '#FFFFFF', textAlign: { xs: 'center', md: 'left !important' }, }}
                className={marketing.subtitlemain}
              >
                Generate leads with <br />
                strategic and personalized<br />
                campaigns
              </Typography>
              <Typography sx={{ color: '#FFFFFF', textAlign: { xs: 'center', md: 'left !important' }, }} mt={3} className={marketing.normal}>
                Easy to create fast and helpful app <br />
                with me 😍, just get started and  <br />
                watch some magic 😎
              </Typography>
            </Box>
            <Box mt={5} textAlign={{ xs: 'center', md: 'left' }}>
            <SecondaryBtn />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <Picture src={'/leads.svg'} width={833} height={921} alt='' />
        </Grid>
      </Grid>
      <Box>
      </Box>
    </div>
  )
}

export default GrnerateLeads
