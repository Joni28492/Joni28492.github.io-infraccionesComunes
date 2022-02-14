
import { useState } from 'react';


export const usePage = (paginas=[], Component) => {
  
    const [page, setPage] = useState(0);
    const info = paginas[page];

    // const [previousPage, setPreviousPage] = useState(
    //     (page === 0) ?  paginas[paginas.length-1]
    //                  :  paginas[page - 1]
    // );

    // const [nextPage, setNextPage] = useState(
    //     (page === paginas.length-1) ?  paginas[0]
    //                                 :  paginas[page + 1]
    // );

    //TODO:.manejo next y prevous pages
    // const handleNextPage  = () =>{
    //     (page === paginas.length-1)
    //         ?setNextPage(paginas[0])
    //         :setNextPage(paginas[page+1])
    // }


    // Manejo paginado

    const handleNext  = () =>{
        (page === paginas.length -  1) 
            ? setPage(0)
            : setPage(page + 1)
        // handleNextPage();
    }
    const handlePrevious  = () =>{
        (page === 0) 
        ? setPage(paginas.length -1)
        :setPage(page-1)
    }
  
    return {
        info,
        handleNext,handlePrevious,
        page, 
        // previousPage, setPreviousPage,
        // nextPage, setNextPage,
        Component
    };
};
