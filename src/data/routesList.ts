import { Animales, Lepar, SeguridadCiudadana, Retirada,
    AlcoholDrogas } from "../pages";


interface RouterInterface {

    path: string,
    title: string,
    icon: string,
    Component: () => JSX.Element,
    
}

export const routerList:RouterInterface [] = [
  
    {
        path:  '/seguridadCiudadana',
        title:  'Seguridad ciudadana',
        icon:   'fas fa-users',
        Component: SeguridadCiudadana,
    },
    {
        path: '/lepar', 
        title: 'Lepar',  
        icon: 'fas fa-person-booth',   
        Component: Lepar,
    },
    {
        path: '/animalesppp', 
        title:  'Animales', 
        icon: 'fas fa-paw',
        Component: Animales,
    },
    {
        path: '/retirada',  
        title: 'Retirada',   
        icon:  'fas fa-truck-pickup', 
        Component: Retirada,
    },
    {
        path:     '/alcoholydrogas',   
        title:     'Alcohol y Drogas',
        icon:     'fas fa-beer',  
        Component: AlcoholDrogas,
    },
 
 
] 