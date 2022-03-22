// // añadir aqui las nuevas rutas
// export const componentsRoute = [

import { AlcoholDrogasScreen } from "../screens/AlcoholDrogasScreen";
import { AnimalesPppScreen } from "../screens/AnimalesPppScreen";
import { InfraccionesComunesScreen } from "../screens/InfraccionesComunesScreen";
import { LeparScreen } from "../screens/LeparScreen";
import { LsvScreen } from "../screens/LsvScreen";
import { MainScreen } from "../screens/MainScreen";
import { RetiradaScreen } from "../screens/RetiradaScreen";
import { SeguridadCiudadana } from "../SeguridadCiudadana";

    



export const routerList = [
  
    {
        path:  'home',
        to:  '/home',
        title:  'Home Screen',
        icon:   'fas fa-users',
        Component: MainScreen ,
        visible: false,
    },
    {
        path:  'seguridadCiudadana',
        to:  '/seguridadCiudadana',
        title:  'Seg. ciudadana',
        icon:   'fas fa-users',
        Component: SeguridadCiudadana ,
        color: '#ba953f',
        visible: true,
    },
    {
        path: 'lepar', 
        to: '/lepar', 
        title: 'Lepar',  
        icon: 'fas fa-person-booth',   
        Component: LeparScreen ,
        color: '#438f5a',
        visible: true,
    },
    {
        path: 'animalesppp', 
        to: '/animalesppp', 
        title:  'Animales', 
        icon: 'fas fa-paw',
        Component: AnimalesPppScreen ,
        color: 'brown',
        visible: true,
    },
    {
        path: 'retirada',  
        to: '/retirada',  
        title: 'Retirada',   
        icon:  'fas fa-truck-pickup', 
        Component: RetiradaScreen  ,
        color: '#697994',
        visible: true,
    },
    {
        path:     'alcoholydrogas',   
        to:     '/alcoholydrogas',   
        title:     'Alcohol',
        icon:     'fas fa-beer',  
        Component: AlcoholDrogasScreen ,
        color: '#c4c979',
        visible: true,
    },
    {
        path:     'infracionesComunes',   
        to:     '/infracionesComunes',   
        title:     'Inf. Comunes',
        icon:     'fas fa-users',  
        Component: InfraccionesComunesScreen ,
        color: '#8c7b8f',
        visible: false,
    },
    {
        path:     'leySeguridadVial',   
        to:     '/leySeguridadVial',   
        title:     'Seguridad Vial - LSV',
        icon:     'fa-solid fa-car-rear',  
        Component: LsvScreen ,
        color: '#53425b',
        visible: true,
    },
 
 
] 