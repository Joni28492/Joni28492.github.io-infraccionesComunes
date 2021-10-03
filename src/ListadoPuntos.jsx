import React from 'react'
import { infraccionesPuntos } from './data/infracciones';
import { ListadoBasico } from './ListadoBasico';




const [seis, cuatro, tres] = infraccionesPuntos;
// console.log(seis);
export const ListadoPuntos = () => {
    return (
        <div>

         
            
            <div style={{
                'display':'flex',
                'flexDirection': 'row',
                'justifyContent': 'space-around'
            }} >


            <ListadoBasico circle={true} list={seis} title="6 Puntos" color="dark"/>
            <ListadoBasico circle={true} list={cuatro} title="4 Puntos" color="danger"/>
            <ListadoBasico circle={true} list={tres} title="3 Puntos" color="warning"/>
         
            
                
            </div>

        </div>
    )
}
