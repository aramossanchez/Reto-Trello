import React from 'react';
import {connect} from 'react-redux';
import './Tarjeta.scss';
import {borrarTarjeta, corregirPosicionTarjetas, editandoTarjeta, cambiandoTituloTarjetaFalse} from '../../../../redux/actions';

function Tarjeta(props){

    const eliminarTarjeta = (idLista, id) => {
        props.BorramosTarjeta(idLista,id);
        props.CorregimosLasPosicionesDeLasTarjetasDeEstaLista(idLista);
    }
    
    return(
        <div className="contenedor-tarjeta">
            <div
            className="tarjeta"
            style={{backgroundColor: props.tarjeta.color}}
            onClick={()=>props.AbrirOpcionesDeLaTarjeta(props.tarjeta.id) + props.CerrarLaEdicionDeTituloDeLaTarjeta(props.tarjeta.id)}>
                <span className="titulo-tarjeta">{props.tarjeta.titulo}</span>
                <button className="cerrar-tarjeta" onClick={()=>eliminarTarjeta(props.tarjeta.idLista, props.tarjeta.id)}>❌</button>   
                {(props.tarjeta.descripcion!=="") &&
                <span 
                className="existe-comentario">
                🗨️</span>
                }       
            </div>
        </div>
    )
}

const traerEstado = (state) =>({
    state: state,
});

const operarTarjetas = (dispatch) => ({
    BorramosTarjeta: borrarTarjeta(dispatch),
    CorregimosLasPosicionesDeLasTarjetasDeEstaLista: corregirPosicionTarjetas(dispatch),
    AbrirOpcionesDeLaTarjeta: editandoTarjeta(dispatch),
    CerrarLaEdicionDeTituloDeLaTarjeta: cambiandoTituloTarjetaFalse(dispatch),
})

const connected = connect (traerEstado,operarTarjetas)(Tarjeta);

export default connected;