import './NombreDeTablero.scss';
import React from 'react';
import {connect} from 'react-redux';
import {cambiandoNombreTablero, cambiarNombreTablero} from '../../../redux/actions';

function NombreDeTablero (props){

    const cambiarTablero = (e, id) =>{
        if(e.keyCode === 13 && e.target.value.trim()){
            props.CerrarCambiarNombreDeTablero();
            props.CambiarElNombreDeTablero(id, e.target.value.trim());
        }
    }

    const cambiarTableroPerdiendoFoco = (e, id) =>{
        if(e.target.value.trim()){
            props.CerrarCambiarNombreDeTablero();
            props.CambiarElNombreDeTablero(id, e.target.value.trim());
        }
    }

    return(
        <div className="contenedor-nombre-tablero" onClick={()=>props.AbrirCambiarNombreDeTablero()}>
            {props.state.Tableros.map((tablero)=>{
                if(tablero.id===props.state.Tablero_Activo){
                    return(
                        <div>
                            {!props.state.Cambiando_Nombre_Tablero &&
                            <span>
                                {tablero.nombre}
                            </span>
                            }
                            {props.state.Cambiando_Nombre_Tablero &&
                            <input 
                            type="text" 
                            autoFocus
                            defaultValue={tablero.nombre}
                            onKeyUp={(e)=>cambiarTablero(e,tablero.id)}
                            onBlur={(e)=>cambiarTableroPerdiendoFoco(e,tablero.id)}/>
                            }
                        </div>
                    )
                }
            })}
        </div>
    )
}


const traerEstado = (state) =>({
    state: state,
});

const operarTarjetas = (dispatch) => ({
    AbrirCambiarNombreDeTablero: cambiandoNombreTablero(dispatch),
    CerrarCambiarNombreDeTablero: cambiandoNombreTablero(dispatch),
    CambiarElNombreDeTablero: cambiarNombreTablero(dispatch),
});
const connected = connect (traerEstado,operarTarjetas)(NombreDeTablero);

export default connected;