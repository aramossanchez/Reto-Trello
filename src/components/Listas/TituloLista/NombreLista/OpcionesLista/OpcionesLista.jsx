import React, { useEffect, useRef } from 'react';
import {connect} from 'react-redux';
import './OpcionesLista.scss';
import {añadiendoTarjeta, borrarLista, reordernarListas, opcionesDeListaAFalse, cambiarMoviendoLista, borrarTarjetasDeLista, cambiarMoviendoTarjetas, contadorACero,
    copiandoLista} from '../../../../../redux/actions';

function NombreLista (props) {

    const borrarListaYReordenar = (idLista) => {
        props.BorramosLaLista(idLista);
        props.ReordenamosPosicionDeListas();
    }

    const botonAñadirTarjeta = (lista) => {
        if(!lista.añadiendo){
            setTimeout(() => {
                props.AbrirCreacionDeTarjeta(lista.id);
            }, 25);
        }
        props.CerramosOpcionesDeLista(lista.id)
    }

    const botonCopiandoLista = (lista) =>{
        if(!lista.copiandoLista){
            setTimeout(() => {
                props.AbrirMenuDeCopiarLista(lista.id);
            }, 15);
        }
        props.AbrirMenuDeCopiarLista(lista.id);
        props.CerramosOpcionesDeLista(lista.id);
    }

    const botonMoviendoLista = (lista) => {
        if(!lista.moviendoLista){
            setTimeout(() => {
                props.AbrirMenuDeMoverLista(lista.id);
            }, 15);
        }
        props.AbrirMenuDeMoverLista(lista.id);
        props.CerramosOpcionesDeLista(lista.id);
    }

    const botonMoviendoTarjetas = (lista) => {
        if(!lista.moviendoTarjetas){
            setTimeout(() => {
                props.AbrirMenuDeMoverTarjetas(lista.id);
            }, 15);
        }
        props.AbrirMenuDeMoverTarjetas(lista.id);
        props.CerramosOpcionesDeLista(lista.id);
    }

    const botonBorrarTarjetasDeLista = (id) => {
        props.BorrarTodasLasTarjetasDeLaLista(id);
        props.PonerACeroElContadorDeTarjetas(id);
        props.CerramosOpcionesDeLista(id);
    }    

    return(
        <div id="contenedor-opciones-lista" className="opciones-lista">
            <div className="titulo-opciones-lista">
                Enumerar acciones
            </div>
            <hr/>
            <span onClick={()=>botonAñadirTarjeta(props.lista)}>Añadir tarjeta</span>
            <span onClick={()=>botonCopiandoLista(props.lista)}>Copiar lista</span>
            <span onClick={()=>botonMoviendoLista(props.lista)}>Mover lista</span>
            {props.lista.contador>0 &&
            <div id="contenedor-opciones-lista" className="opciones-lista-con-tarjetas">
                <hr/>
                <span onClick={()=>botonMoviendoTarjetas(props.lista)}>Mover todas las tarjetas de esta lista</span>
                <span onClick={()=>botonBorrarTarjetasDeLista(props.lista.id)}>Borrar todas las tarjetas de esta lista</span>
            </div>
            }
            <hr/>
            <span onClick={()=>borrarListaYReordenar(props.lista.id)}>Borrar lista</span>
        </div>
    )
}

const traerEstado = (state) =>({
    state: state,
    listaSiendoCopiada: state.Lista_En_Espera_De_Ser_Copiada.estado
});

const operarTarjetas = (dispatch) => ({
    AbrirCreacionDeTarjeta: añadiendoTarjeta(dispatch),
    BorramosLaLista: borrarLista(dispatch),
    ReordenamosPosicionDeListas: reordernarListas(dispatch),
    CerramosOpcionesDeLista: opcionesDeListaAFalse(dispatch),
    AbrirMenuDeMoverLista: cambiarMoviendoLista(dispatch),
    BorrarTodasLasTarjetasDeLaLista: borrarTarjetasDeLista(dispatch),
    AbrirMenuDeMoverTarjetas: cambiarMoviendoTarjetas(dispatch),
    PonerACeroElContadorDeTarjetas: contadorACero(dispatch),
    AbrirMenuDeCopiarLista: copiandoLista(dispatch),
});

const connected = connect (traerEstado,operarTarjetas)(NombreLista);

export default connected;
