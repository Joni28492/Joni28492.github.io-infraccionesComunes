import React, { useState } from 'react'
import { ListadoBasico } from './ListadoBasico'
import { ListadoPuntos } from './ListadoPuntos'
import { zonaAzul, cargaYDescarga, senialProhibicion, estacinamiento, circulacion, peaton   } from "./data/infracciones.js";

export const InfraccionesComunes = () => {
    const [puntos, setPuntos] = useState(false); 
    return (
        <div  className="animate__animated animate__backInDown ">
            <ListadoBasico title="Zona Azul" list={zonaAzul} color="primary"/>
            <ListadoBasico title="Carga y descarga" list={cargaYDescarga} color="warning"/>
            <ListadoBasico title="Señal Prohibición" list={senialProhibicion} color="danger"/>
            <ListadoBasico title="Estacionamiento" list={estacinamiento} color="success"/>
            <ListadoBasico title="Circulación" list={circulacion} color="info"/>
            <ListadoBasico title="Peaton" list={peaton} color="dark"/>

            <h2 
            className="container border text-center text-light bg-secondary rounded p-3"

            onClick={()=>setPuntos(!puntos)}
            >Infracciones por puntos</h2>


            {
            (puntos) &&  <ListadoPuntos />
            }

        </div>
    )
}
