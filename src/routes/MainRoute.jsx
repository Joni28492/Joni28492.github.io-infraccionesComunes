import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
    
  } from "react-router-dom";
import { Cabecera } from '../Cabecera';
import { Navbar } from '../Navbar';
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
              (visible) && 
              <div style={{display:'flex', justifyContent: 'center'}}>
                <Navbar />
              </div>
            }
            
           
            <Switch>
            <Route exact path="/infracionesComunes" component={InfraccionesComunesScreen} />
            <Route exact path="/seguridadCiudadana" component={SeguridadCiudadana} />
            <Route exact path="/lepar" component={LeparScreen} />
            <Route exact path="/animalesppp" component={AnimalesPppScreen} />
            <Route exact path="/retirada" component={RetiradaScreen} />
            <Redirect to="/infracionesComunes" />
             
         
          </Switch>

          
          
        </div>
      </Router>
    )
}
