import './MostrandoTableros.scss';
import React, { useRef } from 'react';
import {connect} from 'react-redux';
import {cambiarMostrandoTableros, cambiarMostrandoTablerosFalse, creandoTablero, definirTableroActivo, borrarTablero, cambiarPaginaHomeFalse} from '../../../redux/actions';

function MostrandoTableros (props){

    const activarTablero = (idTablero) =>{
        props.ActivamosTableroSeleccionado(idTablero);
        props.CerrarListaDeTableros();
        props.CerrarHome();
    }

    const botonBorrarTablero = (tablero) => {
        props.EliminarTablero(tablero)
        setTimeout(() => {
            props.AbrirListaDeTableros()
        }, 10);
    }

    const botonCrearTablero = () => {
        props.AbrirCreacionDeTablero();
        props.CerrarListaDeTableros();
    }

    return(
        <div id="lista-de-tableros" className="lista-de-tableros">
            <div id="lista-de-tableros" className="titulo-lista-tableros">
                <span>TABLEROS</span>
                <span className="cerrar-mover-tarjetas" onClick={()=>props.CerrarListaDeTableros()}>✖️</span>
            </div>
            {props.state.Tableros.map((tablero)=>
            <div className={tablero.fondo + " tablero-en-menu"} >
                <span className="titulo-tablero" onClick={()=>activarTablero(tablero.id)}>{tablero.nombre}</span>
                {props.state.Tablero_Activo!==tablero.id &&
                <button className="borrar-tablero" onClick={()=>botonBorrarTablero(tablero.id)}>❌</button>
                }
            </div>
            )}
            <div className="crear-tablero">
                <span onClick={()=>botonCrearTablero()}>Crear tablero nuevo...</span>
            </div>
        </div>
    )
}

const traerEstado = (state) =>({
    state: state,
});

const operarTarjetas = (dispatch) => ({
    AbrirListaDeTableros: cambiarMostrandoTableros(dispatch),
    CerrarListaDeTableros: cambiarMostrandoTablerosFalse(dispatch),
    AbrirCreacionDeTablero: creandoTablero(dispatch),
    ActivamosTableroSeleccionado: definirTableroActivo(dispatch),
    EliminarTablero: borrarTablero(dispatch),
    CerrarHome: cambiarPaginaHomeFalse(dispatch),
})

const connected = connect (traerEstado,operarTarjetas)(MostrandoTableros);

export default connected;