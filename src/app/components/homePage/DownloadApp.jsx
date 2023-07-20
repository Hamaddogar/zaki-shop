import React from 'react'
import home from '@/app/styles/home.module.css'
import Picture from '../reuse/Picture'
import { Box, Button, ButtonBase, Grid, Hidden, Stack, Typography } from '@mui/material'
import { AndriodIcon, ISOIcon, downloadZIcon, miniFace } from '../reuse/icons'
import { WritingAnimation } from '../reuse/Animation'

const DownloadApp = () => {

  return (
    <div className={home.DownloadApp}>
      {/* <Grid direction={{ xs: 'column-reverse', lg: 'row' }} container alignItems={'center'} justifyContent={'space-between'} p={{ xs: '50px 0px 0px 0px', lg: '110px 0px 0px 0px' }}>
        <Grid item xs={12} lg={7}>
          <Box>
            <Picture src={'/downloadmenow.png'} width={936} height={502} alt='Download App' />
          </Box>
        </Grid>

        <Grid item xs={12} lg={5}>
          <Box textAlign={{ xs: 'center', lg: 'left' }} width={'80%'} margin='auto'>
            <Typography className={home['subtitle-2']} mb={'10px'} sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}><WritingAnimation text={`Download Me Now`} />{miniFace}</Typography>
            <Typography color='primary' className={home.normal} mb={'17px'}>
              Start you business now with me
            </Typography>
            <Stack direction={'row'} alignItems='center' justifyContent={{ xs: 'center', lg: 'flex-start' }} spacing={1.5} mb={'20px'}>
              <ButtonBase disableRipple>
                <Picture center={false} src={'/astore.png'} width={180} height={70} alt='' />
              </ButtonBase>
              <ButtonBase disableRipple>
                <Picture center={false} src={'/gplay.png'} width={170} height={60} alt='' />
              </ButtonBase>
            </Stack>
            <Button className={home.QRBtn}
              startIcon={<Picture center={false} src={'/qr.png'} width={90} height={90} alt='' />}
              disableRipple
            >
              <span>Scan Me {miniFace}</span>
            </Button>
          </Box>
        </Grid>
      </Grid> */}

      <Box className={home.BG} sx={{ display: 'flex', color: '#0F1546', flexDirection: { xs: 'column-reverse', lg: 'row' }, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '30px', placeItems: 'center' }}>
        <Box width={{ xs: '70%', lg: 'auto' }} sx={{ display: 'inline-block', position: 'relative', top: '7px' }} >
          <Picture src={'/mobile.svg'} width={401} height={573} alt='mobile' />
        </Box>
        <Stack direction={{ xs: 'column' }} alignItems='center' justifyContent={{ xs: 'center', lg: 'flex-start' }} spacing={1.5} mb={'20px'}>
          <Box textAlign={{ xs: 'center', lg: 'left' }}>
            {/* <Box>{downloadZIcon}</Box> */}
            <Typography
              fontWeight={{ xs: 900 }}
              fontSize={{ xs: '22px', md: '42px', lg: '42px' }}
            // lineHeight={{ xs: '85px', md: '85px', lg: '135px' }}
            >
              Download Me Now {miniFace}
            </Typography>

            <Typography mb={{ xs: '31px' }}
              marginX={{ xs: 'auto', lg: '0px' }}
              // maxWidth={{ xs: '283', md: '432px', lg: '599px' }}
              fontWeight={{ xs: 400 }}
              fontSize={{ xs: '20px', md: '23px', lg: '23px' }}
              lineHeight={{ xs: 'normal', md: 'normal', lg: 'normal' }}
            >Start you business now with me  </Typography>
            <Stack direction={'row'} alignItems='center' justifyContent={{ xs: 'center', lg: 'flex-start' }} spacing={1.5} mb={'20px'}>
              <ButtonBase disableRipple className={home.iosandBtns}>
                <span>{ISOIcon}</span> &nbsp; &nbsp;    iOS
              </ButtonBase>
              <ButtonBase disableRipple className={home.iosandBtns}>
                <span>{AndriodIcon}</span>  &nbsp; &nbsp;   Andriod
              </ButtonBase>
            </Stack>
          </Box>


          <Hidden lgUp>
            <Stack direction={{ xs: 'row', lg: 'column' }} alignItems='center' justifyContent={{ xs: 'center', lg: 'flex-start' }} spacing={1.5} mb={'20px'}>
              <Picture center={false} src={'/QR.svg'} alt='icon' width={120} height={120} />
              <Typography mb={{ xs: '31px' }}
                marginX={{ xs: 'auto', lg: '0px' }}
                // maxWidth={{ xs: '283', md: '432px', lg: '599px' }}
                fontSize={{ xs: '20px', md: '23px', lg: '23px' }}
                lineHeight={{ xs: 'normal', md: 'normal', lg: 'normal' }}
              >
                <b>Scan me</b> <br />
                for download
              </Typography>
            </Stack>
          </Hidden>
        </Stack>
        <Hidden lgDown>
          <Stack direction={{ xs: 'row', lg: 'column' }} alignItems='center' justifyContent={{ xs: 'center', lg: 'flex-start' }} spacing={1.5} mb={'20px'}>
            <Picture center={false} src={'/QR.svg'} alt='icon' width={210} height={210} />
            <Typography mb={{ xs: '31px' }}
              marginX={{ xs: 'auto', lg: '0px' }}
              fontSize={{ xs: '20px', md: '23px', lg: '23px' }}
              lineHeight={{ xs: 'normal', md: 'normal', lg: 'normal' }}
            >
              <b>Scan me</b> <br />
              for download
            </Typography>
          </Stack>
        </Hidden>
      </Box>

    </div>
  )
}

export default DownloadApp
