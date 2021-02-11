import './MostrandoInformacion.scss';
import React, { useRef } from 'react';
import {connect} from 'react-redux';
import {cambiarMostrandoInformacionFalse} from '../../../redux/actions';

function MostrandoInformacion (props){

    return( 
        <div id="contenedor-informacion" className="informacion">
            <div id="contenedor-informacion" className="titulo-informacion-general">
                <span>INFORMACIÓN</span>
                <span className="cerrar-mover-tarjetas" onClick={()=>props.CerrarInformacion()}>✖️</span>
            </div>
            <div className="titulo-informacion">TABLEROS</div>                   
            <div className="descripcion-informacion">Los tableros es la forma básica en la que organizamos toda la información en nuestra aplicación.
            <br/>
            Podemos tener varios tableros, crear más tableros, eliminarlos, cambiar su nombre...
            <br/>
            Los tableros pueden tener listas.</div>
            <div className="titulo-informacion">LISTAS</div>
            <div className="descripcion-informacion">Las listas son la manera en la que organizar la información dentro de cada tablero. 
             <br/>
            Podemos tener varias listas, cambiar su nombre, copiarlas, mover su contenido a otra lista, borrarlas, cambiarlas de posición...
            <br/>
            Las listas pueden tener tarjetas</div>
            <div className="titulo-informacion">TARJETAS</div>
            <div className="descripcion-informacion">Las tarjetas son la manera en la que guardaremos los datos o la informacion en la aplicación. 
            <br/>
            Las tarjetas tendrán un titulo y podrán tener un color y una descripción (toda esta información de cada tarjeta la podremos cambiar cuando queramos).
            <br/>
            Podemos tener varias tarjetas, y pueden ser borradas, cambiadas de lista, cambiadas de posición...</div>
        </div>
    )
}

const traerEstado = (state) =>({
    state: state,
});

const operarTarjetas = (dispatch) => ({
    CerrarInformacion: cambiarMostrandoInformacionFalse(dispatch),
})

const connected = connect (traerEstado,operarTarjetas)(MostrandoInformacion);

export default connected;