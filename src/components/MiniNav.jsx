"use client"
import { Box, Divider } from '@mui/material'
import React from 'react'
import header from '@/styles/Header.module.css'

const MiniNav = ({ openST, alignItems, children }) => {

    return (
        <div>
            {
                openST !== "none" && <Box sx={{ position: 'relative', }}>
                    <Box className={header[openST]} >
                        <Box className={header.fastLinks} sx={{ alignItems: alignItems }}>
                            <Box>
                                <Box sx={{ position: 'absolute', top: 9, right: 7 }}></Box>
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