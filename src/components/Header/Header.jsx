import './Header.scss';
import React, { useRef } from 'react';
import {connect} from 'react-redux';
import {cambiarPaginaHome, cambiarMasProyectos, cambiarMostrandoTableros, cambiarBuscando, cambiarBusquedaConResultadoFalse, borrarBusqueda, cambiarMostrarResultadosBusquedaTrue, 
    añadirCriterioBusqueda, añadirTableroBusqueda, cambiarBusquedaConResultadoTrue, añadirListaBusqueda, añadirTarjetaBusqueda, cambiarMenuAñadir, cambiarMostrandoInformacion,
    cambiarMostrandoNotificaciones} from '../../redux/actions';
import CrearTablero from './CrearTablero/CrearTablero.jsx';
import AceptarTableroNuevo from './AceptarTableroNuevo/AceptarTableroNuevo.jsx';
import Busqueda from './Busqueda/Busqueda.jsx';
import MasProyectos from './MasProyectos/MasProyectos.jsx';
import MenuAñadir from './MenuAñadir/MenuAñadir.jsx';
import MostrandoTableros from './MostrandoTableros/MostrandoTableros.jsx';
import MostrandoInformacion from './MostrandoInformacion/MostrandoInformacion.jsx';
import Notificaciones from './Notificaciones/Notificaciones.jsx';
import masproyectos from '../../images/masaplicaciones.png';
import home from '../../images/home.png';
import tablero from '../../images/tablero.png';
import lupa from '../../images/lupa.png';
import mas from '../../images/mas.png';
import informacion from '../../images/informacion.png';
import campana from '../../images/campana.png';
import perfil from '../../images/perfil-vacio.png';

