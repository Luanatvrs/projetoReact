import React from 'react';
import { LayoutBaseDePagina } from '../../shared/layouts';
import { BarraDeFerramentas } from '../../shared/components';



export const Dashboard = () => {

    return (
        <LayoutBaseDePagina 
            titulo='Página inicial' 
            barraDeFerramentas={(
                <BarraDeFerramentas
                    mostrarInputBusca
                    textoBotaoNovo='Nova'
                />
            )}
        >
            Testando
        </LayoutBaseDePagina>
    );
};