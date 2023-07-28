"use client"
import { Stack } from '@mui/material';
import Link from 'next/link';
import { marker } from './icons';
import { activeLink, pageLinks } from './helpers';
import { usePathname } from "next/navigation"
import header from '@/styles/Header.module.css';
import { AppContext } from '@/AppContext';
import React from 'react';

function LinksLister({ ...rest }) {
  const pathName = usePathname();
  const { content } = React.useContext(AppContext);

  return (
    <Stack justifyContent={'flex-start'} {...rest} rowGap={'10px'} >
      {content.pageLinks.map(link => (<Stack key={link.text} direction='row' rowGap='15px' alignItems='center' justifyContent='flex-start' >
        <span>{marker}</span>
        <Link href={link.href} className={header['inner-nav-routes']} style={pathName === link.href ? activeLink : {}} >{link.text}</Link>
      </Stack>))}
    </Stack>
  );
}


export default LinksLister;