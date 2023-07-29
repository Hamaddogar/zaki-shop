import React from 'react'
import mobileapp from '@/styles/Mobileapp.module.css'
import Picture from '../reuse/Picture'
import { Box,Grid, Typography } from '@mui/material'
import { PrimaryBtn } from '../reuse/Buttons'
import nodev1 from '@/components/images/nodev1.svg'
import IAsol from '@/components/images/IAsol.svg'

const NoDeveloper1 = ({ content, BTNS }) => {

  return (
    <div className={mobileapp.noDeveloper1Main}>
      <Box className={mobileapp.titleContainer}>
        <Typography color='primary' className={mobileapp.subtitlemain}>
        {content.title[0]}  <br />{content.title[1]}
        </Typography>
      </Box>
      <Grid container direction={{ xs: 'column-reverse', md: 'row' }} px={{ xs: 0, md: 7, lg: 12 }} alignItems={'center'} justifyContent={'space-between'} rowGap={'40px'} spacing={'3px'}>
        <Grid item xs={12} md={6}>
          <Box pr={{ xs: 0, md: 4 }}>
            <Picture src={nodev1} width={538} height={496} alt='' />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>

          <Box textAlign={{ xs: 'center', md: 'left' }}>
            <Picture center={false} src={IAsol} width={212} height={55} alt='' />
          </Box>
          <Box textAlign={{ xs: 'center', md: 'left' }}>
            <Typography
              color='primary'
              fontWeight={{ xs: 800 }}
              fontSize={{ xs: '22px', md: '33px', lg: '65px' }}
              lineHeight={{ xs: '26px', md: '35px', lg: '65px' }}
              maxWidth={{ xs: '250px', md: '550px', lg: '900px' }}
              margin={{ xs: 'auto', md: '0px' }}
            >
              {content.subtitle}
            </Typography>
            <Box mt={'30px'}></Box>
            <Typography
              color='primary'
              fontWeight={{ xs: 500 }}
              fontSize={{ xs: '17px', md: '23px', lg: '28px' }}
              lineHeight={{ xs: '23px', md: '27px', lg: '34px' }}
              maxWidth={{ xs: '300px', md: '350px', lg: '500px' }}
              margin={{ xs: 'auto', md: '0px' }}
            >
              {content.subtitle2}
            </Typography>
            <Box mt={5}>
              <PrimaryBtn text={BTNS.start} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default NoDeveloper1
