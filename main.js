const usuarioFortinut = []
function cargoBasedeDatos (nombre,edad,apoya,mascota){
    const usuario = {
     nombre:nombre,
     edad:edad,
     apoya:apoya,
     mascota:mascota
 }
    usuarioFortinut.push(usuario)
}

function apoyaEmprendimiento (apoya){
if(apoya){
    do{
        edad.usuario = prompt("Indique su edad: ")
        if(edad.usuario<18)
            alert("USTED DEBE TENER AL MENOS 18 AÑOS PARA DONAR")
        }while (edad.usuario<18)
        prompt("Indique en pesos, cuánto quiere donar:")
        alert ("Muchas gracias"+ nombre.usuario+ ", atentamente, Fortinut")
}
else
    alert ("Muchas gracias de todas modos, atentamente Fortinut")
     usuario.nombre = prompt("Ingrese su nombre y apellido: ")
    
}

function encargaUsuario (usuarioEncarga){
if(usuarioEncarga)
    alert("Muchas gracias, tu pedido está encargado, atentamente Fortinut")
else
    alert("Muchas gracias de todos modos, atentamente Fortinut")
}

function siTieneMascota (tieneMascota){
       confirm("¿Desea comprar alimento?") 
        usuario.mascota = prompt("Indique para que animal sera su pedido(gato/perro)")
        if(mascota=="Perro"||mascota=="perro"){
            let usuarioEncarga = confirm("Actualmente el paquete de 2kg de perro esta valuado en 20.000 pesos, confirme para encargar")
            encargaUsuario(usuarioEncarga)}
        else if(mascota=="Gato"||mascota=="gato"){
            let usuarioEncarga = confirm("Actualmente el paquete de 2kg de gato esta valuado en 22.000 pesos, confirme para encargar")
        encargaUsuario(usuarioEncarga)
        }
      
    }

function noTieneMascota (tieneMascota){
      apoya=confirm("¿Quiere apoyar de todas maneras al emprendimiento?")
        apoyaEmprendimiento(apoya)
}

function main(){
alert("Bienvenido a Fortinut, acepte para continuar")
let tieneMascota = confirm("Contanos ¿tenes mascota?")
if(tieneMascota)
    siTieneMascota (tieneMascota)
else
    noTieneMascota (tieneMascota)
}
    main()
  cargoBasedeDatos(usuario)