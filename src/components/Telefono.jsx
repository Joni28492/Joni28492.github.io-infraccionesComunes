
//TODO.: Ajusar props de colores
export const Telefono = ({tel='112', color='red', name='emergencias'}) => {
  return <div className="m-2">
      <a href={`tel:+34${tel}`}
      style={{
        color: `${color}`,
        textDecoration: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems:"center",
        justifyContent: 'center',
        fontSize: '60px',
          
      }}> 
        <i className="fas fa-phone"  /> 
        <span
            style={{fontSize: '15px'}}
        >{name}</span>
        
    </a>
  </div>;
};
