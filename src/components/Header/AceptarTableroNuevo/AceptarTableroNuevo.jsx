import './AceptarTableroNuevo.scss';
import React, { useRef } from 'react';
import {connect} from 'react-redux';
import {cambiarTableroRecienCreado, definirTableroActivo} from '../../../redux/actions';

function AceptarTableroNuevo (props){

    const activarTableroNuevo = () =>{
        if(props.state.Tablero_Recien_Creado){
            var id = props.state.Tableros[props.state.Tableros.length-1].id
            props.ElegimosUltimoTableroCreadoComoActivo(id);
            props.FalseEnPropiedadTableroRecienCreado()
        }
    }

    return(
        <div className="contenedor-aceptar-tablero-nuevo">
            <div className="aceptar-tablero-nuevo">
                <span className="titulo-tablero-creado">TABLERO CREADO</span>
                <span className="nombre-de-tablero-nuevo">{props.state.Tableros[props.state.Tableros.length-1].nombre}</span>
                <span className="añadir boton-activar-tablero" onClick={()=>activarTableroNuevo()}>Aceptar</span>
            </div>
        </div>
    )
}

const traerEstado = (state) =>({
    state: state,
});

const operarTarjetas = (dispatch) => ({
    FalseEnPropiedadTableroRecienCreado: cambiarTableroRecienCreado(dispatch),
    ElegimosUltimoTableroCreadoComoActivo: definirTableroActivo(dispatch),
})

const connected = connect (traerEstado,operarTarjetas)(AceptarTableroNuevo);

export default connected;