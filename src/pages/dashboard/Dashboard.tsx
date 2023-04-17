import React from 'react';
import { LayoutBaseDePagina } from '../../shared/layouts';
import { FerramentasDeDetalhe } from '../../shared/components';



export const Dashboard = () => {

    return (
        <LayoutBaseDePagina 
            titulo='Página inicial' 
            barraDeFerramentas={(
                <FerramentasDeDetalhe/>
            )}
        >
            Testando
        </LayoutBaseDePagina>
    );
};