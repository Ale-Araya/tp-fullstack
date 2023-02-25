import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contacto from './Contacto';
import Inicio from './Inicio';
import Productos from './Productos';
import NavBar from './NavBar';
import Error from './Error';

const Rutas = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Inicio />}></Route>
                <Route path="/Productos" element={<Productos />}></Route>
                <Route path="/Contacto" element={<Contacto />}></Route>
                <Route path="/*" element={<Error />}></Route>
            </Routes>
        </Router>
    );
}

export default Rutas;
