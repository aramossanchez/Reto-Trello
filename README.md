# Reto 3 FRONTEND - Trello

Realizo una aplicación de gestión de tareas (una versión sencilla de la aplicación Trello).

Uso las siguientes tecnologías:

##### -HTML5/CSS3/SCSS/FLEXBOX/GRIDLAYOUT
##### -REACT
##### -REDUX
##### -ES6
##### -BOOTSTRAP
##### -GIT

## -INSTALACIÓN

Primero, necesitamos tener instalado nodejs
Tras esto, necesitamos tener habilitada la ejecución de scripts en nuestro sistema (para ello, ejecutamos como administrador la aplicación PowerShell, y escribimos el siguiente comando: Set-ExecutionPolicy -ExecutionPolicy Unrestricted, e indicamos que Sí
Ahora instalaremos Yarn: npm install --global yarn
Instalamos react: npx create-react-app Reto-Trello
Instalamos react router: yarn add react-router-dom axios
instalamos scss: yarn add node-sass@4.14.1
Instalamos bootstrap: npm install bootstrap
Instalamos redux: npm install redux

Sustituimos las carpetas src y public de nuestro directorio donde hemos creado el proyecto por las carpetas src y public de este repositorio





## -FUNCIONAMIENTO DE LA APLICACION

Para organizar y gestionar las tareas, uso Tableros, Listas y Tarjetas:

**TABLEROS**

Es la forma básica de presentar los datos. En ellos es donde se crearán las listas y las tarjetas.
Cada tablero es independiente de los demás.
Los tableros permiten:
##### -Cambiar el nombre
##### -Elegir que tablero mostrar entre los que tenemos creados
##### -Cambiar la imagen de fondo
##### -Borrar tableros (siempre que no sea el tablero activo)
##### -Crear tableros nuevos
##### -Crear listas en ellos

**LISTAS**

Es la forma en la que agrupamos las tarjetas dentro de cada tablero. Podemos agregar tantas listas como queramos en nuestros tableros.
Las listas permiten:
##### -Cambiar el nombre
##### -Añadir tarjetas en ellas
##### -Copiar la lista y todo su contenido
##### -Cambiar la lista de posición
##### -Borrar la lista

**TARJETAS**

Es como denominamos a cada tarea. Las tarjetas se crean en las listas.
Las tarjetas permiten:
##### -Cambiar el nombre
##### -Cambiar la tarjeta de posición en la lista en la que está creada
##### -Cambiar la tarjeta de lista
##### -Borrar la tarjeta
##### -Añadir descripción
##### -Cambiar su color

**Todos los cambios que realices en la aplicación se guardarán automaticamente en tu navegador, por lo que nunca perderás los datos guardados (puedes actualizar la página, cerrar la pestaña en donde está abierta la aplicación e incluso cerrar el navegador).**


