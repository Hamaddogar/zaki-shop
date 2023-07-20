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

const Header = ({ mainStyle, menu }) => {
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
  const [menuIs, setMenuIs] = React.useState('home')

  React.useEffect(() => {
    if (menu) setMenuIs(menu)
  }, [menu])





  return (
    <Box>
      <Box className={header['main-mobile']}>
        {menuIs === 'light' &&
          <Stack direction='row' alignItems='center' justifyContent={'space-between'} >
            <Link href={'/'}>
              <Picture center={false} src={'/logo-md.svg'} width={169} height={37} alt={'logo'} periorty className={header.logomd} />
            </Link>
            <Picture onClick={handleMenu} center={false} src={'/menu.svg'} width={48} height={48} alt={'logo'} periorty />
          </Stack>}

        {menuIs === 'dark' &&
          <Stack direction='row' alignItems='center' justifyContent={'space-between'} >
            <Link href={'/'}>
              <Picture center={false} src={'/logo-dark.svg'} width={169} height={37} alt={'logo'} periorty className={header.logomd} />
            </Link>
            <Picture onClick={handleMenu} center={false} src={'/menu.svg'} width={48} height={48} alt={'logo'} periorty />
          </Stack>}




        <MobileNav open={openNav} setOpen={setOpenNav} menu={menuIs} />
      </Box>
      <Stack width={{ xs: '95%', md: '85%' }} sx={{ margin: 'auto' }} direction='row' alignItems='center' justifyContent={'space-between'} className={mainStyle}>
        <Link href={'/'}>
          <Picture center={false} src={'/logo-md.svg'} width={300} height={47} alt={'logo'} periorty className={header.logomd} />
        </Link>

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
          <Picture center={false} src={'/menu.svg'} width={48} height={48} alt={'logo'} periorty />
        </Stack>
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