import React, { useEffect, useRef } from 'react';
import {connect} from 'react-redux';
import './MoverLista.scss';
import flechaabajo from '../../../../../images/flecha-abajo.png';
import {opcionesDeLista, cambiarMoviendoListaFalse, cambiarPosicionLista, ordenarListas} from '../../../../../redux/actions';

function MoverLista (props) {

    const moverListasYReordenar = (posicionActual, posicionDeseada, idLista) => {
        props.MoverLista(posicionActual, posicionDeseada);
        props.CerrarMenuDeMoverLista(idLista);
        props.ReordenarLasListas();
    }

    const botonVolverAtrás = (id) => {
        props.CerrarMenuDeMoverLista(id)
        setTimeout(() => {
            props.AbrirOpcionesDeLista(id);
        }, 15);
    }

    return(
        <div id="contenedor-mover-lista" className="mover-lista">
            <div className="titulo-mover-lista">
                <img src={flechaabajo} alt="<" onClick={()=>botonVolverAtrás(props.lista.id)}/>
                Mover lista
                <span className="cerrar-mover-lista" onClick={()=>props.AbrirMenuDeMoverLista(props.lista.id)}>✖️</span>
            </div>
            <hr/>
            <div id="contenedor-mover-lista" className="select-mover-lista">
                Posición actual: <select 
                id="contenedor-mover-lista"
                name="listas" 
                onChange={(e)=>moverListasYReordenar(props.lista.posicion, e.target.value, props.lista.id)}>
                {props.state.Listas.map((list)=>{
                if(list.tablero===props.state.Tablero_Activo)
                    return(
                        <option 
                        disabled={(props.lista.posicion===list.posicion)?true:false}
                        selected={(props.lista.posicion===list.posicion)?true:false}>
                            {list.posicion}
                        </option>
                    )
                })}
                </select>
            </div>
        </div>
    )
}

const traerEstado = (state) =>({
    state: state,
    listaSiendoCopiada: state.Lista_En_Espera_De_Ser_Copiada.estado
});

const operarTarjetas = (dispatch) => ({
    AbrirOpcionesDeLista: opcionesDeLista(dispatch),
    CerrarMenuDeMoverLista: cambiarMoviendoListaFalse(dispatch),
    AbrirMenuDeMoverLista: cambiarMoviendoListaFalse(dispatch),
    MoverLista: cambiarPosicionLista(dispatch),
    ReordenarLasListas: ordenarListas(dispatch),    
});

const connected = connect (traerEstado,operarTarjetas)(MoverLista);

export default connected;
