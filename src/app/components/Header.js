'use client'
import { Box, Stack, Button, ButtonBase } from '@mui/material'
import React from 'react'
import header from '@/app/styles/header.module.css'
import Picture from './reuse/Picture'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { languageIcon, downIcon } from './reuse/icons';
import MobileNav from './MobileNav';
import Link from 'next/link'
// import { Slide } from 'react-awesome-reveal'

const Header = ({ mainStyle, page }) => {
  const [openNav, setOpenNav] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = () => setOpenNav(true);
  const [pageIs, setPageIs] = React.useState('home')

  React.useEffect(() => {
    if (page) setPageIs(page)
  }, [page])





  return (
    <Box>
      <Box className={header['main-mobile']}>
        {pageIs === 'home' &&
          <Stack direction='row' alignItems='center' justifyContent={'space-between'} >
            <Picture center={false} src={'/logoxs.png'} width={200} height={47} alt={'logo'} />
            <Picture onClick={handleMenu} center={false} src={'/menu.png'} width={37} height={37} alt={'logo'} />
          </Stack>}

        {pageIs === 'services' &&
          <Stack direction='row' alignItems='center' justifyContent={'space-between'} >
            <Picture center={false} src={'/logoGreen.png'} width={200} height={47} alt={'logo'} />
            <Picture onClick={handleMenu} center={false} src={'/menuWhite.png'} width={37} height={37} alt={'logo'} />
          </Stack>}




        <MobileNav open={openNav} setOpen={setOpenNav} page={page} />
      </Box>
      <Stack width={{ xs: '95%', md: '85%' }} sx={{ margin: 'auto' }} direction='row' alignItems='center' justifyContent={'space-between'} className={mainStyle}>
        {/* <Slide triggerOnce direction='right'> */}
        <Link href={'/'}>
          <Picture center={false} src={'/logo-md.png'} width={300} height={47} alt={'logo'} periorty className={header.logomd} />
        </Link>
        {/* </Slide> */}

        {/* <Slide triggerOnce direction='left'> */}
        <Stack direction={'row'} alignItems={'center'} spacing={3}>
          <ButtonBase color='primary' className={header.login} >Login</ButtonBase>
          <Button className={header.language}
            startIcon={languageIcon}
            endIcon={downIcon}
            color='info'
            onClick={handleClick}
          >
            <span>English</span>
          </Button>
        </Stack>
        {/* </Slide> */}
      </Stack>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
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
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            {languageIcon}
          </ListItemIcon>
          Arabic
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default Header;