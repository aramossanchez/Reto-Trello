import './MasProyectos.scss';
import React, { useRef } from 'react';
import {connect} from 'react-redux';
import github from '../../../images/github.png';
import {cambiarMasProyectosFalse} from '../../../redux/actions';

function MasProyectos (props){
    return(
        <div id="mas-proyectos" className="mas-proyectos" onClick={(e)=>console.log(e.target.parentElement.id)}>
            <div id="mas-proyectos" className="titulo-mas-proyectos">
                <span>MAS PROYECTOS</span>
                <span className="cerrar-mover-tarjetas" onClick={()=>props.cerrarVentanaMasProyectos()}>✖️</span>
            </div>
            <div className="contenedor-enlace">
                <a href="https://github.com/aramossanchez" target="_blank">
                    <img src={github} alt="github"/><span>Perfil en github</span> 
                </a>
            </div>
        </div>
    )
}

const traerEstado = (state) =>({
    state: state,
});

const operarTarjetas = (dispatch) => ({
    cerrarVentanaMasProyectos: cambiarMasProyectosFalse(dispatch),
});

const connected = connect (traerEstado,operarTarjetas)(MasProyectos);

export default connected;