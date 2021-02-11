import React from 'react';
import {connect} from 'react-redux';
import './EscribiendoTarjeta.scss';
import {añadirTarjeta, añadiendoTarjeta} from '../../../../redux/actions';

function EscribiendoTarjeta(props) {

    const escribirTarjeta = (e, id) =>{
        if(e.keyCode === 13 && e.target.value.trim()){
            props.CreamosTarjeta(e.target.value.trim(), id,  props.state.Tablero_Activo);
            e.target.value="";
        }
    }

    const botonEscribirTarjeta =(nombreTarjeta,idLista,tablero) => {
        if(nombreTarjeta!==""){
        props.CreamosTarjeta(nombreTarjeta,idLista,tablero);
        ref.current.value="";
        }
    }

    const ref =React.createRef();

    return (
            <div id="contenedor-lista">
                <textarea 
                autoFocus
                ref={ref}
                type="text" placeholder="Introduzca un título para esta tarjeta..." 
                onKeyUp={(e)=>escribirTarjeta(e, props.lista.id,props.state.Tablero_Activo)}
                />
                <button 
                className="añadir" 
                onClick={()=> botonEscribirTarjeta(ref.current.value.trim(),props.lista.id, props.state.Tablero_Activo)}>Añadir tarjeta</button>
                <button onClick={()=>props.CerrarCreacionDeTarjeta(props.lista.id)} className="cerrar-añadir-tarjeta">✖️</button>
            </div>
    )
}

const traerEstado = (state) =>({
    state: state,
});

const operarTarjetas = (dispatch) => ({
    CreamosTarjeta: añadirTarjeta(dispatch),
    CerrarCreacionDeTarjeta: añadiendoTarjeta(dispatch),
})


const connected = connect (traerEstado,operarTarjetas)(EscribiendoTarjeta);

export default connected;

