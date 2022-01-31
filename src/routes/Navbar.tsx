
import { NavLink } from 'react-router-dom';
import { routerList } from '../data/routesList';

import './navbar.css'

export const Navbar = () => {
    return <nav>
        <ul>
            {
                routerList.map(({ to, title }) => {
                    return <li style={{
                        listStyle: 'none',

                    }} key={to}>
                        <NavLink
                            className={({ isActive }) => isActive ? 'nav-active' : 'not-active'}
                            to={to}>{title}</NavLink>
                    </li>
                })
            }
        </ul>
    </nav>;
};
