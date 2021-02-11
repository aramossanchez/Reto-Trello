import './Menu.scss';
import React from 'react';
import {connect} from 'react-redux';
import noche from '../../../images/noche.jpg';
import anochecer from '../../../images/anochecer.jpg';
import playa from '../../../images/playa.jpg';
import yasuo from '../../../images/yasuo.jpg';
import ciudad from '../../../images/ciudad.jpg';
import campo from '../../../images/campo.jpg';
import nevado from '../../../images/nevado.jpg';
import puerto from '../../../images/puerto.jpg';
import circuloneon from '../../../images/circuloneon.jpg';
import kamehouse from '../../../images/kamehouse.png';
import {cambiarViendoMenu, cambiarFondo, quitarFondo, cambiandoFondo} from '../../../redux/actions';

function Menu (props){

    const estiloMenu = {
        transform: props.state.Viendo_Menu===true?"scaleX(1)":"scaleX(0)",
        right:props.state.Viendo_Menu===true?"-7px":"-450px",
    }

    const estiloMostrarMenu = {
        visibility: props.state.Viendo_Menu===true?"hidden":"visible"
    }

    const estiloFondosPagina = {
        transform: props.state.Cambiando_Fondo_Pagina===true?"scaley(1)":"scaley(0)",
        height: props.state.Cambiando_Fondo_Pagina===true?"35em":"1px",
    }

    return(
            <div>
                <div>
                    <span className="mostrar-menu" onClick={()=>props.AbrirMenu()} style={estiloMostrarMenu}>Mostrar menú</span>
                </div>
                <div 
                className="menu" 
                style={estiloMenu}>
                    <div className="titulo-menu">
                        <span className="nombre-menu">Menú</span>
                        <span onClick={()=>props.CerrarMenu()} className="cerrar-menu">✖️</span>
                    </div>
                    <hr></hr>
                    <div className="cambiar-fondo">
                        <span className="nombre-cambiar-fondo" onClick={()=>props.AbrirOCerrarListadoDeFondosDisponibles()}>Cambiar fondo</span>
                        <div className="fondos-pagina" style={estiloFondosPagina}>
                            <span onClick={()=>props.CambiarFondoDeTablero("noche")}><img src={noche} alt="Fondo noche"/></span>
                            <span onClick={()=>props.CambiarFondoDeTablero("anochecer")}><img src={anochecer} alt="Fondo anochecer"/></span>
                            <span onClick={()=>props.CambiarFondoDeTablero("playa")}><img src={playa} alt="Fondo playa"/></span>
                            <span onClick={()=>props.CambiarFondoDeTablero("yasuo")}><img src={yasuo} alt="Yasuo"/></span>
                            <span onClick={()=>props.CambiarFondoDeTablero("campo")}><img src={campo} alt="Fondo campo"/></span>
                            <span onClick={()=>props.CambiarFondoDeTablero("ciudad")}><img src={ciudad} alt="Fondo ciudad"/></span>
                            <span onClick={()=>props.CambiarFondoDeTablero("nevado")}><img src={nevado} alt="Fondo Nevado"/></span>
                            <span onClick={()=>props.CambiarFondoDeTablero("puerto")}><img src={puerto} alt="Fondo Puerto"/></span>
                            <span onClick={()=>props.CambiarFondoDeTablero("circuloneon")}><img src={circuloneon} alt="Circulo Neón"/></span>
                            <span onClick={()=>props.CambiarFondoDeTablero("kamehouse")}><img src={kamehouse} alt="Kame House"/></span>
                            {props.state.Tableros.map((tablero)=>{
                                if(tablero.id===props.state.Tablero_Activo  && tablero.fondo!==""){
                                    return <div onClick={()=>props.QuitarImagenDeFondoDeTablero(tablero.id)} className="quitar-fondo">❌ QUITAR FONDO ❌</div>
                                }
                            })}
                        </div>
                        <hr></hr>
                    </div>
                </div>
            </div>
    )
}


const traerEstado = (state) =>({
    state: state,
});

const operarTarjetas = (dispatch) => ({
    AbrirMenu: cambiarViendoMenu(dispatch),
    CerrarMenu: cambiarViendoMenu(dispatch),
    CambiarFondoDeTablero: cambiarFondo(dispatch),
    QuitarImagenDeFondoDeTablero: quitarFondo(dispatch),
    AbrirOCerrarListadoDeFondosDisponibles: cambiandoFondo(dispatch),
})


const connected = connect (traerEstado,operarTarjetas)(Menu);

export default connected;