'use client'
import React from 'react'
import home from '@/app/styles/home.module.css'
import Picture from './reuse/Picture'
import { Box, Button, ButtonBase, Grid, Stack, Typography } from '@mui/material'
import { miniFace } from './reuse/icons'

const DownloadApp = () => {

  return (
    <div className={home.DownloadApp}>
      <Grid container alignItems={'center'} justifyContent={'space-between'} py={{ xs: '110px', lg: '0px' }}>
        <Grid item xs={12} lg={7}>
          <Box p={4}>
            <Picture src={'/downloadmenow.png'} width={1080} height={540} alt='Download App' />
          </Box>
        </Grid>

        <Grid item xs={12} lg={5}>
          <Box textAlign={{ xs: 'center', lg: 'left' }} width={'80%'} margin='auto'>
            <Typography className={home['subtitle-2']} mb={'10px'}>Download Me Now {miniFace}</Typography>
            <Typography color='primary' className={home.normal} mb={'17px'}> Start you business now with me </Typography>
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
      </Grid>
    </div>
  )
}

export default DownloadApp
