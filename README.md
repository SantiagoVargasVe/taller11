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
