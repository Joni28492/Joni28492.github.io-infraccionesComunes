
import { Box, AppBar } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { routerList } from '../data/routesList';

import './navbar.css'

export const Navbar = () => {
    return (<Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">

        </AppBar>
    </Box>);
};



{/* <ul>
{
    routerList.map(({ to, title }) => {
        return <li style={{
            listStyle: 'none',

        }} key={to}>
            <NavLink
                className={({ isActive }) => isActive ? 'nav-active' : 'not-active'}
                to={to}>{title}
            </NavLink>
        </li>
    })
}
</ul> */}