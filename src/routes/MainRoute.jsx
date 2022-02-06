import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Navigate,
    Routes
    
  } from "react-router-dom";
import { Cabecera } from '../Cabecera';
import { ListadoTelefonos } from '../components/ListadoTelefonos';

import { Navbar } from '../Navbar';
import { AlcoholDrogasScreen } from '../screens/AlcoholDrogasScreen';
import { AnimalesPppScreen } from '../screens/AnimalesPppScreen';
import { InfraccionesComunesScreen } from '../screens/InfraccionesComunesScreen';
import { LeparScreen } from '../screens/LeparScreen';
import { RetiradaScreen } from '../screens/RetiradaScreen';
import { SeguridadCiudadana } from '../SeguridadCiudadana';

export const MainRoute = () => {

  const [visible, setVisible] = useState(false);

    return (
        <Router>
        <div>
            {/* navbar aqui */}
           
            <Cabecera className="mt-2 pt-2" visible={visible} setVisible={setVisible}/>
            



            {
              (visible) ? 
              <div style={{display:'flex', justifyContent: 'center'}}>
                <Navbar />
              </div>
              // :<Telefono tel={telefonosEmergencias[0].tel} color={telefonosEmergencias[0].color}/>
              :<ListadoTelefonos />
            }
            
           
          <Routes>
            <Route exact path="/infracionesComunes" element={<InfraccionesComunesScreen />} />
            <Route exact path="/seguridadCiudadana" element={<SeguridadCiudadana />} />
            <Route exact path="/lepar" element={<LeparScreen />} />
            <Route exact path="/animalesppp" element={<AnimalesPppScreen />} />
            <Route exact path="/retirada" element={<RetiradaScreen />} />
            <Route exact path="/alcoholydrogas" element={<AlcoholDrogasScreen />} />
          
            {/* <Route exact path="/*" component={InfraccionesComunesScreen} /> */}
            <Route path="/*" element={<Navigate to='/infracionesComunes' replace />} />
         
          </Routes>

          
          
        </div>
      </Router>
    )
}
