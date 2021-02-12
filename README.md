# Reto 3 FRONTEND - Trello

_Realizo una aplicación de gestión de tareas (una versión sencilla de la aplicación Trello)._

## -TECNOLOGÍAS UTILIZADAS


* HTML5/CSS3/SCSS/FLEXBOX/GRIDLAYOUT
* REACT
* REDUX
* ES6
* BOOTSTRAP
* GIT

## -PASOS PARA HACER FUNCIONAR LA APLICACIÓN

_Esto es lo que tienes que hacer para poder poner a funcionar la aplicación en tu equipo._

### -PRE-REQUISITOS

_Necesitas tener instalado NODEJS_
_Necesitas tener habilitada la ejecución de scripts en tu sistema (Windows). Para ello, ejecutamos como administrador la aplicación PowerShell, y escribimos el siguiente comando:_ 
```
Set-ExecutionPolicy -ExecutionPolicy Unrestricted
```
_e indicamos que Sí ante la pregunta que nos muestra el PowerShell
  
### -INSTALACIÓN

_Instalamos Yarn:_
```
npm install --global yarn
```
_Instalamos react:_
```
npx create-react-app Reto-Trello
```
_Instalamos react router:_
```
yarn add react-router-dom axios
```
_instalamos scss:_
```
yarn add node-sass@4.14.1
```
_Instalamos bootstrap:_
```
npm install bootstrap
```
_Instalamos redux:_
```
npm install redux
```

### -DESCARGA

_Sustituimos las carpetas src y public de nuestro directorio donde hemos creado el proyecto por las carpetas src y public de este repositorio_


## -FUNCIONAMIENTO DE LA APLICACION

_Todos los cambios que realices en la aplicación se guardarán automaticamente en tu navegador, por lo que nunca perderás los datos guardados (puedes actualizar la página, cerrar la pestaña en donde está abierta la aplicación e incluso cerrar el navegador)._

Para organizar y gestionar las tareas, uso Tableros, Listas y Tarjetas:

**TABLEROS**

Es la forma básica de presentar los datos. En ellos es donde se crearán las listas y las tarjetas.
Cada tablero es independiente de los demás.
Los tableros permiten:
* Cambiar el nombre
* Elegir que tablero mostrar entre los que tenemos creados
* Cambiar la imagen de fondo
* Borrar tableros (siempre que no sea el tablero activo)
* Crear tableros nuevos
* Crear listas en ellos

**LISTAS**

Es la forma en la que agrupamos las tarjetas dentro de cada tablero. Podemos agregar tantas listas como queramos en nuestros tableros.
Las listas permiten:
* Cambiar el nombre
* Añadir tarjetas en ellas
* Copiar la lista y todo su contenido
* Cambiar la lista de posición
* Borrar la lista

**TARJETAS**

Es como denominamos a cada tarea. Las tarjetas se crean en las listas.
Las tarjetas permiten:
* Cambiar el nombre
* Cambiar la tarjeta de posición en la lista en la que está creada
* Cambiar la tarjeta de lista
* Borrar la tarjeta
* Añadir descripción
* Cambiar su color


