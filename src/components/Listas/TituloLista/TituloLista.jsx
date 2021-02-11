import React from 'react';
import './TituloLista.scss';
import CambiandoTituloLista from './CambiandoTituloLista/CambiandoTituloLista.jsx';
import NombreLista from './NombreLista/NombreLista.jsx';

function TituloLista (props) {

    return(
        <div id="contenedor-lista" >
            {!props.lista.cambiando && 
            <NombreLista lista={props.lista}/>
            }
            {props.lista.cambiando &&
            <CambiandoTituloLista lista={props.lista}/>
            }
        </div>
    )
}

export default TituloLista;
