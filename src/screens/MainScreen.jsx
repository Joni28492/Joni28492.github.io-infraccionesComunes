import React from 'react'
import { MainCards } from '../components/MainCards'

export const MainScreen = () => {
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
