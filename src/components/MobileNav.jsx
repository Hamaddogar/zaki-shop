import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { Box, ButtonBase, ListItemIcon, Menu, MenuItem, Stack, Typography } from '@mui/material';
import { downIcon, drawerLogo, facebookIcon, languageIcon, linkedinIcon, twitterIcon } from './reuse/icons';
import header from '@/styles/Header.module.css';
import Picture from './reuse/Picture';
import LinksLister from './reuse/LinksLister';
import { AppContext } from '@/AppContext';
import close from '@/components/images/close.svg'

export default function MobileNav({ open, setOpen }) {
    const handleClose = () => setOpen(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { language, setlanguage, content } = React.useContext(AppContext);
    const openMenu = Boolean(anchorEl);
    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleCloseMenu = (value) => e => {
        if (value) setlanguage(value)
        setAnchorEl(null);
    }
    return (
        <div>
            <Dialog
                fullScreen={true}
                open={open}
                onClose={handleClose}
                aria-labelledby="mobile-navbar"
                scroll={'body'}
                sx={{
                    '& .MuiBackdrop-root': { backdropFilter: 'blur(14px) !important', backgroundColor: 'transparent' },
                    '& .MuiDialog-container': { padding: '20px', minHeight: 'calc(100vh - 40px)' },
                    '& .MuiPaper-root': { borderRadius: '40px', background: 'rgba(15, 21, 70, 0.38)', color: '#FFFFFF', padding: '40px 35px' },
                }}
            >
                <Stack direction='row' alignItems='center' justifyContent={'space-between'}>
                    <Box>{drawerLogo}</Box>
                    <Picture onClick={handleClose} center={false} src={close} width={48} height={48} alt={'logo'} />
                </Stack>

                <Stack mt={'83px'} sx={{ position: 'relative', }} justifyContent={'space-between'}>
                    {/* <Box > */}
                    <Typography className={header['inner-nav-title']}>
                        {content.mobilenav.welcome[0]} <br />
                        {content.mobilenav.welcome[1]}
                    </Typography>
                    <LinksLister mt='53px' />

                    <Stack spacing={'17px'} mt={'40px'}>
                        <ButtonBase color='secondary' className={header['inner-nav-login']} >{content.buttons.login}</ButtonBase>
                        <ButtonBase color='primary' className={header['inner-nav-signup']} >{content.buttons.signup}</ButtonBase>
                        <Button
                            className={header['inner-nav-language']}
                            startIcon={languageIcon}
                            endIcon={downIcon}
                            id="account-menu"
                            disableTouchRipple
                            disableRipple
                            onClick={handleClick}
                        >
                            <span style={{ color: '#FFFFFF' }}>{language}</span>
                        </Button>
                    </Stack>
                    {/* </Box> */}

                    <Box my='44px'>
                        <Typography className={header['inner-nav-footer']} >{content.mobilenav.followus}</Typography>
                        <Stack direction='row' alignItems={'center'} spacing={2} >
                            <a
                                href="https://vercel.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >{facebookIcon}</a>

                            <a
                                href="https://vercel.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >{linkedinIcon}</a>

                            <a
                                href="https://vercel.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >{twitterIcon}</a>
                        </Stack>
                    </Box>
                </Stack>
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={openMenu}
                    onClose={handleCloseMenu}
                    // onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            background: 'rgba(20, 24, 58, 0.54)',
                            backdropFilter: 'blur(27px)',
                            color: '#FFFFFF',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                background: 'rgba(20, 24, 58, 0.54)',
                                backdropFilter: 'blur(27px)',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem sx={{ color: '#FFFFFF' }} onClick={handleCloseMenu(language === "عربي" ? "English" : "عربي")}>
                        <ListItemIcon> {languageIcon}   </ListItemIcon>  <span>{language === "عربي" ? "English" : "عربي"}</span>
                    </MenuItem>
                </Menu>
            </Dialog>
        </div>
    );
}