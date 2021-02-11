import React from 'react';
import {connect} from 'react-redux';
import './TituloTarjeta.scss';
import CambiandoTituloTarjeta from './CambiandoTituloTarjeta/CambiandoTituloTarjeta.jsx';
import {editandoTarjeta, cambiandoTituloTarjeta} from '../../../../../redux/actions';

function TituloTarjeta(props){

    return(
        <div>
        {!props.tarjeta.cambiandoTitulo &&
        <div className="tituloyboton-editando" onClick={()=>props.AbrirCambioDeTituloDeTarjeta(props.tarjeta.id)}>
            <span className="opciones-titulo-tarjeta">{props.tarjeta.titulo}</span>
            <button className="cerrar-opciones-tarjeta" onClick={()=>props.CerrarOpcionesDeTarjeta(props.tarjeta.id)}>✖️</button>
        </div>
        }   
        {props.tarjeta.cambiandoTitulo &&
        <CambiandoTituloTarjeta tarjeta={props.tarjeta}/>
        }
        </div>
    )
}

const traerEstado = (state) =>({
    state: state,
});

const operarTarjetas = (dispatch) => ({
    CerrarOpcionesDeTarjeta: editandoTarjeta(dispatch),
    AbrirCambioDeTituloDeTarjeta: cambiandoTituloTarjeta(dispatch),
})

const connected = connect (traerEstado,operarTarjetas)(TituloTarjeta);

export default connected;