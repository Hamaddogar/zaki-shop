"use client"
import { Box, Divider } from '@mui/material'
import React from 'react'
import header from '@/app/styles/header.module.css'
import Picture from './reuse/Picture';

const MiniNav = ({ openST, closeST, alignItems, children }) => {

    return (
        <div>
            {
                openST !== "none" && <Box sx={{ position: 'relative', }}>
                    <Box className={header[openST]} >
                        <Box className={header.fastLinks} sx={{ alignItems: alignItems }}>
                            <Box>
                                <Box sx={{ position: 'absolute', top: 9, right: 7 }}><Picture onClick={closeST} center={false} src={'/close.svg'} width={48} height={48} alt={'logo'}  style={{ cursor: 'pointer' }} /></Box>
                                <Divider sx={{ background: '#37F9BD', mb: alignItems === 'center' ? '40px' : 0 }} />
                                {children}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            }
        </div>
    )
}

export default MiniNav