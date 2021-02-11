import './Home.scss';
import React, { useRef } from 'react';
import {connect} from 'react-redux';
import {definirTableroActivo, cambiarPaginaHome, creandoTablero} from '../../redux/actions';

function Home (props){

    const activarTablero = (id) => {
        props.SeleccionarTableroActivo(id);
        props.CerrarHome();
    }

    const botonCrearTablero = () => {
        props.AbrirCreacionDeTablero();
        props.CerrarHome();
    }

    const alturaPantalla = {
        minHeight:window.innerHeight,
    }

    return(
        <div style={alturaPantalla} className="contenedor-home">
            <div className="home">
                <div className="contenedor-lista-tableros-home">
                    <span className="titulo-home">Tableros creados</span> 
                    <div className="lista-tableros-home">
                        {props.state.Tableros.map((tablero)=>{
                            return(
                            <div className="tablero-home" onClick={()=>activarTablero(tablero.id)}>
                                <div className={tablero.fondo + " miniatura-tablero"}></div><span>{tablero.nombre}</span>
                            </div>
                            )
                        })}
                    </div>
                </div>
                <div className="imagen-home">
                    ¡Bienvenido a la página principal! 
                    <br/>
                    Aquí podrás ver todos los tableros que tienes creados, y tendrás la posibilidad de crear otros nuevos.
                    <br/>
                    Entra a algún tablero y descubre todas las opciones que te ofrecemos 😉
                </div>
                <div className="crear-tablero-home">
                    <span className="titulo-home">Crear tablero</span>
                    <span className="boton-crear-tablero-home" onClick={()=>botonCrearTablero()}>+ Tablero nuevo</span>
                </div>
            </div>
        </div>
    )
}

const traerEstado = (state) =>({
    state: state,
});

const operarTarjetas = (dispatch) => ({
    SeleccionarTableroActivo: definirTableroActivo(dispatch),
    CerrarHome: cambiarPaginaHome(dispatch),
    AbrirCreacionDeTablero: creandoTablero(dispatch),
})

const connected = connect (traerEstado,operarTarjetas)(Home);

export default connected;