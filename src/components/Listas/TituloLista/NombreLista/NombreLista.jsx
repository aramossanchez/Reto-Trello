import React, { useEffect, useRef } from 'react';
import {connect} from 'react-redux';
import './NombreLista.scss';
import OpcionesLista from './OpcionesLista/OpcionesLista.jsx';
import CopiarLista from './CopiarLista/CopiarLista.jsx';
import MoverTarjetas from './MoverTarjetas/MoverTarjetas.jsx';
import MoverLista from './MoverLista/MoverLista.jsx';
import {cambiandoLista, opcionesDeLista, añadirTarjetaCopiando, listaEnEsperaFalse, idlistaEnEspera} from '../../../../redux/actions';

function NombreLista (props) {

    const botonMostrarOpcionesLista = (lista) =>{
        if(!lista.opciones){
            setTimeout(() => {
                props.AbrirOpcionesDeLista(lista.id)
            }, 25);
        }
    }

    useEffect(()=>{
        if(props.state.Lista_En_Espera_De_Ser_Copiada){
            props.state.Tarjetas.map((tarjeta)=>{
                if(tarjeta.idLista===props.state.Lista_Siendo_Copiada){
                    props.CrearTarjetasEnListaCopiada(tarjeta.titulo,props.state.Listas[props.state.Listas.length-1].id,tarjeta.descripcion,tarjeta.color, tarjeta.tablero)
                }
            })
            props.PonemosFalseLaPropiedaListaEnEsperaDeSerCopiada();
            props.PonemosCeroALaListaEnEsperaDeSerCopiada(0);
        }
    },[])
    

    return(
        <div id="contenedor-lista"  className="nombre-lista">
            <p onClick={()=>props.AbrirEdicionDeNombreDeLista(props.lista.id)}>{props.lista.nombre}</p>
            <button id="boton-opciones-lista"className="cerrar" onClick={()=>botonMostrarOpcionesLista(props.lista)} > . . . </button>
            {props.lista.opciones && 
                <OpcionesLista lista={props.lista}/>
            }
            {props.lista.copiandoLista &&
                <CopiarLista lista={props.lista}/>
            }
            {props.lista.moviendoLista &&
                <MoverLista lista={props.lista}/>
            }
            {props.lista.moviendoTarjetas &&
                <MoverTarjetas lista={props.lista}/>
            }
        </div>
    )
}

const traerEstado = (state) =>({
    state: state,
    listaSiendoCopiada: state.Lista_En_Espera_De_Ser_Copiada.estado
});

const operarTarjetas = (dispatch) => ({
    AbrirEdicionDeNombreDeLista: cambiandoLista(dispatch),
    AbrirOpcionesDeLista: opcionesDeLista(dispatch),
    CrearTarjetasEnListaCopiada: añadirTarjetaCopiando(dispatch),
    PonemosFalseLaPropiedaListaEnEsperaDeSerCopiada: listaEnEsperaFalse(dispatch),
    PonemosCeroALaListaEnEsperaDeSerCopiada: idlistaEnEspera(dispatch),
});

const connected = connect (traerEstado,operarTarjetas)(NombreLista);

export default connected;
