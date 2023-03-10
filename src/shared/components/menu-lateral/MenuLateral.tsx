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
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';


interface TelaMenu{
    children: React.ReactNode
}

interface IListItemLinkProps{
    label: string;
    icon: string;
    to: string;
    onClick: (() => void) | undefined;
}


const ListItemLink : React.FC <IListItemLinkProps> = ({to, icon, label, onClick}) => {
    const navigate = useNavigate();

    const resolvedPath = useResolvedPath(to); 
    const match = useMatch({path:resolvedPath.pathname, end: false}); //verificar se está na rota certa e ficará selecionado a opção no menu lateral

    const handleClick = () => {
        navigate(to);
        if(onClick) onClick();
    };

    return (
        <ListItemButton selected={!!match} onClick={handleClick}>
            <ListItemIcon>
                <Icon>{icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={label} />
        </ListItemButton>
    );
};


export const MenuLateral: React.FC < TelaMenu > = ({children}) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    
    const {isDrawerOpen, toggleDrawerOpen, drawerOptions} = useDrawerContext();

    return(
        <>
            <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}> 
                <Box width={theme.spacing(28)}>

                    <Box width='100%' height={theme.spacing(20)} display='flex' alignItems='center' justifyContent='center'>
                        <Avatar alt='Remy Sharp' sx={{height:theme.spacing(12), width:theme.spacing(12)}} src='/satic/images/avatar/1.jpg'/>
                    </Box>

                    <Box flex={1}>
                        <List component="nav">
                        {drawerOptions.map( drawerOptions => (
                            <ListItemLink
                                key={drawerOptions.path}
                                icon={drawerOptions.icon}
                                to={drawerOptions.path}
                                label={drawerOptions.label}
                                onClick={smDown ? toggleDrawerOpen : undefined}
                            />
                        ))}
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