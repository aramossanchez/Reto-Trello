import React from 'react';
import {connect} from 'react-redux';
import './AñadirTarjeta.scss';
import EscribiendoTarjeta from './EscribiendoTarjeta/EscribiendoTarjeta.jsx';
import BotonAñadirTarjeta from './BotonAñadirTarjeta/BotonAñadirTarjeta.jsx';

function AñadirTarjeta(props) {

    return (
        <div  id="contenedor-lista">
            {!props.lista.añadiendo &&
            <BotonAñadirTarjeta lista={props.lista}/>
            }
            {props.lista.añadiendo &&
            <EscribiendoTarjeta lista={props.lista}/>
            }
        </div>
    )
}

const traerEstado = (state) =>({
    state: state,
});

const connected = connect (traerEstado,null)(AñadirTarjeta);

export default connected;

