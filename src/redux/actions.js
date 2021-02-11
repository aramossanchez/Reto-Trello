export const cambiarMasProyectos = (dispatch) => () =>{
    dispatch({
        type:'CAMBIAR_MAS_PROYECTOS',
    })
};

export const cambiarMasProyectosFalse = (dispatch) => () => {
    dispatch({
        type:'CAMBIAR_MAS_PROYECTOS_FALSE',
    })
};

export const cambiarPaginaHome = (dispatch) => () => {
    dispatch({
        type: 'CAMBIAR_PAGINA_HOME',
    })
};

export const cambiarMostrandoTableros = (dispatch) => () => {
    dispatch({
        type:'CAMBIAR_MOSTRANDO_TABLEROS',
    })
};

export const cambiarTableroRecienCreado = (dispatch) => () => {
    dispatch({
        type:'CAMBIAR_TABLERO_RECIEN_CREADO',
    })
};

export const definirTableroActivo = (dispatch) => (id) => {
    dispatch({
        type:'DEFINIR_TABLERO_ACTIVO',
        id:id
    })
};

export const cambiarBuscando = (dispatch) => () => {
    dispatch({
        type: 'CAMBIAR_BUSCANDO',
    })
};

export const cambiarBusquedaConResultadoFalse = (dispatch) => () => {
    dispatch({
        type: 'BUSQUEDA_CON_RESULTADO_FALSE',
    })
};

export const borrarBusqueda = (dispatch) => () => {
    dispatch({
        type: 'BORRAR_BUSQUEDA',
    })
};

export const cambiarMostrarResultadosBusqueda = (dispatch) => () => {
    dispatch({
        type: 'CAMBIAR_MOSTRAR_RESULTADOS_BUSQUEDA',
    })
};

export const cambiarMostrarResultadosBusquedaTrue = (dispatch) => () => {
    dispatch({
        type: 'CAMBIAR_MOSTRAR_RESULTADOS_BUSQUEDA_TRUE',
    })
};

export const añadirCriterioBusqueda = (dispatch) => (criterio) => {
    dispatch({
        type: 'AÑADIR_CRITERIO_DE_BUSQUEDA',
        criterio:criterio
    })
};

export const añadirTableroBusqueda = (dispatch) => (nombre,tablero) => {
    dispatch({
        type: 'AÑADIR_TABLERO_A_RESULTADO_BUSQUEDA',
        tipo: "tablero",
        nombre: nombre,
        tablero: tablero
    })
};

export const cambiarBusquedaConResultadoTrue = (dispatch) => () => {
    dispatch({
        type: 'BUSQUEDA_CON_RESULTADO_TRUE',
    })
};

export const añadirListaBusqueda = (dispatch) => (nombre,idTablero) => {
    dispatch({
        type: 'AÑADIR_LISTA_A_RESULTADO_BUSQUEDA',
        tipo: "lista",
        nombre: nombre,
        idTablero:idTablero
    })
};

export const añadirTarjetaBusqueda = (dispatch) => (nombre,idLista) => {
    dispatch({
        type: 'AÑADIR_TARJETA_A_RESULTADO_BUSQUEDA',
        tipo: "tarjeta",
        nombre: nombre,
        idLista:idLista,
    })
};

export const cambiarMenuAñadir = (dispatch) => () => {
    dispatch({
        type:'CAMBIAR_MENU_AÑADIR',
    })
};

export const cambiarMostrandoInformacion = (dispatch) => () => {
    dispatch({
        type: 'CAMBIAR_MOSTRANDO_INFORMACION',
    })
};

export const cambiarMostrandoNotificaciones = (dispatch) => () => {
    dispatch({
        type: 'CAMBIAR_MOSTRANDO_NOTIFICACIONES',
    })
};

export const cambiarPaginaHomeFalse = (dispatch) => () => {
    dispatch({
        type: 'CAMBIAR_PAGINA_HOME_FALSE',
    })
};

