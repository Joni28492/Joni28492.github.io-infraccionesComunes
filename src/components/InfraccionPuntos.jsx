import React from 'react'

export const InfraccionPuntos = ({desc, anotaciones, tipo, letra, cuantia, puntos}) => {
  return (
    <div style={{
        borderRadius: 15,
        marginBottom: 5,
        paddingBottom: 0,
        paddingRight: 15,
        width: '80vw',
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
        backgroundColor: (tipo === 'Muy Grave' ? '#d85f5f'
            : (tipo === 'Grave') ? '#ab8851'
                : (tipo === 'Leve') ? '#375f3d' : '')
    }}>


        <strong style={{ fontSize: 30, marginLeft: 15 }}>{tipo}</strong>
        <hr />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', fontSize: 22, margin:10}}>
                <span>{letra}) </span>  <p> {desc} </p>
            </div>
                {(anotaciones) && (<small>{anotaciones}</small>)}

            <div>
                <h3>
                    {puntos} Pts.
                </h3>
                <h5>
                    {cuantia} €
                </h5>
            </div>
        </div>
    </div>
  )
}
