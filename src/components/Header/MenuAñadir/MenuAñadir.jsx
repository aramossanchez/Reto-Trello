import './MenuAñadir.scss';
import React, { useRef } from 'react';
import {connect} from 'react-redux';
import {creandoTablero, cambiarMenuAñadir, cambiarMenuAñadirFalse, cambiarMenuAñadirTarjeta, añadiendoLista, añadiendoTarjeta} from '../../../redux/actions';

function MenuAñadir (props){

    const estiloAñadirTarjeta = {
        transform: props.state.Menu_Añadir_Tarjeta===true?"scaleY(1)":"scaleY(0)",
        height: props.state.Menu_Añadir_Tarjeta===true?"100%":"0",
    }

    const botonEnlacesAñadirTarjeta = () => {
        props.AbrirListadoDeListas();
    }

    const botonAñadiendoTablero = () => {
        props.AbrirCreacionDeTablero();
        props.CerrarMenuAñadir();
    }

    const botonAñadiendoLista = () => {
        if(!props.state.Añadiendo_Lista){
            setTimeout(() => {
                props.AbrimosAñadiendoLista()
                props.CerrarMenuAñadir();
            }, 25);
        }
    }

    const botonAñadiendoTarjeta = (id) => {
        setTimeout(() => {
            props.AbrimosAñadiendoTarjeta(id);
            props.CerrarListadoDeListas();
        }, 25);
    }

    return(
        <div id="contenedor-menu-añadir">
            <div id="contenedor-menu-añadir" className="menu-añadir" onClick="">
                <div id="contenedor-menu-añadir" className="titulo-menu-añadir">
                    <span>AÑADIR</span>
                    <span className="cerrar-mover-tarjetas" onClick={()=>props.BotonCerrarMenuAñadir()}>✖️</span>
                </div>
                <div id="contenedor-menu-añadir" className="enlaces-añadir">
                        <div className="enlaces-añadir-opciones" onClick={()=>botonAñadiendoTablero()}>Añadir Tablero...</div>
                        {!props.state.Pagina_Home &&
                        <div id="contenedor-menu-añadir">
                            <div className="enlaces-añadir-opciones" onClick={()=>botonAñadiendoLista()}>Añadir Lista...</div>
                            <div className="enlaces-añadir-opciones" onClick={()=>botonEnlacesAñadirTarjeta()}>Añadir Tarjeta...</div>
                            <div style={estiloAñadirTarjeta} className="enlaces-añadir-tarjeta">
                            {props.state.Listas.map((lista)=>{
                                if(lista.tablero===props.state.Tablero_Activo){
                                    return(
                                        <div onClick={()=>botonAñadiendoTarjeta(lista.id)} className="listas-añadir-tarjeta">{lista.nombre}</div>
                                    )
                                }      
                            })}
                            </div>  
                        </div>
                        }
                </div>
            </div>
        </div>
    )
}

const traerEstado = (state) =>({
    state: state,
});

const operarTarjetas = (dispatch) => ({
    AbrirCreacionDeTablero: creandoTablero(dispatch),
    CerrarMenuAñadir: cambiarMenuAñadir(dispatch),
    BotonCerrarMenuAñadir: cambiarMenuAñadirFalse(dispatch),
    AbrirListadoDeListas: cambiarMenuAñadirTarjeta(dispatch),
    CerrarListadoDeListas: cambiarMenuAñadirTarjeta(dispatch),
    AbrimosAñadiendoLista: añadiendoLista(dispatch),
    AbrimosAñadiendoTarjeta: añadiendoTarjeta(dispatch),
})

const connected = connect (traerEstado,operarTarjetas)(MenuAñadir);

export default connected;