import React from 'react'
import { inmovilizacion, retirada } from '../data/retirada'
import {  routerList } from '../data/routesList'
import { ListadoBasico } from '../ListadoBasico'

export const RetiradaScreen = () => {

     
    return (
        <div>
           
           <div className="text-center">
                <h1>Retirada y Deposito</h1>
                <br />
               <div style={{
                   fontSize: 45,
                   color: routerList[4].color
               }}>
                    <small>LSV - </small>
                        <i className={routerList[4].icon}></i>
               </div>
                
            <div className="animate__animated animate__backInRight ">
                <ListadoBasico title='Inmovilización Art.104' list={inmovilizacion} color="warning" />
                <ListadoBasico title='Retirada Art.105' list={retirada} color="danger" />
        
            </div>  

                
            </div>
        </div>
    )
}
