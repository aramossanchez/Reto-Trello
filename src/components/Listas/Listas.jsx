import React from 'react';
import {connect} from 'react-redux';
import './Listas.scss';
import ListadoDeTarjetas from './ListadoDeTarjetas/ListadoDeTarjetas.jsx';
import TituloLista from './TituloLista/TituloLista.jsx';
import AñadirTarjeta from './AñadirTarjeta/AñadirTarjeta.jsx';
import AñadirLista from './AñadirLista/AñadirLista.jsx';

function Listas(props){

    React.useEffect(()=>{
        console.log("estoy cambiando las listas");
    },[])

    const estiloLista = {
        backgroundColor:""
    }

    return(
        <div className="contenedor">
            {props.state.Listas.map((lista) => {
                if(lista.tablero===props.state.Tablero_Activo){
                    return(
                        <div className="lista" onClick={console.log(window.outerHeight)} style={estiloLista}>
                            <TituloLista lista={lista}/>
                            <ListadoDeTarjetas lista={lista}/>
                            <AñadirTarjeta lista={lista}/>
                        </div>
                    )
                }
            })}
            <AñadirLista/>
        </div>
    )
}

const traerEstado = (state) =>({
    state: state,
});

const connected = connect (traerEstado,null)(Listas);

export default connected;