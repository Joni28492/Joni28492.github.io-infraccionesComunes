import { InfraccionPuntos } from "../components/InfraccionPuntos";
import { anexoIIinfracciones } from '../data/LSVanexoII';




export const LeySeguridadVial = () => {
    return (
        <div className='Container mt-2'>


            {anexoIIinfracciones
                .filter((infraccion) => infraccion.puntos === 6)
                .map(({ desc, anotaciones, tipo, letra, cuantia, puntos }, i) => (
                    <InfraccionPuntos
                        key={i}
                        desc={desc}
                        anotaciones={anotaciones}
                        tipo={tipo}
                        letra={letra}
                        cuantia={cuantia}
                        puntos={puntos}
                    />
                ))}


            {/* <InfraccionPuntos
                desc={anexoIIinfracciones[0].desc}
                anotaciones={anexoIIinfracciones[0].anotaciones}
                tipo={anexoIIinfracciones[0].tipo}
                letra={anexoIIinfracciones[0].letra}
                cuantia={anexoIIinfracciones[0].cuantia}
                puntos={anexoIIinfracciones[0].puntos}
            /> */}


        </div>
    )
}
