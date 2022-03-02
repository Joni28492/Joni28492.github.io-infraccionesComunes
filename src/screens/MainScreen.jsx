import React from 'react'
import { MainCards } from '../components/MainCards'

export const MainScreen = () => {

  //MainGrid
  //MainList
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
        <MainCards />
    </div>
  )
}
