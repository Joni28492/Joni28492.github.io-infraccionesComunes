import React from 'react'
import { CostePrescripcionSegCiudadana } from './CostePrescripcionSegCiudadana';
import { infracionesSeguridadCiudadana } from './data/infracciones';
import { iconsNavbar } from './data/routesList';
import { ListadoBasico } from './ListadoBasico'

export const SeguridadCiudadana = () => {

    // console.log(infracionesSeguridadCiudadana['Leves']);
    const muyGraves = infracionesSeguridadCiudadana['Muy Graves'];
    const graves = infracionesSeguridadCiudadana['Graves'];
    const leves = infracionesSeguridadCiudadana['Leves'];
    const keys = Object.keys(infracionesSeguridadCiudadana);
    

    return (
        <div>
           <div className="text-center">
                <h1>Seguridad Ciudadana 4/2015</h1>
               <div style={{display:'flex', flexDirection: 'column-reverse'}}>
                <strong>Infracciones</strong>
                <i className={iconsNavbar[1]} style={{fontSize: 50, color: 'dodgerblue'}}></i>
               </div>

            <CostePrescripcionSegCiudadana />

           </div>
            <hr className="mb-4"/>
            <div className="animate__animated animate__backInLeft ">
                <ListadoBasico title={keys[0]} list={muyGraves} color="danger" />
                <ListadoBasico title={keys[1]} list={graves} color="warning" />
                <ListadoBasico title={keys[2]} list={leves} color="success" />
            </div>
         
        </div>
    )
}
