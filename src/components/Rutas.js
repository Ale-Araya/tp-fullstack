import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './HomePage';
import Error from './Error';
import Carrito from './Carrito';

const Rutas = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/Carrito" element={<Carrito />}></Route>
                <Route path="/*" element={<Error />}></Route>
            </Routes>
        </Router>
    );
}

export default Rutas;
