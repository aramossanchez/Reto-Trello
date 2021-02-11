const estadoInicial = {
    Busqueda_Con_Resultado:false,
    Criterio_De_Busqueda:"",
    Mostrar_Resultados_Busqueda:false,
    Buscando:false,
    Mostrando_Notificaciones:false,
    Mostrando_Informacion: false,
    Pagina_Home: true,
    Menu_Añadir: false,
    Menu_Añadir_Tarjeta: false,
    Mas_Proyectos: false,
    Tablero_Recien_Creado:false,
    Cambiando_Nombre_Tablero:false,
    Tablero_Activo:1,
    Creando_Tablero:false,
    Lista_En_Espera_De_Ser_Copiada:false,
    Lista_Siendo_Copiada:0,
    Tipo_Tablero:false,
    Fondo_Pagina: "",
    Cambiando_Fondo_Pagina:false,
    Añadiendo_Lista: false,
    Viendo_Menu: false,
    Mostrando_Tableros:false,
    Tableros:[
        {
            "nombre": "Tablero 1",
            "id": 1,
            "fondo":"",
            "contador":3
        }
    ],
    Listas: [
        {
            "nombre":"Lista de tareas",
            "id": 1,
            "contador":0,
            "añadiendo":false,
            "cambiando":false,
            "opciones": false,
            "moviendoLista":false,
            "moviendoTarjetas":false,
            "copiandoLista":false,
            "posicion":1,
            "tablero":1
        },
        {
            "nombre":"En proceso",
            "id": 2,
            "contador":0,
            "añadiendo":false,
            "cambiando":false,
            "opciones": false,
            "moviendoLista":false,
            "moviendoTarjetas":false,
            "copiandoLista":false,
            "posicion":2,
            "tablero":1
        },{
            "nombre":"Hecho",
            "id": 3,
            "contador":0,
            "añadiendo":false,
            "cambiando":false,
            "opciones": false,
            "moviendoLista":false,
            "moviendoTarjetas":false,
            "copiandoLista":false,
            "posicion":3,
            "tablero":1
        }
    ],
    Tarjetas:[],
    Busqueda:[],
};

const statePersistance = () => {
    if(localStorage.getItem('state')==null){
        return estadoInicial
    }
    return JSON.parse(localStorage.getItem('state'));
}

