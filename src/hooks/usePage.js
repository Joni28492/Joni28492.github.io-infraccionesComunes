
import { useState } from 'react';


export const usePage = (listado=[]) => {
  
    const [page, setPage] = useState(0);
    const {name, tel, color} = listado[page];

    const handleNext  = () =>{
        (page === listado.length -  1) 
        ? setPage(0)
        :setPage(page+1)
    }
    const handlePrevious  = () =>{
        (page === 0) 
        ? setPage(listado.length -1)
        :setPage(page-1)
    }
  
    return {
        info: {name, tel, color},
        page,
        handleNext,
        handlePrevious,
    };
};
