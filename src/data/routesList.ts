import { Animales, Lepar, SeguridadCiudadana, Retirada,
    AlcoholDrogas, 
    Home} from "../pages";


interface RouterInterface {

    path: string,
    to: string,
    title: string,
    icon: string,
    Component: () => JSX.Element,
    
}

export const routerList:RouterInterface [] = [
  
    {
        path:  'home',
        to:  '/home',
        title:  'Home Screen',
        icon:   'fas fa-users',
        Component: Home,
    },
    {
        path:  'seguridadCiudadana',
        to:  '/seguridadCiudadana',
        title:  'Seguridad ciudadana',
        icon:   'fas fa-users',
        Component: SeguridadCiudadana,
    },
    {
        path: 'lepar', 
        to: '/lepar', 
        title: 'Lepar',  
        icon: 'fas fa-person-booth',   
        Component: Lepar,
    },
    {
        path: 'animalesppp', 
        to: '/animalesppp', 
        title:  'Animales', 
        icon: 'fas fa-paw',
        Component: Animales,
    },
    {
        path: 'retirada',  
        to: '/retirada',  
        title: 'Retirada',   
        icon:  'fas fa-truck-pickup', 
        Component: Retirada,
    },
    {
        path:     'alcoholydrogas',   
        to:     '/alcoholydrogas',   
        title:     'Alcohol y Drogas',
        icon:     'fas fa-beer',  
        Component: AlcoholDrogas,
    },
 
 
] 