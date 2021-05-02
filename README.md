# JWT MongoDB Node

Este repositorio esta basado en la guía encontrada en el siguiente [link](https://bezkoder.com/node-js-mongodb-auth-jwt/#Run_Test_with_Results) y en este [repositorio](https://github.com/bezkoder/node-js-jwt-auth-mongodb)

# Funcionamiento

Hay 3 roles, moderador, administrador y usuario. Los 3 roles mencionados puedes obtener todos los usuarios registrados en la base de datos en la ruta http://localhost:8080api/test/user usando un metodo GET. Solo el administrador puede añadir comentarios en la ruta http://localhost:8080/api/test/user
a través de un POST y con el siguiente formato JSON:

    {
    "username":"aquí va el username",
    "comment": {
    	"body": "cuerpo del comentario",
    	"id": 1
    	}
    }

Para registrarse es através de la ruta http://localhost:8080/api/auth/singup con un metodo POST y el formato del body debe ser un JSON con la siguiente información:

    {
    	"username": "aquí va el nombre de usaurio",
    	"email": "aquí va el email ",
    	"password": "aquí va la contraseña",
    	"roles":["user","moderator, "admin"]
    }

El arreglo de roles puede tener hasta 1 solo elemento o los 3 roles.

Para loguearnos usaremos la siguiente ruta http://localhost:8080/api/auth/signin por medio de un metodo POST y el cuerpo en formato JSON debera tener el nombre de usuario y la contraseña. Se espera que la respuesta sea los datos del usuario y el token de acceso el cual usaremos para los metodos antes menciones, es decir, obtener todos los usuarios y añadir comentarios.

Para usar el token tendremos que agreagar una nuevo header a nuestra solictud con con el nombre `x-access-token` y su valor sera el token obtenido al hacer login.
