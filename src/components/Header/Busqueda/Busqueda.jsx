import './Busqueda.scss';
import React, { useRef } from 'react';
import {connect} from 'react-redux';
import flechair from '../../../images/flecha-ir.png';
import {definirTableroActivo, cambiarPaginaHomeFalse, cambiarMostrarResultadosBusqueda, borrarBusqueda, añadirCriterioBusqueda} from '../../../redux/actions';

function Busqueda (props){

    const cerrarBusqueda = () => {
        props.PonerCriterioDeBusquedaVacio("");
        props.BorrarBusquedaRealizada();
        props.CerrarResultadoDeBusqueda();
    }

    const botonIr = (tablero) => {
        props.CambiarTableroActivoAlDelResultado(tablero);
        props.CerrarResultadoDeBusqueda();
        props.CerrarHome();
    }

    var h = window.innerHeight-100
    const alturaPantalla = {
        maxHeight:h,
    }

    return(
        <div style={alturaPantalla} className="resultado-busqueda">
            <div className="mostrando-resultados-para">
                <div>Resultados para <span className="criterio-busqueda">{props.state.Criterio_De_Busqueda}</span></div>
                <button id="boton-cerrar-busqueda"onClick={()=>cerrarBusqueda()}>✖️</button>
            </div>
            {!props.state.Busqueda_Con_Resultado &&
            <div className="sin-resultado">
                🔎 No se han encontrado coincidencias... Prueba otra cosa 🔍
            </div>
            }
            {props.state.Busqueda_Con_Resultado &&
            <div>
                <div>
                {props.state.Busqueda.map((busqueda)=>{
                if(busqueda.tipo==="tablero"){
                    return(
                        <div className="resultado-individual">
                            <span className="termino-encontrado">{busqueda.nombre}</span> es un TABLERO<img src={flechair} alt="Ir" onClick={()=>botonIr(busqueda.tablero)}/>
                        </div>
                    )
                }
                })}
                </div>                  
                <div>
                {props.state.Busqueda.map((busqueda)=>{
                if(busqueda.tipo==="lista"){
                    return(
                        <div className="resultado-individual">
                            <span className="termino-encontrado">{busqueda.nombre}</span> es una LISTA. Esta en el tablero {props.state.Tableros.map((tablero)=>{
                                if(tablero.id===busqueda.idTablero){
                                    return <span className="ubicacion"> {tablero.nombre}<img src={flechair} alt="Ir" onClick={()=>botonIr(tablero.id)}/></span>
                                }
                            })}
                        </div>
                    )
                }
                })}
                </div>
                <div>
                {props.state.Busqueda.map((busqueda)=>{
                if(busqueda.tipo==="tarjeta"){
                    return(
                        <div className="resultado-individual">
                            <span className="termino-encontrado">{busqueda.nombre}</span> es una TARJETA. Está en la lista {props.state.Listas.map((lista)=>{
                                if(lista.id===busqueda.idLista){
                                    return <span><span className="ubicacion">{lista.nombre}</span>, en el tablero {props.state.Tableros.map((tablero)=>{
                                        if(tablero.id===lista.tablero){
                                            return <span className="ubicacion"> {tablero.nombre}<img src={flechair} alt="Ir" onClick={()=>botonIr(tablero.id)}/></span>
                                        }
                                    })}</span>
                                }
                            })}
                        </div>
                    )
                }
                })}
                </div>
            </div>
            }     
        </div>
    )
}

const traerEstado = (state) =>({
    state: state,
});

const operarTarjetas = (dispatch) => ({
    CambiarTableroActivoAlDelResultado: definirTableroActivo(dispatch),
    CerrarHome: cambiarPaginaHomeFalse(dispatch),
    CerrarResultadoDeBusqueda: cambiarMostrarResultadosBusqueda(dispatch),
    BorrarBusquedaRealizada: borrarBusqueda(dispatch),
    PonerCriterioDeBusquedaVacio: añadirCriterioBusqueda(dispatch),
})

const connected = connect (traerEstado,operarTarjetas)(Busqueda);

export default connected;