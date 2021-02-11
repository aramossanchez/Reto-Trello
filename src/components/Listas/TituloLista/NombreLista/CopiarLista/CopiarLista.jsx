import React, { useEffect, useRef } from 'react';
import {connect} from 'react-redux';
import './CopiarLista.scss';
import flechaabajo from '../../../../../images/flecha-abajo.png';
import {opcionesDeListaAFalse, opcionesDeLista, copiandoListaFalse, añadirLista, listaEnEsperaTrue, idlistaEnEspera} from '../../../../../redux/actions';

function CopiarLista (props) {

    const ref = useRef();

    const copiarLista = (e,id) =>{
        if(e.keyCode === 13 && e.target.value.trim()){
            props.CreamosCopiaDeLaLista(e.target.value.trim());
            e.target.value="";
            props.DejarAFalsePropiedadCopiandoLista(id);
            props.CerrarOpcionesDeLista(id);
            props.PonemosListaEnEsperaDeSerCopiada();
            props.IncidamosQueListaEstaSiendoCopiada(id);
        }
    }

    const copiarListaBoton = (e,id) =>{
        if(e.current.value.trim()){
            props.CreamosCopiaDeLaLista(e.current.value.trim());
            e.current.value="";
            props.DejarAFalsePropiedadCopiandoLista(id);
            props.CerrarOpcionesDeLista(id);
            props.PonemosListaEnEsperaDeSerCopiada();
            props.IncidamosQueListaEstaSiendoCopiada(id);
        }
    }

    const botonVolverAtrás = (id) => {
        props.DejarAFalsePropiedadCopiandoLista(id);
        setTimeout(() => {
            props.AbrirOpcionesDeLista(id);
        }, 15);
    }
    

    return(
        <div id="contenedor-copiar-lista" className="mover-tarjetas">
            <div className="titulo-mover-tarjetas">
                <img src={flechaabajo} alt="<" onClick={()=>botonVolverAtrás(props.lista.id)}/>
                Copiar lista
                <span className="cerrar-mover-tarjetas" onClick={()=>props.DejarAFalsePropiedadCopiandoLista(props.lista.id)}>✖️</span>
            </div>
            <hr/>
            <div id="contenedor-copiar-lista" className="select-mover-tarjetas">
                <span className="titulo-copiar-lista">Nombre de la nueva lista</span>
                <textarea
                ref={ref}
                autoFocus
                className="copiar-lista-textarea"
                onKeyUp={(e)=>copiarLista(e,props.lista.id)}>
                    {props.lista.nombre + " (copia)"}
                </textarea>
                <button className="añadir" onClick={()=>copiarListaBoton(ref,props.lista.id)}>Crear lista</button>
            </div>
        </div>
    )
}

const traerEstado = (state) =>({
    state: state,
});

const operarTarjetas = (dispatch) => ({
    AbrirOpcionesDeLista: opcionesDeLista(dispatch),
    CerrarOpcionesDeLista: opcionesDeListaAFalse(dispatch),
    DejarAFalsePropiedadCopiandoLista: copiandoListaFalse(dispatch),
    CreamosCopiaDeLaLista: añadirLista(dispatch),
    PonemosListaEnEsperaDeSerCopiada: listaEnEsperaTrue(dispatch),
    IncidamosQueListaEstaSiendoCopiada: idlistaEnEspera(dispatch),    
});

const connected = connect (traerEstado,operarTarjetas)(CopiarLista);

export default connected;
