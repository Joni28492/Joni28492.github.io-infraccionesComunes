import React from 'react'
import { animalesPPP } from '../data/animalesPPP';
import { usePage } from '../hooks/usePage';
import { AnimalCard } from './AnimalCard';

const arrowStyle = {
    fontSize: '40px',
    marginLeft: '10px',
    marginRight: '10px',
    color: '#13544a'
}



export const ListadoAnimalesPeligrosos = () => {

    const {info,handleNext,handlePrevious,page, Component:Perro} = usePage(animalesPPP, AnimalCard)
    const {nombre, img} = info;


  return (
    <div style={{
        margin: '15px',
        display: 'flex',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
        <i className="fas fa-chevron-left" style={arrowStyle} onClick={handlePrevious}/>
        <Perro key={page} nombre={nombre} img={img} />
        <i className="fas fa-chevron-right" style={arrowStyle} onClick={handleNext} />
    </div>

  )
}
