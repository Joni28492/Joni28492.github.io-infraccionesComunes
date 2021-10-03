import React from 'react'


export const Cabecera = ({visible, setVisible}) => {
    return (
        <div style={{
            "display": "flex",
            "flexDirection": 'row',
            "justifyContent": "space-around",
            "marginBottom": "3em"
            
        }}>
            <header className="App-header">
                <img src="https://www.valdes.es/image/layout_set_logo?img_id=54574&t=1630821700004" alt="Escudo ayuntamiento" />
                
            </header>

            <span className="pt-3 mt-2" style={{cursor:'pointer'}} onClick={()=>setVisible(!visible)}> <strong> Policía Local</strong> <i className="fas fa-bars"></i> </span>

            
           
          
            
        </div>
    )
}
