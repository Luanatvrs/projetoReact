import React, { useContext } from 'react';
import { createContext, useCallback, useState } from 'react';


interface IDrawerContextData {
    isDrawerOpen: boolean;
    toggleDrawerOpen: () => void;
}

export const useDrawerContext = () => {
    return useContext(DrawerContext);
};

const DrawerContext = createContext({} as IDrawerContextData);
interface IDrawerProviderProps{
    children: React.ReactNode
}

export const DrawerProvider: React.FC <IDrawerProviderProps> = ({ children }) => {
    const [isDrawerOpen, setIsDrawerOpen] =  useState (false);

    const toggleDrawerOpen  = useCallback(() => {

        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);

    },[]);

    return(
        <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen}}>
            {children}
        </DrawerContext.Provider>
    );
};