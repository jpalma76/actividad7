import "./App.css";
import { useRef, useState } from "react";
import Cena from "./Cena";

function App() {
    const reyes = [
        {
            nombre: "Atanagildo",
            color: "darkolivegreen",
            precio: 178,
            imagen: "https://html6.es/img/rey_atanagildo.png"
        },
        {
            nombre: "Ervigio",
            color: "crimson",
            precio: 169,
            imagen: "https://html6.es/img/rey_ervigio.png"
        },
        {
            nombre: "Ataúlfo",
            color: "peru",
            precio: 81,
            imagen: "https://html6.es/img/rey_ataulfo.png"
        },
        {
            nombre: "Leogivildo",
            color: "darkmagenta",
            precio: 126,
            imagen: "https://html6.es/img/rey_leogivildo.png"
        },
        {
            nombre: "Recesvinto",
            color: "royalblue",
            precio: 141,
            imagen: "https://html6.es/img/rey_recesvinto.png"
        },
        {
            nombre: "Sisebuto",
            color: "teal",
            precio: 69,
            imagen: "https://html6.es/img/rey_sisebuto.png"
        }
    ];

    const [total,setTotal] = useState(0);

    const refCaja = useRef();

    if(total !== 0) {
        refCaja.current.style.display="block";
    }
    
    /* llamado a la funcion desde el botón pagar */
    const pay = () => {
        alert("pagando");

    }
    
    return (
        <>
            <h1>Total a pagar: {total} €</h1>

            <div className="cajaCentral">
                <div className="cuadroDePago" ref={refCaja} hidden>
                    <h3>Pagar:</h3>
                    <div>
                        <button onClick={pay}>Pagar</button>
                    </div>
                    <label htmlFor="total">Total a pagar:</label>
                    <input id="total" type="number" value={total} readOnly />

                    <label htmlFor="efectivo">Efectivo:</label>
                    <input id="efectivo" type="number"  />

                    <label htmlFor="vuelto">Vuelto:</label>
                    <input id="vuelto" type="number"  readOnly />
                </div>
                <Cena
                    nombre={reyes[0].nombre}
                    color={reyes[0].color}
                    precio={reyes[0].precio}
                    imagen={reyes[0].imagen}
                    setTotal={setTotal} />
                <Cena
                    nombre={reyes[1].nombre}
                    color={reyes[1].color}
                    precio={reyes[1].precio}
                    imagen={reyes[1].imagen}
                    setTotal={setTotal} />
                <Cena
                    nombre={reyes[2].nombre}
                    color={reyes[2].color}
                    precio={reyes[2].precio}
                    imagen={reyes[2].imagen}
                    setTotal={setTotal} />
                <Cena
                    nombre={reyes[3].nombre}
                    color={reyes[3].color}
                    precio={reyes[3].precio}
                    imagen={reyes[3].imagen}
                    setTotal={setTotal} />
                <Cena
                    nombre={reyes[4].nombre}
                    color={reyes[4].color}
                    precio={reyes[4].precio}
                    imagen={reyes[4].imagen}
                    setTotal={setTotal} />
                <Cena
                    nombre={reyes[5].nombre}
                    color={reyes[5].color}
                    precio={reyes[5].precio}
                    imagen={reyes[5].imagen}
                    setTotal={setTotal} />

            </div>
        </>
    );
}

export default App;