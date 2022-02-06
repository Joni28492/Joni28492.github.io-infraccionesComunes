import React from 'react';
import { telefonosEmergencias } from '../data/telefonosEmergencias';
import { usePage } from '../hooks/usePage';
import { Telefono } from './Telefono';


export const ListadoTelefonos = () => {

    const { info, page ,handlePrevious,handleNext } =  usePage(telefonosEmergencias)
    const {name, tel, color } = info;

  return (<> 
    <section style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <i className="ml-2 mr-2 fas fa-chevron-left" onClick={handlePrevious} />
        <Telefono key={page} name={name} tel={tel} color={color}/> 
        <i className="ml-2 mr-2 fas fa-chevron-right" onClick={handleNext} />
        
    </section>
  </>)
  
};
