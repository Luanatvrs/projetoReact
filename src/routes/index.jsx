import {Routes,Route,Navigate} from 'react-router-dom'
import React from 'react';

export const AppRoutes = () => {

    return(

        <Routes>
            <Route path="/paginainicial" element={<p>Página Inicial</p>}/>
            <Route path="*" element={<Navigate to="/paginainicial"/>}/>
        </Routes>

    );

}