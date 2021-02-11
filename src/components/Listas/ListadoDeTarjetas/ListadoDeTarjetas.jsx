import React from 'react';
import {connect} from 'react-redux';
import './ListadoDeTarjetas.scss';
import Tarjeta from './Tarjeta/Tarjeta.jsx';
import OpcionesDeTarjeta from './OpcionesDeTarjeta/OpcionesDeTarjeta.jsx';

function ListadoDeTarjetas(props){

    var h = window.innerHeight -250;

    const alturaPantalla = {
        maxHeight:h,
    }

    return(
        <div className="tarjetas" style={alturaPantalla} >
        {props.state.Tarjetas.map((tarjeta) => ((tarjeta.idLista===props.lista.id)?
        <div>
            <Tarjeta tarjeta={tarjeta}/>
            {(tarjeta.editando) &&
            <OpcionesDeTarjeta tarjeta={tarjeta} lista={props.lista}/>
            }
        </div>
        :<span></span>
        ))}
        </div>
    )
}

const traerEstado = (state) =>({
    state: state,
});

const connected = connect (traerEstado,null)(ListadoDeTarjetas);

export default connected;