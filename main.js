const usuariosFortinut = []
function cargoBasedeDatos (nombreUsuario,edadUsuario,apoya,mascota){
    const usuario = {
     nombreUsuario:nombre,
     edadUsuario:edad,
     apoya:apoya,
     mascota:mascota
 }
    usuariosFortinut.push(usuario)
}
function muestroBaseDeDatos (nombreUsuario,edadUsuario,apoya,mascota){
    for(const usuario of usuariosFortinut)
        {
            alert("Nombre:"+ usuario.nombre+"Edad:"+usuario.edad+"Apoya el emprendimieto?"+usuario.apoya+"Mascota:"+usuario.mascota)
        }
}

function apoyaEmprendimiento(apoya){
if(apoya){
    apoya= "Si"
    do{
        edadUsuario = prompt("Indique su edad: ")
        if(edadUsuario<18)
            alert("USTED DEBE TENER AL MENOS 18 AÑOS PARA DONAR")
        }while (edadUsuario<18)
        prompt("Indique en pesos, cuánto quiere donar:")
        alert ("Muchas gracias"+ nombreUsuario+ ", atentamente, Fortinut")
}
else{
    apoya="No"
    alert ("Muchas gracias de todas modos, atentamente Fortinut")
     nombreUsuario = prompt("Ingrese su nombre y apellido: ")
}
}

function encargaUsuario (usuarioEncarga){
if(usuarioEncarga)
    alert("Muchas gracias, tu pedido está encargado, atentamente Fortinut")
else
    alert("Muchas gracias de todos modos, atentamente Fortinut")
}

function siTieneMascota (tieneMascota){
       confirm("¿Desea comprar alimento?") 
        mascota = prompt("Indique para que animal sera su pedido(gato/perro)")
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
  muestr