function reducer (state = statePersistance(), action){
    switch(action.type){
        case 'AÑADIR_TARJETA':       
            return{
                ...state,
                Tarjetas:[
                    ...state.Tarjetas,
                    {
                        titulo: action.titulo,
                        descripcion: action.descripcion,
                        idLista: action.idLista,
                        id: action.id,
                        editando: false,
                        editandoDescripcion: false,
                        posicion: state.Tarjetas.filter(tarjeta => tarjeta.idLista===action.idLista).length + 1,
                        cambiandoTitulo:false,
                        color: action.color,
                        tablero:action.tablero,
                    },
                ],
                Listas:state.Listas.map((lista) =>{
                    if(lista.id===action.idLista){
                        lista.contador=lista.contador + 1
                    }
                    return lista
                })
                
            }
        case 'AÑADIR_LISTA':
            return{
                ...state,
                Listas:[
                    ...state.Listas,
                    {
                        nombre: action.nombre,
                        id:action.id,
                        contador:0,
                        añadiendo: false,
                        cambiando: false,
                        opciones: false,
                        moviendoLista:false,
                        moviendoTarjetas:false,
                        copiandoLista:false,
                        posicion:state.Listas.filter(lista=>lista.tablero===state.Tablero_Activo).length + 1,
                        tablero:state.Tablero_Activo,
                    }
                ]
            }
        case 'AÑADIENDO_TARJETA':
            return{
                ...state,
                Listas:state.Listas.map((lista) =>{
                    if(lista.id===action.id){
                        lista.añadiendo=!lista.añadiendo
                    }
                    return lista
                })
            }

        case 'AÑADIENDO_TARJETA_A_FALSE':
            return{
                ...state,
                Listas:state.Listas.map((lista) =>{
                    if(lista.id===action.id){
                        lista.añadiendo=false
                    }
                    return lista
                })
            }

        case 'AÑADIENDO_TARJETA_A_FALSE_EN_EL_RESTO_DE_LISTAS':
            return{
                ...state,
                Listas:state.Listas.map((lista)=>{
                    if(lista.id!==action.id){
                        lista.añadiendo=false
                        return lista
                    }
                    return lista
                })
            }
            
        case 'AÑADIENDO_LISTA':
            return{
                ...state,
                Añadiendo_Lista: !state.Añadiendo_Lista
            }

        case 'AÑADIENDO_LISTA_FALSE':
            return{
                ...state,
                Añadiendo_Lista: false
            }

        case 'CAMBIANDO_LISTA':
            return{
                ...state,
                Listas:state.Listas.map((lista)=>{
                    if(lista.id===action.id){
                        lista.cambiando=!lista.cambiando
                    }
                    return lista
                })
            }
        case 'CAMBIANDO_LISTA_A_FALSE':
            return{
                ...state,
                Listas:state.Listas.map((lista)=>{
                    if(lista.id===action.id){
                        lista.cambiando=false
                    }
                    return lista
                })
            }
        case 'BORRAR_TARJETA':
            return{
                ...state,
                Tarjetas: state.Tarjetas.filter(tarjeta=>tarjeta.id!==action.id),
                Listas: state.Listas.map((lista)=>{
                    if(lista.id===action.idLista){
                        lista.contador--
                    }
                    return lista
                })
            }

        case 'BORRAR_LISTA':
            return{
                ...state,
                Listas: state.Listas.filter(lista=>lista.id!==action.id),
                Tarjetas: state.Tarjetas.filter(tarjeta => tarjeta.idLista!==action.id)
            }

        case 'CAMBIAR_NOMBRE_LISTA':
            return{
                ...state,
                Listas:state.Listas.map((lista)=>{
                    if(lista.id===action.id){
                        lista.nombre=action.nombre
                    }
                    return lista
                })
            }

        case 'CAMBIAR_EDITANDO_TARJETA':
            return{
                ...state,
                Tarjetas:state.Tarjetas.map((tarjeta)=>{
                    if(tarjeta.id===action.id){
                        tarjeta.editando=!tarjeta.editando
                    }
                    return tarjeta
                })
            }

        case 'CAMBIAR_TARJETA_DE_LISTA':
            var listaActual = 0;
            return{
                ...state,
                Tarjetas:state.Tarjetas.map((tarjeta)=>{
                    if (tarjeta.id===action.id){
                        listaActual=tarjeta.idLista;
                        tarjeta.idLista=action.idLista;
                        tarjeta.posicion=(state.Tarjetas.filter(tarjeta => tarjeta.idLista===action.idLista).length);
                        return tarjeta
                    }
                    return tarjeta
                }),
                Tarjetas:state.Tarjetas.sort(function (a,b){
                    return (a.posicion - b.posicion);
                }),
                Listas:state.Listas.map((lista)=>{
                    if(lista.id===action.idLista){
                        lista.contador=lista.contador + 1
                        return lista
                    }
                    if(lista.id===listaActual){
                        lista.contador=lista.contador-1
                        return lista
                    }
                    return lista
                })
            }

        case 'CORREGIR_POSICIONES_DE_TARJETAS':
            var i = 1    
            return{
                ...state,
                Tarjetas:state.Tarjetas.map((tarjeta)=>{ 
                    if(tarjeta.idLista===action.idLista){
                        tarjeta.posicion=i;
                        i++;
                        return tarjeta
                    }
                    return tarjeta
                })
            }

        case 'CAMBIAR_EDITANDO_DESCRIPCION':
            return{
                ...state,
                Tarjetas:state.Tarjetas.map((tarjeta)=>{
                    if(tarjeta.id===action.id){
                        tarjeta.editandoDescripcion=!tarjeta.editandoDescripcion
                        return tarjeta
                    }
                    return tarjeta
                })
            }

        case 'EDITAR_DESCRIPCION':
            return{
                ...state,
                Tarjetas:state.Tarjetas.map((tarjeta)=>{
                    if(tarjeta.id===action.id){
                        tarjeta.descripcion=action.descripcion;
                        return tarjeta
                    }
                    return tarjeta
                })
            }

        case 'CAMBIAR_POSICION':
            return{
                ...state,
                Tarjetas:state.Tarjetas.map((tarjeta) => {
                    if(tarjeta.idLista===action.idLista){
                        if(action.posicionActual>action.posicionDeseada){
                            if(tarjeta.posicion>=action.posicionDeseada && tarjeta.posicion<action.posicionActual){
                                tarjeta.posicion++;
                                return tarjeta
                            }
                            if(tarjeta.id===action.idTarjeta) {
                                tarjeta.posicion=action.posicionDeseada;
                                return tarjeta
                            }
                        }
                        if(action.posicionActual<action.posicionDeseada){
                            if(tarjeta.posicion>action.posicionActual && tarjeta.posicion<=action.posicionDeseada){
                                tarjeta.posicion--;
                                return tarjeta
                            }
                            if(tarjeta.id===action.idTarjeta) {
                                tarjeta.posicion=action.posicionDeseada;
                                return tarjeta
                            }
                        }
                    }
                    return tarjeta
                })
            }

        case 'ORDENAR_TARJETAS':
            return{
                ...state,
                Tarjetas:state.Tarjetas.sort(((a,b)=>a.posicion - b.posicion))
            }

        case 'CAMBIAR_VIENDO_MENU':
            return{
                ...state,
                Viendo_Menu: !state.Viendo_Menu
            }

        case 'CAMBIAR_FONDO':
            return{
                ...state,
                Tableros:state.Tableros.map((tablero)=>{
                    if(tablero.id===state.Tablero_Activo){
                        tablero.fondo=action.imagen
                        return tablero
                    }
                    return tablero
                })
            }

        case 'QUITAR_FONDO':
            return{
                ...state,
                Tableros:state.Tableros.map((tablero)=>{
                    if(tablero.id===action.tablero){
                        tablero.fondo=""
                        return tablero
                    }
                    return tablero
                })
            }

        case 'CAMBIANDO_FONDO_DE_PAGINA':
            return{
                ...state,
                Cambiando_Fondo_Pagina:!state.Cambiando_Fondo_Pagina
            }

        case 'OPCIONES_DE_LISTA':
            return{
                ...state,
                Listas:state.Listas.map((lista)=>{
                    if(lista.id===action.idLista){
                        lista.opciones=!lista.opciones
                        return lista
                    }
                    return lista
                })
            }

        case 'OPCIONES_DE_LISTA_A_FALSE':
            return{
                ...state,
                Listas:state.Listas.map((lista)=>{
                    if(lista.id===action.idLista){
                        lista.opciones=false
                        return lista
                    }
                    return lista
                })
            }

        case 'BORRAR_LISTAS_DE_TABLERO_ACTUAL':
            return{
                ...state,
                Listas:state.Listas.filter(lista=>lista.tablero!==action.tablero),
                Tarjetas:state.Tarjetas.filter(tarjeta=>tarjeta.tablero!==action.tablero),
            }
        
        case 'CREAR_TABLERO_SEMANA':{
            return{
                ...state,
                Listas:[
                    ...state.Listas,
                    {
                        "nombre":"Lunes",
                        "id": action.id1,
                        "contador":0,
                        "añadiendo":false,
                        "cambiando":false,
                        "opciones": false,
                        "moviendoLista":false,
                        "moviendoTarjetas":false,
                        "copiandoLista":false,
                        "posicion":1,
                        "tablero":action.tablero
                    },
                    {
                        "nombre":"Martes",
                        "id": action.id2,
                        "contador":0,
                        "añadiendo":false,
                        "cambiando":false,
                        "opciones": false,
                        "moviendoLista":false,
                        "moviendoTarjetas":false,
                        "copiandoLista":false,
                        "posicion":2,
                        "tablero":action.tablero
                    },
                    {
                        "nombre":"Miercoles",
                        "id": action.id3,
                        "contador":0,
                        "añadiendo":false,
                        "cambiando":false,
                        "opciones": false,
                        "moviendoLista":false,
                        "moviendoTarjetas":false,
                        "copiandoLista":false,
                        "posicion":3,
                        "tablero":action.tablero
                    },
                    {
                        "nombre":"Jueves",
                        "id": action.id4,
                        "contador":0,
                        "añadiendo":false,
                        "cambiando":false,
                        "opciones": false,
                        "moviendoLista":false,
                        "moviendoTarjetas":false,
                        "copiandoLista":false,
                        "posicion":4,
                        "tablero":action.tablero
                    },{
                        "nombre":"Viernes",
                        "id": action.id5,
                        "contador":0,
                        "añadiendo":false,
                        "cambiando":false,
                        "opciones": false,
                        "moviendoLista":false,
                        "moviendoTarjetas":false,
                        "copiandoLista":false,
                        "posicion":5,
                        "tablero":action.tablero
                    },
                    {
                        "nombre":"Sábado",
                        "id": action.id6,
                        "contador":0,
                        "añadiendo":false,
                        "cambiando":false,
                        "opciones": false,
                        "moviendoLista":false,
                        "moviendoTarjetas":false,
                        "copiandoLista":false,
                        "posicion":6,
                        "tablero":action.tablero
                    },
                    {
                        "nombre":"Domingo",
                        "id": action.id7,
                        "contador":0,
                        "añadiendo":false,
                        "cambiando":false,
                        "opciones": false,
                        "moviendoLista":false,
                        "moviendoTarjetas":false,
                        "copiandoLista":false,
                        "posicion":7,
                        "tablero":action.tablero
                    },
                ]
            }
        }

        case 'CREAR_TABLERO_PROYECTO':
            return{
                ...state,
                Listas:state.Listas.filter(lista=>lista.tablero!==state.Tablero_Activo),
                Listas: [
                    ...state.Listas,
                    {
                        "nombre":"Lista de tareas",
                        "id": action.id1,
                        "contador":0,
                        "añadiendo":false,
                        "cambiando":false,
                        "opciones": false,
                        "moviendoLista":false,
                        "moviendoTarjetas":false,
                        "copiandoLista":false,
                        "posicion":1,
                        "tablero":action.tablero
                    },
                    {
                        "nombre":"En proceso",
                        "id": action.id2,
                        "contador":0,
                        "añadiendo":false,
                        "cambiando":false,
                        "opciones": false,
                        "moviendoLista":false,
                        "moviendoTarjetas":false,
                        "copiandoLista":false,
                        "posicion":2,
                        "tablero":action.tablero
                    },{
                        "nombre":"Hecho",
                        "id": action.id3,
                        "contador":0,
                        "añadiendo":false,
                        "cambiando":false,
                        "opciones": false,
                        "moviendoLista":false,
                        "moviendoTarjetas":false,
                        "copiandoLista":false,
                        "posicion":3,
                        "tablero":action.tablero
                    }
                ],
            }

        case 'CAMBIAR_TIPO_TABLERO':
            return{
                ...state,
                Tipo_Tablero:!state.Tipo_Tablero
            }

        case 'CAMBIAR_TIPO_TABLERO_A_FALSE':
            return{
                ...state,
                Tipo_Tablero:false
            }

        case 'REORDENAR_LISTAS':
            var x = 1;
            return{
                ...state,
                Listas:state.Listas.map((lista)=>{
                    if(lista.tablero===state.Tablero_Activo){
                    lista.posicion=x;
                    x=x+1
                    return lista;
                    }
                    return lista;
                })
            }

        case 'CAMBIAR_MOVIENDO_LISTA':
            return{
                ...state,
                Listas:state.Listas.map((lista)=>{
                    if(lista.id===action.idLista){
                        lista.moviendoLista=!lista.moviendoLista
                        return lista
                    }
                    return lista
                })
            }

        case 'CAMBIAR_MOVIENDO_LISTA_A_FALSE':
            return{
                ...state,
                Listas:state.Listas.map((lista)=>{
                    if(lista.id===action.idLista){
                        lista.moviendoLista=false
                        return lista
                    }
                    return lista
                })
            }

        case 'CAMBIAR_POSICION_DE_LISTA':
            return{
                ...state,
                Listas:state.Listas.map((lista) => {
                    if(lista.tablero===state.Tablero_Activo){
                        if(action.posicionActual>action.posicionDeseada){
                            if(lista.posicion>=action.posicionDeseada && lista.posicion<action.posicionActual){
                                lista.posicion++;
                                return lista
                            }
                            if(lista.posicion===action.posicionActual) {
                                lista.posicion=action.posicionDeseada;
                                return lista
                            }
                        }
                        
                        if(action.posicionActual<action.posicionDeseada){
                            if(lista.posicion>action.posicionActual && lista.posicion<=action.posicionDeseada){
                                lista.posicion--;
                                return lista
                            }
                            if(lista.posicion===action.posicionActual) {
                                lista.posicion=action.posicionDeseada;
                                return lista
                            }
                        }
                    }
                    return lista
                })
            }
        case 'ORDENAR_LISTAS':
            return{
                ...state,
                Listas:state.Listas.sort(((a,b)=>a.posicion - b.posicion))
            }

        case 'BORRAR_TARJETAS_DE_LISTA':
            return{
                ...state,
                Tarjetas:state.Tarjetas.filter(tarjeta=>tarjeta.idLista!=action.idLista),
            }

        case 'CAMBIAR_MOVIENDO_TARJETAS':
            return{
                ...state,
                Listas:state.Listas.map((lista)=>{
                    if(lista.id===action.idLista){
                        lista.moviendoTarjetas=!lista.moviendoTarjetas
                        return lista
                    }
                    return lista
                })
            }

        case 'CAMBIAR_MOVIENDO_TARJETAS_A_FALSE':
            return{
                ...state,
                Listas:state.Listas.map((lista)=>{
                    if(lista.id===action.idLista){
                        lista.moviendoTarjetas=false
                        return lista
                    }
                    return lista
                })
            }
        
        case 'CAMBIAR_TODAS_LAS_TARJETAS_DE_LISTA':
            return{
                ...state,
                Tarjetas:state.Tarjetas.map((tarjeta)=>{
                    if (tarjeta.id===action.id){
                        tarjeta.idLista=action.idLista;
                        tarjeta.posicion=(state.Tarjetas.filter(tarjeta => tarjeta.idLista===action.idLista).length);
                        return tarjeta
                    }
                    return tarjeta
                })
            }

        case 'CONTADOR_A_CERO':
            return{
                ...state,
                Listas:state.Listas.map((lista)=>{
                    if(lista.id===action.idLista){
                        lista.contador=0
                        return lista
                    }
                    return lista
                })
            }

        case 'ACTUALIZAR_CONTADOR':
            return{
                ...state,
                Listas:state.Listas.map((lista)=>{
                    if(lista.id===action.idLista){
                        lista.contador=state.Tarjetas.filter(tarjeta => tarjeta.idLista===action.idLista).length
                        return lista
                    }
                    return lista
                })
            }
        
        case 'CAMBIANDO_TITULO_TARJETA':
            return{
                ...state,
                Tarjetas:state.Tarjetas.map((tarjeta)=>{
                    if(tarjeta.id===action.id){
                        tarjeta.cambiandoTitulo=!tarjeta.cambiandoTitulo
                        return tarjeta
                    }
                    return tarjeta
                })
            }

        case 'CAMBIANDO_TITULO_TARJETA_A_FALSE':
            return{
                ...state,
                Tarjetas:state.Tarjetas.map((tarjeta)=>{
                    if(tarjeta.id===action.id){
                        tarjeta.cambiandoTitulo=false
                        return tarjeta
                    }
                    return tarjeta
                })
            }

        case 'CAMBIAR_TITULO_TARJETA':
            return{
                ...state,
                Tarjetas:state.Tarjetas.map((tarjeta)=>{
                    if(tarjeta.id===action.id){
                        tarjeta.titulo=action.titulo
                        return tarjeta
                    }
                    return tarjeta
                })
            }

        case 'CAMBIANDO_COPIANDO_LISTA':
            return{
                ...state,
                Listas:state.Listas.map((lista)=>{
                    if(lista.id===action.id){
                        lista.copiandoLista=!lista.copiandoLista
                        return lista
                    }
                    return lista
                })
            }

        case 'CAMBIANDO_COPIANDO_LISTA_A_FALSE':
            return{
                ...state,
                Listas:state.Listas.map((lista)=>{
                    if(lista.id===action.id){
                        lista.copiandoLista=false
                        return lista
                    }
                    return lista
                })
            }
        
        case 'LISTA_EN_ESPERA_DE_SER_COPIADA_A_TRUE':
            return{
                ...state,
                Lista_En_Espera_De_Ser_Copiada:true
            }

        case 'LISTA_EN_ESPERA_DE_SER_COPIADA_A_FALSE':
            return{
                ...state,
                Lista_En_Espera_De_Ser_Copiada:false
            }

        case 'CAMBIANDO_ID_LISTA_SIENDO_COPIADA':
            return{
                ...state,
                Lista_Siendo_Copiada:action.id
            }

        case 'CAMBIAR_MOSTRANDO_TABLEROS':
            return{
                ...state,
                Mostrando_Tableros:!state.Mostrando_Tableros
            }

        case 'CAMBIAR_MOSTRANDO_TABLEROS_FALSE':
            return{
                ...state,
                Mostrando_Tableros:false
            }

        case 'CREAR_TABLERO':
            return{
                ...state,
                Tableros:[
                    ...state.Tableros,
                    {
                        nombre:action.nombre,
                        id:action.id,
                        fondo:""
                    }
                ]
            }

        case 'CREANDO_TABLERO':
            return{
                ...state,
                Creando_Tablero:!state.Creando_Tablero
            }

        case 'DEFINIR_TABLERO_ACTIVO':
            return{
                ...state,
                Tablero_Activo:action.id,
            }

        case 'CAMBIANDO_NOMBRE_DE_TABLERO':
            return{
                ...state,
                Cambiando_Nombre_Tablero:!state.Cambiando_Nombre_Tablero
            }

        case 'CAMBIAR_NOMBRE_TABLERO':
            return{
                ...state,
                Tableros:state.Tableros.map((tablero)=>{
                    if(tablero.id===action.id){
                        tablero.nombre=action.nombre
                        return tablero
                    }
                    return tablero
                })
            }

        case 'CAMBIAR_TABLERO_RECIEN_CREADO':
            return{
                ...state,
                Tablero_Recien_Creado:!state.Tablero_Recien_Creado
            }

        case 'BORRAR_TABLERO':
            return{
                ...state,
                Tableros: state.Tableros.filter(tablero => tablero.id!==action.id),
                Listas: state.Listas.filter(lista => lista.tablero!==action.id),
                Tarjetas: state.Tarjetas.filter(tarjeta => tarjeta.tablero!==action.id)
            }

        case 'CAMBIAR_COLOR_TARJETA':
            return{
                ...state,
                Tarjetas: state.Tarjetas.map((tarjeta)=>{
                    if(tarjeta.id===action.id){
                        tarjeta.color=action.color;
                        return tarjeta;
                    }
                    return tarjeta;
                })
            }    
        
        case 'CAMBIAR_MAS_PROYECTOS':
            return{
                ...state,
                Mas_Proyectos:!state.Mas_Proyectos
            }

        case 'CAMBIAR_MAS_PROYECTOS_FALSE':
            return{
                ...state,
                Mas_Proyectos:false
            }

        case 'CAMBIAR_MENU_AÑADIR':
            return{
                ...state,
                Menu_Añadir:!state.Menu_Añadir
            }

        case 'CAMBIAR_MENU_AÑADIR_FALSE':
            return{
                ...state,
                Menu_Añadir:false
            }

        case 'CAMBIAR_MENU_AÑADIR_TARJETA':
            return{
                ...state,
                Menu_Añadir_Tarjeta:!state.Menu_Añadir_Tarjeta
            }
    
        case 'CAMBIAR_MENU_AÑADIR_TARJETA_FALSE':
            return{
                ...state,
                Menu_Añadir_Tarjeta:false
            }

        case 'CAMBIAR_PAGINA_HOME':
            return{
                ...state,
                Pagina_Home:!state.Pagina_Home
            }
        
        case 'CAMBIAR_PAGINA_HOME_FALSE':
            return{
                ...state,
                Pagina_Home:false
            }
        

        case 'CAMBIAR_MOSTRANDO_INFORMACION':
            return{
                ...state,
                Mostrando_Informacion:!state.Mostrando_Informacion
            }

        case 'CAMBIAR_MOSTRANDO_INFORMACION_FALSE':
            return{
                ...state,
                Mostrando_Informacion:false
            }

        case 'CAMBIAR_MOSTRANDO_NOTIFICACIONES':
            return{
                ...state,
                Mostrando_Notificaciones:!state.Mostrando_Notificaciones
            }
        
        case 'CAMBIAR_MOSTRANDO_NOTIFICACIONES_FALSE':
            return{
                ...state,
                Mostrando_Notificaciones:false,
            }
        
        case 'CAMBIAR_BUSCANDO':
            return{
                ...state,
                Buscando:!state.Buscando,
            }

        case 'CAMBIAR_MOSTRAR_RESULTADOS_BUSQUEDA':
            return{
                ...state,
                Mostrar_Resultados_Busqueda:!state.Mostrar_Resultados_Busqueda,
            }

        case 'CAMBIAR_MOSTRAR_RESULTADOS_BUSQUEDA_TRUE':
            return{
                ...state,
                Mostrar_Resultados_Busqueda:true,
            }

        case 'AÑADIR_TABLERO_A_RESULTADO_BUSQUEDA':
            return{
                ...state,
                Busqueda:[
                    ...state.Busqueda,
                    {
                        tipo: action.tipo,
                        nombre: action.nombre,
                        tablero: action.tablero,
                    },
                ],                
            }

        case 'AÑADIR_LISTA_A_RESULTADO_BUSQUEDA':
            return{
                ...state,
                Busqueda:[
                    ...state.Busqueda,
                    {
                        tipo: action.tipo,
                        nombre: action.nombre,
                        idTablero:action.idTablero,
                    },
                ],                
            }

        case 'AÑADIR_TARJETA_A_RESULTADO_BUSQUEDA':
            return{
                ...state,
                Busqueda:[
                    ...state.Busqueda,
                    {
                        tipo: action.tipo,
                        nombre: action.nombre,
                        idLista:action.idLista,
                    },
                ],                
            }

            

        case 'BORRAR_BUSQUEDA':
            return{
                ...state,
                Busqueda:[],                
            }

        case 'AÑADIR_CRITERIO_DE_BUSQUEDA':
            return{
                ...state,
                Criterio_De_Busqueda:action.criterio,                
            }
        
        case 'BUSQUEDA_CON_RESULTADO_TRUE':
            return{
                ...state,
                Busqueda_Con_Resultado:true
            }   
        
        case 'BUSQUEDA_CON_RESULTADO_FALSE':
            return{
                ...state,
                Busqueda_Con_Resultado:false
            }

        default:
            return state;
    }
};

export default reducer;


