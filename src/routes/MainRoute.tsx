import React from 'react';
import {
    Navigate,

    Routes,
    Route,
    BrowserRouter,
    NavLink
} from "react-router-dom";
// import { Animales, Lepar, Retirada, SeguridadCiudadana } from '../pages';


interface Props {

}

export const MainRoute = () => {
    return
    (<BrowserRouter>

        <div className="main-layout">
            <Routes>
                <Route path="about" element={<h1>About Page</h1>} />
                {/* <Route path="/*" element={<Navigate to="/home" replace />} /> */}
            </Routes>
        </div>

    </BrowserRouter>);
};
