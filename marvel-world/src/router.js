import React from 'react';
import {createBrowserRouter} from 'react-router-dom'
import Home from './pages/Home';
import DetalleElemento from './pages/DetalleElemento';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: '/detalle',
        element: <DetalleElemento />
    }
])