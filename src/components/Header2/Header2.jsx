import './Header2.scss';
import React from 'react';
import {connect} from 'react-redux';
import Plantilla from './Plantilla/Plantilla.jsx';
import Menu from './Menu/Menu.jsx';
import NombreDeTablero from './NombreDeTablero/NombreDeTablero.jsx';

function Header2 (props){
    
    return(
        <div className="contenedor-menu">
            <Plantilla/>
            <NombreDeTablero/>
            <Menu/>
        </div>
    )
}


const traerEstado = (state) =>({
    state: state,
});


const connected = connect (traerEstado,null)(Header2);

export default connected;