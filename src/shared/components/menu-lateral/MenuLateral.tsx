import React from 'react';
import { Avatar, Divider, Drawer, useTheme } from '@mui/material';
import { Box } from '@mui/system';

interface TelaMenu{
    children: React.ReactNode
}

export const MenuLateral: React.FC < TelaMenu > = ({children}) => {
    const theme = useTheme();

    return(
        <>
            <Drawer variant='permanent'> 
                <Box width={theme.spacing(28)}>

                    <Box width='100%' height={theme.spacing(20)} display='flex' alignItems='center' justifyContent='center'>
                        <Avatar alt='Remy Sharp' sx={{height:theme.spacing(12), width:theme.spacing(12)}} src='/satic/images/avatar/1.jpg'/>
                    </Box>

                    <Divider/>

                </Box>
            </Drawer>
            <Box height='100vh' marginLeft={theme.spacing(28)}>
                {children}
            </Box>
        </>
    );
};