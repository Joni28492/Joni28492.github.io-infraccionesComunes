import React from 'react';
import { telefonosEmergencias } from '../data/telefonosEmergencias';
import { usePage } from '../hooks/usePage';
import { Telefono } from './Telefono';


export const ListadoTelefonos = () => {

    const { info, Component: Tel, page ,handlePrevious,handleNext } =  usePage(telefonosEmergencias, Telefono)
    const {name, tel, color } = info;




  return (<> 
    <section style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }}>

        


        <i className="ml-2 mr-2 fas fa-chevron-left" onClick={handlePrevious} />
        <Tel key={page} 
             name={name} 
             tel={tel} 
             color={color} 
             styleDiv={{
               width: '180px',
               height: '115px',
               padding: '15px',
             }}
        /> 
        <i className="ml-2 mr-2 fas fa-chevron-right" onClick={handleNext} />
        
      

    </section>
  </>)
  
};
