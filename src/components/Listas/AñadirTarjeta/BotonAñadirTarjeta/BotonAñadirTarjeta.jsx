import React from 'react';
import {connect} from 'react-redux';
import './BotonAñadirTarjeta.scss';
import {añadiendoTarjeta, cerrandoRestoDeAñadiendoTarjetas} from '../../../../redux/actions';

function BotonAñadirTarjeta(props) {

    const añadirSoloUnaTarjeta = (lista) =>{
        if(!lista.añadiendo){
            setTimeout(() => {
                props.AbrirCreacionDeTarjeta(lista.id);
            }, 25);
        }
        props.CerrarCreacionDeTarjetaDelRestoDeListas(lista.id);
    }

    return (
            <button onClick={()=>añadirSoloUnaTarjeta(props.lista)} className="una-tarjeta">
            {props.lista.contador===0 &&
            <span>+ Añada una tarjeta</span>
            }
            {props.lista.contador!==0 &&
            <span>+ Añada otra tarjeta</span>
            }
            </button>
    )
}

const operarTarjetas = (dispatch) => ({
    AbrirCreacionDeTarjeta: añadiendoTarjeta(dispatch),
    CerrarCreacionDeTarjetaDelRestoDeListas: cerrandoRestoDeAñadiendoTarjetas(dispatch),
})


const connected = connect (null,operarTarjetas)(BotonAñadirTarjeta);

export default connected;

