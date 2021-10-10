import React from 'react';



export const CostePrescripcionSegCiudadana = () => {
    return (
       
        <div style={{
            display:'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-evenly'
        }}>
          
            <div >
                <strong>Muy Grave </strong><span>30.001 - 600.000 </span><strong>Cancelación </strong><span>3 años </span><strong>Prescripción </strong><span>2 años</span>
            </div>
            <div >
                <strong>Grave </strong><span>601 - 30.001 </span> <strong>Cancelación </strong><span>2 años </span><strong>Prescripción </strong><span>1 años</span>
            </div>
            <div >
                <strong>Leve </strong><span>100 - 600 </span> <strong>Cancelación </strong><span>1 año </span><strong>Prescripción</strong><span>6 meses</span>
            </div>

        </div>
        
    )
}
