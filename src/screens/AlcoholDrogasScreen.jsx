import React from 'react'
import { infraccionesAlcoholYDrogas } from '../data/infracciones'
import { iconsNavbar } from '../data/routesList';
import { ListadoBasico } from '../ListadoBasico';

export const AlcoholDrogasScreen = () => {

    const [infracciones] = infraccionesAlcoholYDrogas;
    const {Muy_Graves, Graves, Leves } = infracciones;
    //    console.log(infracciones);
    return (
        <div>
            

            <div style={{
                display:'flex',
                flexDirection: 'column',
                alignItems: 'center'
                
            }}> 
                <h1>Alcohol y Drogas </h1>
                <i>4/2015 de 6 Marzo</i>
                <br />
                <small></small>
                <hr style={{marginBottom: '15px'}}/>
               

                <div style={{
                   fontSize: 60,
                   color: 'Khaki'
                }}>
                
                        <i className={iconsNavbar[5]}></i>
               </div>

               <div style={{
                   display:'flex',
                   flexDirection: 'column',
                   alignItems: 'center',
                   margin: '10px'
               }}>

                <div >
                    <strong>Leve </strong><span>hasta 600 </span><strong>Prescripción</strong><span> 1 año</span>
                </div>
                <div >
                    <strong>Grave </strong><span>desde 601 hasta 10.000 </span><strong>Prescripción</strong><span> 2 año</span>
                </div>
                <div >
                    <strong>Muy Grave </strong><span>desde 10.001 hasta 600.000 y cierre temporal, parcial o total </span><strong>Prescripción </strong><span> 3 año</span>
                </div>

               </div>

            {/* Falta costes y prescricion */}
            </div>



            <div className="animate__animated animate__fadeInLeftBig">
            <ListadoBasico title={'Leves'} list={Leves} color="success"/>
            <ListadoBasico title={'Graves'} list={Graves} color="warning"/>
            <ListadoBasico title={'Muy Graves'} list={Muy_Graves} color="danger"/>
            </div> 

        </div>
    )
}
