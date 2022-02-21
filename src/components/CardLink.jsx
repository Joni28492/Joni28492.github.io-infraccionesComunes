import React from 'react'
import { Link } from 'react-router-dom'



export const CardLink = ({to, icon, color, title}) => {
    
  return (
    
    <Link to={to} style={{color: 'black',textDecoration: 'none'}}>
        <div style={{
            margin: '10px',
            display:  'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '200px',
            height: '300px',
            border: `3px solid ${color}`,
            borderRadius: '25px',
            padding: '8px',
            boxShadow: '10px 12px 22px -17px rgba(0,0,0,0.75)'

        }}>

            <i className={icon} style={{fontSize: 120, color}} />
            <h3 className='mt-4' style={{
                fontSize: '35px',
                color,
                textAlign: 'center'
            }}> {title} </h3>

        </div>
    </Link>
  )
}
