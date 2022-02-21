// // añadir aqui las nuevas rutas
// export const componentsRoute = [

import { AlcoholDrogasScreen } from "../screens/AlcoholDrogasScreen";
import { AnimalesPppScreen } from "../screens/AnimalesPppScreen";
import { InfraccionesComunesScreen } from "../screens/InfraccionesComunesScreen";
import { LeparScreen } from "../screens/LeparScreen";
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
        title:  'Seguridad ciudadana',
        icon:   'fas fa-users',
        Component: SeguridadCiudadana ,
        visible: true,
    },
    {
        path: 'lepar', 
        to: '/lepar', 
        title: 'Lepar',  
        icon: 'fas fa-person-booth',   
        Component: LeparScreen ,
        visible: true,
    },
    {
        path: 'animalesppp', 
        to: '/animalesppp', 
        title:  'Animales', 
        icon: 'fas fa-paw',
        Component: AnimalesPppScreen ,
        visible: true,
    },
    {
        path: 'retirada',  
        to: '/retirada',  
        title: 'Retirada',   
        icon:  'fas fa-truck-pickup', 
        Component: RetiradaScreen  ,
        visible: true,
    },
    {
        path:     'alcoholydrogas',   
        to:     '/alcoholydrogas',   
        title:     'Alcohol y Drogas',
        icon:     'fas fa-beer',  
        Component: AlcoholDrogasScreen ,
        visible: true,
    },
    {
        path:     'infracionesComunes',   
        to:     '/infracionesComunes',   
        title:     'Infracciones comunes',
        icon:     'fas fa-users',  
        Component: InfraccionesComunesScreen ,
        visible: true,
    },
 
 
] 