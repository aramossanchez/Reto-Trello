import React from 'react';
import {connect} from 'react-redux';
import './CambiandoTituloLista.scss';
import {cambiandoListaFalse, cambiarNombreLista} from '../../../../redux/actions';

function CambiandoTituloLista (props) {


    const cambiarLista = (e, id) =>{
        if(e.keyCode === 13 && e.target.value.trim()){
            props.CerrarEdicionDelTituloDeLaLista(id);
            props.CambiarElNombreDeLaLista(id, e.target.value.trim());
        }
    }

    const cambiarListaPerdiendoFoco = (e, id) =>{
        if(e.target.value.trim()){
            props.CerrarEdicionDelTituloDeLaLista(id);
            props.CambiarElNombreDeLaLista(id, e.target.value.trim());
        }
    }

    return(
        <div id="contenedor-lista" className="cambiando-lista">
            <input 
            autoFocus
            type="text"
            defaultValue={props.lista.nombre}
            onKeyUp={(e)=>cambiarLista(e, props.lista.id)}
            onBlur={(e)=>cambiarListaPerdiendoFoco(e, props.lista.id)}
            className="cambiar-lista"/>
            <button className="cerrar">. . .</button>
        </div>
    )
}

const operarTarjetas = (dispatch) => ({
    CerrarEdicionDelTituloDeLaLista: cambiandoListaFalse(dispatch),
    CambiarElNombreDeLaLista: cambiarNombreLista(dispatch),
});

const connected = connect (null,operarTarjetas)(CambiandoTituloLista);

export default connected;
