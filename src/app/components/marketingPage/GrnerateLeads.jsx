import React from 'react'
import marketing from '@/app/styles/marketing.module.css'
import Picture from '../reuse/Picture'
import { Box, Button, Grid, Typography } from '@mui/material'
import { arrowForwardSecond } from '../reuse/icons'

const GrnerateLeads = () => {

  return (
    <div className={marketing.grnerateLeadsMain}>
      <Grid container alignItems='center' justifyContent='center' rowGap={5} position='relative'>
        <Grid item xs={12} md={4}>
          <Box
            position={{ xs: 'relative', md: 'absolute' }}
            top={{ xs: '0px', md: '29%' }}
            left={{ xs: '0px', md: '8%' }}
          >
            <Box pt={{ xs: 0, lg: '70px' }} >
              <Typography
                sx={{ color: '#FFFFFF', textAlign: 'left !important', }}
                className={marketing.subtitlemain}
              >
                Generate leads with <br />
                strategic and personalized<br />
                campaigns
              </Typography>
              <Typography sx={{ color: '#FFFFFF' }} mt={3} className={marketing.normal}>
                Easy to create fast and helpful app <br />
                with me 😍, just get started and  <br />
                watch some magic 😎
              </Typography>
            </Box>
            <Box mt={5}>
              <Button color='secondary' className={marketing.secondaryBtn} endIcon={arrowForwardSecond} >
                Start Now
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <Picture src={'/leads.png'} width={1472} height={254} alt='' />
        </Grid>
      </Grid>
      <Box>
      </Box>
    </div>
  )
}

export default GrnerateLeads
