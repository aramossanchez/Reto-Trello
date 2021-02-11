import React, { useRef } from 'react';
import {connect} from 'react-redux';
import './OpcionesDeTarjeta.scss';
import TituloTarjeta from './TituloTarjeta/TituloTarjeta.jsx';
import {corregirPosicionTarjetas, cambiarTarjetaDeLista, editarDescripcion, cambiarEditandoDescripcion, cambiarPosicion, ordenarTarjetas,
    cambiarColorTarjeta} from '../../../../redux/actions';

function OpcionesDeTarjeta(props){

    const CambiarDeLista = (nombreListaElegida,idTarjeta,listaActual) => {
        props.state.Listas.map((lista)=>{
            if (lista.nombre===nombreListaElegida){
                props.MoverTarjetaAOtraLista(idTarjeta,lista.id);
                props.CorregirPosicionesDeTarjetas(lista.id);
            }
        });
        props.CorregirPosicionesDeTarjetas(listaActual);
    }

    const CambiarPosicionDeTarjeta = (posicionActual, posicionDeseada, idLista, idTarjeta) => {
        props.MoverTarjetaALaPosicionDeseada(posicionActual, posicionDeseada, idLista, idTarjeta);
        props.ReordenarTarjetasDeLaLista(idLista);
    }

    const perderFocoDescripcion = (e,id) => {
        props.CambiarDescripcionDeTarjeta(e,id);
        props.CerrarCuadroDeDescripcion(id);
    }

    return(
        <div id="contenedor-editando" className="contenedor-editando">
            <div className="opciones" style={{backgroundColor:props.tarjeta.color}}>
                <TituloTarjeta tarjeta={props.tarjeta}/>
                <hr/>
                <span className="opciones-tarjetas-span">🔄 Mover tarjeta</span>
                <div className="select-juntos">
                    En la lista <select 
                    className="select listado-listas" 
                    onChange={(e)=>CambiarDeLista(e.target.value,props.tarjeta.id,props.lista.id)}>
                    {props.state.Listas.map((lista)=>{
                        if(lista.tablero===props.state.Tablero_Activo){
                            return(
                                <option 
                                disabled={(lista.id===props.tarjeta.idLista)?true:false} 
                                selected={(lista.id===props.tarjeta.idLista)?true:false}>
                                    {lista.nombre}
                                </option>
                            )
                        }
                    })}
                    </select> Posicion <select 
                    className="select" 
                    onChange={(e)=>CambiarPosicionDeTarjeta(props.tarjeta.posicion, e.target.value, props.tarjeta.idLista, props.tarjeta.id)}>
                    {props.state.Tarjetas.map((card)=>{
                        if(props.lista.id===card.idLista){
                            return <option 
                                disabled={(props.tarjeta.posicion===card.posicion)?true:false}
                                selected={(props.tarjeta.posicion===card.posicion)?true:false}>
                                    {card.posicion}
                                </option>
                        }
                    })}
                    </select>
                </div>
                <hr/>
                <span className="opciones-tarjetas-span">🗨️ Descripcion</span>
                {!props.tarjeta.editandoDescripcion &&
                <div 
                className="descripcion-div"
                onClick={()=>props.AbrirCuadroDeDescripcion(props.tarjeta.id)}>
                {(props.tarjeta.descripcion==="")?"Añadir una descripcion mas detallada...": (props.tarjeta.descripcion)}
                </div>
                }
                {props.tarjeta.editandoDescripcion &&
                <div>
                    <textarea
                    autoFocus
                    className="descripcion"
                    onBlur={(e)=>perderFocoDescripcion(e.target.value.trim(),props.tarjeta.id)}>{(props.tarjeta.descripcion)}
                    </textarea>
                    <button className="añadir" onClick={()=>props.CerrarCuadroDeDescripcion(props.tarjeta.id)}>Guardar</button>
                </div>
                }
                <hr/>
                <span className="opciones-tarjetas-span">🌈 Color de fondo</span>
                <div>
                    <button onClick={()=>props.CambiarElColorDeLaTarjeta(props.tarjeta.id,"yellow")} className="boton-color boton-amarillo">🔖</button>
                    <button onClick={()=>props.CambiarElColorDeLaTarjeta(props.tarjeta.id,"orange")} className="boton-color boton-naranja">🔖</button>
                    <button onClick={()=>props.CambiarElColorDeLaTarjeta(props.tarjeta.id,"Tomato")} className="boton-color boton-rojo">🔖</button>
                    <button onClick={()=>props.CambiarElColorDeLaTarjeta(props.tarjeta.id,"greenyellow")} className="boton-color boton-verde">🔖</button>
                    <button onClick={()=>props.CambiarElColorDeLaTarjeta(props.tarjeta.id,"DeepSkyBlue")} className="boton-color boton-azul">🔖</button>
                    <button onClick={()=>props.CambiarElColorDeLaTarjeta(props.tarjeta.id,"MediumPurple")} className="boton-color boton-morado">🔖</button>
                    <button onClick={()=>props.CambiarElColorDeLaTarjeta(props.tarjeta.id,"black")} className="boton-color boton-negro">🔖</button>
                    <button onClick={()=>props.CambiarElColorDeLaTarjeta(props.tarjeta.id,"")} className="boton-color boton-ninguno">🔖</button>
                </div>
            </div>
        </div>
    )
}

const traerEstado = (state) =>({
    state: state,
});

const operarTarjetas = (dispatch) => ({
    CorregirPosicionesDeTarjetas: corregirPosicionTarjetas(dispatch),
    MoverTarjetaAOtraLista: cambiarTarjetaDeLista(dispatch),
    CambiarDescripcionDeTarjeta: editarDescripcion(dispatch),
    CerrarCuadroDeDescripcion: cambiarEditandoDescripcion(dispatch),
    AbrirCuadroDeDescripcion: cambiarEditandoDescripcion(dispatch),
    MoverTarjetaALaPosicionDeseada: cambiarPosicion(dispatch),
    ReordenarTarjetasDeLaLista:ordenarTarjetas(dispatch),
    CambiarElColorDeLaTarjeta: cambiarColorTarjeta(dispatch),

})

const connected = connect (traerEstado,operarTarjetas)(OpcionesDeTarjeta);

export default connected;