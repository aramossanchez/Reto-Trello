import React from 'react';
import {connect} from 'react-redux';
import Listas from './components/Listas/Listas.jsx';
import Header from './components/Header/Header.jsx';
import Header2 from './components/Header2/Header2.jsx';
import Home from './components/Home/Home.jsx';
import './App.scss';


function App(props) {

  React.useEffect(()=>{
    localStorage.setItem('state',JSON.stringify(props.state));
  },[props.state]);

  const clickParaCerrarMenus = (e) => {
    if(e.target.parentElement.id!=="lista-de-tableros"){
      props.cambiarMostrandoTablerosFalse();
    }
    if(e.target.parentElement.id!=="contenedor-tipo-tablero"){
      props.cambiarTipoTableroFalse();
    }
    if(e.target.parentElement.id!=="contenedor-opciones-lista"){
      props.state.Listas.map((lista)=>{
        if(lista.opciones===true){
          props.opcionesDeListaAFalse(lista.id)
        }
      })
    }
    if(e.target.parentElement.id!=="contenedor-copiar-lista"){
      props.state.Listas.map((lista)=>{
        if(lista.copiandoLista===true){
          props.copiandoListaFalse(lista.id)
        }
      })
    }
    if(e.target.parentElement.id!=="contenedor-mover-lista"){
      props.state.Listas.map((lista)=>{
        if(lista.moviendoLista===true){
          props.cambiarMoviendoListaFalse(lista.id)
        }
      })
    }
    if(e.target.parentElement.id!=="contenedor-mover-tarjetas"){
      props.state.Listas.map((lista)=>{
        if(lista.moviendoTarjetas===true){
          props.cambiarMoviendoTarjetasFalse(lista.id)
        }
      })
    }
    if(e.target.id==="contenedor-editando"){
      props.state.Tarjetas.map((tarjeta)=>{
        if(tarjeta.editando){
          props.editandoTarjeta(tarjeta.id)
        }
      })
    }
    if(e.target.parentElement.id!=="contenedor-crear-lista"){
      props.añadiendoListaFalse();
    }
    if(e.target.id==="boton-opciones-lista"){
      props.state.Listas.map((lista)=>{
        if(lista.añadiendo){
          props.añadiendoTarjetaFalse(lista.id)
        }
      })
    }
    if(e.target.parentElement.id!=="contenedor-lista"){
      props.state.Listas.map((lista)=>{
        if(lista.añadiendo){
          props.añadiendoTarjetaFalse(lista.id)
        }
      })
    }
    if(e.target.parentElement.id!=="mas-proyectos"){
      props.cambiarMasProyectosFalse();
    }
    if(e.target.parentElement.id!=="contenedor-menu-añadir"){
      props.cambiarMenuAñadirFalse();
      props.cambiarMenuAñadirTarjetaFalse();
    }
    if(e.target.parentElement.id!=="contenedor-informacion"){
      props.cambiarMostrandoInformacionFalse();
    }
    if(e.target.parentElement.id!=="contenedor-notificaciones"){
      props.cambiarMostrandoNotificacionesFalse();
    }    
  }

  return (
    <div onClick={(e)=>clickParaCerrarMenus(e)} className={props.state.Tableros.map((tablero)=>{if(tablero.id===props.state.Tablero_Activo){return " " + tablero.fondo + " "}}) + " App"}>
      <div className="contenedor-fijar-header">
        <div className="container-fluid">
          <Header/>
        </div>
        {!props.state.Pagina_Home && 
        <Header2/>
        }
      </div>
      {!props.state.Pagina_Home && 
      <Listas />
      }
      {props.state.Pagina_Home &&
      <Home />
      }
    </div>
  );
}

const traerEstado = (state) =>({
  state: state,
});


const operarTarjetas = (dispatch) => ({
  cambiarMostrandoTablerosFalse:()=>{
      dispatch({
          type:'CAMBIAR_MOSTRANDO_TABLEROS_FALSE',
      })
  },
  cambiarTipoTableroFalse: () => {
      dispatch({
          type:'CAMBIAR_TIPO_TABLERO_A_FALSE'
      })
  },
    opcionesDeListaAFalse:(idLista)=>{
        dispatch({
            type:'OPCIONES_DE_LISTA_A_FALSE',
            idLista:idLista,
        })
    },
    copiandoListaFalse:(id)=>{
        dispatch({
            type:'CAMBIANDO_COPIANDO_LISTA_A_FALSE',
            id:id,
        })
    },
    cambiarMoviendoListaFalse:(idLista)=>{
        dispatch({
            type:'CAMBIAR_MOVIENDO_LISTA_A_FALSE',
            idLista:idLista,
        })
    },
    cambiarMoviendoTarjetasFalse:(idLista)=>{
        dispatch({
            type:'CAMBIAR_MOVIENDO_TARJETAS_A_FALSE',
            idLista:idLista,
        })
    },
    editandoTarjeta:(id)=>{
        dispatch({
            type:'CAMBIAR_EDITANDO_TARJETA',
            id:id,
        })
    },
    añadiendoListaFalse:() =>{
        dispatch({
            type:'AÑADIENDO_LISTA_FALSE'
        })
    },
    añadiendoTarjetaFalse:(id) =>{
        dispatch({
            type:'AÑADIENDO_TARJETA_A_FALSE',
            id:id
        })
    },
    cambiarMasProyectosFalse:()=>{
      dispatch({
          type:'CAMBIAR_MAS_PROYECTOS_FALSE',
      })
    },
    cambiarMenuAñadirFalse:()=>{
      dispatch({
          type:'CAMBIAR_MENU_AÑADIR_FALSE',
      })
    },
    cambiarMenuAñadirTarjetaFalse:()=>{
      dispatch({
          type:'CAMBIAR_MENU_AÑADIR_TARJETA_FALSE',
      })
    },
    cambiarMostrandoInformacionFalse: () => {
        dispatch({
            type: 'CAMBIAR_MOSTRANDO_INFORMACION_FALSE',
        })
    },
    cambiarMostrandoNotificacionesFalse: () => {
        dispatch({
            type: 'CAMBIAR_MOSTRANDO_NOTIFICACIONES_FALSE',
        })
    },
    
})

const connected = connect (traerEstado,operarTarjetas)(App);

export default connected;
