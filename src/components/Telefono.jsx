
//TODO.: Ajusar props de colores
export const Telefono = (
  {tel='112', color='red', name='emergencias', 
    styleDiv={width: '180px',height: '115px'},
    anchorSize='60px', span =true, spanSize='15px'
  }) => {

      // {width: '180px',
      // height: '115px',
      // padding: '15px'}
  return <div className="m-2" style={styleDiv} >
      <a href={`tel:+34${tel}`}
      style={{
        color: `${color}`,
        textDecoration: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems:"center",
        justifyContent: 'center',
        fontSize: `${anchorSize}`,
          
      }}> 
        <i className="fas fa-phone"  /> 

        {(span) && <span style={{fontSize: `${spanSize}`}}>{name}</span>}
        
    </a>
  </div>;
};
