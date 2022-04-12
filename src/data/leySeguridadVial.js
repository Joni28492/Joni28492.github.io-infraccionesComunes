export const anexoIIinfracciones = [
    {
        desc: 'Conducir una tasa de alcochol >0,5 en aire',
        anotaciones: 'Provesionales y titulares con <2años de antigüedad  >0,3',
        tipo: 'Muy Grave',
        letra: 'C',
        cuantia: 1000,
        puntos: 6,
    },
    {
        desc: 'Conducir una tasa de alcochol entre >0,25 a <0,5 en aire',
        anotaciones: 'Provesionales y titulares con <2años de antigüedad entre >0,15 a <0,3',
        tipo: 'Muy Grave',
        letra: 'C',
        cuantia: 500,
        puntos: 4,
    },
    {
        desc: 'Conducir con presencia de drogas en el organismo',
        // anotaciones: '',
        tipo: 'Muy Grave',
        letra: 'C',
        cuantia: 1000,
        puntos: 6,
    },
    {
        desc: 'Incumplir la obligacion de someterse a las pruebas',
        // anotaciones: '',
        tipo: 'Muy Grave',
        letra: 'D',
        cuantia: 1000,
        puntos: 6,
    },
    {
        desc: 'Conducir de forma temeraria, circular en sentido contrario al establecido o participar en carreras o competiciones no autorizadas',
        // anotaciones: '',
        tipo: 'Muy Grave',
        letra: 'E,F,G',
        cuantia: 500,
        puntos: 6,
    },
    {
        desc: 'Conducir vehiculos que tengan instalados inibidores de radares o cinemometros '+
        'o cualesquiera otros mecanismos encaminados a interferir en el correcto funcionamiento '+
        'de los sistemas de vigilancia del trafico ',
        // anotaciones: '',
        tipo: 'Muy Grave',
        letra: 'H',
        cuantia: 6000,
        puntos: 6,
    },
    {
        desc: 'El exceso en mas del 50% de los tiempos de conduccion o minoracion del 50% de descanso ',
        // anotaciones: '',
        tipo: 'Muy Grave',
        letra: 'I',
        cuantia: 500,
        puntos: 6,
    },
    {
        desc: 'La participacion o colaboracion necesaria de los conductores para'+
        ' la puesta en funcionamiento de elementos que alterenel normal funcionamiento'+
        ' del tacografo o del limitador de velocidad',
        // anotaciones: '',
        tipo: 'Muy Grave',
        letra: 'M',
        cuantia: 500,
        puntos: 6,
    },
    {
        desc: 'Utilizar sujetando con la mano, dispositivos de telefonia movil mientras se conduce',
        // anotaciones: '',
        tipo: 'Grave',
        letra: 'G',
        cuantia: 200,
        puntos: 6,
    },
    {
        desc: 'Arrojar a la via o a sus inmediaciones objetos que puedan producir incendios o accidentes',
        // anotaciones: '',
        tipo: 'Muy Grave',
        letra: 'G',
        cuantia: 500,
        puntos: 6,
    },
    {
        desc: 'Incumplir las disposiciones legales sobre preferencia de paso,'
        +' y la obligacion de detenerse en la señal de stop, ceda el paso y en los semaforos con luz roja enecendida ',
        // anotaciones: '',
        tipo: 'Grave',
        letra: 'C,L,K',
        cuantia: 200,
        puntos: 4,
    },
    {
        desc: 'Incumplir las disposiciones legales sobre adelantamiento poniendo en peligro'+
        'o entorpeciendo a quienes circulen en sentido contrario y adelantar en lugares o circunstancias'+
        'de visibilidad reducida',
        // anotaciones: '',
        tipo: 'Grave',
        letra: 'C',
        cuantia: 200,
        puntos: 4,
    },
    {
        desc: 'Adelantar poniendo en peligro o entorpeciendo a ciclistas o sin dejar una separacion minima de 1,5m',
        // anotaciones: '',
        tipo: 'Grave',
        letra: 'C',
        cuantia: 200,
        puntos: 6,
    },
    {
        desc: 'No respetar las señales o ordenes de los agentes de la autoridad encargada de la regulacion'+ 
        'ordenacion, gestion, vigilancia y disciplina del trafico, o de sus agentes',
        // anotaciones: '',
        tipo: 'Grave',
        letra: 'J',
        cuantia: 200,
        puntos: 4,
    },
    {
        desc: 'No mantener la distancia de seguridad con el vehiculo que le precede',
        // anotaciones: '',
        tipo: 'Grave',
        letra: 'Ñ',
        cuantia: 200,
        puntos: 4,
    },
    {
        desc: 'No hacer uso o hacerlo de forma inadecuada del cinturon de seguridad, casco o sistema de retencion infantil',
        // anotaciones: '',
        tipo: 'Grave',
        letra: 'H',
        cuantia: 200,
        puntos: 4,
    },
    {
        desc: 'Conducir el vehiculo con un permiso o licencia que no le habilite para ello',
        // anotaciones: '',
        tipo: 'Muy Grave',
        letra: 'K',
        cuantia: 500,
        puntos: 6,
    },
    {
        desc: 'Conducir un vehiculo teniendo suspendida la autorizacion administrativa '
        +'para conducir o teniendo prohibido el uso del vehiculo que se conduce',
        // anotaciones: '',
        tipo: 'Grave',
        letra: 'S',
        cuantia: 200,
        puntos: 4,
    },
    {
        desc: 'Realizar maniobras de marcha atras en autovia o autopista',
        // anotaciones: '',
        tipo: 'Grave',
        letra: 'C',
        cuantia: 200,
        puntos: 4,
    },
    {
        desc: 'Efectuar Cambios de sentido incumpliendo las disposiciones '+
        ' recogidas en esta ley y en los terminos establecidos reglamentariamente',
        // anotaciones: '',
        tipo: 'Grave',
        letra: 'C',
        cuantia: 200,
        puntos: 3,
    },
    {
        desc: 'Conducir utilizando cualquier tipo de casco de audio o auricular conectado a receptores '+
        'o  reproductores de sonido u otros dispositivos que disminuyan la atencion permanente a la conduccion '+
        'o manteniendo ajustado entre el casco y la cabeza del usuario del dispositivo de telefonia movil '+
        'mientras se conduce, o utilizando manualmente navegadores o cualquier otro medio o sistema '+
        'de comunicacion, asi como dispositivos de telefonia movil en condiciones distintas a las previstas en el ordinal 8',
        anotaciones: 'FFCCSS Solo pueden usarlo cuando vayan en Convoy',
        tipo: 'Grave',
        letra: 'F',
        cuantia: 200,
        puntos: 3,
    },
    {
        desc: 'Conducir Vehiculos que llevan mecanismos de deteccion de radares o cinemometros',
        // anotaciones: '',
        tipo: 'Grave',
        letra: 'G',
        cuantia: 200,
        puntos: 3,
    },
]