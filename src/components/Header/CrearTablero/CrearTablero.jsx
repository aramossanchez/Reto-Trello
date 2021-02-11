import './CrearTablero.scss';
import React, { useRef } from 'react';
import {connect} from 'react-redux';
import {crearTablero, creandoTablero, cambiarTableroRecienCreado} from '../../../redux/actions';

function CrearTablero (props){

    const creamosTablero = (e) => {
        if(e.keyCode === 13 && e.target.value.trim()){
            props.CreacionDeTablero(e.target.value.trim());
            e.target.value="";
            props.CerrarCreacionDeTablero();
            props.ActivamosPropiedadTableroRecienCreado();
        }
    }

    const creamosTableroBoton = (e) => {
        if(e.current.value.trim()){
            props.CreacionDeTablero(e.current.value.trim());
            e.current.value="";
            props.CerrarCreacionDeTablero();
            props.ActivamosPropiedadTableroRecienCreado();
        }
    }

    const CrearTablero = useRef();

    return(
        <div className="contenedor-creando-tablero">
            <div className="creando-tablero">
                <div className="cerrar-tablero">
                            <span>CREANDO TABLERO NUEVO</span>
                            <span className="cerrar-mover-tarjetas" onClick={()=>props.CerrarCreacionDeTablero()}>✖️</span>
                </div>
                <input 
                ref={CrearTablero}
                type="text"
                placeholder="Añadir título de tablero"
                autoFocus
                onKeyUp={(e)=>creamosTablero(e)}/>
                <button className="boton-añadir-tablero" onClick={()=>creamosTableroBoton(CrearTablero)}>Crear tablero</button>
            </div>
        </div>
    )
}

const traerEstado = (state) =>({
    state: state,
});

const operarTarjetas = (dispatch) => ({
    CreacionDeTablero: crearTablero(dispatch),
    CerrarCreacionDeTablero: creandoTablero(dispatch),
    ActivamosPropiedadTableroRecienCreado: cambiarTableroRecienCreado(dispatch),
})

const connected = connect (traerEstado,operarTarjetas)(CrearTablero);

export default connected;