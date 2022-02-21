import React from 'react'
import { routerList } from '../data/routesList';
import { InfraccionesComunes } from '../InfraccionesComunes'

export const InfraccionesComunesScreen = () => {


    return (
        <>
         <div className="text-center">
                <h1>Valdes</h1>
                <span>Infracciones comunes</span>
                <hr />
            <div  style={{display:'flex', flexDirection: 'column'}}>
                <strong>Infracciones</strong>
                <i className={routerList[0].icon} style={{fontSize: 40, color: 'DarkSeaGreen'}}></i>
            </div>
        </div>
          

           

            <InfraccionesComunes/>
        </>
    );
}
