import React, { useEffect, useRef } from 'react';
import {connect} from 'react-redux';
import './MoverTarjetas.scss';
import flechaabajo from '../../../../../images/flecha-abajo.png';
import {opcionesDeLista, cambiarMoviendoTarjetasFalse, cambiarTodasLasTarjetaDeLista, ordenarTarjetas, contadorACero, actualizarContador} from '../../../../../redux/actions';

function MoverTarjetas (props) {

    const moverTarjetasYReordenar = (listaActual, nombreListaDeseada)=>{
        var idListaDeseada=0;
        props.state.Listas.map((lista)=>{
            if(lista.nombre===nombreListaDeseada){
                idListaDeseada=lista.id
            }
        })
        props.state.Tarjetas.map((tarjeta)=>{
            if(tarjeta.idLista===listaActual){
                props.MovemosTodasLasTarjetasDeUnaListaAOtra(tarjeta.id,idListaDeseada);
            }
        })
        props.OrdenamosLasTarjetasDeLaListaDeseada(idListaDeseada)
        props.CerrarMenuDeMoverTarjetas(listaActual)
        props.DejamosElContadorDeTarjetasACero(listaActual)
        props.ActualizamosContadorDeTarjetasDeListaDestino(idListaDeseada)
    }
    
    const botonVolverAtrás = (id) => {
        props.CerrarMenuDeMoverTarjetas(id)
        setTimeout(() => {
            props.AbrirOpcionesDeLista(id);
        }, 15);
    }

    return(
        <div id="contenedor-mover-tarjetas" className="mover-tarjetas">
            <div className="titulo-mover-tarjetas">
                <img src={flechaabajo} alt="<" onClick={()=>botonVolverAtrás(props.lista.id)}/>
                Mover tarjetas
                <span className="cerrar-mover-tarjetas" onClick={()=>props.CerrarMenuDeMoverTarjetas(props.lista.id)}>✖️</span>
            </div>
            <hr/>
            <div id="contenedor-mover-tarjetas" className="select-mover-tarjetas">
            Lista actual: <select 
            name="listas" 
            onChange={(e)=>moverTarjetasYReordenar(props.lista.id, e.target.value)}>
            {props.state.Listas.map((list)=>{
                if(list.tablero===props.state.Tablero_Activo){
                    return(
                        <option 
                        disabled={(props.lista.posicion===list.posicion)?true:false}
                        selected={(props.lista.posicion===list.posicion)?true:false}>
                            {list.nombre}
                        </option>
                    )
                }
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
    CerrarMenuDeMoverTarjetas: cambiarMoviendoTarjetasFalse(dispatch),
    MovemosTodasLasTarjetasDeUnaListaAOtra: cambiarTodasLasTarjetaDeLista(dispatch),
    OrdenamosLasTarjetasDeLaListaDeseada: ordenarTarjetas(dispatch),
    DejamosElContadorDeTarjetasACero: contadorACero(dispatch),
    ActualizamosContadorDeTarjetasDeListaDestino: actualizarContador(dispatch),    
});

const connected = connect (traerEstado,operarTarjetas)(MoverTarjetas);

export default connected;
