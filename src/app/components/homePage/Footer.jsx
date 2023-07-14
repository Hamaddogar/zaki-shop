"use client"
import React from 'react'
import Picture from '../reuse/Picture'
import { Box, ButtonBase, Grid, Hidden, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import { arrowForwardEmail, footerfacebook, footerinstagram, footerlinkedin, footertiktok } from '../reuse/icons'
import home from '@/app/styles/home.module.css'
import { MUIDesign } from '../reuse/Design'
import { Slide } from 'react-awesome-reveal'

const Footer = () => {
    return (
        <div>
            <Grid container rowSpacing={2} alignItems={'center'} justifyContent={{ xs: 'center', md: 'space-between' }} pb={'40px'} px={{ xs: '30px', lg: '40px' }}>
                <Grid item xs={12} md='auto'>
                    <Box textAlign={'center'}>
                        <Slide triggerOnce cascade direction='right' >
                            <Picture center={false} src={'/footer-logo.png'} width={180} height={80} alt='' />
                        </Slide>
                    </Box>
                </Grid>
                <Hidden mdUp>
                    <Grid item xs={12} sm={6} md='auto'>
                        <Stack direction={{ xs: 'column', md: 'row' }} alignItems='center' justifyContent='center' spacing={1}>
                            <Slide triggerOnce cascade direction='right'>
                                <Typography sx={{ color: '#000', fontSize: '13px', fontWeight: 500 }}>Subscribe to our newsletter today!</Typography>
                                <Box>
                                    <TextField
                                        sx={MUIDesign.textField}
                                        color='primary'
                                        placeholder='Your E-mail'
                                        name='email'
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">
                                                <ButtonBase className={home.emailBtn} >{arrowForwardEmail}</ButtonBase>
                                            </InputAdornment>,
                                        }}
                                    />
                                </Box>
                            </Slide>
                        </Stack>
                    </Grid>
                </Hidden>
                <Grid item xs={6} md='auto'>
                    <Stack direction='row' alignItems='center' justifyContent={{ xs: 'flex-start', sm: 'center' }} spacing={1}>
                        <Slide triggerOnce cascade direction='up'>
                            <Box>{footerfacebook}</Box>
                            <Box>{footerinstagram}</Box>
                            <Box>{footertiktok}</Box>
                            <Box>{footerlinkedin}</Box>
                        </Slide>
                    </Stack>
                </Grid>

                <Grid item xs={6} md='auto'>
                    <Slide triggerOnce cascade direction='up' >
                        <Typography textAlign={{ xs: 'right', sm: 'center' }} sx={{ color: '#000', fontWeight: 500 }} fontSize={{ xs: '14px', sm: '16px' }}>
                            ©2023 Over Zaki
                        </Typography>
                    </Slide>
                </Grid>
                <Hidden mdDown>
                    <Grid item xs={12} md='auto'>
                        <Stack direction={{ xs: 'column', md: 'row' }} alignItems='center' justifyContent='center' spacing={1}>
                            <Slide triggerOnce cascade direction='left'>
                                <Typography sx={{ color: '#000', fontSize: '13px', fontWeight: 500 }}>Subscribe to our newsletter today!</Typography>
                                <Box>
                                    <TextField
                                        sx={MUIDesign.textField}
                                        color='primary'
                                        placeholder='Your E-mail'
                                        name='email'
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">
                                                <ButtonBase className={home.emailBtn} >{arrowForwardEmail}</ButtonBase>
                                            </InputAdornment>,
                                        }}
                                    />
                                </Box>
                            </Slide>
                        </Stack>
                    </Grid>
                </Hidden>

            </Grid>
        </div >
    )
}

export default Footer