function Header (props){

    const botonMostrarMasProyectos = () => {
        if(!props.state.Mas_Proyectos){
            setTimeout(() => {
                props.AbrirMasProyectos()
            }, 25);
        }
    }

    const estiloPaginaHomeActiva = {
        backgroundColor: props.state.Pagina_Home===true?"#334CFF":"",
    }

    const botonMostrarTableros = () =>{
        if(!props.state.Mostrando_Tableros){
            setTimeout(() => {
                props.AbrirTableros()
            }, 25);
        }
    }

    const botonMenuAñadir = () => {
        if(!props.state.Menu_Añadir){
            setTimeout(() => {
                props.AbrirMenuAñadir();
            }, 25);
        }
    }

    const botonInformacion = () => {
        if(!props.state.Mostrando_Informacion){
            setTimeout(() => {
                props.AbrirMenuInformacion()
            }, 25);
        }
    }

    const botonNotificaciones = () => {
        if(!props.state.Mostrando_Notificaciones){
            setTimeout(() => {
                props.AbrirMenuNotificaciones()
            }, 25);
        }
    }

    const hacerBusqueda = (e) => {
        if(e.keyCode === 13 && e.target.value.trim()){
            props.NoSeEncuentrarCoincidenciasEnLaBusqueda()
            props.BorrarBusquedaAnterior();
            props.MostrarResultadoDeBusqueda();
            props.CriterioDeBusqueda(e.target.value.trim());
            props.state.Tableros.map((tablero)=>{
                if(tablero.nombre.toLowerCase().includes(e.target.value.trim().toLowerCase())){
                    props.TableroEncontrado(tablero.nombre, tablero.id);
                    props.SiSeEncuentranCoincidenciasEnLaBusqueda();
                }
            })
            props.state.Listas.map((lista)=>{
                if(lista.nombre.toLowerCase().includes(e.target.value.trim().toLowerCase())){
                    props.ListaEncontrada(lista.nombre,lista.tablero);
                    props.SiSeEncuentranCoincidenciasEnLaBusqueda();
                }
            })
            props.state.Tarjetas.map((tarjeta)=>{
                if(tarjeta.titulo.toLowerCase().includes(e.target.value.trim().toLowerCase())){
                    props.TarjetaEncontrada(tarjeta.titulo,tarjeta.idLista);
                    props.SiSeEncuentranCoincidenciasEnLaBusqueda();
                }
            })
            e.target.value="";
        }
    }

    return(
        <header style={estiloPaginaHomeActiva} className="row">
            <div className="col-5 col-sm-4 col-md-4 col-lg-3">
                <div id="contenedor-botones-izquierda"  className="row">
                    <div className="cuadro-con-imagen header-boton" onClick={()=>botonMostrarMasProyectos()}><img src={masproyectos} alt="Más proyectos"/></div>
                    {props.state.Pagina_Home &&
                    <div className="cuadro-con-imagen header-boton"><img src={home} alt="Home"/></div>
                    }
                    {!props.state.Pagina_Home &&
                    <div className="cuadro-con-imagen header-boton" onClick={()=>props.AbrirHome()}><img src={home} alt="Home"/></div>
                    }
                    <div id="boton-mostrar-tableros" className="cuadro-con-imagen header-boton tableros" onClick={()=>botonMostrarTableros()}><img src={tablero} alt="Tablero"/></div>
                    {!props.state.Buscando &&
                    <div className="col-2 col-lg col-md col-sm header-boton busqueda" onClick={()=>props.AbrirBusqueda()}><img src={lupa} alt="Lupa"/></div>
                    }
                    {props.state.Buscando &&
                    <div className="col-2 col-lg col-md col-sm header-boton buscar">
                        <input 
                        autoFocus
                        type="text"
                        onKeyUp={(e)=>hacerBusqueda(e)}
                        onBlur={()=>props.CerrarBusqueda()}/>
                    </div>
                    }
                </div>
            </div>
            <div className="col-2 col-lg-6 col-md-4 col-sm-4">
                <a href="https://trello.com/" target="_blank">Trello</a>
            </div>
            <div className="col-5 col-sm-4 col-md-4  col-lg-3">
                <div id="contenedor-menu-añadir" className="row">
                    <div className="ml-auto header-boton" onClick={()=>botonMenuAñadir()}><img src={mas} alt="Añadir"/></div>
                    <div className=" header-boton" onClick={()=>botonInformacion()}><img src={informacion} alt="Informacion"/></div>
                    <div className=" header-boton" onClick={()=>botonNotificaciones()}><img src={campana} alt="Notificiaciones"/></div>
                    <div className=" perfil header-boton"><img src={perfil} alt="Perfil"/></div>
                </div>
            </div>
            {props.state.Mas_Proyectos &&
            <MasProyectos/>
            }
            {props.state.Mostrando_Tableros &&
            <MostrandoTableros/>
            }
            {props.state.Creando_Tablero &&
            <CrearTablero/>
            }
            {props.state.Tablero_Recien_Creado &&
            <AceptarTableroNuevo/>
            }
            {props.state.Mostrar_Resultados_Busqueda &&
            <Busqueda/>
            }
            {props.state.Menu_Añadir &&
            <MenuAñadir/>
            }
            {props.state.Mostrando_Informacion &&  
            <MostrandoInformacion/>
            }
            {props.state.Mostrando_Notificaciones &&  
            <Notificaciones/>
            }
        </header>
    )
}

const traerEstado = (state) =>({
    state: state,
});

const operarTarjetas = (dispatch) => ({
    AbrirMasProyectos: cambiarMasProyectos(dispatch),
    AbrirHome: cambiarPaginaHome(dispatch),
    AbrirTableros: cambiarMostrandoTableros(dispatch),
    AbrirBusqueda: cambiarBuscando(dispatch),
    CerrarBusqueda: cambiarBuscando(dispatch),
    NoSeEncuentrarCoincidenciasEnLaBusqueda: cambiarBusquedaConResultadoFalse(dispatch),
    BorrarBusquedaAnterior: borrarBusqueda(dispatch),
    MostrarResultadoDeBusqueda: cambiarMostrarResultadosBusquedaTrue(dispatch),
    CriterioDeBusqueda: añadirCriterioBusqueda(dispatch),
    TableroEncontrado: añadirTableroBusqueda(dispatch),
    SiSeEncuentranCoincidenciasEnLaBusqueda: cambiarBusquedaConResultadoTrue(dispatch),
    ListaEncontrada: añadirListaBusqueda(dispatch),
    TarjetaEncontrada: añadirTarjetaBusqueda(dispatch),
    AbrirMenuAñadir: cambiarMenuAñadir(dispatch),
    AbrirMenuInformacion: cambiarMostrandoInformacion(dispatch),
    AbrirMenuNotificaciones: cambiarMostrandoNotificaciones(dispatch),
})

const connected = connect (traerEstado,operarTarjetas)(Header);

export default connected;