
const usuariosFortinut = []
function cargoBasedeDatos (nombreUsuario,edad,apoya,mascota){
    const usuario = {
     nombreUsuario:nombreUsuario,
     edadUsuario:edad,
     apoya,
     mascota:mascota
 }
    usuariosFortinut.push(usuario)
}
function muestroBaseDeDatos (nombreUsuario,edadUsuario,apoya,mascota){
    for(const usuario of usuariosFortinut)
        {
            console.log("Nombre: "+ usuario.nombreUsuario +" Edad: "+usuario.edadUsuario+" Apoya el emprendimieto? "+usuario.apoya+" Mascota: "+usuario.mascota)
        }
}

function apoyaEmprendimiento(apoya){
if(apoya){ 
    apoya= "Si"
        prompt("Indique en pesos, cuánto quiere donar:")
        alert ("Muchas gracias "+ nombreUsuario+ " , atentamente, Fortinut")
}
else{
    apoya="No" 
    alert ("Muchas gracias de todas modos, atentamente Fortinut")
    
}
}

function encargaUsuario (nombreUsuario,usuarioEncarga){
 
if(usuarioEncarga)
    alert ("Muchas gracias "+ nombreUsuario+ " ,su pedido ha sido encargado, atentamente, Fortinut")
else
    alert("Muchas gracias de todos modos "+ nombreUsuario+ " , atentamente Fortinut")
}

function siTieneMascota (nombreUsuario,tieneMascota,mascota){
       confirm("¿Desea comprar alimento?") 
        if(mascota=="Perro"||mascota=="perro"){
            let usuarioEncarga = confirm("Actualmente el paquete de 2kg de perro esta valuado en 20.000 pesos, confirme para encargar")
            encargaUsuario(nombreUsuario,usuarioEncarga)}
        else if(mascota=="Gato"||mascota=="gato"){
            let usuarioEncarga = confirm("Actualmente el paquete de 2kg de gato esta valuado en 22.000 pesos, confirme para encargar")
        encargaUsuario(usuarioEncarga)
        }
      
    }

function noTieneMascota (tieneMascota){
    mascota= "No tiene"
      apoya=confirm("¿Quiere apoyar de todas maneras al emprendimiento?")
      apoyaEmprendimiento(apoya)
}
function ingresaEdad( edadUsuario){
do{
    const edadUsuario = prompt("Indique su edad: ")
    if(edadUsuario<18)
        alert("USTED DEBE TENER AL MENOS 18 AÑOS PARA ENCARGAR")
    }while (edadUsuario<18)
}


function main (){
inicio = confirm("Bienvenido a Fortinut, acepte para continuar")
const nombreUsuario = prompt("Indique su nombre y apellido")
const edadUsuario = prompt("Indique su edad: ")
let tieneMascota = confirm("Contanos ¿tenes mascota?")
const mascota = siTieneMascota (nombreUsuario,tieneMascota,mascota)
prompt("Indique para que animal sera su pedido(gato/perro)")

const apoya=confirm("¿Quiere apoyar al emprendimiento?")



alert("Hasta pronto, atentamente Fortinut")



cargoBasedeDatos(nombreUsuario,edadUsuario,apoya,mascota)
muestroBaseDeDatos(nombreUsuario,edadUsuario,apoya,mascota)
}
main ()
 