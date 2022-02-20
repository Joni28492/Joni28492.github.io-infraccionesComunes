import React from 'react'
//TODO Arreglar imagenes
export const AnimalCard = ({nombre="perro", img=""}) => {
  return (
    <div style={{
        overflow: 'hidden',
        border: '5px solid red inset',
        width: '300px',
        height: '400px',
        borderRadius: '25px',
        backgroundColor: 'dodgerblue',
        boxShadow: '11px 15px 68px -11px rgba(83,83,74,0.61)'
    }}>
        <img src={img} alt={nombre} 
            style={{ 
                width:  '320px',
                maxHeight: '280px',
                boxShadow: '0 58px 120px -2px white',
                
            }}
        />
        <h3 className='mt-5 text-light'> {nombre} </h3>
    </div>
  )
}
