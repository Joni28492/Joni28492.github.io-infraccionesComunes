import React from 'react'
import { useState } from 'react';
import { ListadoAnimalesPeligrosos } from '../components/ListadoAnimalesPeligrosos';
import {  infracionesAnimalesPpp } from '../data/infracciones'
import { ListadoBasico } from '../ListadoBasico'



export const AnimalesPppScreen = () => {


    const [infracciones] = infracionesAnimalesPpp;
    const {Muy_graves, Graves, Leves} = infracciones;
    const [cardVisible, setCardVisible] = useState(true)


    return (
        <div className="text-center">
            <h1>Animales</h1>
            <i>13/2002 de 23 diciembre</i>
            <br />
            <small>Tenencia protección y derechos de los animales</small>
            <hr style={{marginBottom: '25px'}}/>
            

            <div  className=" animate__animated animate__pulse animate__repeat-2" style={{display:'flex', flexDirection: 'column-reverse'}}>
                <strong>Infracciones</strong>
                <i className="fas fa-paw" style={{fontSize: 80, color: 'brown'}} 
                    onClick={()=>setCardVisible(!cardVisible)}
                />
                {/* Componentes imagen animales */}

                { (cardVisible) &&  <ListadoAnimalesPeligrosos /> }
               
            </div>



            <div style={{
            display:'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-evenly'
            }}>
          
            <div >
                    <strong>Muy Grave </strong><span>3.005,07€ - 90.151€ </span>
                </div>
                <div >
                    <strong>Grave </strong><span>601,02€ - 3.005,06€ </span>
                </div>
                <div >
                    <strong>Leve </strong><span>60,1€ - 601,01€</span>
                </div>
            </div>
           
           {/* FALTA ANIMACION */}

            <div className="animate__animated animate__fadeInLeftBig">
            <ListadoBasico title={'Leves'} list={Leves} color="success"/>
            <ListadoBasico title={'Graves'} list={Graves} color="warning"/>
            <ListadoBasico title={'Muy Graves'} list={Muy_graves} color="danger"/>
            

            </div>


           

        </div>
    )
}






