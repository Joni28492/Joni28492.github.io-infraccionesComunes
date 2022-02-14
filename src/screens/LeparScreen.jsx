import React from 'react'
import { HorariosLepar } from '../components/HorariosLepar';
import { leparInfracciones } from '../data/infracciones';
import { iconsNavbar } from '../data/routesList';
import { HorariosActividad } from '../HorariosActividad';
import { ListadoBasico } from '../ListadoBasico';

export const LeparScreen = () => {
    // console.log(leparInfracciones);
    const keys = Object.keys(leparInfracciones);
    // console.log(keys);
    const muyGraves = leparInfracciones[keys[0]];
    const graves = leparInfracciones[keys[1]];
    const leves = leparInfracciones[keys[2]];
    // console.log(leves);
    return (
        <div>
            
            <HorariosLepar />

            <div className="text-center">
                <h1>Lepar</h1>
                <span>Ley de espectaculos publicos y actividades recreativas</span>
                <br />
                <small> 8/2002 21 Octubre - Asturias</small>

                
            </div>

            <hr className="mb-4"/>

            <div  style={{display:'flex', flexDirection: 'column', alignItems:'center'}}>
                <strong>Infracciones</strong>
                <i className={iconsNavbar[2]} style={{fontSize: 40, color: 'Tan'}}></i>
            </div>

            <div className="animate__animated animate__tada ">
                <ListadoBasico title={keys[0]} list={muyGraves} color="danger" />
                <ListadoBasico title={keys[1]} list={graves} color="warning" />
                <ListadoBasico title={keys[2]} list={leves} color="success" />
            </div>  

            <HorariosActividad />
         
        </div>
    )
}
