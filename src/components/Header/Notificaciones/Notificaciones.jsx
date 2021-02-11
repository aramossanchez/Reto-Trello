import './Notificaciones.scss';
import React, { useRef } from 'react';
import {connect} from 'react-redux';
import {cambiarMostrandoNotificacionesFalse} from '../../../redux/actions';

function Notificaciones (props){
    return(
        <div id="contenedor-notificaciones" className="notificaciones" onClick={(e)=>console.log(e.target.parentElement.id)}>
            <div id="contenedor-notificaciones" className="titulo-notificaciones-general">
                <span>NOTIFICIACIONES</span>
                <span className="cerrar-mover-tarjetas" onClick={()=>props.CerrarNotificaciones()}>✖️</span>
            </div>
            <div className="titulo-notificaciones">ÚLTIMO TABLERO CREADO</div>
            <div className="notificacion">
            {props.state.Tableros[props.state.Tableros.length-1].nombre}
            </div>
            {props.state.Listas.length!==0 && 
            <div id="contenedor-notificaciones">
                <div className="titulo-notificaciones">ÚLTIMA LISTA CREADA</div>
                <div className="notificacion">
                    {props.state.Listas[props.state.Listas.length-1].nombre}
                </div>
            </div>
            }
            {props.state.Tarjetas.length!==0 &&
            <div id="contenedor-notificaciones">
                <div className="titulo-notificaciones">ÚLTIMA TARJETA CREADA</div>
                <div className="notificacion">
                    {props.state.Tarjetas[props.state.Tarjetas.length-1].titulo}
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
    CerrarNotificaciones: cambiarMostrandoNotificacionesFalse(dispatch),
})

const connected = connect (traerEstado,operarTarjetas)(Notificaciones);

export default connected;