export const crearTablero = (dispatch) => (nombre) => {
    dispatch({
        type:'CREAR_TABLERO',
        nombre:nombre,
        id:Math.random(),
    })
};

export const creandoTablero = (dispatch) => () => {
    dispatch({
        type:'CREANDO_TABLERO',
    })
};

export const cambiarMenuAñadirFalse = (dispatch) => () => {
    dispatch({
        type:'CAMBIAR_MENU_AÑADIR_FALSE',
    })
};

export const cambiarMenuAñadirTarjeta = (dispatch) => () => {
    dispatch({
        type:'CAMBIAR_MENU_AÑADIR_TARJETA',
    })
};

export const añadiendoLista = (dispatch) => () => {
    dispatch({
        type:'AÑADIENDO_LISTA'
    })
};

export const añadiendoTarjeta = (dispatch) => (id) => {
    dispatch({
        type: 'AÑADIENDO_TARJETA',
        id:id,
    })
};

export const cambiarMostrandoInformacionFalse = (dispatch) => () => {
    dispatch({
        type: 'CAMBIAR_MOSTRANDO_INFORMACION_FALSE',
    })
};

export const cambiarMostrandoTablerosFalse = (dispatch) => () => {
    dispatch({
        type:'CAMBIAR_MOSTRANDO_TABLEROS_FALSE',
    })
};

export const borrarTablero = (dispatch) => (id) => {
    dispatch({
        type:'BORRAR_TABLERO',
        id:id,
    })
};

export const cambiarMostrandoNotificacionesFalse = (dispatch) => () => {
    dispatch({
        type: 'CAMBIAR_MOSTRANDO_NOTIFICACIONES_FALSE',
    })
};

export const cambiarViendoMenu = (dispatch) => () => {
    dispatch({
        type: 'CAMBIAR_VIENDO_MENU',
    })
};

export const cambiarFondo = (dispatch) => (imagen) => {
    dispatch({
        type: 'CAMBIAR_FONDO',
        imagen:imagen,
    })
};

export const quitarFondo = (dispatch) => (tablero) => {
    dispatch({
        type: 'QUITAR_FONDO',
        tablero:tablero,
    })
};

export const cambiandoFondo = (dispatch) => () => {
    dispatch({
        type: 'CAMBIANDO_FONDO_DE_PAGINA',
    })
};

export const cambiandoNombreTablero = (dispatch) => () => {
    dispatch({
        type:'CAMBIANDO_NOMBRE_DE_TABLERO',
    })
};

export const cambiarNombreTablero = (dispatch) => (id,nombre) => {
    dispatch({
        type:'CAMBIAR_NOMBRE_TABLERO',
        id:id,
        nombre:nombre,
    })
};

export const borrarListasDeTableroActual = (dispatch) => (tablero) => {
    dispatch({
        type:'BORRAR_LISTAS_DE_TABLERO_ACTUAL',
        tablero:tablero,
    })
};

export const crearTableroSemana = (dispatch) => (tablero) => {
    dispatch({
        type:'CREAR_TABLERO_SEMANA',
        id1:Math.random(),
        id2:Math.random(),
        id3:Math.random(),
        id4:Math.random(),
        id5:Math.random(),
        id6:Math.random(),
        id7:Math.random(),
        tablero:tablero,
    })
};

export const crearTableroProyecto = (dispatch) => (tablero) => {
    dispatch({
        type:'CREAR_TABLERO_PROYECTO',
        id1:Math.random(),
        id2:Math.random(),
        id3:Math.random(),
        tablero:tablero,
    })
};

export const cambiarTipoTablero = (dispatch) => () => {
    dispatch({
        type:'CAMBIAR_TIPO_TABLERO'
    })
};

export const añadirLista = (dispatch) => (lista) => {
    dispatch({
        type:'AÑADIR_LISTA',
        nombre: lista,
        id:Date.now(),
    })
};

