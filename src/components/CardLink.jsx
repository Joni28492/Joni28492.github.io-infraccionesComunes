import React from 'react'
import { Link } from 'react-router-dom'



export const CardLink = ({to, icon, color, title, type='list'}) => {
  
  //types: card, list, grid
  

  const {cards} = {
    cards: {
      card: {
        margin: '10px',
        display:  'flex',
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent:'center',
        width: '200px', //
        height: '300px', //
        border: `3px solid ${color}`,
        borderRadius: '25px',
        padding: '8px',
        boxShadow: '10px 12px 22px -17px rgba(0,0,0,0.75)'
      },
      icon: {
        fontSize: 120,//
        color
      },
      text: {
        fontSize: '35px',
        color,
        textAlign: 'center'
      }
    },
  }




  return (
    
    <Link to={to} style={{color: 'black',textDecoration: 'none'}}>
   
      



        {/* Tipo CARD */}
        {
          (type==='card') &&
          <div style={cards.card}>
              <i className={icon} style={cards.icon} />
              <h3 className='mt-4' style={cards.text}> {title} </h3>
          </div> 
        }

        {/* Tipo LIST */}
        {
          (type==='list') &&
          <div style={{
            ...cards.card,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            width: '300px',
            height: '80px',
          }}>
              <i className={icon} style={{...cards.icon, fontSize: 40}} />
              <h3  
              style={{ fontSize: '25px',//
                      color,
                      textAlign: 'center'
              }}> {title} </h3>
          </div>
        }


        {/* Tipo Grid */}
        {
          (type==='grid') &&
          <div style={{
            ...cards.card,
            width: 80,
            height: 80
          }}>
              <i className={icon} style={{
                ...cards.icon,
                fontSize: 30  
              }} />
          </div>
        }


    </Link>
  )
}
