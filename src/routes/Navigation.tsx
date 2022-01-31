import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { routerList } from '../data/routesList';

import { Home } from "../pages/Home";
import { Navbar } from "./Navbar";


export const Navigation = () => {
    return (
        <BrowserRouter>

            <div className="main-layout">

                <Navbar />

                <Routes>

                    {
                        routerList.map(({ path, Component }) => {
                            return <Route key={path} path={path} element={<Component />} />
                        })
                    }
                    <Route path="/hola" element={<h1>Hola</h1>} />
                    {/* <Route path="/*" element={<Navigate to="/home" replace />} /> */}
                    <Route path="/*" element={<Home />} />
                </Routes>

                {/* 
                <Routes>
                    <Route path="about" element={<h1>About Page</h1>} />
                    <Route path="users" element={<h1>Users Page</h1>} />
                    <Route path="home" element={<h1>Home Page</h1>} />

                    <Route path="/*" element={<Navigate to="/home" replace />} />
                </Routes> */}

            </div>

        </BrowserRouter>
    )
}