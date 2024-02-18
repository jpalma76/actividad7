import React from 'react';

function Cena({nombre, color, precio, setTotal, imagen}) {
    /* const ruta = "http://www.html6.es/img/rey_";
    const imagen = `${ruta}${nombre.toLowerCase()}`; */
    const comprar = (elemento) => {
        setTotal((e)=> e+precio);
        elemento.target.parentNode.parentNode.style.display="none";
    }
  return (
    <>
        <div className='rey' style={{backgroundColor: color}}>
            <h1>{nombre}</h1>
            <img src={imagen} width={200} alt='nombre' />
            <div className='titulo'>Precio:</div>
            <div className='precio'>{precio} €</div>
            <div>
                <button onClick={comprar}>Comprar</button>
            </div>
        </div>
    </>
  )
}

export default Cena;