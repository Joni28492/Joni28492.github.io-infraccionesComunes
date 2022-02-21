import React from 'react'
import { CardLink } from './CardLink'
import { routerList } from '../data/routesList'

export const MainCards = () => {
  
    
    
    
    return (
       
        
        <>
        
            <div
            className='animate__animated animate__fadeIn animate__slow'
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center'
               
            }}>
                {
                    routerList.map(({to,icon,color, title,visible}, i)=>{

                        return (
                                (visible) && 
                                <CardLink 
                                    key={to}
                                    to={to} 
                                    icon={icon} 
                                    color={color} 
                                    title={title} 
                                />
                        )
                    })
                }
            </div>


          
            
            
        </>


  )
}
