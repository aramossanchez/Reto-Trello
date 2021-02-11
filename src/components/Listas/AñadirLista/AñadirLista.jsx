import React from 'react';
import {connect} from 'react-redux';
import './AñadirLista.scss';
import {añadirLista, añadiendoLista} from '../../../redux/actions';

function AñadirLista(props) {

    const añadirLista = React.useRef();

    const escribirLista = (e) =>{
        if(e.keyCode === 13 && e.target.value.trim()){
            props.CreamosLista(e.target.value.trim());
            e.target.value="";
        }
    }

    const escribirListaBoton = () =>{
        if(añadirLista.current.value.trim()){
            props.CreamosLista(añadirLista.current.value.trim());
            añadirLista.current.value="";
        }
    }

    return(
        <div id="contenedor-crear-lista">
            {(!props.state.Añadiendo_Lista) && 
            <button onClick={()=>props.AbrirCreacionDeLista()} className="abrir-lista">{(props.state.Listas.length>0)? "+ Añada otra lista": "+ Añada una lista"}</button>
            }
            {(props.state.Añadiendo_Lista) &&
            <div id="contenedor-crear-lista" className="crear-lista">
                <textarea ref={añadirLista} type="text" placeholder="Introduzca el título de la lista..." onKeyUp={(e)=>escribirLista(e)} autoFocus/>
                <button className="añadir" onClick={()=>escribirListaBoton()}>Añadir nueva lista</button>
                <button onClick={()=>props.CerrarCreacionDeLista()} className="cerrar-añadir-lista">✖️</button>
            </div>
            }
        </div>
    )
};

const traerEstado = (state) =>({
    state: state,
});

const operarTarjetas = (dispatch) => ({
    CreamosLista: añadirLista(dispatch),
    AbrirCreacionDeLista: añadiendoLista(dispatch),
    CerrarCreacionDeLista: añadiendoLista(dispatch),
});


const connected = connect (traerEstado,operarTarjetas)(AñadirLista);

export default connected;

