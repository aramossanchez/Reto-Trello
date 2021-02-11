import './Plantilla.scss';
import React from 'react';
import {connect} from 'react-redux';
import flechaabajo from '../../../images/flecha-abajo.png';
import {borrarListasDeTableroActual, crearTableroSemana, crearTableroProyecto, cambiarTipoTablero} from '../../../redux/actions';

function Plantilla (props){

    const crearProyectoYBorrarResto = () => {
        props.BorrarListasDelTablero(props.state.Tablero_Activo);
        props.PlantillaProyecto(props.state.Tablero_Activo);
        props.CerrarListadoDePlantillas()
    }

    const crearSemanaYBorrarResto = () => {
        props.BorrarListasDelTablero(props.state.Tablero_Activo);
        props.PlantillaSemana(props.state.Tablero_Activo);
        props.CerrarListadoDePlantillas()
    }    

    const botonPlantillaVacia = () => {
        props.BorrarListasDelTablero(props.state.Tablero_Activo);
        props.CerrarListadoDePlantillas();
    }

    const botonMostrarTiposTableros = () =>{
        if(!props.state.Tipo_Tablero){
            setTimeout(() => {
                props.AbrirListadoDePlantillas()
            }, 25);
        }
    }

    return(
            <div>
                <span className="seleccionar-tablero" onClick={()=>botonMostrarTiposTableros()}>Plantillas <img src={flechaabajo} alt="⬇️"/></span>
                {props.state.Tipo_Tablero &&
                    <div id="contenedor-tipo-tablero" className="opciones-tablero">
                        <span className="alerta-opciones-tablero">⚠️SOBREESCRIBIRÁ TODO ESTE TABLERO⚠️<br/></span>
                        <span onClick={()=>crearProyectoYBorrarResto()}>📋 PROYECTO<br/> Tablero con 3 listas: "Lista de tareas", "En proceso" y "Hecho" <br/></span>
                        <span onClick={()=>crearSemanaYBorrarResto()}>📅 SEMANA<br/> Tablero con 7 listas, una para cada dia de la semana <br/></span>
                        <span onClick={()=>botonPlantillaVacia()}>⚪ VACIO<br/> Tablero vacío, con 0 listas <br/></span>
                    </div>
                }
            </div>
    )
}


const traerEstado = (state) =>({
    state: state,
});

const operarTarjetas = (dispatch) => ({
    BorrarListasDelTablero: borrarListasDeTableroActual(dispatch),
    PlantillaSemana: crearTableroSemana(dispatch),
    PlantillaProyecto: crearTableroProyecto(dispatch),
    AbrirListadoDePlantillas: cambiarTipoTablero(dispatch),
    CerrarListadoDePlantillas: cambiarTipoTablero(dispatch),
})


const connected = connect (traerEstado,operarTarjetas)(Plantilla);

export default connected;