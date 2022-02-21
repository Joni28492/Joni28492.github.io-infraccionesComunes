import React from 'react';
import { Link } from "react-router-dom";
import { routerList } from './data/routesList';
import { v4 as uuidv4 } from 'uuid';

  const linkStyle = {color: 'black',textDecoration: 'none'};
  const liStyle = {border: '1px solid lightgrey', padding:'12px', margin:'.18em'}
  const iconStyle = {fontSize: 22, margin: '3px'};

export const Navbar = ({setVisible}) => {
    return (
        <nav className="animate__animated animate__rubberBand ">
        <ul style={{listStyle:'none', display:'flex', flexWrap: 'wrap'}} >
    
        { routerList.map(({to,title,icon, visible})=>{
           return (
            (visible) &&
              <li key={uuidv4()} style={liStyle} onClick={setVisible}>
                <Link  to={to} style={linkStyle}>
                  {title} 
                  <i className={icon} style={iconStyle}></i>
                </Link>
              </li>
            
           );
         }) }
        </ul>
      </nav>
    )
}
