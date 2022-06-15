import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login/login';
import Dashboard from './components/Dashbord/dashboard';

const Approutes = () => {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/dashboard" element={<Dashboard />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Approutes;