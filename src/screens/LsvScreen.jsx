import React from 'react'
import { useState } from 'react';
import { InfraccionPuntos } from '../components/InfraccionPuntos';
import { anexoIIinfracciones } from '../data/leySeguridadVial';
import { routerList } from '../data/routesList'

export const LsvScreen = () => {
    const color = routerList[7].color;

    const [tipoInfraccion, setTipoInfraccion] = useState({tipo:'Grave' ,status:false})
    const [puntosFilter, setPuntosFilter] = useState({
        puntos: 4,
        status: false
    })

  return (<div className='container'>
           <div 
            style={{
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
           }}>
            <i className="fa-solid fa-car-rear text-center" 
                    style={{fontSize: 80, color}} 
                />
                <h1 style={{color}}>LsvScreen</h1>
           </div>
           
           {/* <button className='btn btn-outline-primary m-2'
                onClick={()=>{
                   setTipoInfraccion({
                        ...tipoInfraccion,
                        status:false,
                   })
                }}
           >Eliminar filtro por tipo de infraccion</button>
           <button className='btn btn-primary m-2'
                onClick={()=>{
                    setPuntosFilter({
                        ...puntosFilter,
                        status: false
                    })
                }}
           >Eliminar filtro por puntos</button> */}

            <hr />
            <div>
            
                {anexoIIinfracciones
                    // .filter((item)=>
                    //     (item.tipo === tipoInfraccion.tipo && tipoInfraccion.status) && item )
                    // .filter((item)=>
                    //     (item.puntos === puntosFilter.puntos && puntosFilter.status) && item)
                    .map(({desc, anotaciones, tipo, letra, cuantia, puntos}, i)=>(
                        <InfraccionPuntos key={i} 
                            desc={desc} 
                            anotaciones={anotaciones} 
                            tipo={tipo}
                            letra={letra}
                            cuantia={cuantia}
                            puntos={puntos}    
                        />
                ))}
    
            </div>
        </div>
  )
}
