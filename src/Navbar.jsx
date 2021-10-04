import React from 'react';
import { Link } from "react-router-dom";
import { iconsNavbar, routesList, titulosNavbar } from './data/routesList';
import { v4 as uuidv4 } from 'uuid';

  const linkStyle = {color: 'black',textDecoration: 'none'};
  const liStyle = {border: '1px solid lightgrey', padding:'12px', margin:'.18em'}
  const iconStyle = {fontSize: 22, margin: '3px'};

export const Navbar = () => {
    return (
        <nav className="animate__animated animate__rubberBand ">
        <ul style={{listStyle:'none', display:'flex', flexWrap: 'wrap'}} >
        {/* Todas las rutas y iconos se encuentran en ./data/routesList */}
        { 
         routesList.map((e, i)=>{
           return (
            <li key={uuidv4()} style={liStyle}>
              <Link  to={e}style={linkStyle}>
                {titulosNavbar[i]} 
              <i className={iconsNavbar[i]} style={iconStyle}></i>
              </Link>
            </li>
           );
         }) 
        }
        </ul>
      </nav>
    )
}
