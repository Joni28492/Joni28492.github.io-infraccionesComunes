import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Navigate,
    Routes,
} from "react-router-dom";
import { Cabecera } from '../Cabecera';
import { ListadoTelefonos } from '../components/ListadoTelefonos';
import { routerList } from '../data/routesList';
import { Navbar } from '../Navbar';


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
                <Navbar  setVisible={()=>{setVisible(false)}}/>
              </div>
              // :<Telefono tel={telefonosEmergencias[0].tel} color={telefonosEmergencias[0].color}/>
              :<ListadoTelefonos />
            }
            
           
          <Routes>
            {routerList.map( ({ to, title, Component}) =>{
                return  <Route key={title}  exact path={to} element={<Component />} />
            })}
            <Route path="/*" element={<Navigate to='/home' replace />} />
          </Routes>

          
          
        </div>
      </Router>
    )
}
