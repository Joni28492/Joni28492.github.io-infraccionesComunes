
//TODO.: Ajusar props de colores
export const Telefono = ({tel, color='grey'}) => {
  return <div style={{
    color: {color}
  }}>
      <a href={`tel:+34${tel}`}
      style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems:"center",
          justifyContent: 'center',
          textDecoration: 'none',
          fontSize: '60px',
          
          textDecoration: 'none'
          
      }}> 
        <i className="fas fa-phone" style={{
            color: {color}
        }} /> 
        <span
            style={{
                fontSize: '15px',
                color: {color}
            }}
        >Polcía Local - Valdes</span>
    </a>
  </div>;
};
