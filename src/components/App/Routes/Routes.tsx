import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../../Home'


const AppRoutes = () => (
    <Routes>
        <Route index element={<Home />} />
    </Routes>
)


export default AppRoutes
