import React from 'react';
import {connect} from 'react-redux';
import './CambiandoTituloTarjeta.scss';
import {cambiandoTituloTarjetaFalse, cambiarTituloTarjeta} from '../../../../../../redux/actions';

function CambiandoTituloTarjeta(props){

    const editandoTituloTarjeta = (e,id) => {
        if(e.keyCode === 13 && e.target.value.trim()){
            props.CerrarEdicionDeTituloDeTarjeta(id);
            props.CambiamosElTituloDeLaTarjeta(id, e.target.value.trim());
        }
    }

    const editandoTarjetaPerdiendoFoco = (e, id) =>{
        if(e.target.value.trim()){
            props.CerrarEdicionDeTituloDeTarjeta(id);
            props.CambiamosElTituloDeLaTarjeta(id, e.target.value.trim());
        }
    }

    return(
        <div className="cambiando-tarjeta">
            <input 
            autoFocus
            defaultValue={props.tarjeta.titulo}
            type="text"
            onKeyUp={(e)=>editandoTituloTarjeta(e,props.tarjeta.id)}
            onBlur={(e)=>editandoTarjetaPerdiendoFoco(e,props.tarjeta.id)}
            className="cambiar-tarjeta"/>
            <button className="cerrar-opciones-tarjeta">✖️</button>
        </div>
    )
}

const traerEstado = (state) =>({
    state: state,
});

const operarTarjetas = (dispatch) => ({
    CerrarEdicionDeTituloDeTarjeta: cambiandoTituloTarjetaFalse(dispatch),
    CambiamosElTituloDeLaTarjeta: cambiarTituloTarjeta(dispatch)    ,
})

const connected = connect (traerEstado,operarTarjetas)(CambiandoTituloTarjeta);

export default connected;