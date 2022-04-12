import React from 'react';
import { MainCards } from './components/MainCards';


export const Navbar = () => {
    return (
        <nav className="animate__animated animate__rubberBand ">
          <MainCards displayLayouts={false} />
      </nav>
    )
}
