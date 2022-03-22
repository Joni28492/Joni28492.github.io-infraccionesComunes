import { FC } from 'react'
import { Tipos } from '../data/LSVanexoII'

export interface Props {
    desc: string;
    anotaciones?: string;
    tipo: Tipos;
    letra: string;
    cuantia: number;
    puntos?: number;
    //styles

}


export const InfraccionPuntos: FC<Props> = ({ desc, anotaciones, tipo, letra, cuantia, puntos }) => {
    return (


        <div style={{
            marginBottom: 5,
            paddingBottom: 0,
            paddingRight: 15,
            width: '80vw',
            display: 'flex',
            flexDirection: 'column',
            color: 'white',
            backgroundColor: (tipo === 'Muy Grave' ? 'red'
                : (tipo === 'Grave') ? 'SandyBrown'
                    : (tipo === 'Leve') ? 'OliveDrab' : '')
        }}>


            <strong style={{ fontSize: 30, marginLeft: 15 }}>{tipo}</strong>
            <hr />
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', fontSize: 22, }}>
                    <span>{letra}) </span>  <p> {desc} </p>
                    {(anotaciones) && (<small>{anotaciones}</small>)}
                </div>

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
