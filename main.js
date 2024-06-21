const usuariosFortinut = JSON.parse(localStorage.getItem("usuariosFortinut")) || []


function cargarUsuario (usuario){


    usuariosFortinut.push(usuario)
    localStorage.setItem("usuariosFortinut",JSON.stringify(usuariosFortinut)) // agrege esta linea para guarda en el local storage
}




function mostrarUsuario (usuario){ // manipulacion del dom
    const app = document.getElementById("app")
    const element = document.createElement("div")
    element.className = "tarjeta-usuario"
    element.innerHTML = `
                            <h3>${usuario.nombre}</h3>
                            <p>${usuario.edad}</p>
                            <p>${usuario.apoya}</p>
                            <p>${usuario.mascota}</p>
    `
    app.append(element)
}


function mostrarUsuarios (){ //manipulacion con el dom
   
    usuariosFortinut.forEach(usuario => {
       mostrarUsuario(usuario)


    })
}



function main (){


    mostrarUsuarios()
    const btnUsuarioNuevo = document.getElementById("btnUsuarioNuevo")
    btnUsuarioNuevo.addEventListener("click",()=>{
        const nombreUsuarioNuevo = document.getElementById("nombreUsuarioNuevo")
        const edadUsuarioNuevo = document.getElementById("edadUsuarioNuevo")
        const apoyaUsuarioNuevo = document.getElementById("apoyaUsuarioNuevo")
        const mascotaUsuarioNuevo = document.getElementById("mascotaUsuarioNuevo")
        const usuario = {
            nombre:nombreUsuarioNuevo.value,
            edad:edadUsuarioNuevo.value,
            apoya:apoyaUsuarioNuevo.value,
            mascota:mascotaUsuarioNuevo.value
        }
        cargarUsuario(usuario)
        mostrarUsuario(usuario)
        nombreUsuarioNuevo.value = ""
        edadUsuarioNuevo.value = ""
        apoyaUsuarioNuevo.value = ""
        mascotaUsuarioNuevo.value =""
    })
    
    }
    main ()
     






// tarea para el hogar : reformular funciones apoyaEmprendimiento, encargaUsuario siTieneMascota )


function apoyaEmprendimiento(usuariosFortinut){
    usuariosFortinut.filter(getElementById,apoyaUsuarioNuevo.value)="Si"
}


function encargaUsuario (usuarioEncarga,nombreUsuario){
 
if(usuarioEncarga)
    alert ("Muchas gracias "+ nombreUsuario+ " ,su pedido ha sido encargado, atentamente, Fortinut")
else
    alert("Muchas gracias de todos modos "+ nombreUsuario+ " , atentamente Fortinut")
}


function tienePerro (nombreUsuario,mascota){
    
     usuariosFortinut.filter(getElementById,mascotaUsuarioNuevo.value)="Perro"
    }

  function mostrarUsuariosConPerro (){ 
   
        usuariosFortinut.forEach(usuario.filter(mascotaUsuarioNuevo.value="Perro") => {
           mostrarUsuarioConPerro(usuario)
    
    
        })
    }