export const cerrandoRestoDeAñadiendoTarjetas = (dispatch) => (id) => {
    dispatch({
        type: 'AÑADIENDO_TARJETA_A_FALSE_EN_EL_RESTO_DE_LISTAS',
        id:id,
    })
};

export const añadirTarjeta = (dispatch) => (titulo, idLista, tablero) => {
    dispatch({
        type: 'AÑADIR_TARJETA',
        titulo: titulo,
        idLista:idLista,
        descripcion:"",
        id:Date.now(),
        tablero:tablero,
    })
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////NO ESTÁ EN USO POR EL MOMENTO //////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const añadiendoTarjetaFalse = (dispatch) => (id) => {
    dispatch({
        type: 'AÑADIENDO_TARJETA_A_FALSE',
        id:id,
    })
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


export const corregirPosicionTarjetas = (dispatch) => (idLista) => {
    dispatch({
        type:'CORREGIR_POSICIONES_DE_TARJETAS',
        idLista:idLista,
    })
};

export const cambiarTarjetaDeLista = (dispatch) => (idTarjeta, idListaCambiada) => {
    dispatch({
        type:'CAMBIAR_TARJETA_DE_LISTA',
        id:idTarjeta,
        idLista:idListaCambiada,
    })
};

export const editarDescripcion = (dispatch) => (descripcion, id) => {
    dispatch({
        type:'EDITAR_DESCRIPCION',
        descripcion:descripcion,
        id:id,
    })
};

export const cambiarEditandoDescripcion = (dispatch) => (id) => {
    dispatch({
        type:'CAMBIAR_EDITANDO_DESCRIPCION',
        id:id,
    })
};

export const cambiarPosicion = (dispatch) => (posicionActual, posicionDeseada, idLista, idTarjeta) => {
    dispatch({
        type:'CAMBIAR_POSICION',
        posicionActual:posicionActual,
        posicionDeseada: posicionDeseada,
        idLista:idLista,
        idTarjeta:idTarjeta,
    })
};

export const ordenarTarjetas = (dispatch) => (idLista) => {
    dispatch({
        type:'ORDENAR_TARJETAS',
        idLista:idLista,
    })
};

export const cambiarColorTarjeta = (dispatch) => (id,color) => {
    dispatch({
        type:'CAMBIAR_COLOR_TARJETA',
        id:id,
        color:color,
    })
};

export const editandoTarjeta = (dispatch) => (id) => {
    dispatch({
        type:'CAMBIAR_EDITANDO_TARJETA',
        id:id,
    })
};

export const cambiandoTituloTarjeta = (dispatch) => (id) => {
    dispatch({
        type:'CAMBIANDO_TITULO_TARJETA',
        id:id,
    })
};

export const cambiandoTituloTarjetaFalse = (dispatch) => (id) => {
    dispatch({
        type:'CAMBIANDO_TITULO_TARJETA_A_FALSE',
        id:id,
    })
};

export const cambiarTituloTarjeta = (dispatch) => (id,titulo) => {
    dispatch({
        type:'CAMBIAR_TITULO_TARJETA',
        id:id,
        titulo:titulo
    })
};

export const borrarTarjeta = (dispatch) => (idLista, id) => {
    dispatch({
        type:'BORRAR_TARJETA',
        idLista:idLista,
        id:id,
    })
};

export const cambiandoListaFalse = (dispatch) => (id) => {
    dispatch({
        type:'CAMBIANDO_LISTA_A_FALSE',
        id:id,
    })
};

export const cambiarNombreLista = (dispatch) => (id, nombre) => {
    dispatch({
        type:'CAMBIAR_NOMBRE_LISTA',
        id:id,
        nombre:nombre,
    })
};

export const cambiandoLista = (dispatch) => (id) => {
    dispatch({
        type:'CAMBIANDO_LISTA',
        id:id,
    })
};

export const opcionesDeLista = (dispatch) => (idLista) => {
    dispatch({
        type:'OPCIONES_DE_LISTA',
        idLista:idLista,
    })
};

export const añadirTarjetaCopiando = (dispatch) => (titulo, idLista, descripcion, color, tablero) => {
    dispatch({
        type: 'AÑADIR_TARJETA',
        titulo: titulo,
        idLista:idLista,
        descripcion:descripcion,
        color:color,
        tablero: tablero,
        id:Math.random(),
    })
};

export const listaEnEsperaFalse = (dispatch) => () => {
    dispatch({
        type: 'LISTA_EN_ESPERA_DE_SER_COPIADA_A_FALSE',
    })
};

export const idlistaEnEspera = (dispatch) => (id) => {
    dispatch({
        type: 'CAMBIANDO_ID_LISTA_SIENDO_COPIADA',
        id:id,
    })
};

export const opcionesDeListaAFalse = (dispatch) => (idLista) => {
    dispatch({
        type:'OPCIONES_DE_LISTA_A_FALSE',
        idLista:idLista,
    })
};

export const copiandoListaFalse = (dispatch) => (id) => {
    dispatch({
        type:'CAMBIANDO_COPIANDO_LISTA_A_FALSE',
        id:id,
    })
};

export const listaEnEsperaTrue = (dispatch) => () => {
    dispatch({
        type: 'LISTA_EN_ESPERA_DE_SER_COPIADA_A_TRUE',
    })
};

export const cambiarMoviendoListaFalse = (dispatch) => (idLista) => {
    dispatch({
        type:'CAMBIAR_MOVIENDO_LISTA_A_FALSE',
        idLista:idLista,
    })
};

export const cambiarPosicionLista = (dispatch) => (posicionActual, posicionDeseada) => {
    dispatch({
        type:'CAMBIAR_POSICION_DE_LISTA',
        posicionActual:posicionActual,
        posicionDeseada: posicionDeseada,
    })
};

export const ordenarListas = (dispatch) => () => {
    dispatch({
        type:'ORDENAR_LISTAS',
    })
};

export const cambiarMoviendoTarjetasFalse = (dispatch) => (idLista) => {
    dispatch({
        type:'CAMBIAR_MOVIENDO_TARJETAS_A_FALSE',
        idLista:idLista,
    })
};

export const cambiarTodasLasTarjetaDeLista = (dispatch) => (idTarjeta, idListaCambiada) => {
    dispatch({
        type:'CAMBIAR_TODAS_LAS_TARJETAS_DE_LISTA',
        id:idTarjeta,
        idLista:idListaCambiada,
    })
};

export const contadorACero = (dispatch) => (idLista) => {
    dispatch({
        type:'CONTADOR_A_CERO',
        idLista:idLista,
    })
};

export const actualizarContador = (dispatch) => (idLista) => {
    dispatch({
        type:'ACTUALIZAR_CONTADOR',
        idLista:idLista,
    })
};

export const borrarLista = (dispatch) => (id) => {
    dispatch({
        type:'BORRAR_LISTA',
        id:id,
    })
};

export const reordernarListas = (dispatch) => () => {
    dispatch({
        type:'REORDENAR_LISTAS',
    })
};

export const cambiarMoviendoLista = (dispatch) => (idLista) => {
    dispatch({
        type:'CAMBIAR_MOVIENDO_LISTA',
        idLista:idLista,
    })
};

export const borrarTarjetasDeLista = (dispatch) => (idLista) => {
    dispatch({
        type:'BORRAR_TARJETAS_DE_LISTA',
        idLista: idLista,
    })
};

export const cambiarMoviendoTarjetas = (dispatch) => (idLista) => {
    dispatch({
        type:'CAMBIAR_MOVIENDO_TARJETAS',
        idLista:idLista,
    })
};

export const copiandoLista = (dispatch) => (id) => {
    dispatch({
        type:'CAMBIANDO_COPIANDO_LISTA',
        id:id,
    })
};