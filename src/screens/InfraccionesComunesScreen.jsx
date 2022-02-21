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
                <i className={routerList[6].icon} style={{fontSize: 40, color: routerList[6].color}}></i>
            </div>
        </div>
          

           

            <InfraccionesComunes/>
        </>
    );
}
