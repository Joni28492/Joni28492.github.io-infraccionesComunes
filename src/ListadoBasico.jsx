import React, { useState } from 'react'





export const ListadoBasico = ({title, list=[], color="info", circle=false}) => {


    const [visible, setVisible] = useState(false);
    
  
    return (
        <div className="container mt-2 mb-2" style={{
            "cursor":'pointer'
        }}>
            <h3 className={`bg-${color} text-light text-center rounded${
                (circle) && "-pill"
            } p-2`}
                onClick = {() => setVisible(!visible)}
            >{title}</h3>
            
           
            {
                (visible) &&
                <ul className="list-group">
                    {list.map((item,i) =>(
                            <li key={i} className={`list-group-item list-group-item-${color}`}>{item} </li>
                    ))}
                </ul>
            }


        </div>
    )
}
