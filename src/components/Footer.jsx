import React from 'react'
import Picture from './reuse/Picture'
import { Box, ButtonBase, Grid, Hidden, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import { arrowForwardEmail, footerfacebook, footerinstagram, footerlinkedin, footertiktok } from './reuse/icons'
import common from '@/styles/common.module.css'
import { MUIDesign } from './reuse/Design'
import Link from 'next/link'

const Footer = ({ content }) => {
    return (
        <div>
            {/* Large Screens */}
            <Hidden mdDown>
                <Grid container rowSpacing={2} alignItems={'center'} justifyContent={{ xs: 'center', md: 'space-between' }} py={'35px'} px={{ xs: '30px', lg: '40px' }}>
                    <Grid item xs={12} md='auto'>
                        <Box textAlign={'center'}>
                            <Link href='/'>
                                <Picture center={false} src={'/footer-logo.svg'} width={180} height={80} alt='' />
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={6} md='auto'>
                        <Stack direction='row' alignItems='center' justifyContent={{ xs: 'flex-start', sm: 'center' }} spacing={1}>
                            <Box>{footerfacebook}</Box>
                            <Box>{footerinstagram}</Box>
                            <Box>{footertiktok}</Box>
                            <Box>{footerlinkedin}</Box>
                        </Stack>
                    </Grid>

                    <Grid item xs={6} md='auto'>
                        <Typography textAlign={{ xs: 'right', sm: 'center' }} sx={{ color: '#000', fontWeight: 500 }} fontSize={{ xs: '14px', sm: '16px' }}>
                            ©2023 Over Zaki
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md='auto'>
                        <Stack direction={{ xs: 'column', md: 'row' }} alignItems='center' justifyContent='center' spacing={1}>
                            <Typography sx={{ color: '#000', fontSize: '13px', fontWeight: 500 }}>{content.subs}</Typography>
                            <Box>
                                <TextField
                                    sx={MUIDesign.textField}
                                    color='primary'
                                    placeholder={content.email}
                                    name='email'
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end">
                                            <ButtonBase className={common.emailBtn} >{arrowForwardEmail}</ButtonBase>
                                        </InputAdornment>,
                                    }}
                                />
                            </Box>
                        </Stack>
                    </Grid>

                </Grid>
            </Hidden>

            {/* small screens */}
            <Hidden mdUp>
                <Grid container rowSpacing={2} alignItems={'center'} justifyContent={{ xs: 'center', md: 'space-between' }} py={'35px'} px={{ xs: '30px', lg: '40px' }}>
                    <Grid item xs={12} md='auto'>
                        <Box textAlign={'center'}>
                            <Link href='/'>
                                <Picture center={false} src={'/footer-logo.svg'} width={180} height={80} alt='' />
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md='auto'>
                        <Stack direction={{ xs: 'column', md: 'row' }} alignItems='center' justifyContent='center' spacing={1}>
                            <Typography sx={{ color: '#000', fontSize: '13px', fontWeight: 500 }}>{content.subs}</Typography>
                            <Box>
                                <TextField
                                    sx={MUIDesign.textField}
                                    color='primary'
                                    placeholder={content.email}
                                    name='email'
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end">
                                            <ButtonBase className={common.emailBtn} >{arrowForwardEmail}</ButtonBase>
                                        </InputAdornment>,
                                    }}
                                />
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item xs={6} md='auto'>
                        <Stack direction='row' alignItems='center' justifyContent={{ xs: 'flex-start', sm: 'center' }} spacing={1}>
                            <Box>{footerfacebook}</Box>
                            <Box>{footerinstagram}</Box>
                            <Box>{footertiktok}</Box>
                            <Box>{footerlinkedin}</Box>
                        </Stack>
                    </Grid>
                    <Grid item xs={6} md='auto'>
                        <Typography textAlign={{ xs: 'right', sm: 'center' }} sx={{ color: '#000', fontWeight: 500 }} fontSize={{ xs: '14px', sm: '16px' }}>
                            ©2023 Over Zaki
                        </Typography>
                    </Grid>
                </Grid>
            </Hidden>
        </div >
    )
}

export default Footer