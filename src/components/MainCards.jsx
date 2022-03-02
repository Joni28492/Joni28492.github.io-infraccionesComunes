import React from 'react'
import { CardLink } from './CardLink'
import { routerList } from '../data/routesList'
import { useState } from 'react'

export const MainCards = () => {
  
    if(localStorage.getItem('appValdesLayuot') ===null ){
        localStorage.setItem('appValdesLayuot', 'card');
    }

    // console.log(localStorage.getItem('appValdesLayuot'));

    const [layout, setLayout] = useState(localStorage.getItem('appValdesLayuot'));
    const handleLayout = (typeLayout) =>{
        setLayout(typeLayout);
        localStorage.setItem('appValdesLayuot', typeLayout);
    }

    const styleLayout = {
        color: 'gray',
        margin: '2px',
        marginTop: '10px',
        marginBottom: '10px',
        fontSize: 30,
        border: '3px solid gray',
        padding: '5px',
        borderRadius: '5px'
    }

    const activeColor = 'purple'
    
    return (
       
        
        <>

            <div style={{
                display: 'flex',
                flexDirection: 'row',
            }}>
          
                <i style={{
                    ...styleLayout,
                    color: (layout === "card") ? activeColor : 'gray',
                    border: `1px solid  ${ 
                        ((layout === "card") ? activeColor : 'gray')
                    }`,                 
                }} className="fa-solid fa-file" onClick={()=>handleLayout('card')}></i>
                <i style={{
                    ...styleLayout,
                    color: (layout === "list") ? activeColor : 'gray',
                    border: `1px solid  ${ 
                        ((layout === "list") ? activeColor : 'gray')
                    }`,                  
                }} className="fa-solid fa-bars" onClick={()=>handleLayout('list')}> </i>
                <i style={{
                    ...styleLayout,
                    color: (layout === "grid") ? activeColor : 'gray'  ,
                    border: `1px solid  ${ 
                        ((layout === "grid") ? activeColor : 'gray')
                    }`,           
                }} className="fa-brands fa-buromobelexperte" onClick={()=>handleLayout('grid')}></i>
                
            </div>

            <div
            className='animate__animated animate__fadeIn animate__slow'
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center'
               
            }}>
                {
                    routerList.map(({to,icon,color, title,visible})=>{

                        return (
                                (visible) && 
                                <CardLink 
                                    key={to}
                                    to={to} 
                                    icon={icon} 
                                    color={color} 
                                    title={title} 
                                    type={layout}
                                />
                        )
                    })
                }
            </div>


          
            
            
        </>


  )
}
