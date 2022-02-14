import { usePage } from "../hooks/usePage";


export const HorariosLepar = () => {

    const {page:pageHoras,handleNext: sigHora, handlePrevious: antHora} = usePage(horarios);
    const {page: pageActividad,handleNext: sigActi, handlePrevious: antActi} = usePage(horarios[pageHoras].actividad);
    //TODO.: colores e iconos

    


    return <div className="container mt-2 mb-4" >

                <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: "center",
                        alignItems: 'center'
                }}>
                    <i className="mt-2 mb-2 fas fa-chevron-up"
                        onClick={antHora}
                    />
                

                    <section style={{
                        display:'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>


                    <i className={horarios[pageHoras].icon}
                        style={{
                            fontSize: '45px',
                            color: horarios[pageHoras].color
                        }}
                    />
                       
                            
                            <div>
                               {  (horarios[pageHoras].actividad.length !== 1) &&
                                <i className="mt-2 mb-2 fas fa-chevron-left" 
                                    onClick={antActi}
                                />}

                                <strong > {horarios[pageHoras].actividad[pageActividad]} </strong>
                                

                                {  (horarios[pageHoras].actividad.length !== 1) &&
                                    <i className="mt-2 mb-2 fas fa-chevron-right"
                                        onClick={sigActi}
                                    />}
                            </div>
                           
                       



                    <p>{horarios[pageHoras].diasHabiles.dias}</p>
                    <span>{horarios[pageHoras].diasHabiles.apertura} - {horarios[pageHoras].diasHabiles.cierre} </span>

                   
                   {
                       (horarios[pageHoras].diasNoHabiles) &&
                       <>
                       <p>{horarios[pageHoras].diasNoHabiles.dias} </p>
                       <span>{horarios[pageHoras].diasNoHabiles.apertura} - {horarios[pageHoras].diasNoHabiles.cierre} </span>
                       </>

                   }

                
                    </section>

                    {(horarios[pageHoras].excepcion) &&
                        <strong className="alert alert-danger m-0">
                            {horarios[pageHoras].excepcion}
                        </strong>
                    }

                    <i className="ml-2 mr-2 fas fa-chevron-down"
                         onClick={sigHora}
                    />
                </div>
            </div>;
};


const horarios = [
    {
        actividad: ['L. Menores 16 años'],
        icon: 'fa-solid fa-child',
        color: ' #DAF7A6',
        diasHabiles: {
            dias: 'Dias Escolares',
            apertura: '14:00',
            cierre: '22:00',
        },
        diasNoHabiles: {
            dias: 'Viernes, Sabado y Festivo',
            apertura: '11:00',
            cierre: '22:30',
        }
    },
    {
        actividad: ['Bares', 'Cafeterias', 'Restaurantes', 'sidrerias', 'restauracion en general'],
        icon: 'fa-solid fa-champagne-glasses',
        color: 'Maroon',
        diasHabiles: {
            dias: 'Lunes a Jueves',
            apertura: '6:00',
            cierre: '1:30 - dia sig',
        },
        diasNoHabiles: {
            dias: 'Viernes, Sabado y Festivo',
            apertura: '6:00',
            cierre: '2:30',
        },
        diasExcepcionales: {
            temporada: '15 Junio - 30 Sept',
            cierre: '2:00'
        }

    },
    {
       
        actividad: ['Musica Amplificada', 'cafes teatro', 'tablaos flamencos', 'bodas'],
        icon: 'fa-solid fa-volume-high',
        color: 'SlateGray',
        diasHabiles: {
            dias: 'Lunes a Jueves',
            apertura: '11:00',
            cierre: '5:00',
        },
        diasNoHabiles: {
            dias: 'Viernes, Sabado y Festivo',
            apertura: '11:00',
            cierre: '7:30',
        },
        excepcion: 'Discotecas no',
    },
    {
       
        actividad: ['Salon de Juego'],
        icon: 'fa-solid fa-coins',
        color: 'GoldenRod',
        diasHabiles: {
            dias: 'Todos los Dias',
            apertura: '10:00',
            cierre: '00:00',
        },
      
    },
    {
       
        actividad: ['Salon Recreativo'],
        
        icon: 'fa-solid fa-gamepad',
        color: 'turquoise',
        diasHabiles: {
            dias: 'Todos los Dias',
            apertura: '10:00',
            cierre: '23:00',
        },
      
    },
]