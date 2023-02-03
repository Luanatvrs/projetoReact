import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { MenuLateral } from './shared/components/menu-lateral/MenuLateral.tsx';
import { AppThemeProvider } from './shared/contexts';

export const App = () => {
    return (
        <AppThemeProvider>
            <BrowserRouter>
                <MenuLateral>
                    <AppRoutes />
                </MenuLateral>
            </BrowserRouter>
        </AppThemeProvider>
    );
};