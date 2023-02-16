import React from 'react';
import { 
    Avatar, 
    Divider, 
    Drawer, 
    Icon, 
    List, 
    ListItemButton, 
    ListItemIcon, 
    ListItemText, 
    useMediaQuery, 
    useTheme 
} from '@mui/material';
import { Box } from '@mui/system';
import { useDrawerContext } from '../../contexts/DrawerContext';


interface TelaMenu{
    children: React.ReactNode
}

export const MenuLateral: React.FC < TelaMenu > = ({children}) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const {isDrawerOpen, toggleDrawerOpen} = useDrawerContext();

    return(
        <>
            <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}> 
                <Box width={theme.spacing(28)}>

                    <Box width='100%' height={theme.spacing(20)} display='flex' alignItems='center' justifyContent='center'>
                        <Avatar alt='Remy Sharp' sx={{height:theme.spacing(12), width:theme.spacing(12)}} src='/satic/images/avatar/1.jpg'/>
                    </Box>

                    <Box flex={1}>
                        <List component="nav">
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon>home</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Inbox" />
                            </ListItemButton>
                        </List>
                    </Box>

                    <Divider/>

                </Box>
            </Drawer>
            <Box height='100vh' marginLeft={smDown ? 0 :theme.spacing(28)}>
                {children}
            </Box>
        </>
    );
};