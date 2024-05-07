
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

function apoyaEmprendimiento(apoya,nombreUsuario){
if(apoya){ 
    let apoya= "Si"
        prompt("Indique en pesos, cuánto quiere donar:")
        alert ("Muchas gracias "+ nombreUsuario+ " , atentamente, Fortinut")
}
else{
    let apoya="No" 
    alert ("Muchas gracias de todas modos, atentamente Fortinut")
    
}
}

function encargaUsuario (usuarioEncarga,nombreUsuario){
 
if(usuarioEncarga)
    alert ("Muchas gracias "+ nombreUsuario+ " ,su pedido ha sido encargado, atentamente, Fortinut")
else
    alert("Muchas gracias de todos modos "+ nombreUsuario+ " , atentamente Fortinut")
}

function siTieneMascota (nombreUsuario,mascota){
        if(mascota=="Perro"||mascota=="perro"){
            let usuarioEncarga = confirm("Actualmente el paquete de 2kg de perro esta valuado en 20.000 pesos, confirme para encargar")
            encargaUsuario(usuarioEncarga,nombreUsuario)}
        else if(mascota=="Gato"||mascota=="gato"){
            let usuarioEncarga = confirm("Actualmente el paquete de 2kg de gato esta valuado en 22.000 pesos, confirme para encargar")
        encargaUsuario(usuarioEncarga,nombreUsuario)
        }
      
    }



function main (){
inicio = confirm("Bienvenido a Fortinut, acepte para continuar")
while(inicio){
const nombreUsuario = prompt("Indique su nombre y apellido")
const edadUsuario = prompt("Indique su edad (debe ser mayor de edad para realizar un encargo):  ")
const mascota = prompt("Indique para que animal sera su pedido(gato/perro)")
const apoya=confirm("¿Quiere apoyar al emprendimiento?")
apoyaEmprendimiento(apoya,nombreUsuario)
let haycompra = confirm("¿Desea comprar alimento?") 
if(haycompra)
siTieneMascota()

else
alert("Hasta pronto, atentamente Fortinut")
inicio = confirm("Bienvenido a Fortinut, acepte para continuar")
}






cargoBasedeDatos(nombreUsuario,edadUsuario,apoya,mascota)
muestroBaseDeDatos(nombreUsuario,edadUsuario,apoya,mascota)
}
main ()
 