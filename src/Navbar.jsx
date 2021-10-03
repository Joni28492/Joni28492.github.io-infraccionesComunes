import React from 'react';
import {
   Link
} from "react-router-dom";

  const linkStyle = {
    color: 'black',
    textDecoration: 'none',  
  };

  const liStyle = {border: '1px solid lightgrey', padding:'12px'}
  const iconStyle = {fontSize: 22, margin: '3px'};

export const Navbar = () => {
    return (
        <nav className="animate__animated animate__rubberBand ">
        <ul style={{listStyle:'none', display:'flex', flexDirection:'row'}} >
          <li style={liStyle}>
            <Link  to="/infracionesComunes" style={linkStyle}>Infracciones Comunes  
            <i className="fas fa-clipboard-list" style={iconStyle}></i>
            </Link>
          </li>
          <li style={liStyle}>
            <Link to="/seguridadCiudadana" style={linkStyle}>Seg. Ciudadana
            <i className="fas fa-users" style={iconStyle}></i>
            </Link>
          </li>
          <li style={liStyle}>
            <Link to="/lepar" style={linkStyle}>
              Lepar
              <i className="fas fa-person-booth" style={iconStyle}></i>  
            </Link>
          </li>
        
          <li style={liStyle}>
            <Link to="/animalesppp" style={linkStyle}>
              Animales
              <i className="fas fa-paw" style={iconStyle}></i>  
            </Link>
            
          </li>
          <li style={liStyle}>
            <Link to="/retirada" style={linkStyle}>
              Retirada
              <i className="fas fa-truck-pickup" style={iconStyle}></i>  
            </Link>
            
          </li>
        
        </ul>
      </nav>
    )
}
